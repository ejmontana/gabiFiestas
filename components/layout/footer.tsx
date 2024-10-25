import { PartyPopper } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <PartyPopper className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-2xl font-bold">GabiFiesta</span>
            </div>
            <p className="text-gray-400">
              Transformando espacios en momentos mágicos en Caracas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portafolio" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-pink-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <a
              href="https://instagram.com/gaby__fiestas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              @gaby__fiestas
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GabiFiesta. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}