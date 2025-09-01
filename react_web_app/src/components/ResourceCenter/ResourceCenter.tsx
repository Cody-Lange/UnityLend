import React from 'react';

const ResourceCenter: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Managing Your Money Like a Pro",
      excerpt: "Learn the essential strategies that successful people use to manage their finances and build wealth over time.",
      category: "Financial Tips",
      date: "Aug 25, 2025",
      image: "/images/blog-post-1-featured-image-bankly-webflow-ecommerce-template.jpg",
      link: "/blog/managing-money-like-pro"
    },
    {
      id: 2,
      title: "Understanding Interest Rates: A Beginner's Guide",
      excerpt: "Everything you need to know about how interest rates work and how they affect your loans and savings.",
      category: "Education",
      date: "Aug 20, 2025", 
      image: "/images/blog-post-2-featured-image-bankly-webflow-ecommerce-template.jpg",
      link: "/blog/understanding-interest-rates"
    },
    {
      id: 3,
      title: "Building Credit: What Every Young Adult Should Know",
      excerpt: "Start building your credit score early with these proven strategies and avoid common mistakes.",
      category: "Credit Tips",
      date: "Aug 18, 2025",
      image: "/images/blog-post-3-featured-image-bankly-webflow-ecommerce-template.jpg", 
      link: "/blog/building-credit-guide"
    }
  ];

  return (
    <div className="section">
      <div className="container-default w-container">
        <div className="grid-2-columns mg-bottom-64px">
          <div 
            id="w-node-ad7252d5-de8e-0a55-e2f0-1e1505d749db-89416502" 
            data-w-id="ad7252d5-de8e-0a55-e2f0-1e1505d749db" 
            style={{ opacity: 0 }} 
            className="pd-left-44px border-left---neutral-800-2px"
          >
            <h2 className="display-2 mg-bottom-0">Resource center</h2>
          </div>
          <div 
            id="w-node-a70d0fec-cde9-ce33-d4e6-edc84183aaa4-89416502" 
            data-w-id="a70d0fec-cde9-ce33-d4e6-edc84183aaa4" 
            style={{ opacity: 0 }}
          >
            <a href="/blog" className="btn-primary w-button">Go to resource center</a>
          </div>
        </div>
        <div 
          data-w-id="d14fb2b8-3327-7ab7-bf93-2642876a530b" 
          style={{ opacity: 0 }} 
          className="w-dyn-list"
        >
          <div role="list" className="grid-3-columns blog-cards-v2-grid _1-col-tablet w-dyn-items">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                data-w-id={`d14fb2b8-3327-7ab7-bf93-2642876a530${post.id === 1 ? 'd' : post.id === 2 ? 'e' : 'f'}`}
                role="listitem" 
                className="sibling-opacity-item w-dyn-item"
              >
                <a 
                  data-w-id={`d14fb2b8-3327-7ab7-bf93-2642876a530${post.id === 1 ? 'e' : post.id === 2 ? 'f' : 'g'}`}
                  href={post.link} 
                  className="text-decoration-none transition-color-none flex-vertical w-inline-block"
                >
                  <div className="blog-post-featured-image mg-bottom-24px">
                    <img 
                      src={post.image} 
                      loading="lazy" 
                      alt={post.title}
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 46vw, 31vw"
                      className="blog-post-featured-image" 
                    />
                  </div>
                  <div className="color-neutral-600 mg-bottom-24px">
                    <div className="text-100 medium text-uppercase">{post.category}</div>
                  </div>
                  <h3 className="mg-bottom-12px">{post.title}</h3>
                  <p className="color-neutral-700 mg-bottom-auto">{post.excerpt}</p>
                  <div className="divider _48px _24px-mbl"></div>
                  <div className="grid-2-columns _2-col-mbl color-neutral-800">
                    <div className="link-wrapper hover-none mg-top-auto">
                      <div className="link-text">
                        <span className="text-100 bold text-uppercase">Read more</span>
                      </div>
                      <div className="line-square-icon link-icon-right"></div>
                    </div>
                    <div 
                      id="w-node-_93cbead1-e2c4-2635-46b1-1d843babc9d0-89416502" 
                      className="text-100 bold text-uppercase"
                    >
                      {post.date}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCenter;
