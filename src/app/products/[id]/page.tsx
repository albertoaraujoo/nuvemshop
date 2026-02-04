import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Truck, ShieldCheck, Package, CreditCard, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/src/types/product';
import { AddToCartButton } from '@/src/components/products/AddToCartButton';
import { getBaseUrl } from '@/src/lib/api';

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${getBaseUrl()}/api/products/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return null;
    }

    return res.json();
  } catch {
    return null;
  }
}

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params;
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  const isLowStock = product.stock > 0 && product.stock < 10;
  const isOutOfStock = product.stock === 0;

  return (
    <div className="w-full">
      {/* Breadcrumb / Voltar */}
      <div className="w-full border-b border-gray-800 bg-gray-900/30">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a loja
          </Link>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Imagem do Produto */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Stock Badge */}
            {isLowStock && (
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-orange-500/90 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-sm">
                <span>⚠️</span>
                <span>Apenas {product.stock} restantes</span>
              </div>
            )}

            {isOutOfStock && (
              <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-red-500/90 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur-sm">
                <span>❌</span>
                <span>Esgotado</span>
              </div>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="flex flex-col gap-6">
            {/* Categoria */}
            <div>
              <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 ring-1 ring-blue-500/20">
                {product.category}
              </span>
            </div>

            {/* Nome */}
            <h1 className="text-3xl font-bold text-white md:text-4xl">{product.name}</h1>

            {/* Preço */}
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white md:text-5xl">{formattedPrice}</span>
              <span className="text-sm text-gray-400">à vista</span>
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-white">Descrição</h2>
              <p className="leading-relaxed text-gray-400">{product.description}</p>
            </div>

            {/* Disponibilidade */}
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-green-500" />
              <span className="text-sm text-gray-300">
                {isOutOfStock ? (
                  <span className="text-red-400">Produto indisponível</span>
                ) : isLowStock ? (
                  <span className="text-orange-400">
                    Estoque limitado - {product.stock} unidades
                  </span>
                ) : (
                  <span className="text-green-400">Em estoque - Pronta entrega</span>
                )}
              </span>
            </div>

            {/* Botão Adicionar ao Carrinho */}
            <AddToCartButton product={product} />

            {/* Informações Adicionais */}
            <div className="space-y-3 rounded-lg border border-gray-800 bg-gray-900/50 p-6">
              <h3 className="font-semibold text-white">Informações de Entrega e Garantia</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Entrega Rápida</p>
                    <p className="text-xs text-gray-400">
                      Receba em até 48h para capitais e regiões metropolitanas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Garantia Estendida</p>
                    <p className="text-xs text-gray-400">
                      12 meses de garantia do fabricante + 3 meses extras
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="text-sm font-medium text-white">Parcele sem Juros</p>
                    <p className="text-xs text-gray-400">
                      Em até 12x no cartão de crédito sem juros
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Especificações Técnicas */}
        <div className="mt-12 space-y-6 lg:mt-16">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Especificações Técnicas</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-sm text-gray-400">Categoria</span>
                  <span className="text-sm font-medium text-white">{product.category}</span>
                </div>

                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-sm text-gray-400">Código do Produto</span>
                  <span className="text-sm font-medium text-white">
                    #{product.id.toString().padStart(6, '0')}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Disponibilidade</span>
                  <span className="text-sm font-medium text-white">
                    {isOutOfStock ? 'Esgotado' : `${product.stock} unidades`}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-sm text-gray-400">Garantia</span>
                  <span className="text-sm font-medium text-white">15 meses</span>
                </div>

                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-sm text-gray-400">Peso</span>
                  <span className="text-sm font-medium text-white">Variável</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-gray-400">Origem</span>
                  <span className="text-sm font-medium text-white">Nacional/Importado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
