import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Mail, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header id="main-header" className={scrolled ? 'scrolled' : ''}>
          <div className="container nav-container">
              <div className="logo">
                  <Link to="/">EDU<span>MATRIX</span></Link>
              </div>
              
              <button 
                className="mobile-menu-btn" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
                  <ul className="nav-links">
                      <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                      <li><Link to="/stem" className={location.pathname === '/stem' ? 'active' : ''}>STEM & Innovation</Link></li>
                      <li><Link to="/academics" className={location.pathname === '/academics' ? 'active' : ''}>Academics & Testing</Link></li>
                      <li><Link to="/schools" className={location.pathname === '/schools' ? 'active' : ''}>Institutional B2B</Link></li>
                  </ul>
              </nav>
          </div>
      </header>

      <main>
          {children}
      </main>

      <footer>
          <div className="container">
              <div className="footer-grid">
                  <div className="footer-col">
                      <div className="logo" style={{marginBottom: '1.5rem'}}>
                          EDU<span>MATRIX</span>
                      </div>
                      <p>Building the educational infrastructure of tomorrow with cutting-edge STEM and proven academic rigour.</p>
                      <div className="social-links">
                          <Link to="#" aria-label="Facebook" className="social-fb"><FaFacebook size={22} /></Link>
                          <Link to="#" aria-label="Instagram" className="social-ig"><FaInstagram size={22} /></Link>
                          <Link to="#" aria-label="LinkedIn" className="social-in"><FaLinkedin size={22} /></Link>
                          <Link to="#" aria-label="Twitter" className="social-tw"><FaTwitter size={22} /></Link>
                          <Link to="#" aria-label="YouTube" className="social-yt"><FaYoutube size={22} /></Link>
                      </div>
                  </div>
                  <div className="footer-col">
                      <h4>Quick Links</h4>
                      <ul>
                          <li><Link to="/stem">STEM Labs</Link></li>
                          <li><Link to="/academics">Academics</Link></li>
                          <li><Link to="/schools">For Schools</Link></li>
                      </ul>
                  </div>
                  <div className="footer-col">
                      <h4>Contact Us</h4>
                      <ul className="contact-info">
                          <li><MapPin size={18} /> Hyderabad, Telangana</li>
                          <li><Mail size={18} /> info@edumatrix.com</li>
                          <li><Phone size={18} /> +91 98765 43210</li>
                      </ul>
                  </div>
              </div>
              <div className="footer-bottom">
                  &copy; 2026 Edumatrix. All rights reserved.
              </div>
          </div>
      </footer>
    </>
  );
}
