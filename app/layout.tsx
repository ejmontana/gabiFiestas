import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GabiFiesta | Decoraciones en Caracas - Eventos y Fiestas',
  description: 'Especialistas en decoración de eventos y fiestas en Caracas. Transformamos espacios en momentos mágicos con diseños únicos y personalizados.',
  keywords: ['decoraciones en caracas', 'decoración de eventos', 'fiestas caracas', 'decoración de fiestas', 'eventos caracas'],
  openGraph: {
    title: 'GabiFiesta | Decoraciones en Caracas',
    description: 'Especialistas en decoración de eventos y fiestas en Caracas',
    images: ['/og-image.jpg'],
    locale: 'es_VE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://gabifiesta.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "GabiFiesta",
              "image": "/logo.png",
              "description": "Especialistas en decoración de eventos y fiestas en Caracas",
              "@id": "https://gabifiesta.com",
              "url": "https://gabifiesta.com",
              "telephone": "+584141234567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Caracas",
                "addressLocality": "Caracas",
                "addressRegion": "Distrito Capital",
                "postalCode": "1010",
                "addressCountry": "VE"
              },
              "priceRange": "$$",
              "sameAs": [
                "https://instagram.com/gaby__fiestas"
              ]
            })
          }}
        />
      </head>
      <body className={poppins.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}