'use client';

import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle } from 'lucide-react';

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/584141234567', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/gaby__fiestas', '_blank');
  };

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
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contáctanos por WhatsApp
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
              onClick={handleInstagramClick}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Síguenos en Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}