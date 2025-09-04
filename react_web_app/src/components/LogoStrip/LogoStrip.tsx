import React, { useEffect } from 'react';

const LogoStrip: React.FC = () => {
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
  }, []);

  return (
    <div className="logo-strip-section-top">
      <div className="container-default w-container">
        <div className="w-layout-grid grid-2-columns logo-strip-v2">
          <div className="text-center tablet">
            <div className="text-300 bold color-neutral-100">
              Built on trusted financial technology partners.
            </div>
          </div>

          <div className="w-layout-grid grid-4-columns logo-strips-right logo-strip">
            <a href="https://aave.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/aave-logo-light.svg"
                alt="Aave – Decentralized Liquidity Protocol"
                className="partner-logo"
              />
            </a>

            <a href="https://arbitrum.io" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/0923_Arbitrum_Logos_AllWhite_horizontal_RGB.svg"
                alt="Arbitrum – Ethereum Layer-2"
                className="partner-logo partner-logo--invert"
              />
            </a>

            <a href="https://www.circle.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/circle_logo.svg"
                alt="Circle – USDC Stablecoin & Payments"
                className="partner-logo partner-logo--invert"
              />
            </a>

            <a href="https://plaid.com" target="_blank" rel="noopener noreferrer">
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
