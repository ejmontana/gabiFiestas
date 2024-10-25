import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PartyPopper, Cake, Heart, Stars } from 'lucide-react';

const services = [
  {
    title: 'Fiestas Infantiles',
    description: 'Decoraciones temáticas que harán brillar los ojos de los pequeños.',
    icon: PartyPopper,
  },
  {
    title: 'Bodas y Compromisos',
    description: 'Creamos ambientes románticos y elegantes para tu día especial.',
    icon: Heart,
  },
  {
    title: 'Cumpleaños',
    description: 'Diseños personalizados que reflejan la personalidad del homenajeado.',
    icon: Cake,
  },
  {
    title: 'Eventos Corporativos',
    description: 'Decoración profesional para eventos empresariales y corporativos.',
    icon: Stars,
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de decoración para hacer de tu
            evento algo extraordinario.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-pink-500" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}