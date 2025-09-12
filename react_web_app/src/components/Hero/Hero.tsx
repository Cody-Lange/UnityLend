import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Hero.css';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  // Hero load-in: Simple fade like original Webflow
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 200); // Small delay for smooth initial render
    return () => clearTimeout(timer);
  }, []);

  // Match original Webflow exactly: 10% upward movement + fade
  const heroContentRef = useScrollAnimation({ 
    delay: 0,
    distance: '10%', // Exact match to original translate3d(0, 10%, 0)
    duration: 800, // Smooth timing like original
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px'
  });

  // Images fade only (no movement) like original
  const imageRef = useScrollAnimation({ 
    delay: 200, // Slight stagger for depth
    distance: '0px', // Images only fade, no movement
    duration: 800, // Match content timing
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px'
  });
  
  return (
    <div 
      data-w-id="a22c0ce7-c5f2-252a-11a6-aa2c0b174c1f" 
      className={`top-section full-width-image-right v2 ${loaded ? 'hero-loaded' : ''}`}
    >
      <div className="container-default position-relative---z-index-1 w-container">
        <div 
          ref={heroContentRef}
          data-w-id="a22c0ce7-c5f2-252a-11a6-aa2c0b174c21" 
          className="inner-container _46 _100-tablet"
        >
          {/* Header fades in exactly like original Webflow */}
          <h1 className="display-1 color-neutral-100 mg-bottom-40px">
            Welcome to Frat Boy Financial 🍻
          </h1>
          
          {/* Support text in original layout */}
          <div className="mg-bottom-64px">
            <div className="grid-2-columns gap-40px _2-col-mbl">
              <div id="w-node-ca881248-8c1b-2bfc-3c04-0bfa875bf691-89416502" className="border-bottom-1px-neutral-600">
                <p id="w-node-_5a4e21d2-7980-00d5-6e44-4e042093b466-89416502" className="color-neutral-300 mg-bottom-56px mg-bottom-24px-mbl">
                  Where AI meets DeFi meets absolute chaos. BlackBroBot technology with authentic frat house energy.
                </p>
              </div>
              <div id="w-node-e925f935-ec81-0d27-3831-75f08e656fa9-89416502" className="border-bottom-1px-neutral-600">
                <p id="w-node-e925f935-ec81-0d27-3831-75f08e656faa-89416502" className="color-neutral-300 mg-bottom-56px mg-bottom-24px-mbl">
                  Revolutionary AI-driven lending with transparent rates and instant approvals. Powered by blockchain liquidity.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA buttons with original styling */}
          <div className="buttons-row">
            <a href="/pricing" className="btn-primary white button-row w-button">Start Borrowing 🚀</a>
            <a 
              data-w-id="a22c0ce7-c5f2-252a-11a6-aa2c0b174c2b" 
              href="/whitepaper" 
              className="link-wrapper white w-inline-block"
            >
              <div className="link-text text-100 text-uppercase">Read Whitepaper 📜</div>
              <div className="line-square-icon link-icon-right"></div>
            </a>
          </div>
        </div>
        <div 
          ref={imageRef}
          data-w-id="54fc40eb-0d5a-ecdd-340e-ff3c849a32c1" 
          className="top-section-v2---image-right-container"
        >
          <img 
            src="/images/home-v2-iphone-image-bankly-webflow-ecommerce-template.png" 
            loading="lazy" 
            alt="BlackBroBot AI Lending Technology - Frat Boy Financial" 
            className="top-section-v2---phone-image" 
          />
          <img 
            src="/images/home-v2-laptop-image-bankly-webflow-ecommerce-template.png" 
            loading="lazy" 
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" 
            srcSet="/images/home-v2-laptop-image-bankly-webflow-ecommerce-template-p-500.png 500w, /images/home-v2-laptop-image-bankly-webflow-ecommerce-template-p-800.png 800w, /images/home-v2-laptop-image-bankly-webflow-ecommerce-template-p-1080.png 1080w, /images/home-v2-laptop-image-bankly-webflow-ecommerce-template.png 1920w" 
            alt="AI-Driven DeFi Lending Platform - Frat Boy Financial" 
            className="fit-cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
