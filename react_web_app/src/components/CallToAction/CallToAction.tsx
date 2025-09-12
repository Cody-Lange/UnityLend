import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { usePageLoad } from '../../hooks/usePageLoad';

const CallToAction: React.FC = () => {
  const loaded = usePageLoad(100);
  // Enhanced Aave-style progressive animations
  const titleRef = useScrollAnimation({ 
    delay: 200,
    distance: '120px',
    duration: 2000
  });
  
  const contentRef = useScrollAnimation({ 
    delay: 400,
    distance: '80px',
    duration: 1700
  });
  
  const arrowRef = useScrollAnimation<HTMLAnchorElement>({ 
    delay: 600,
    distance: '60px',
    duration: 1500
  });
  
  return (
    <div className={`section bg-neutral-800 border-radius-top-left-80px ${loaded ? 'section-loaded' : ''}`}>
      <div className="container-default w-container">
        <div 
          ref={titleRef}
          data-w-id="9d106ed5-9396-75db-012e-01d0eb2e003a" 
          className="inner-container _1034px"
        >
          <h2 className="display-1 color-neutral-100 mg-bottom-32px">
            Join the Frat Boy Financial revolution and start lending like a legend 🚀
          </h2>
        </div>
        <div className="grid-2-columns _3fr---1fr _2-col-mbl">
          <div 
            ref={contentRef}
            id="w-node-b22dd457-99d5-c35d-13bb-2102357301df-89416502" 
            data-w-id="b22dd457-99d5-c35d-13bb-2102357301df" 
            className="inner-container _500px"
          >
            <p className="color-neutral-300 mg-bottom-0">
              Experience the future of AI-driven DeFi lending with BlackBroBot technology. Fair rates, instant approvals, and maximum returns for the brotherhood.
            </p>
          </div>
          <a 
            ref={arrowRef}
            id="w-node-ce3ad918-027d-637a-180a-0f005d01e051-89416502" 
            data-w-id="ce3ad918-027d-637a-180a-0f005d01e051" 
            href="/sign-up" 
            className="arrow-link-large-wrapper w-inline-block"
          >
            <div>→</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
