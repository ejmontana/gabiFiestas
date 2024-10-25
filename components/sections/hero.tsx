import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Decoraciones Mágicas para{' '}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Momentos Especiales
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transformamos espacios en experiencias inolvidables en Caracas.
            Decoración profesional para todo tipo de eventos y celebraciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              <Sparkles className="mr-2 h-5 w-5" />
              Cotizar Decoración
            </Button>
            <Button size="lg" variant="outline">
              Ver Portafolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}