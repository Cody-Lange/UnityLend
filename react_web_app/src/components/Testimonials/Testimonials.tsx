import React, { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { usePageLoad } from '../../hooks/usePageLoad';

const Testimonials: React.FC = () => {
  const loaded = usePageLoad(100);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Add scroll animations for the testimonials section
  const titleRef = useScrollAnimation<HTMLDivElement>({
    distance: '80px',
    duration: 1800,
    delay: 100,
    threshold: 0.2
  });
  
  const buttonRef = useScrollAnimation<HTMLDivElement>({
    distance: '80px', 
    duration: 1800,
    delay: 200,
    threshold: 0.2
  });
  
  const sliderContainerRef = useScrollAnimation<HTMLDivElement>({
    distance: '100px',
    duration: 2000,
    delay: 300,
    threshold: 0.15
  });

  const testimonials = [
    {
      quote: "Working with BroBot & the boys has been amazing. Their team is always willing to make the extra effort to help us",
      name: "John Carter",
      title: "Head of finance at Company",
      avatar: "/images/john-carter-testimonial-avatar-v2-bankly-webflow-ecommerce-template.jpg"
    },
    {
      quote: "I see why Chody's girlfriend left him.",
      name: "Sophie Moore", 
      title: "Finance Lead at Agency",
      avatar: "/images/sophie-moore-testimonial-avatar-v2-bankly-webflow-ecommerce-template.jpg"
    },
    {
      quote: "Our experience with Frat Boy Financial has been outstanding. Their banking service is like no other, and that is a game changer",
      name: "Samantha Woods",
      title: "VP of Finance at Venture", 
      avatar: "/images/samantha-woods-testimonial-avatar-v2-bankly-webflow-ecommerce-template.jpg"
    },
    {
      quote: "Don't think it twice. If you are researching multiple banks, stay with Frat Boy Financial. I am 100% sure you won't regret it",
      name: "Mike Richards",
      title: "Finance Lead at Startup",
      avatar: "/images/mike-richards-testimonial-avatar-v2-bankly-webflow-ecommerce-template.jpg"
    }
  ];

  useEffect(() => {
    // Ensure slider is visible and functional
    const initSlider = () => {
      const sliderElement = sliderContainerRef.current;
      if (sliderElement) {
        // Make sure slider is visible
        sliderElement.style.opacity = '1';
        sliderElement.style.display = 'block';
        
        // Initialize Webflow if available
        if (typeof window !== 'undefined' && window.Webflow) {
          try {
            window.Webflow.destroy();
            window.Webflow.ready();
          } catch (error) {
            console.log('Webflow initialization note:', error);
          }
        }
      }
    };

    // Initialize immediately and with delay
    initSlider();
    const timer = setTimeout(initSlider, 200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`section overflow-hidden ${loaded ? 'section-loaded' : ''}`}>
      <div className="container-default w-container">
        <div className="grid-2-columns mg-bottom-72px">
          <div 
            ref={titleRef}
            id="w-node-ff664468-fd21-5739-d96b-67abe2af78f7-89416502" 
            data-w-id="ff664468-fd21-5739-d96b-67abe2af78f7" 
            className="inner-container _424px"
          >
            <div 
              id="w-node-e85dd3d8-d7d1-34ec-5d9a-cbe27bb6b57e-89416502" 
              className="pd-left-44px border-left---neutral-800-2px"
            >
              <h2 className="display-2 mg-bottom-0">What our customers say</h2>
            </div>
          </div>
          <div 
            ref={buttonRef}
            id="w-node-fa3a8b18-cf09-984f-cf05-354b94eb8094-89416502" 
            data-w-id="fa3a8b18-cf09-984f-cf05-354b94eb8094" 
            className="mg-bottom-16px mg-bottom-0-mbl"
          >
            <a href="/about" className="btn-primary w-button">About us</a>
          </div>
        </div>
        
        <div 
          ref={sliderContainerRef}
          data-delay="4000" 
          data-animation="slide" 
          className="slider-wrapper arrows-bottom-edge w-slider" 
          data-autoplay="false" 
          data-easing="ease" 
          style={{ 
            opacity: 1, 
            display: 'block',
            width: '100%',
            minHeight: '500px'
          }} 
          data-hide-arrows="false" 
          data-disable-swipe="false" 
          data-w-id="8e3ae610-6521-8b2e-f031-0af9646c6422" 
          data-autoplay-limit="0" 
          data-nav-spacing="3" 
          data-duration="500" 
          data-infinite="true"
        >
          <div className="divider testimonials-v2-slider-divider"></div>
          <div className="slider-mask width-728px w-slider-mask">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="slide-item-mg w-slide">
                <div 
                  className="card testimonials-v2"
                  style={{ 
                    minHeight: '420px', 
                    height: '420px',
                    display: 'grid',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div 
                    id={`w-node-_${index === 0 ? '4464a199-a8dc-1a0b-4c1d-c6fdc20d83e7' : 
                             index === 1 ? 'b1c66d76-5c93-afad-9c49-38da7338c4e0' :
                             index === 2 ? '5eb0d191-53ea-b044-364c-91a2811fb585' :
                             '62520c79-895d-d389-9792-be7956d29aef'}-89416502`} 
                    className="inner-container _64px-mbp"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <img 
                      src={testimonial.avatar} 
                      loading="eager" 
                      alt={`${testimonial.name} - Frat Boy Financial`} 
                      className="avatar-circle" 
                    />
                  </div>
                  <div 
                    id={`w-node-_${index === 0 ? '6823cdde-90aa-aca4-d1b3-06133f6c6afa' :
                             index === 1 ? 'b1c66d76-5c93-afad-9c49-38da7338c4e2' :
                             index === 2 ? '5eb0d191-53ea-b044-364c-91a2811fb587' :
                             '62520c79-895d-d389-9792-be7956d29af1'}-89416502`}
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between',
                      height: '100%'
                    }}
                  >
                    <div 
                      className="display-3 color-neutral-100 mg-bottom-72px"
                      style={{ 
                        textAlign: 'left', 
                        alignSelf: 'flex-start',
                        minHeight: '180px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        flex: '1'
                      }}
                    >
                      "{testimonial.quote}"
                      {index === 1 && (<><br /><br /></>)}
                    </div>
                    <div 
                      className="pd-left-32px pd-left-24px-mbp border-left---white-2px"
                      style={{ 
                        alignSelf: 'flex-start',
                        marginTop: 'auto'
                      }}
                    >
                      <div className="color-neutral-100 mg-bottom-12px">
                        <div className="text-200 bold text-uppercase">{testimonial.name}</div>
                      </div>
                      <div className="text-200 medium text-uppercase">
                        <span className="color-neutral-400 letter-spacing-12em">{testimonial.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div 
            className="slider-arrow bottom-edge---left-arrow w-slider-arrow-left"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: 'var(--neutral--800)',
              border: '1px solid var(--neutral--600)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              fontSize: '24px',
              color: 'white'
            }}
          >
            <div className="line-square-icon slider-arrow-icon">‹</div>
          </div>
          <div 
            className="slider-arrow bottom-edge---right-arrow w-slider-arrow-right"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: 'var(--neutral--800)',
              border: '1px solid var(--neutral--600)',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              fontSize: '24px',
              color: 'white'
            }}
          >
            <div className="line-square-icon slider-arrow-icon">›</div>
          </div>
          <div className="hidden-on-desktop w-slider-nav w-round"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
