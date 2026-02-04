'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Search, Filter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/src/components/ui/button';

interface SearchFilterProps {
  categories: string[];
}

export function SearchFilter({ categories }: SearchFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');

  // Atualizar quando os search params mudarem (ex: ao clicar em "Limpar filtros")
  useEffect(() => {
    setSearchTerm(searchParams.get('search') || '');
    setSelectedCategory(searchParams.get('category') || '');
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();

    // Só adiciona busca se tiver pelo menos 2 caracteres
    if (searchTerm.trim() && searchTerm.trim().length >= 2) {
      params.set('search', searchTerm.trim());
    }

    if (selectedCategory) {
      params.set('category', selectedCategory);
    }

    const queryString = params.toString();
    router.push(`/products${queryString ? `?${queryString}` : ''}`);
  };

  const handleCategoryChange = (category: string) => {
    const newCategory = category === selectedCategory ? '' : category;
    setSelectedCategory(newCategory);

    const params = new URLSearchParams();

    if (searchTerm.trim()) {
      params.set('search', searchTerm.trim());
    }

    if (newCategory) {
      params.set('category', newCategory);
    }

    const queryString = params.toString();
    router.push(`/products${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <div className="space-y-4">
      {/* Busca */}
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nome do produto (ex: Mouse, Teclado)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            minLength={2}
            className="h-12 w-full rounded-lg border border-gray-800 bg-gray-900/50 pr-4 pl-12 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
          />
        </div>

        <Button
          type="submit"
          className="h-12 gap-2 bg-linear-to-r from-blue-500 to-purple-600 px-6 font-semibold text-white hover:from-blue-600 hover:to-purple-700"
        >
          <Search className="h-5 w-5" />
          <span className="hidden sm:inline">Buscar</span>
        </Button>
      </form>

      {/* Filtro por Categoria */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Filter className="h-4 w-4" />
          <span>Filtrar por categoria:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'border-blue-500 bg-blue-500/20 text-blue-400 ring-2 ring-blue-500/30'
                  : 'border-gray-800 bg-gray-900/50 text-gray-400 hover:border-gray-700 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
