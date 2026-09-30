import { useEffect } from 'react';
import { Bot, Plane, Network, Telescope, Printer, Glasses, ArrowRight, Cpu, FlaskConical, Settings, Microscope, Atom, BrainCircuit, Rocket, Lightbulb, CircuitBoard } from 'lucide-react';
import { BlurText, FadeContent, ScaleIn } from '../components/Animations';
import { Link } from 'react-router-dom';

export default function Stem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
          <div className="hidden-mobile">
              {/* Left Side Cluster */}
              <div style={{ position: 'absolute', left: '2%', top: '25%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <Bot size={90} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', left: '14%', top: '45%', opacity: 0.3, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <Settings size={60} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', left: '3%', top: '65%', opacity: 0.2, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <Microscope size={90} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', left: '15%', top: '85%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <Atom size={110} strokeWidth={2} />
              </div>

              {/* Right Side Cluster */}
              <div style={{ position: 'absolute', right: '3%', top: '25%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <BrainCircuit size={100} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', right: '14%', top: '45%', opacity: 0.3, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <Rocket size={70} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', right: '2%', top: '65%', opacity: 0.2, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <CircuitBoard size={110} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', right: '15%', top: '85%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <Telescope size={90} strokeWidth={2} />
              </div>
          </div>

          <div className="container hero-content">
              <h1>
                  <BlurText text="Innobots STEM &" delay={0.05} /> <br />
                  <span className="highlight">
                      <BlurText text="Experiential Learning" delay={0.05} />
                  </span> 
                  <BlurText text=" Labs" delay={0.05} />
              </h1>
              <FadeContent delay={0.5}>
                  <p>State-of-the-art laboratories designed to foster innovation, logical thinking, and real-world problem solving.</p>
              </FadeContent>
          </div>
      </section>

      <section className="section bg-surface-soft">
          <div className="container">
              <FadeContent delay={0.2} className="section-header">
                  <span className="section-eyebrow">LABORATORIES</span>
                  <h2 className="section-title">Our Specialized Labs</h2>
                  <p className="section-desc">Practical, hands-on learning environments that prepare students for the technologies of tomorrow.</p>
              </FadeContent>

              <div className="cards-grid">
                  <ScaleIn delay={0.1}>
                  <article className="card">
                      <div className="card-icon">
                          <Bot size={24} />
                      </div>
                      <h3>Robotics & Automation</h3>
                      <p>Hands-on experience with building and programming autonomous systems and robotic arms.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.2}>
                  <article className="card">
                      <div className="card-icon">
                          <Plane size={24} />
                      </div>
                      <h3>Avionics & Drone UAV</h3>
                      <p>Learn aerodynamics, flight mechanics, and pilot skills with custom-built quadcopters.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.3}>
                  <article className="card">
                      <div className="card-icon">
                          <Network size={24} />
                      </div>
                      <h3>AI & Machine Learning</h3>
                      <p>Introduction to neural networks, computer vision, and predictive modeling for high school students.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>

                  <ScaleIn delay={0.4}>
                  <article className="card">
                      <div className="card-icon">
                          <Telescope size={24} />
                      </div>
                      <h3>Astrophysics & Astrolabs</h3>
                      <p>Explore the cosmos with professional-grade telescopes and celestial mapping software.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.5}>
                  <article className="card">
                      <div className="card-icon">
                          <Printer size={24} />
                      </div>
                      <h3>3D Printing</h3>
                      <p>From CAD design to rapid prototyping using industry-standard additive manufacturing.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.6}>
                  <article className="card">
                      <div className="card-icon">
                          <Glasses size={24} />
                      </div>
                      <h3>AR / VR Immersive Tech</h3>
                      <p>Virtual field trips, simulated surgeries, and interactive physics experiments in the metaverse.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
              </div>
          </div>
      </section>
    </>
  );
}
