import React, { useState } from 'react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const tabs = [
    {
      id: 'Tab 1',
      title: 'Innovation',
      description: 'We\'re constantly cooking up new ways to make your money work harder than you do at beer pong. From AI-powered spending insights to instant transfers faster than your Venmo requests, we innovate like we party - with passion and results.',
      image: '/images/innovation-tab-image-bankly-webflow-ecommerce-template.jpg',
      srcSet: '/images/innovation-tab-image-bankly-webflow-ecommerce-template-p-500.jpeg 500w, /images/innovation-tab-image-bankly-webflow-ecommerce-template-p-800.jpeg 800w, /images/innovation-tab-image-bankly-webflow-ecommerce-template-p-1080.jpeg 1080w, /images/innovation-tab-image-bankly-webflow-ecommerce-template.jpg 1228w'
    },
    {
      id: 'Tab 2', 
      title: 'Technology',
      description: 'Our tech stack is more solid than your pre-game playlist. Mobile-first banking that actually works, biometric security smoother than your pickup lines, and APIs that connect faster than you swipe right.',
      image: '/images/technology-tab-image-bankly-webflow-ecommerce-template.jpg',
      srcSet: '/images/technology-tab-image-bankly-webflow-ecommerce-template-p-500.jpeg 500w, /images/technology-tab-image-bankly-webflow-ecommerce-template-p-800.jpeg 800w, /images/technology-tab-image-bankly-webflow-ecommerce-template-p-1080.jpeg 1080w, /images/technology-tab-image-bankly-webflow-ecommerce-template.jpg 1228w'
    },
    {
      id: 'Tab 3',
      title: 'Security', 
      description: 'We protect your money better than you protect your phone at a house party. Bank-grade encryption, fraud monitoring that never sleeps, and security protocols tighter than your crew\'s loyalty.',
      image: '/images/security-tab-image-bankly-webflow-ecommerce-template.jpg',
      srcSet: '/images/security-tab-image-bankly-webflow-ecommerce-template-p-500.jpeg 500w, /images/security-tab-image-bankly-webflow-ecommerce-template-p-800.jpeg 800w, /images/security-tab-image-bankly-webflow-ecommerce-template-p-1080.jpeg 1080w, /images/security-tab-image-bankly-webflow-ecommerce-template.jpg 1228w'
    }
  ];

  return (
    <div className="section bg-neutral-200">
      <div className="container-default w-container">
        <div className="grid-2-columns gap-row-16px mg-bottom-48px">
          <h2 
            id="w-node-_42f45d1a-fbbc-dc2b-12d1-d744b720c1f1-89416502" 
            data-w-id="42f45d1a-fbbc-dc2b-12d1-d744b720c1f1" 
            style={{ opacity: 1 }} 
            className="display-2 mg-bottom-0"
          >
            Why we're the sickest financial bros in the game?
          </h2>
          <div 
            id="w-node-_3b65bd0a-c6b9-4245-efe8-bf0e680c2544-89416502" 
            data-w-id="3b65bd0a-c6b9-4245-efe8-bf0e680c2544" 
            style={{ opacity: 1 }} 
            className="inner-container _500px _100-mbl"
          >
            <p className="color-neutral-700 mg-bottom-0">
              We're not your dad's stuffy bank with ties and boring meetings. We're the financial bros who actually get it - making money moves while keeping things real, fun, and profitable for everyone in the crew.
            </p>
          </div>
        </div>
        
        <div data-current={activeTab} data-easing="ease" data-duration-in="300" data-duration-out="100" className="grid-2-columns w-tabs">
          <div 
            id="w-node-a397360f-d083-4066-5604-2abfb570f7aa-89416502" 
            data-w-id="a397360f-d083-4066-5604-2abfb570f7aa" 
            style={{ opacity: 1 }} 
            className="inner-container _550px w-tab-menu"
          >
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                type="button"
                data-w-tab={tab.id} 
                data-w-id={`a397360f-d083-4066-5604-2abfb570f7${tab.id === 'Tab 1' ? 'ab' : tab.id === 'Tab 2' ? 'b7' : 'c3'}`}
                className={`tab-menu-large sibling-opacity-item w-inline-block w-tab-link${activeTab === tab.id ? ' w--current' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id);
                }}
                style={{ border: 'none', background: 'none', padding: 0, width: '100%', textAlign: 'left' }}
              >
                <div className="accordion-item-wrapper tab-menu-item">
                  <div className="accordion-content-wrapper v2">
                    <div className="accordion-header">
                      <h3 className={`accordion-title display-3${activeTab !== tab.id ? ' color-neutral-600' : ''}`}>
                        {tab.title}
                      </h3>
                      <div className="line-square-icon tab-menu-icon"></div>
                    </div>
                    <div 
                      style={{
                        height: activeTab === tab.id ? 'auto' : '0px',
                        WebkitTransform: activeTab === tab.id ? 'translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' : 'translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        MozTransform: activeTab === tab.id ? 'translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' : 'translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        msTransform: activeTab === tab.id ? 'translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' : 'translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        transform: activeTab === tab.id ? 'translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' : 'translate3d(null, 20px, 0) scale3d(0.96, 0.96, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
                        opacity: activeTab === tab.id ? 1 : 0
                      }} 
                      className="acordion-body"
                    >
                      {activeTab === tab.id && (
                        <>
                          <div className="accordion-spacer"></div>
                          <p className="color-neutral-700 mg-bottom-0">{tab.description}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <div 
            id="w-node-a397360f-d083-4066-5604-2abfb570f7cf-89416502" 
            data-w-id="a397360f-d083-4066-5604-2abfb570f7cf" 
            style={{ opacity: 1 }} 
            className="inner-container _614px w-tab-content"
          >
            {tabs.map((tab) => (
              <div 
                key={tab.id}
                data-w-tab={tab.id} 
                className={`w-tab-pane${activeTab === tab.id ? ' w--tab-active' : ''}`}
                style={{ display: activeTab === tab.id ? 'block' : 'none' }}
              >
                <img 
                  src={tab.image} 
                  loading="eager" 
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" 
                  srcSet={tab.srcSet}
                  alt={`${tab.title} - UnityLend`} 
                  className="border-radius-40px" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
