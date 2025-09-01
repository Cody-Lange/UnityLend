import React from 'react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      id: "01",
      title: "DEEP FUCKING VALUE",
      description: "Whatever your banking needs are, take advantage of our lower interest rates."
    },
    {
      id: "02", 
      title: "Easier than Delta Zeta bitches",
      description: "Crack open a cold one and take out a loan in few steps. Ignore all that AI crypto technical stuff."
    },
    {
      id: "03",
      title: "Brothers gotchu covered", 
      description: "Who do you know here? 24/7 account monitoring and routine audits keep the vibes high."
    },
    {
      id: "04",
      title: "Brothers from all walks of life",
      description: "By bringing affordable rates to the masses, the boys are banking the unbanked"
    }
  ];

  return (
    <div className="section pd-bottom-180px">
      <div className="container-default w-container">
        <div className="grid-2-columns _1-col-tablet gap-row-64px">
          <div 
            id="w-node-_7dd9de35-5a11-3324-1e4f-fd4aeafd7862-89416502" 
            data-w-id="7dd9de35-5a11-3324-1e4f-fd4aeafd7862" 
            style={{ opacity: 0 }} 
            className="inner-container _564px _100-tablet"
          >
            <div className="flex height-100">
              <img 
                src="/images/what-makes-us-stand-out-image-bankly-webflow-ecommerce-template.jpg" 
                loading="eager" 
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" 
                srcSet="/images/what-makes-us-stand-out-image-bankly-webflow-ecommerce-template-p-500.jpeg 500w, /images/what-makes-us-stand-out-image-bankly-webflow-ecommerce-template-p-800.jpeg 800w, /images/what-makes-us-stand-out-image-bankly-webflow-ecommerce-template.jpg 1128w" 
                alt="What Makes Us Stand Out - UnityLend" 
                className="border-radius-40px fit-cover" 
              />
            </div>
          </div>
          <div 
            id="w-node-_76912a52-420a-6399-95d3-44a90c1ae63b-89416502" 
            data-w-id="76912a52-420a-6399-95d3-44a90c1ae63b" 
            style={{ opacity: 0 }}
          >
            <div className="inner-container _568px _100-tablet">
              <h2 className="display-2 mg-bottom-32px">Why rush Frat Boy Financial?</h2>
            </div>
            <div className="grid-2-columns gap-row-56px _2-col-mbl">
              {reasons.map((reason, index) => (
                <div 
                  key={reason.id}
                  id={`w-node-${index === 0 ? 'e9c58b8f-09c6-b254-23e3-1e0adbe2094f' : 
                         index === 1 ? '39b1ecd2-b371-a814-2955-52cb6f65e9dd' :
                         index === 2 ? '11fbd28e-b7ad-1864-66b0-16439224bc65' : 
                         'f27d5ffc-bf8d-2aec-be37-3607ab0dc37b'}-89416502`} 
                  className="inner-container _264px _100-mbp"
                >
                  <div className="heading-h4-size mg-bottom-12px">{reason.id}</div>
                  <h3 className="display-3 mg-bottom-12px">{reason.title}</h3>
                  <div className="color-neutral-700">{reason.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
