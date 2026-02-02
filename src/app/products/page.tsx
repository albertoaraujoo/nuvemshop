import { Product } from '@/src/types/product';
import { ProductCard } from '@/src/components/products/ProductCard';
import { SearchFilter } from '@/src/components/products/SearchFilter';

// Forçar renderização dinâmica para processar searchParams corretamente
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('http://localhost:3000/api/products', {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Falha ao carregar produtos');
    }

    return res.json();
  } catch {
    return [];
  }
}

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
  }>;
}

export default async function ProductsPage(props: ProductsPageProps) {
  const searchParams = await props.searchParams;
  const allProducts = await getProducts();

  // Função auxiliar para remover acentos
  const removeAccents = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  // Filtrar produtos
  let filteredProducts = allProducts;

  // Filtrar por categoria
  if (searchParams.category && searchParams.category.trim()) {
    const categoryTerm = searchParams.category.trim().toLowerCase();
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === categoryTerm
    );
  }

  // Filtrar por busca (APENAS nome começa com o termo) - mínimo 2 caracteres
  if (searchParams.search && searchParams.search.trim()) {
    const searchTerm = removeAccents(searchParams.search.trim().toLowerCase());

    // Só aplica filtro se tiver pelo menos 2 caracteres
    if (searchTerm.length >= 2) {
      // Busca APENAS por nome que COMEÇA com o termo
      filteredProducts = filteredProducts.filter((product) => {
        const productName = removeAccents(product.name.toLowerCase());

        // Verifica se o nome do produto COMEÇA com o termo
        return productName.startsWith(searchTerm);
      });
    }
  }

  // Obter categorias únicas
  const categories = Array.from(new Set(allProducts.map((product) => product.category)));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full border-b border-gray-800 bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-6 space-y-2 md:mb-8">
            <h1 className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
              Todos os Produtos
            </h1>
            <p className="text-base text-gray-400 sm:text-lg">
              Explore nosso catálogo completo de produtos tech
            </p>
          </div>

          {/* Filtros e Busca */}
          <SearchFilter categories={categories} />
        </div>
      </div>

      {/* Grid de Produtos */}
      <div className="mx-auto w-full max-w-7xl px-4 py-10">
        {/* Contador de Resultados */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>

          {(searchParams.category || searchParams.search) && (
            <a
              href="/products"
              className="text-sm text-blue-400 transition-colors hover:text-blue-300 hover:underline"
            >
              Limpar filtros
            </a>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
            <p className="text-2xl text-gray-500">😕</p>
            <p className="text-lg text-gray-400">Nenhum produto encontrado.</p>
            <a
              href="/products"
              className="text-blue-400 transition-colors hover:text-blue-300 hover:underline"
            >
              Ver todos os produtos
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
