
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FleetSection from '@/components/FleetSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with the animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => {
      // Clean up the observer when component unmounts
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Our Fleet Section */}
      <div className="animate-on-scroll">
        <FleetSection />
      </div>

      {/* Services Section */}
      <div className="animate-on-scroll">
        <ServicesSection />
      </div>

      {/* Testimonials Section */}
      <div className="animate-on-scroll">
        <TestimonialSection />
      </div>

      {/* Contact Section */}
      <div className="animate-on-scroll">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
