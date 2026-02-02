'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/src/store/useCartStore';
import { MiniCart } from '@/src/components/cart/MiniCart';
import { Button } from '@/src/components/ui/button';

export function Header() {
  const pathname = usePathname();
  const totalItems = useCartStore((state) => state.getTotalItems());
  const isCartPage = pathname === '/cart';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <Link href="/" className="flex items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="h-8 w-8 rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 sm:h-10 sm:w-10" />
            <span className="text-xl font-bold text-white sm:text-2xl">NuvemShop</span>
          </div>
        </Link>

        <nav className="flex items-center">
          {/* Esconde o botão do carrinho quando estiver na página do carrinho */}
          {!isCartPage && (
            <MiniCart>
              <Button
                variant="ghost"
                className="relative gap-2 bg-gray-800/50 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white sm:px-4 sm:py-2.5 sm:text-base"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <>
                    <span className="hidden sm:inline">Carrinho ({totalItems})</span>
                    <span className="sm:hidden">{totalItems}</span>
                  </>
                )}
                {totalItems === 0 && <span className="hidden sm:inline">Carrinho</span>}
              </Button>
            </MiniCart>
          )}
        </nav>
      </div>
    </header>
  );
}
