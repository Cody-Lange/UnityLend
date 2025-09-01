import React from 'react';

const LogoStrip: React.FC = () => {
  return (
    <div className="logo-strip-section-top">
      <div className="container-default w-container">
        <div className="w-layout-grid grid-2-columns logo-strip-v2">
          <div 
            data-w-id="13423397-6f9a-3d82-5a9b-90e0e074adce" 
            style={{ opacity: 0 }} 
            className="text-center tablet"
          >
            <div className="text-300 bold color-neutral-100">Trusted by</div>
          </div>
          <div 
            data-w-id="13423397-6f9a-3d82-5a9b-90e0e074add1" 
            style={{ opacity: 0 }} 
            className="w-layout-grid grid-4-columns logo-strips-right"
          >
            <img 
              src="/images/business-logo-bnkly-x-webflow-template.svg" 
              alt="Business Logo - UnityLend" 
            />
            <img 
              src="/images/company-logo-bnkly-x-webflow-template.svg" 
              alt="Company Logo - UnityLend" 
            />
            <img 
              src="/images/venture-logo-bnkly-x-webflow-template.svg" 
              alt="Venture Logo - UnityLend" 
            />
            <img 
              src="/images/organization-logo-bnkly-x-webflow-template.svg" 
              alt="Organization Logo - UnityLend" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoStrip;
