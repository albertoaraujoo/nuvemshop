'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/src/store/useCartStore';
import { Button } from '@/src/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet';
import { Separator } from '@/src/components/ui/separator';

interface MiniCartProps {
  children: React.ReactNode;
}

export function MiniCart({ children }: MiniCartProps) {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCartStore();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice);

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full border-gray-800 bg-gray-950 sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-white">
            <ShoppingCart className="h-5 w-5" />
            Meu Carrinho
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex h-[calc(100vh-200px)] flex-col items-center justify-center gap-4 text-center">
            <ShoppingCart className="h-16 w-16 text-gray-600" />
            <div className="space-y-2">
              <p className="font-semibold text-white">Carrinho vazio</p>
              <p className="text-sm text-gray-400">Adicione produtos para começar</p>
            </div>
          </div>
        ) : (
          <div className="flex h-[calc(100vh-200px)] flex-col">
            {/* Lista de produtos */}
            <div className="flex-1 space-y-4 overflow-y-auto py-6">
              {items.map((item) => {
                const formattedPrice = new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.price);

                return (
                  <div
                    key={item.id}
                    className="flex gap-3 border border-gray-800 bg-gray-900/30 p-2"
                  >
                    {/* Imagem */}
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-gray-800">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col justify-between gap-2 px-2">
                      <div className="flex justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="line-clamp-1 text-sm font-semibold text-white">
                            {item.name}
                          </h4>
                          <p className="mt-1 text-xs text-gray-400">{formattedPrice}</p>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="h-7 w-7 text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Controles de quantidade + Total */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-6 w-6 border-gray-700"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>

                          <span className="w-8 text-center text-xs font-semibold text-white">
                            {item.quantity}
                          </span>

                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.stock}
                            className="h-6 w-6 border-gray-700"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <p className="text-sm font-bold text-white">
                          {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                          }).format(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Separator className="bg-gray-800" />

            {/* Footer */}
            <div className="space-y-4 px-2 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">
                  Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'itens'})
                </span>
                <span className="font-bold text-white">{formattedTotal}</span>
              </div>

              <SheetClose asChild>
                <Link href="/cart" className="block">
                  <Button className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Fechar Compra
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Button variant="outline" className="w-full border-gray-700">
                  Continuar Comprando
                </Button>
              </SheetClose>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
