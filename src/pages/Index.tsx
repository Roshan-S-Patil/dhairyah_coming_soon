
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Countdown from '@/components/Countdown';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Countdown />
      <Footer />
    </div>
  );
};

export default Index;
