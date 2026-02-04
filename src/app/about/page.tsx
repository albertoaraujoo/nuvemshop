'use client';

import { Users, Target, Heart, Zap, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/src/components/ui/button';

export default function AboutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Scroll para o topo da seção de contato
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="w-full border-b border-gray-800 bg-gray-900/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Sobre a NuvemShop
            </h1>
            <p className="mt-4 text-lg text-gray-400 md:text-xl">
              Conectando tecnologia e pessoas desde 2020
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-16 md:py-20">
        {/* Nossa História */}
        <div className="mx-auto mb-16 max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold text-white">Nossa História</h2>
          <p className="leading-relaxed text-gray-400">
            A <strong className="text-white">NuvemShop</strong> nasceu da paixão por tecnologia e do
            desejo de oferecer os melhores produtos tech para desenvolvedores, entusiastas e
            profissionais de TI. Desde 2020, temos crescido junto com nossos clientes, sempre
            buscando inovação e qualidade.
          </p>
          <p className="leading-relaxed text-gray-400">
            Nossa missão é tornar a tecnologia acessível e oferecer uma experiência de compra
            excepcional, com produtos cuidadosamente selecionados e atendimento personalizado.
          </p>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:mb-12">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">Foco no Cliente</h3>
              <p className="text-sm text-gray-400">
                Sua satisfação é nossa prioridade máxima em cada interação
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-purple-600 text-white">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">Inovação</h3>
              <p className="text-sm text-gray-400">
                Sempre atualizados com as últimas tendências tecnológicas
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-pink-500 to-pink-600 text-white">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">Paixão</h3>
              <p className="text-sm text-gray-400">
                Amor genuíno por tecnologia e pelo que fazemos
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-green-600 text-white">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-white">Comunidade</h3>
              <p className="text-sm text-gray-400">
                Construindo uma rede de profissionais e entusiastas tech
              </p>
            </div>
          </div>
        </div>

        {/* Nossos Números */}
        <div className="mx-auto max-w-5xl rounded-lg border border-gray-800 bg-gray-900/50 p-8 md:p-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">NuvemShop em Números</h2>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400 md:text-5xl">10k+</p>
              <p className="mt-2 text-sm text-gray-400">Clientes Satisfeitos</p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold text-purple-400 md:text-5xl">500+</p>
              <p className="mt-2 text-sm text-gray-400">Produtos Disponíveis</p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold text-pink-400 md:text-5xl">48h</p>
              <p className="mt-2 text-sm text-gray-400">Entrega Rápida</p>
            </div>

            <div className="text-center">
              <p className="text-4xl font-bold text-green-400 md:text-5xl">4.9★</p>
              <p className="mt-2 text-sm text-gray-400">Avaliação Média</p>
            </div>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div id="contact-form" className="mt-16">
          <div className="mx-auto max-w-2xl">
            {!formSubmitted ? (
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-8 md:p-10">
                <div className="mb-6 text-center">
                  <h2 className="text-3xl font-bold text-white">Fale Conosco</h2>
                  <p className="mt-2 text-gray-400">
                    Ficou com alguma dúvida? Preencha o formulário e entraremos em contato!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full resize-none rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-linear-to-r from-blue-500 to-purple-600 py-6 text-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-6 rounded-lg border border-gray-800 bg-gray-900/50 p-12 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white">Mensagem Enviada!</h2>
                  <p className="text-lg text-gray-400">
                    Obrigado por entrar em contato,{' '}
                    <strong className="text-white">{formData.name}</strong>!
                  </p>
                  <p className="text-gray-400">
                    Nossa equipe receberá sua mensagem e entrará em contato em breve através do
                    e-mail <strong className="text-blue-400">{formData.email}</strong>.
                  </p>
                </div>

                <Link href="/" className="mt-4">
                  <Button className="bg-linear-to-r from-blue-500 to-purple-600 px-8 py-6 text-lg font-semibold text-white hover:from-blue-600 hover:to-purple-700">
                    Voltar para a Home
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
