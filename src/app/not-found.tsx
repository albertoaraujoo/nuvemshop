import Link from 'next/link';
import { SearchX, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20 blur-xl" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-2 ring-blue-500/50">
              <SearchX className="h-12 w-12 text-blue-400" />
            </div>
          </div>
        </div>

        {/* 404 Number */}
        <div className="mb-6">
          <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-8xl font-bold text-transparent sm:text-9xl">
            404
          </h1>
        </div>

        {/* Title */}
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Página não encontrada
        </h2>

        {/* Description */}
        <p className="mb-8 text-lg text-gray-400 sm:text-xl">
          Ops! A página que você está procurando não existe ou foi movida para outro lugar.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/">
            <Button
              size="lg"
              className="w-full gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 text-base font-semibold hover:from-blue-600 hover:to-purple-700 sm:w-auto"
            >
              <Home className="h-5 w-5" />
              Voltar para Home
            </Button>
          </Link>

          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-2 border-gray-700 px-6 text-base hover:bg-gray-800 sm:w-auto"
            >
              <ArrowLeft className="h-5 w-5" />
              Ver Produtos
            </Button>
          </Link>
        </div>

        {/* Additional Help */}
        <div className="mt-12 rounded-lg border border-gray-800 bg-gray-900/50 p-6">
          <p className="mb-3 text-sm font-semibold text-white">Precisa de ajuda?</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <Link
              href="/"
              className="transition-colors hover:text-blue-400 hover:underline"
            >
              Página Inicial
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/products"
              className="transition-colors hover:text-blue-400 hover:underline"
            >
              Todos os Produtos
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/about"
              className="transition-colors hover:text-blue-400 hover:underline"
            >
              Sobre Nós
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/cart"
              className="transition-colors hover:text-blue-400 hover:underline"
            >
              Meu Carrinho
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
