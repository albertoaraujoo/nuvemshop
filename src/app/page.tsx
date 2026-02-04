import { Product } from '@/src/types/product';
import { ProductCard } from '@/src/components/products/ProductCard';
import { InfoCard } from '@/src/components/home/InfoCard';
import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

async function getProducts(): Promise<Product[]> {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Falha ao carregar produtos');
  }

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex w-full flex-col gap-10">
      {/* Hero Section */}
      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="mb-8 space-y-4 md:mb-10">
            <h1 className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
              Produtos em Destaque
            </h1>
            <p className="text-base text-gray-400 sm:text-lg md:text-xl">
              Descubra os melhores produtos tech para o seu dia a dia
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 && (
            <div className="flex min-h-[400px] items-center justify-center">
              <p className="text-lg text-gray-500">Nenhum produto encontrado.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="w-full bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Por que comprar com a gente?
            </h2>
            <p className="mt-3 text-sm text-gray-400 sm:text-base">
              Oferecemos as melhores condições para você
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            <InfoCard
              icon={Truck}
              title="Entrega Rápida"
              description="Receba seus produtos em até 48h para todo o Brasil"
            />
            <InfoCard
              icon={ShieldCheck}
              title="Compra Segura"
              description="Ambiente 100% seguro com certificado SSL"
            />
            <InfoCard
              icon={CreditCard}
              title="Parcele sem Juros"
              description="Em até 12x no cartão de crédito sem juros"
            />
            <InfoCard
              icon={Headphones}
              title="Suporte 24/7"
              description="Atendimento completo todos os dias da semana"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
