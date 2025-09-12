import React, { useEffect } from 'react';
import './App.css';
import './styles/pageLoad.css';
import './components/Hero/Hero.css';
import './styles/logoStripCentering.css';
import './styles/testimonialsLayout.css';
import { useWebflowAnimations } from './hooks/useWebflowAnimations';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Mission from './components/Mission';
import Impact from './components/Impact';
import CallToAction from './components/CallToAction';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import ResourceCenter from './components/ResourceCenter';
import Footer from './components/Footer';

function App() {
  // Initialize custom animations
  useWebflowAnimations();

  useEffect(() => {
    // Initialize Webflow for sliders only (without conflicting animations)
    const timer = setTimeout(() => {
      console.log('Initializing Webflow for sliders...');
      
      // Initialize only slider functionality
      if (window.Webflow) {
        window.Webflow.ready();
      }
      
      console.log('Webflow slider initialization complete');
    }, 500); // Delay to ensure components are mounted

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <div className="page-wrapper">
        <Header />
        <Hero />
        <LogoStrip />
        <WhyChooseUs />
        <Services />
        <Mission />
        <Impact />
        <CallToAction />
        <Testimonials />
        <Features />
        <ResourceCenter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
