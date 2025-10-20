import React from 'react';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { usePageLoad } from '../../hooks/usePageLoad';
import './Services.css';
import './Services.css';

const Services: React.FC = () => {
  const loaded = usePageLoad(100);
  
  // Match Features section animation style exactly - 10% upward movement
  const headerRef = useScrollAnimation({ 
    delay: 0,
    distance: '10%', // Same as Features/Hero section
    duration: 800, // Same timing as Features/Hero
    threshold: 0.1,
    rootMargin: '0px 0px 0px 0px'
  });
  
  const buttonRef = useScrollAnimation({ 
    delay: 200, // Slight stagger
    distance: '10%', // Same movement pattern
    duration: 800 // Same timing
  });
  
  const creditCardRef = useScrollAnimation({ 
    delay: 400, // More stagger
    distance: '10%', // Consistent movement
    duration: 800
  });
  
  const servicesContainerRef = useStaggerAnimation(150); // Staggered service cards
  
  const services = [
    {
      id: "79613225-6546-d32f-b7c6-1ce80d221abf",
      icon: "/images/checking-accounts-icon-bankly-webflow-ecommerce-template.svg",
      title: "Checking accounts",
      description: "Bank with the bros. High testosterone checking accounts available to embrace being a baller and beholding the big number on the screen"
    },
    {
      id: "e8f9480f-7686-f995-1fcb-4f1260a556eb",
      icon: "/images/credit-cards-icon-bankly-webflow-ecommerce-template.svg", 
      title: "Credit cards",
      description: "They're metal, so everyone knows you fuck."
    },
    {
      id: "05d57148-df4b-0ab0-2f91-7c0e1355dcbf",
      icon: "/images/investments-icon-bankly-webflow-ecommerce-template.svg",
      title: "Investments", 
      description: "Invest worry free with our AI Assistant putting your $$$ to work. ALL ON BLACK!"
    },
    {
      id: "9489bd49-d366-12af-a2d3-fe483ef4d9cc",
      icon: "/images/loans-and-credits-icon-bankly-webflow-ecommerce-template.svg",
      title: "Loans and credits",
      description: "Bros don't let bros take out loans with high interest rates."
    },
    {
      id: "e206382f-a730-73fa-d5cf-03026f7ec999", 
      icon: "/images/wealth-management-icon-bankly-webflow-ecommerce-template.svg",
      title: "Wealth Management",
      description: "Just trust me bro. My dad works on Wall Street."
    },
    {
      id: "1a8ae6d5-0d4a-2151-a579-1bb77c52dbf1",
      icon: "/images/insurances-icon-bankly-webflow-ecommerce-template.svg",
      title: "Insurance", 
      description: "You're gonna want insurance for that."
    }
  ];

  return (
    <div className={`section pd-top-180px ${loaded ? 'section-loaded' : ''}`}>
      <div className="container-default w-container">
        <div className="grid-2-columns _1-2fr---1fr mg-bottom-40px">
          <h2 
            ref={headerRef}
            id="w-node-_46661274-fa9f-54be-d62f-73828c40a65e-89416502" 
            data-w-id="46661274-fa9f-54be-d62f-73828c40a65e" 
            className="display-2 mg-bottom-0"
          >
            Browse our set of banking services and offerings
          </h2>
          <div 
            ref={buttonRef}
            id="w-node-_140df88d-6ef9-8f83-f7d1-a8dee8a7c380-89416502" 
            data-w-id="140df88d-6ef9-8f83-f7d1-a8dee8a7c380"
          >
            <a href="/pricing" className="btn-primary w-button">Get started</a>
          </div>
        </div>
        
        <div 
          ref={creditCardRef}
          data-w-id="568a2e8c-c51f-454f-0f54-6bef9fad1350" 
          className="card credit-cards-section"
        >
          <div>
            <div className="pd-left-52px pd-left-24px-mbl border-left---white-2px">
              <div className="pd-top-10px pd-bottom-10px">
                <h3 className="display-2 color-neutral-100 mg-bottom-0">Credit cards for the boys</h3>
              </div>
            </div>
            <div className="pd-left-52px pd-left-24px-mbl border-left-neutral-700-2px">
              <p className="color-neutral-300 mg-bottom-80px">
                Pull hella hoes when whipping out one of these bad boys when picking up the tab.
              </p>
              <a 
                data-w-id="412c1d36-52e8-7ee4-a0c9-c54fd79bd192" 
                href="/features" 
                className="link-wrapper white w-inline-block"
              >
                <div className="link-text text-100 text-uppercase">Learn more</div>
                <div className="line-square-icon link-icon-right"></div>
              </a>
            </div>
          </div>
          <img 
            src="/images/credit-cards-image-bankly-webflow-ecommerce-template.png" 
            loading="eager" 
            id="w-node-_33cc0fd6-1403-cf43-665f-930905d406bd-89416502" 
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.96875px" 
            alt="Credit Cards - UnityLend" 
            srcSet="/images/credit-cards-image-bankly-webflow-ecommerce-template-p-500.png 500w, /images/credit-cards-image-bankly-webflow-ecommerce-template-p-800.png 800w, /images/credit-cards-image-bankly-webflow-ecommerce-template.png 1114w" 
            className="fit-cover" 
          />
        </div>
        
        <div 
          ref={servicesContainerRef} 
          className="grid-3-columns gap-row-104px"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '104px 40px',
            alignItems: 'flex-start',
            justifyItems: 'start'
          }}
        >
          {services.map((service, index) => (
            <div 
              key={service.id}
              id={`w-node-_${service.id}-89416502`} 
              data-w-id={service.id} 
              data-animate
              className="inner-container _362px _100-mbl"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
                height: 'auto'
              }}
            >
              <div 
                id={`w-node-_${service.id.replace(service.id.slice(-2), service.id.slice(-2) === 'eb' ? 'ec' : service.id.slice(-2) === 'bf' ? 'c0' : service.id.slice(-2) === 'cc' ? 'cd' : service.id.slice(-2) === '99' ? '9a' : service.id.slice(-2) === 'f1' ? 'f2' : 'cd')}-89416502`} 
                className="pd-left-44px border-left---neutral-400-2px height-100"
              >
                <img 
                  src={service.icon} 
                  loading="eager" 
                  alt={`${service.title} - UnityLend`} 
                  className="mg-bottom-48px" 
                />
                <h3 className="display-4 mg-bottom-12px">{service.title}</h3>
                <p className="color-neutral-700 mg-bottom-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
