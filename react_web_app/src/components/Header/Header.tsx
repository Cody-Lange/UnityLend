import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div 
      data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc37" 
      data-animation="default" 
      data-collapse="medium" 
      data-duration="400" 
      data-easing="ease" 
      data-easing2="ease" 
      role="banner" 
      className="header-wrapper w-nav"
    >
      <div className="container-default w-container">
        <div className="header-content-wrapper">
          <a href="/" className="header-logo-link w-nav-brand">
            <div style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: 'white',
              fontFamily: 'Onest, sans-serif'
            }}>
              Frat Boy Financial 🍻
            </div>
          </a>
          
          <div className="header-middle">
            <nav role="navigation" className="header-nav-menu-wrapper w-nav-menu">
              <ul className="header-nav-menu-list">
                <li data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc3f" className="header-nav-list-item middle sibling-opacity-item">
                  <a href="/" className="header-nav-link w-nav-link">Home</a>
                </li>
                <li data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc42" className="header-nav-list-item middle sibling-opacity-item">
                  <a href="/about" className="header-nav-link w-nav-link">About</a>
                </li>
                <li data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc45" className="header-nav-list-item middle sibling-opacity-item">
                  <a href="/blog" className="header-nav-link w-nav-link">Blog</a>
                </li>
                <li data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc48" className="header-nav-list-item middle sibling-opacity-item">
                  <div data-hover="true" data-delay="0" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc49" className="dropdown-wrapper w-dropdown">
                    <div className="dropdown-toggle header-dropdown w-dropdown-toggle">
                      <div className="dopdown-text">Pages</div>
                      <div className="line-square-icon dropdown-arrow"></div>
                    </div>
                    <nav className="dropdown-column-wrapper w-dropdown-list">
                      <div className="dropdown-pd pd-48px">
                        <div className="w-layout-grid grid-2-columns dropdown-main-grid">
                          <div id="w-node-_48b0a8d6-09fb-cd59-bc0c-cf409ba3cc52-9ba3cc37">
                            <div className="text-200 bold color-neutral-800 mg-bottom-24px">Pages</div>
                            <div className="grid-3-columns dropdown-pages-grid">
                              <div id="w-node-_48b0a8d6-09fb-cd59-bc0c-cf409ba3cc56-9ba3cc37" className="w-layout-grid grid-1-column dropdown-link-column">
                                <a href="/" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc59" className="dropdown-link w-dropdown-link">Home V2</a>
                                <a href="/about" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc5d" className="dropdown-link w-dropdown-link">About</a>
                                <a href="/features" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc5f" className="dropdown-link w-dropdown-link">Features</a>
                                <a href="/careers" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc61" className="dropdown-link w-dropdown-link">Careers</a>
                                <a href="/demo" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc65" className="dropdown-link w-dropdown-link">Schedule a Demo</a>
                              </div>
                              <div id="w-node-_48b0a8d6-09fb-cd59-bc0c-cf409ba3cc67-9ba3cc37" className="w-layout-grid grid-1-column dropdown-link-column">
                                <a href="/blog" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc68" className="dropdown-link w-dropdown-link">Blog</a>
                                <a href="/team" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc70" className="dropdown-link w-dropdown-link">Team</a>
                                <a href="/help" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc74" className="dropdown-link w-dropdown-link">Help Center</a>
                              </div>
                              <div id="w-node-_48b0a8d6-09fb-cd59-bc0c-cf409ba3cc76-9ba3cc37" className="w-layout-grid grid-1-column dropdown-link-column">
                                <a href="/contact" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc77" className="dropdown-link w-dropdown-link">Contact</a>
                                <a href="/pricing" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc7d" className="dropdown-link w-dropdown-link">Pricing</a>
                              </div>
                            </div>
                          </div>
                          <div id="w-node-_48b0a8d6-09fb-cd59-bc0c-cf409ba3cc85-9ba3cc37">
                            <div className="text-200 bold color-neutral-800 mg-bottom-24px">Utility Pages</div>
                            <div className="w-layout-grid grid-1-column dropdown-link-column">
                              <a href="/coming-soon" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc89" className="dropdown-link w-dropdown-link">Coming Soon</a>
                              <a href="/sign-in" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc8b" className="dropdown-link w-dropdown-link">Sign In</a>
                              <a href="/sign-up" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc8d" className="dropdown-link w-dropdown-link">Sign Up</a>
                              <a href="/forgot-password" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc8f" className="dropdown-link w-dropdown-link">Forgot Password</a>
                              <a href="/terms" data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc93" className="dropdown-link w-dropdown-link">Terms & Conditions</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </li>
                <li data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc95" className="header-nav-list-item middle sibling-opacity-item">
                  <a href="/pricing" className="header-nav-link w-nav-link">Pricing</a>
                </li>
                <li data-w-id="48b0a8d6-09fb-cd59-bc0c-cf409ba3cc98" className="header-nav-list-item show-in-tablet sibling-opacity-item">
                  <a href="/pricing" className="btn-primary small w-button">Get started</a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="header-right-side">
            <div data-node-type="commerce-cart-wrapper" data-open-product="" data-wf-cart-type="modal" data-wf-cart-query="" data-wf-page-link-href-prefix="" className="w-commerce-commercecartwrapper cart-link-container">
              <button 
                type="button"
                onClick={(e) => { e.preventDefault(); setIsCartOpen(!isCartOpen); }}
                data-node-type="commerce-cart-open-link" 
                className="w-commerce-commercecartopenlink cart-button w-inline-block" 
                aria-haspopup="dialog" 
                aria-label="Open cart"
                style={{ border: 'none', background: 'none', padding: 0, display: 'inline-flex', alignItems: 'center' }}
              >
                <div className="w-inline-block">Cart (</div>
                <div className="w-commerce-commercecartopenlinkcount cart-quantity">0</div>
                <div className="w-inline-block">)</div>
              </button>
              
              {isCartOpen && (
                <div data-node-type="commerce-cart-container-wrapper" className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal">
                  <div data-node-type="commerce-cart-container" role="dialog" className="w-commerce-commercecartcontainer cart-container">
                    <div className="w-commerce-commercecartheader cart-header">
                      <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                      <button 
                        type="button"
                        onClick={(e) => { e.preventDefault(); setIsCartOpen(false); }}
                        data-node-type="commerce-cart-close-link" 
                        className="w-commerce-commercecartcloselink w-inline-block" 
                        aria-label="Close cart"
                        style={{ border: 'none', background: 'none', padding: 0 }}
                      >
                        <svg width="16px" height="16px" viewBox="0 0 16 16">
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g fillRule="nonzero" fill="#333333">
                              <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div className="w-commerce-commercecartformwrapper">
                      <div className="w-commerce-commercecartemptystate">
                        <div>No items found.</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="hamburger-menu-wrapper w-nav-button">
              <div className="hamburger-menu-bar top"></div>
              <div className="hamburger-menu-bar bottom"></div>
            </div>
            <a href="/pricing" className="btn-primary small header-btn-hidde-on-mb w-button">Get started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
