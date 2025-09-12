import React from 'react';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import { useCountingAnimation } from '../../hooks/useCountingAnimation';
import { usePageLoad } from '../../hooks/usePageLoad';

// Counter component for each stat
const StatCounter: React.FC<{ 
  number: string; 
  suffix: string; 
  title: string; 
  description: string;
  delay?: number;
}> = ({ number, suffix, title, description, delay = 0 }) => {
  const numericValue = parseInt(number);
  const { elementRef, displayValue } = useCountingAnimation({
    endValue: numericValue,
    duration: 1200, // Faster counting - a smidge faster
    delay: delay,
    suffix: suffix
  });

  return (
    <div ref={elementRef} data-animate>
      <div className="flex align-end mg-bottom-8px">
        <div className="font-size-124px color-neutral-800">
          {displayValue.replace(suffix, '')}
        </div>
        <div className="mg-bottom-12px mg-bottom-6px-mbl mg-bottom-2px-mbp">
          <div className="display-2 color-neutral-600 mg-left-12px">{suffix}</div>
        </div>
      </div>
      <h3 className="display-3">{title}</h3>
      <div className="inner-container _352px _100-mbl">
        <p className="color-neutral-700 mg-bottom-0">{description}</p>
      </div>
    </div>
  );
};

const Impact: React.FC = () => {
  const loaded = usePageLoad(100);
  
  // Enhanced Aave-style animations with dramatic timing
  const titleRef = useScrollAnimation({ 
    delay: 200,
    distance: '100px',
    duration: 1800
  });
  
  const statsContainerRef = useStaggerAnimation(200, {
    threshold: 0.3, // Start earlier when 30% visible
    rootMargin: '100px 0px 0px 0px' // Start counting when container is 100px above viewport
  });
  
  const stats = [
    {
      id: "b5f8e478-4a72-02b0-e9b2-f04b051811b7",
      number: "300",
      suffix: "K", 
      title: "Beers Crushed",
      description: "*BURP*"
    },
    {
      id: "42d90276-de6b-2222-cf90-894f443c7aaf",
      number: "99",
      suffix: "%",
      title: "White Staff Members", 
      description: "We're all about equality dude."
    },
    {
      id: "fd5b2335-5317-2cbb-ce06-71efe5cb790a",
      number: "76",
      suffix: "%",
      title: "Yearly growth",
      description: "THE CHART GOES UP & TO THE RIGHT"
    },
    {
      id: "a8d1591a-7cc5-bc77-0cf7-b3a083f91592", 
      number: "250",
      suffix: "B",
      title: "Times we Played Mr. Brightside",
      description: "JEALOUSYYY TURNING SAINTS INTOOO THE SEA"
    }
  ];

  return (
    <div className={`section ${loaded ? 'section-loaded' : ''}`}>
      <div className="container-default w-container">
        <div className="grid-2-columns _1fr---2fr gap-row-64px">
          <div 
            ref={titleRef}
            id="w-node-_913830aa-210a-eb51-64fe-58858245ab14-89416502" 
            data-w-id="913830aa-210a-eb51-64fe-58858245ab14" 
            className="sticky-top static-mbl"
          >
            <h2 className="display-2 mg-bottom-32px">Our impact in numbers</h2>
            <a href="/pricing" className="btn-primary w-button">Get started</a>
          </div>
          <div 
            ref={statsContainerRef}
            id="w-node-_034ef10e-7869-eab5-14a2-95716693e039-89416502" 
            data-w-id="034ef10e-7869-eab5-14a2-95716693e039" 
            className="grid-2-columns gap-row-110px gap-row-40px-mbl"
          >
            {stats.map((stat, index) => (
              <StatCounter
                key={stat.id}
                number={stat.number}
                suffix={stat.suffix}
                title={stat.title}
                description={stat.description}
                delay={index * 300}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
