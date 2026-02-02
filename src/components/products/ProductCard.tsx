'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Check } from 'lucide-react';
import { Product } from '@/src/types/product';
import { useCartStore } from '@/src/store/useCartStore';
import { Button } from '@/src/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <article className="group relative flex w-full flex-col overflow-hidden border border-gray-800 bg-gray-900/50 backdrop-blur transition-all hover:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10">
      {/* Stock Badge */}
      {product.stock < 10 && product.stock > 0 && (
        <div className="absolute top-2 right-2 z-10 flex items-center gap-1 rounded-full bg-orange-500/90 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
          <span>⚠️</span>
          <span>{product.stock} restantes</span>
        </div>
      )}

      {product.stock === 0 && (
        <div className="absolute top-2 right-2 z-10 flex items-center gap-1 rounded-full bg-red-500/90 px-3 py-1 text-xs font-bold text-white shadow-lg backdrop-blur-sm">
          <span>❌</span>
          <span>Esgotado</span>
        </div>
      )}

      <Link
        href={`/products/${product.id}`}
        className="relative aspect-square w-full overflow-hidden bg-gray-800"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-2 pt-2 pb-0">
        <div className="flex-1 space-y-2 px-3">
          <Link href={`/products/${product.id}`}>
            <h3 className="line-clamp-1 text-base font-semibold text-white transition-colors hover:text-blue-400">
              {product.name}
            </h3>
          </Link>

          <p className="line-clamp-2 text-xs leading-relaxed text-gray-400">
            {product.description}
          </p>

          <span className="inline-block rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400 ring-1 ring-blue-500/20">
            {product.category}
          </span>
        </div>

        <div className="flex flex-col gap-2 border-t border-gray-800 pt-1">
          <div>
            <p className="font-bold text-white px-4 text-lg">{formattedPrice}</p>
          </div>

          <div className="flex">
            <Button
              asChild
              className="flex-1 rounded-none bg-linear-to-r from-blue-500 to-purple-600 py-6 text-xs font-semibold hover:from-blue-600 hover:to-purple-700"
            >
              <Link href={`/products/${product.id}`}>Ver mais</Link>
            </Button>

            <Button
              onClick={handleAddToCart}
              disabled={product.stock === 0 || isAdded}
              className="flex-1 gap-1.5 rounded-none bg-green-600 py-6 text-xs font-semibold transition-all hover:bg-green-700 data-[added=true]:bg-green-700"
              data-added={isAdded}
            >
              {isAdded ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Adicionado!
                </>
              ) : (
                <>
                  <ShoppingCart className="h-3.5 w-3.5" />
                  Adicionar
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
