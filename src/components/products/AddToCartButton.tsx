'use client';

import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { Product } from '@/src/types/product';
import { useCartStore } from '@/src/store/useCartStore';
import { Button } from '@/src/components/ui/button';

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const isOutOfStock = product.stock === 0;

  const handleAddToCart = () => {
    addItem(product);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isOutOfStock || isAdded}
      className="w-full gap-2 bg-linear-to-r from-blue-500 to-purple-600 py-6 text-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isAdded ? (
        <>
          <Check className="h-6 w-6" />
          Adicionado ao Carrinho!
        </>
      ) : (
        <>
          <ShoppingCart className="h-6 w-6" />
          {isOutOfStock ? 'Produto Indisponível' : 'Adicionar ao Carrinho'}
        </>
      )}
    </Button>
  );
}
