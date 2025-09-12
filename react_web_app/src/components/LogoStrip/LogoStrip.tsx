import React, { useEffect } from 'react';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { usePageLoad } from '../../hooks/usePageLoad';

const LogoStrip: React.FC = () => {
  const loaded = usePageLoad(100);
  const titleRef = useScrollAnimation({ 
    delay: 0,
    distance: '60px',
    duration: 1000,
    threshold: 0.2, // Lower threshold for more reliable triggering
    rootMargin: '0px 0px -50px 0px' // Trigger when more in view
  });
  const logosRef = useStaggerAnimation(100, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px' // More reliable trigger
  });

  useEffect(() => {
    // Safety net: ensure any Webflow-animated nodes are visible even if IX doesn't run
    const ids = [
      '13423397-6f9a-3d82-5a9b-90e0e074adce',
      '13423397-6f9a-3d82-5a9b-90e0e074add1',
    ];
    ids.forEach((id) => {
      const el = document.querySelector(`[data-w-id="${id}"]`) as HTMLElement | null;
      if (el && getComputedStyle(el).opacity === '0') el.style.opacity = '1';
    });

    // Force proper initial state for logo strip animations
    const titleElement = titleRef.current;
    const logosElement = logosRef.current;
    
    if (titleElement) {
      titleElement.style.opacity = '0';
      titleElement.style.transform = 'translate3d(0, 60px, 0)';
    }
    
    if (logosElement) {
      const logoItems = logosElement.querySelectorAll('[data-animate]');
      logoItems.forEach((item, index) => {
        const element = item as HTMLElement;
        element.style.opacity = '0';
        element.style.transform = `translate3d(0, 60px, 0)`;
      });
    }
  }, [titleRef, logosRef]);

  return (
    <div className={`logo-strip-section-top ${loaded ? 'section-loaded' : ''}`}>
      <div className="container-default w-container">
        <div className="w-layout-grid grid-2-columns logo-strip-v2">
          <div 
            ref={titleRef}
            className="text-center tablet"
          >
            <div className="text-300 bold color-neutral-100">
              Built on trusted financial technology partners.
            </div>
          </div>

          <div 
            ref={logosRef}
            className="w-layout-grid grid-4-columns logo-strips-right logo-strip"
          >
            <a href="https://aave.com" target="_blank" rel="noopener noreferrer" data-animate>
              <img
                src="/images/aave-logo-light.svg"
                alt="Aave – Decentralized Liquidity Protocol"
                className="partner-logo"
              />
            </a>

            <a href="https://arbitrum.io" target="_blank" rel="noopener noreferrer" data-animate>
              <img
                src="/images/0923_Arbitrum_Logos_AllWhite_horizontal_RGB.svg"
                alt="Arbitrum – Ethereum Layer-2"
                className="partner-logo partner-logo--invert"
              />
            </a>

            <a href="https://www.circle.com" target="_blank" rel="noopener noreferrer" data-animate>
              <img
                src="/images/circle_logo.svg"
                alt="Circle – USDC Stablecoin & Payments"
                className="partner-logo partner-logo--invert"
              />
            </a>

            <a href="https://plaid.com" target="_blank" rel="noopener noreferrer" data-animate>
              <img
                src="/images/plaid-logo.svg"
                alt="Plaid – Financial Data Connectivity"
                className="partner-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
