
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
