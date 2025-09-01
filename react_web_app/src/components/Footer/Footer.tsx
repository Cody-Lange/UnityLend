import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const pageLinks = [
    { href: '/', text: 'Home v2', current: true },
    { href: '/about', text: 'About' },
    { href: '/features', text: 'Features' },
    { href: '/careers', text: 'Careers' },
    { href: '/demo', text: 'Schedule a Demo' },
    { href: '/blog', text: 'Blog' },
    { href: '/team', text: 'Team' },
    { href: '/help', text: 'Help Center' }
  ];

  const contactLinks = [
    { href: '/contact', text: 'Contact' },
    { href: '/pricing', text: 'Pricing' }
  ];

  const utilityLinks = [
    { href: '/coming-soon', text: 'Coming Soon' },
    { href: '/sign-in', text: 'Sign In' },
    { href: '/sign-up', text: 'Sign Up' },
    { href: '/forgot-password', text: 'Forgot Password' },
    { href: '/terms', text: 'Terms & Conditions' }
  ];

  const templateLinks = [
    { href: '/codys-radical-site-e0e90d.webflow/template-pages/start-here.html', text: 'Start Here' },
    { href: '/codys-radical-site-e0e90d.webflow/template-pages/style-guide.html', text: 'Style Guide' },
    { href: '/404', text: '404 Not Found' },
    { href: '/codys-radical-site-e0e90d.webflow/template-pages/licenses.html', text: 'Licenses' },
    { href: '/codys-radical-site-e0e90d.webflow/template-pages/changelog.html', text: 'Changelog' }
  ];

  const socialLinks = [
    { href: 'https://facebook.com/', icon: 'facebook' },
    { href: 'https://twitter.com/', icon: 'twitter' },
    { href: 'https://www.instagram.com/', icon: 'instagram' },
    { href: 'https://www.linkedin.com/', icon: 'linkedin' },
    { href: 'https://www.youtube.com/', icon: 'youtube' }
  ];

  return (
    <div className="footer-section">
      <div className="container-default w-container">
        <div className="grid-2-columns _1-col-tablet">
          <div id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f7cc-cf77f7c9" className="hidden-on-desktop show-on-tablet mg-bottom-64px-tablet">
            <a id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f7cd-cf77f7c9" href="/" className="footer-logo-wrapper w-inline-block">
              <div style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: 'white',
                fontFamily: 'Onest, sans-serif'
              }}>
                Frat Boy Financial 🍻
              </div>
            </a>
            <div className="pd-left-32px pd-left-24px-mbp border-left---white-2px">
              <p className="color-neutral-300 mg-bottom-32px">
                Why settle for boring banks when you can party with your money? We're the financial bros who actually know how to have a good time while keeping your cash safe. No suits required.
              </p>
              <div className="w-layout-grid social-media-grid-top">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.icon}
                    data-w-id={`9a042dcd-8c2c-a0af-5e12-caedcf77f7${['d3', 'd6', 'd9', 'dc', 'df'][index]}`}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon-square white sibling-opacity-item w-inline-block"
                  >
                    <div className="social-icon-font"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f7e2-cf77f7c9" className="inner-container _566px _100-tablet">
            <div data-w-id="9a042dcd-8c2c-a0af-5e12-caedcf77f7e3" className="mg-bottom-64px hidden-on-tablet">
              <a id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f7e4-cf77f7c9" href="/" className="footer-logo-wrapper w-inline-block">
                <div style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: 'white',
                  fontFamily: 'Onest, sans-serif'
                }}>
                  Frat Boy Financial 🍻
                </div>
              </a>
              <div className="pd-left-32px pd-left-24px-mbl border-left---white-2px">
                <p className="color-neutral-300 mg-bottom-32px">
                  Banking should be fun, not a chore. We're here to make your financial life as legendary as your weekend stories. Bros helping bros get financially swole 💪
                </p>
                <div className="w-layout-grid social-media-grid-top">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={social.icon}
                      data-w-id={`9a042dcd-8c2c-a0af-5e12-caedcf77f7${['ea', 'ed', 'f0', 'f3', 'f6'][index]}`}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon-square white sibling-opacity-item w-inline-block"
                    >
                      <div className="social-icon-font"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div data-w-id="9a042dcd-8c2c-a0af-5e12-caedcf77f7f9" className="card footer-newsletter-card">
              <div className="text-uppercase letter-spacing-12em mg-bottom-12px">
                <div className="text-200 medium color-neutral-100">Subscribe to our newsletter</div>
              </div>
              <p className="color-neutral-300 mg-bottom-24px">
                Get exclusive updates on our latest beer-money saving tips, financial life hacks, and maybe some party invites. We promise not to spam you more than your group chat.
              </p>
              <div className="mg-bottom-0 w-form">
                <form 
                  id="wf-form-Footer-Subscribe" 
                  name="wf-form-Footer-Subscribe" 
                  data-name="Footer Subscribe" 
                  onSubmit={handleSubmit}
                  data-wf-page-id="6896d097fd30b08089416502" 
                  data-wf-element-id="9a042dcd-8c2c-a0af-5e12-caedcf77f800"
                >
                  <div id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f801-cf77f7c9" className="position-relative">
                    <input 
                      className="input input-text-uppercase w-input" 
                      maxLength={256} 
                      name="Email" 
                      data-name="Email" 
                      placeholder="your.email@bro.com" 
                      type="email" 
                      id="Email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                    <input 
                      type="submit" 
                      data-wait="" 
                      id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f803-cf77f7c9" 
                      className="footer-newsletter-button w-button" 
                      value="" 
                    />
                  </div>
                </form>
                
                {isSubmitted && (
                  <div className="footer-newsletter-success-message w-form-done">
                    <div className="footer-newsletter-inner-success-message">
                      <div className="line-square-icon success-message-icon color-neutral-100"></div>
                      <div className="text-100 text-uppercase">Thanks for joining our newsletter</div>
                    </div>
                  </div>
                )}
                
                <div className="error-message w-form-fail" style={{ display: 'none' }}>
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            
            <div data-w-id="9a042dcd-8c2c-a0af-5e12-caedcf77f80d" className="color-neutral-300 mg-top-auto text-center-tablet">
              Copyright © Frat Boy Financial 🍻
            </div>
          </div>
          
          <div id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f814-cf77f7c9">
            <div data-w-id="9a042dcd-8c2c-a0af-5e12-caedcf77f815" className="mg-bottom-80px">
              <div className="text-200 footer-title">Pages</div>
              <div className="grid-3-columns footer-pages-grid">
                <ul id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f819-cf77f7c9" role="list" className="footer-list-wrapper">
                  {pageLinks.slice(0, 5).map((link, index) => (
                    <li key={link.href} className="footer-list-item">
                      <a 
                        data-w-id={`9a042dcd-8c2c-a0af-5e12-caedcf77f8${['1e', '24', '27', '2a', '30'][index]}`}
                        href={link.href} 
                        className={`footer-link${link.current ? ' w--current' : ''}`}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f832-cf77f7c9" role="list" className="footer-list-wrapper">
                  {pageLinks.slice(5).concat(contactLinks.slice(0, 1)).map((link, index) => (
                    <li key={link.href} className="footer-list-item">
                      <a 
                        data-w-id={`9a042dcd-8c2c-a0af-5e12-caedcf77f8${['34', '40', '46'][index]}`}
                        href={link.href} 
                        className="footer-link"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f848-cf77f7c9" role="list" className="footer-list-wrapper">
                  {contactLinks.concat(utilityLinks.slice(0, 1)).map((link, index) => (
                    <li key={link.href} className="footer-list-item">
                      <a 
                        data-w-id={`9a042dcd-8c2c-a0af-5e12-caedcf77f8${['4a', '53'][index]}`}
                        href={link.href} 
                        className="footer-link"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div data-w-id="9a042dcd-8c2c-a0af-5e12-caedcf77f85e" className="grid-2-columns footer-bottom-pages-grid">
              <div id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f85f-cf77f7c9">
                <div className="text-200 footer-title">Utility Pages</div>
                <ul id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f862-cf77f7c9" role="list" className="footer-list-wrapper">
                  {utilityLinks.map((link, index) => (
                    <li key={link.href} className="footer-list-item">
                      <a 
                        data-w-id={`9a042dcd-8c2c-a0af-5e12-caedcf77f8${['64', '67', '6a', '6d', '73'][index]}`}
                        href={link.href} 
                        className="footer-link"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f875-cf77f7c9">
                <div className="text-200 footer-title">Template Pages</div>
                <ul id="w-node-_9a042dcd-8c2c-a0af-5e12-caedcf77f878-cf77f7c9" role="list" className="footer-list-wrapper">
                  {templateLinks.map((link, index) => (
                    <li key={link.href} className="footer-list-item">
                      <a 
                        data-w-id={`9a042dcd-8c2c-a0af-5e12-caedcf77f8${['7a', '7d', '83', '86', '89'][index]}`}
                        href={link.href} 
                        className="footer-link"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
