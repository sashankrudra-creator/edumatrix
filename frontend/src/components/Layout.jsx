import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Mail, Phone, Sun, Moon } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import EdumatrixSignature from './EdumatrixSignature';

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('edumatrix-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('edumatrix-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('edumatrix-theme', 'light');
    }
  }, [isDarkMode]);

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
          <div className="nav-container custom-nav-container">
              <div className="logo brand-wrapper">
                  <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                      <img src="/edumatrixlogo.png" alt="Edumatrix Emblem" className="brand-emblem" />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
                          <img src="/logo.png" alt="E" className="brand-pencil" />
                          <span className="brand-text">DU<span>MATRIX</span></span>
                      </div>
                  </Link>
              </div>
              
              <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
                  <ul className="nav-links">
                      <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                      <li><Link to="/stem" className={location.pathname === '/stem' ? 'active' : ''}>STEM & Innovation</Link></li>
                      <li><Link to="/academics" className={location.pathname === '/academics' ? 'active' : ''}>Academics & Testing</Link></li>
                      <li><Link to="/schools" className={location.pathname === '/schools' ? 'active' : ''}>Institutional B2B</Link></li>
                  </ul>
              </nav>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 1001 }}>
                  <button 
                    onClick={() => setIsDarkMode(!isDarkMode)} 
                    className="theme-toggle-btn"
                    aria-label="Toggle theme"
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '50%' }}
                  >
                    {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
                  </button>
                  
                  <button 
                    className="mobile-menu-btn" 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
              </div>
          </div>
      </header>

      <main>
          {children}
      </main>

      <footer>
          <div className="container">
              <div className="footer-grid-new">
                  <div className="footer-col">
                      <h4>Edumatrix</h4>
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
                      <h4>Navigation</h4>
                      <ul>
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/stem">STEM & Innovation</Link></li>
                          <li><Link to="/academics">Academics & Testing</Link></li>
                          <li><Link to="/schools">Institutional B2B</Link></li>
                      </ul>
                  </div>
                  <div className="footer-col">
                      <h4>Learning</h4>
                      <ul>
                          <li><Link to="#">Programs</Link></li>
                          <li><Link to="#">Workshops</Link></li>
                          <li><Link to="#">Resources</Link></li>
                      </ul>
                  </div>
                  <div className="footer-col">
                      <h4>Company</h4>
                      <ul>
                          <li><Link to="#">About</Link></li>
                          <li><Link to="#">Contact</Link></li>
                      </ul>
                  </div>
              </div>
              <div className="footer-bottom">
                  &copy; 2026 Edumatrix. All rights reserved.
              </div>
          </div>
          <EdumatrixSignature />
      </footer>
    </>
  );
}
