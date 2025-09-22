
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- DUMMY DATA ---

const projectData = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    category: 'Interior Design',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A complete overhaul of a kitchen space, featuring custom cabinetry and smart appliances.',
    details: {
      challenge: "The client's existing kitchen was outdated, cramped, and lacked functionality for a growing family. The primary challenge was to create an open-concept space that was both aesthetically pleasing and highly practical, all within a tight budget and timeline.",
      solution: "We began by removing a non-structural wall to merge the kitchen and dining areas. We installed custom, floor-to-ceiling cabinetry to maximize storage, integrated state-of-the-art smart appliances, and added a large central island that serves as both a workspace and a social hub. Quartz countertops and a herringbone backsplash completed the modern, elegant look."
    },
    gallery: [
      'https://images.pexels.com/photos/3926542/pexels-photo-3926542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 2,
    title: 'Luxury Bathroom Suite',
    category: 'Renovation',
    image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Transforming a standard bathroom into a spa-like retreat with premium fixtures.',
     details: {
      challenge: "To convert a conventional master bathroom into a luxurious, spa-like sanctuary. The client wanted a freestanding tub, a spacious walk-in shower with multiple showerheads, and high-end finishes that would evoke a sense of tranquility and opulence.",
      solution: "Our team reconfigured the layout to accommodate a stunning freestanding soaking tub as the centerpiece. We constructed a large, curb-less walk-in shower with marble tiles, a rain showerhead, and body jets. A double vanity with vessel sinks and backlit mirrors was installed, along with heated flooring for ultimate comfort. The result is a serene and sophisticated personal spa."
    },
    gallery: [
       'https://images.pexels.com/photos/6625129/pexels-photo-6625129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       'https://images.pexels.com/photos/5998136/pexels-photo-5998136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       'https://images.pexels.com/photos/6588977/pexels-photo-6588977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ]
  },
  {
    id: 3,
    title: 'Commercial Office Space',
    category: 'Building',
    image: 'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Designing and building a functional and modern office environment for a growing tech company.',
    details: {
        challenge: "A fast-growing tech startup needed a new headquarters that would foster collaboration, reflect their innovative brand, and attract top talent. The raw industrial space they acquired required a full build-out, including creating distinct zones for focused work, team meetings, and relaxation.",
        solution: "We designed a dynamic, open-plan office with designated 'neighborhoods' for different teams. Glass-walled meeting rooms and private phone booths were strategically placed to offer quiet spaces without sacrificing the sense of openness. A central café and lounge area were created to encourage social interaction. The design incorporated the company's branding through custom murals and a modern-industrial aesthetic with exposed brick and ductwork."
    },
    gallery: [
      'https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
  },
  {
    id: 4,
    title: 'Cozy Living Room Redesign',
    category: 'Interior Design',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A warm and inviting living space redesign focused on comfort and style.',
    details: {
        challenge: "The clients wanted to transform their generic, underutilized living room into a cozy, multi-functional space for family gatherings, reading, and entertainment. The room had awkward dimensions and poor lighting, making it feel unwelcoming.",
        solution: "We introduced a warm, layered lighting scheme with dimmable fixtures to create ambiance. Custom built-in shelving and cabinetry were designed to house their book collection and media equipment, which also helped to visually balance the room's proportions. We curated a selection of comfortable, stylish furniture arranged in a conversational layout, and used a palette of warm, earthy tones to create the inviting atmosphere the clients desired."
    },
    gallery: [
      'https://images.pexels.com/photos/6434623/pexels-photo-6434623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]
  }
];

const testimonialData = [
  {
    quote: "They transformed our vision into a reality, exceeding every expectation. The team's professionalism and attention to detail were outstanding.",
    name: 'Sarah & Tom Wilson',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    quote: "An incredibly smooth process from start to finish. Their innovative design ideas have completely changed our home for the better.",
    name: 'Michael Chen',
    avatar: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    quote: "The quality of workmanship is second to none. We couldn't be happier with our new extension. Highly recommended!",
    name: 'Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];


// --- COMPONENTS ---

const Header = ({ theme, onThemeToggle, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    lastScrollY.current = window.scrollY;
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleNavClick = (e, pageName) => {
    e.preventDefault();
    // FIX: The 'page' state object requires a 'data' property.
    setPage({ name: pageName, data: null });
    setIsMenuOpen(false);
  };

  const handleHomeLinkClick = (e, hash) => {
    e.preventDefault();
    // Set page to home, then scroll
    // FIX: The 'page' state object requires a 'data' property.
    setPage({ name: 'home', data: null }); 
    setIsMenuOpen(false);
    
    setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth'});
        }
    }, 0); // setTimeout ensures the home page components are rendered before scrolling
  };


  return (
    <header className={`header ${isHeaderVisible ? 'visible' : 'hidden'}`}>
      <div className="container">
        <a href="#home" className="logo" onClick={(e) => handleHomeLinkClick(e, '#home')}>Constructive & Co.</a>
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#home" onClick={(e) => handleHomeLinkClick(e, '#home')}>HOME</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>ABOUT US</a></li>
            <li><a href="#projects" onClick={(e) => handleHomeLinkClick(e, '#projects')}>PROJECTS</a></li>
            <li><a href="#contact" onClick={(e) => handleHomeLinkClick(e, '#contact')}>CONTACT US</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button onClick={onThemeToggle} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = ({ onGetQuoteClick }) => (
  <section id="home" className="hero">
    <div className="hero-overlay"></div>
    <div className="container">
      <div className="hero-content">
        <h1>Building Dreams, Designing Futures.</h1>
        <p>Your trusted partner in construction, renovation, and bespoke interior design.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>VIEW OUR WORK</a>
          <button onClick={onGetQuoteClick} className="btn btn-secondary">GET A QUOTE</button>
        </div>
      </div>
    </div>
  </section>
);

const Projects = ({ onProjectClick }) => (
  <section id="projects" className="projects">
    <div className="container">
      <h2>Our Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div 
            className="project-card" 
            key={project.id} 
            onClick={() => onProjectClick(project)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onProjectClick(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="card-content">
              <span className="category-tag">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <div className="container">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonialData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <blockquote>"{testimonial.quote}"</blockquote>
            <div className="author">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <p>{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
    const [status, setStatus] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            e.target.reset();
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };
    
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                         {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                    </button>
                    {status === 'sent' && <p className="success-message">Thank you! Your message has been sent.</p>}
                </form>
            </div>
        </section>
    );
};

const AboutPage = () => (
    <section id="about-page" className="about-page">
        <div className="container">
            <h2>About Constructive & Co.</h2>
            <p className="about-intro">
                Founded on the principles of integrity, quality, and innovation, Constructive & Co. has grown to be a leader in the building and design industry. We believe in creating spaces that are not just beautiful, but are a true reflection of our clients' dreams and lifestyles. Our collaborative approach ensures that every project is a partnership, built on trust and a shared vision for excellence.
            </p>
            <div className="about-grid">
                <div className="about-card">
                    <h3>Our Mission</h3>
                    <p>To deliver exceptional construction, renovation, and design services through superior craftsmanship, transparent communication, and a commitment to exceeding client expectations. We aim to build lasting relationships by turning visions into reality, one project at a time.</p>
                </div>
                <div className="about-card">
                    <h3>Our Vision</h3>
                    <p>To be the most trusted and sought-after construction and design firm, renowned for our innovative solutions, sustainable practices, and our ability to create spaces that inspire and enhance the human experience for generations to come.</p>
                </div>
            </div>
            <div className="values-section">
                <h3>Our Values</h3>
                <div className="values-grid">
                    <div className="value-item"><h4>Quality</h4><p>We use the finest materials and meticulous techniques to ensure every detail is perfect.</p></div>
                    <div className="value-item"><h4>Integrity</h4><p>We operate with honesty and transparency, building trust with our clients and partners.</p></div>
                    <div className="value-item"><h4>Innovation</h4><p>We embrace creativity and modern technology to deliver cutting-edge design solutions.</p></div>
                    <div className="value-item"><h4>Collaboration</h4><p>We work closely with our clients, ensuring their vision is at the heart of everything we do.</p></div>
                </div>
            </div>
        </div>
    </section>
);

const ShowcasePage = ({ project, onBack }) => (
    <section className="showcase-page">
        <div className="showcase-header" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="hero-overlay"></div>
            <div className="container">
                 <div className="showcase-header-content">
                    <span className="category-tag">{project.category}</span>
                    <h1>{project.title}</h1>
                 </div>
            </div>
        </div>
        <div className="container showcase-container">
            <button onClick={onBack} className="btn showcase-back-btn">← Back to Projects</button>
            <div className="showcase-details">
                <div className="detail-card">
                    <h3>The Challenge</h3>
                    <p>{project.details.challenge}</p>
                </div>
                <div className="detail-card">
                    <h3>Our Solution</h3>
                    <p>{project.details.solution}</p>
                </div>
            </div>
            <div className="showcase-gallery">
                <h3>Project Gallery</h3>
                <div className="gallery-grid">
                    {project.gallery.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`${project.title} gallery image ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);


const QuoteModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = React.useState('');
    const modalRef = React.useRef(null);

    React.useEffect(() => {
        const handleEsc = (event) => { if (event.key === 'Escape') onClose(); };
        if (isOpen) { document.addEventListener('keydown', handleEsc); }
        return () => { document.removeEventListener('keydown', handleEsc); };
    }, [isOpen, onClose]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            e.target.reset();
            setTimeout(() => { onClose(); setStatus(''); }, 2000);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()} ref={modalRef}>
                <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">&times;</button>
                <h3>Get a Free Quote</h3>
                {status !== 'sent' ? (
                    <form className="quote-form" onSubmit={handleSubmit}>
                        <div className="form-group"><label htmlFor="quote-name">Name</label><input type="text" id="quote-name" name="name" required /></div>
                        <div className="form-group"><label htmlFor="quote-email">Email</label><input type="email" id="quote-email" name="email" required /></div>
                        <div className="form-group">
                            <label htmlFor="quote-service">Service Interested In</label>
                            <select id="quote-service" name="service" required>
                                <option value="">--Please choose an option--</option>
                                <option value="building">Building</option>
                                <option value="interior-design">Interior Design</option>
                                <option value="renovation">Renovation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group"><label htmlFor="quote-message">Project Details</label><textarea id="quote-message" name="message" rows={4} required></textarea></div>
                        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'SUBMITTING...' : 'SUBMIT QUOTE REQUEST'}
                        </button>
                    </form>
                ) : (
                    <div className="success-message-modal"><h4>Thank You!</h4><p>Your quote request has been sent. We'll be in touch shortly.</p></div>
                )}
            </div>
        </div>
    );
};

const Footer = () => (
    <footer className="footer">
        <div className="container"><p>&copy; {new Date().getFullYear()} Constructive & Co. All Rights Reserved.</p></div>
    </footer>
);


const App = () => {
  const [theme, setTheme] = React.useState('dark');
  const [page, setPage] = React.useState({ name: 'home', data: null });
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const handleOpenQuoteModal = () => setIsModalOpen(true);
  const handleCloseQuoteModal = () => setIsModalOpen(false);
  const handleProjectClick = (project) => setPage({ name: 'showcase', data: project });

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  React.useEffect(() => {
    if (!isModalOpen) {
      window.scrollTo(0, 0);
    }
  }, [page]);
  
  React.useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);
  
  const renderPage = () => {
    switch (page.name) {
        case 'about':
            return <AboutPage />;
        case 'showcase':
            // FIX: The 'page' state object requires a 'data' property.
            return <ShowcasePage project={page.data} onBack={() => setPage({ name: 'home', data: null })} />;
        case 'home':
        default:
            return (
                <>
                    <Hero onGetQuoteClick={handleOpenQuoteModal} />
                    <Projects onProjectClick={handleProjectClick} />
                    <Testimonials />
                    <Contact />
                </>
            );
    }
  };

  return (
    <>
      <Header theme={theme} onThemeToggle={toggleTheme} setPage={setPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={handleCloseQuoteModal} />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
