import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-gray-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:text-lg">Sobre</h3>
            <p className="text-xs leading-relaxed text-gray-400 sm:text-sm">
              NuvemShop - Sua loja online de produtos tech com as melhores ofertas para
              desenvolvedores e entusiastas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
              <li>
                <Link href="/products" className="text-gray-400 transition-colors hover:text-white">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-400 transition-colors hover:text-white">
                  Carrinho
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-white">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-white sm:text-lg">Contato</h3>
            <ul className="space-y-2 text-xs text-gray-400 sm:space-y-3 sm:text-sm">
              <li>Email: contato@nuvemshop.com</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>Segunda a Sexta, 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 sm:text-sm">
          <p>&copy; {new Date().getFullYear()} NuvemShop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
