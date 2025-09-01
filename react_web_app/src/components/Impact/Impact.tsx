import React from 'react';

const Impact: React.FC = () => {
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
    <div className="section">
      <div className="container-default w-container">
        <div className="grid-2-columns _1fr---2fr gap-row-64px">
          <div 
            id="w-node-_913830aa-210a-eb51-64fe-58858245ab14-89416502" 
            data-w-id="913830aa-210a-eb51-64fe-58858245ab14" 
            style={{ opacity: 1 }} 
            className="sticky-top static-mbl"
          >
            <h2 className="display-2 mg-bottom-32px">Our impact in numbers</h2>
            <a href="/pricing" className="btn-primary w-button">Get started</a>
          </div>
          <div 
            id="w-node-_034ef10e-7869-eab5-14a2-95716693e039-89416502" 
            data-w-id="034ef10e-7869-eab5-14a2-95716693e039" 
            style={{ opacity: 1 }} 
            className="grid-2-columns gap-row-110px gap-row-40px-mbl"
          >
            {stats.map((stat) => (
              <div key={stat.id} id={`w-node-${stat.id}-89416502`}>
                <div className="flex align-end mg-bottom-8px">
                  <div className="font-size-124px color-neutral-800">{stat.number}</div>
                  <div className="mg-bottom-12px mg-bottom-6px-mbl mg-bottom-2px-mbp">
                    <div className="display-2 color-neutral-600 mg-left-12px">{stat.suffix}</div>
                  </div>
                </div>
                <h3 className="display-3">{stat.title}</h3>
                <div 
                  id={`w-node-_${stat.id === "b5f8e478-4a72-02b0-e9b2-f04b051811b7" ? "6a1e7395-f2dc-a52c-51e7-81a9d7ce6790" :
                        stat.id === "42d90276-de6b-2222-cf90-894f443c7aaf" ? "e8ee52da-bbc6-fcf4-b9d7-8359d75bcd38" :
                        stat.id === "fd5b2335-5317-2cbb-ce06-71efe5cb790a" ? "d348b6bb-5ff1-7311-4712-c5f78ab2c198" :
                        "c34cc4ac-83c5-f1ea-780e-54450a6bbd60"}-89416502`} 
                  className="inner-container _352px _100-mbl"
                >
                  <p className="color-neutral-700 mg-bottom-0">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
