'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/src/store/useCartStore';
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { Separator } from '@/src/components/ui/separator';

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice, getTotalItems } =
    useCartStore();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice);

  if (items.length === 0) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
          <ShoppingCart className="h-24 w-24 text-gray-600" />
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white">Seu carrinho está vazio</h1>
            <p className="text-gray-400">Adicione produtos ao carrinho para começar suas compras</p>
          </div>
          <Link href="/">
            <Button className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Voltar para a loja
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white md:text-4xl">Meu Carrinho</h1>
          <p className="mt-2 text-gray-400">
            {totalItems} {totalItems === 1 ? 'item' : 'itens'} no carrinho
          </p>
        </div>
        <Button
          variant="outline"
          onClick={clearCart}
          className="border-red-500/50 text-red-400 hover:bg-red-500/10 hover:text-red-300"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Limpar carrinho
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Lista de produtos */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => {
              const itemTotal = item.price * item.quantity;
              const formattedItemTotal = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(itemTotal);

              const formattedPrice = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.price);

              return (
                <Card key={item.id} className="border-gray-800 bg-gray-900/50 p-4">
                  <div className="flex gap-4">
                    {/* Imagem */}
                    <Link
                      href={`/products/${item.id}`}
                      className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-800"
                    >
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </Link>

                    {/* Informações do produto */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex justify-between gap-4">
                        <div className="flex-1">
                          <Link href={`/products/${item.id}`}>
                            <h3 className="font-semibold text-white hover:text-blue-400">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="mt-1 text-sm text-gray-400">{item.category}</p>
                          <p className="mt-2 font-semibold text-white">{formattedPrice}</p>
                        </div>

                        {/* Botão remover */}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Controles de quantidade */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="h-8 w-8 border-gray-700"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>

                          <span className="w-12 text-center text-sm font-semibold text-white">
                            {item.quantity}
                          </span>

                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.stock}
                            className="h-8 w-8 border-gray-700"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-gray-400">Subtotal</p>
                          <p className="font-bold text-white">{formattedItemTotal}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Resumo do pedido */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 border-gray-800 bg-gray-900/50 p-6">
            <h2 className="mb-4 text-xl font-bold text-white">Resumo do Pedido</h2>

            <Separator className="my-4 bg-gray-800" />

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-white">{formattedTotal}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Frete</span>
                <span className="text-green-400">Grátis</span>
              </div>

              <Separator className="my-4 bg-gray-800" />

              <div className="flex justify-between text-lg font-bold">
                <span className="text-white">Total</span>
                <span className="text-white">{formattedTotal}</span>
              </div>
            </div>

            <Button className="mt-6 w-full bg-linear-to-r from-blue-500 to-purple-600 py-6 text-base font-semibold hover:from-blue-600 hover:to-purple-700">
              Finalizar Compra
            </Button>

            <Link href="/">
              <Button variant="outline" className="mt-3 w-full border-gray-700">
                Continuar Comprando
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
