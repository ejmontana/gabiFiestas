import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Portfolio } from '@/components/sections/portfolio';
import { InstagramFeed } from '@/components/sections/instagram-feed';
import { Contact } from '@/components/sections/contact';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingBalloons } from '@/components/animations/balloons';

export default function Home() {
  return (
    <>
      <FloatingBalloons />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </>
  );
}