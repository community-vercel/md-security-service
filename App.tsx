
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Challenges from './components/Challenges';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

const App: React.FC = () => {
  useEffect(() => {
    // Reveal animation logic inside React to ensure elements exist
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    // Give React a tiny moment to paint
    const timer = setTimeout(() => {
      document.querySelectorAll('section, .reveal-item').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Team />
        <Challenges />
        <Contact />
      </main>
      <Footer />
      <ScrollProgress />
    </div>
  );
};

export default App;
