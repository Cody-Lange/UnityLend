import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="section bg-neutral-200 position-relative---z-index-1">
      <div className="container-default w-container">
        <div 
          data-w-id="9a8e1854-90ee-29d4-bb8f-e756c675cc02" 
          style={{ opacity: 1 }} 
          className="inner-container _44 _100-mbl"
        >
          <div className="inner-container _504px">
            <h2 className="display-2 mg-bottom-24px">
              Discover the mission and story behind our company
            </h2>
          </div>
          <div className="inner-container _540px">
            <div className="pd-left-40px pd-left-24px-mbl border-left---neutral-800-2px">
              <p className="color-neutral-700 mg-bottom-32px">Fuck Bitches</p>
            </div>
            <div className="pd-left-40px pd-left-24px-mbl border-left---neutral-800-2px">
              <p className="color-neutral-700 mg-bottom-48px">Get Moneyyy</p>
            </div>
            <a href="/about" className="btn-primary w-button">About us</a>
          </div>
        </div>
        <div 
          data-w-id="b23e22df-afe7-e486-cf95-66c2f16a262f" 
          style={{ opacity: 1 }} 
          className="full-width-image-right---image-container"
        >
          <img 
            src="/images/BlackBroBot.png" 
            loading="eager" 
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" 
            alt="The Black BroBot - Frat Boy Financial Mascot" 
            className="full-width-image-right---image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
