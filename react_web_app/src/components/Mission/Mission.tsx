import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { usePageLoad } from '../../hooks/usePageLoad';

const Mission: React.FC = () => {
  const loaded = usePageLoad(100);
  
  // Match template animation style
  const contentRef = useScrollAnimation({ 
    delay: 0,
    distance: '10%',
    duration: 800
  });
  
  const imageRef = useScrollAnimation({ 
    delay: 200,
    distance: '10%',
    duration: 800
  });
  
  return (
    <div className={`section bg-neutral-200 position-relative---z-index-1 ${loaded ? 'section-loaded' : ''}`}>
      <div className="container-default w-container">
        <div 
          ref={contentRef}
          data-w-id="9a8e1854-90ee-29d4-bb8f-e756c675cc02" 
          className="inner-container _44 _100-mbl"
          style={{ maxWidth: '100%', width: '100%' }}
        >
          <div className="inner-container _504px">
            <h2 className="display-2 mg-bottom-24px">
              Discover the mission and story behind our company
            </h2>
          </div>
          <div className="inner-container _540px">
            <div className="pd-left-40px pd-left-24px-mbl border-left---neutral-800-2px">
              <p className="color-neutral-700 mg-bottom-32px">
                Fuck Bitches
              </p>
            </div>
            <div className="pd-left-40px pd-left-24px-mbl border-left---neutral-800-2px">
              <p className="color-neutral-700 mg-bottom-48px">
                Get Moneyyy
              </p>
            </div>
            <a href="/about" className="btn-primary w-button">About us</a>
          </div>
        </div>
        <div 
          ref={imageRef}
          data-w-id="b23e22df-afe7-e486-cf95-66c2f16a262f" 
          className="full-width-image-right---image-container"
        >
          <img 
            src="/images/the-mission-behind-our-company-image-bankly-webflow-ecommerce-template.jpg" 
            loading="eager" 
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" 
            srcSet="/images/the-mission-behind-our-company-image-bankly-webflow-ecommerce-template-p-500.jpeg 500w, /images/the-mission-behind-our-company-image-bankly-webflow-ecommerce-template-p-800.jpeg 800w, /images/the-mission-behind-our-company-image-bankly-webflow-ecommerce-template-p-1080.jpeg 1080w, /images/the-mission-behind-our-company-image-bankly-webflow-ecommerce-template.jpg 1468w" 
            alt="The Mission Behind Our Company - Frat Boy Financial" 
            className="full-width-image-right---image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
