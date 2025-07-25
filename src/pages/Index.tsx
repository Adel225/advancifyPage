
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import UseCasesSection from "@/components/UseCasesSection";
import ContactFormSection from "@/components/ContactFormSection";
// import LanguageToggle from "@/components/LanguageToggle";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]); 

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* <LanguageToggle /> */}
      
      <main>
        <Navigation /> 
        <HeroSection />
        <ServicesSection />
        <UseCasesSection />
        <ContactFormSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
