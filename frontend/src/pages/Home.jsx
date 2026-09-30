import { Link } from 'react-router-dom';
import { Microscope, BookOpen, BrainCircuit, Building2, ArrowRight, Lightbulb, Trophy, Rocket, GraduationCap } from 'lucide-react';
import { BlurText, FadeContent, ScaleIn } from '../components/Animations';

export default function Home() {
  return (
    <>
      <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hidden-mobile">
              {/* Left Side Cluster */}
              <div style={{ position: 'absolute', left: '4%', top: '25%', opacity: 0.12, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <BookOpen size={100} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', left: '12%', top: '55%', opacity: 0.15, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <GraduationCap size={80} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', left: '2%', top: '85%', opacity: 0.1, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <BrainCircuit size={90} strokeWidth={1.5} />
              </div>

              {/* Right Side Cluster */}
              <div style={{ position: 'absolute', right: '4%', top: '25%', opacity: 0.12, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <Lightbulb size={90} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', right: '12%', top: '55%', opacity: 0.15, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <Trophy size={80} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', right: '2%', top: '85%', opacity: 0.1, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <Rocket size={100} strokeWidth={1.5} />
              </div>
          </div>

          <div className="container hero-content">
              <h1>
                  <BlurText text="Empowering" delay={0.05} /> <br />
                  <BlurText text="Tomorrow’s Leaders" delay={0.05} /> <br />
                  <BlurText text="Through " delay={0.05} />
                  <span className="highlight">
                      <BlurText text="STEM & Academic Excellence" delay={0.05} />
                  </span>
              </h1>
              <FadeContent delay={0.4}>
                  <p>Advanced learning environments integrating Robotics, AI, Astrophysics, and core Academic mastery for 21st-century education.</p>
              </FadeContent>
              <FadeContent delay={0.6} className="hero-ctas">
                  <Link to="/stem" className="btn btn-primary">Explore Programs</Link>
                  <Link to="/schools" className="btn btn-outline">For Institutions</Link>
              </FadeContent>
          </div>
      </section>

      <section className="stats-section">
          <div className="container">
              <FadeContent delay={0.2} className="stats-grid">
                  <div className="stat-card">
                      <div className="stat-number">25+</div>
                      <div className="stat-label">Years Experience</div>
                  </div>
                  <div className="stat-card">
                      <div className="stat-number">Top 100</div>
                      <div className="stat-label">JEE/NEET Ranks</div>
                  </div>
                  <div className="stat-card">
                      <div className="stat-number">18+</div>
                      <div className="stat-label">Specialized Programs</div>
                  </div>
                  <div className="stat-card">
                      <div className="stat-number">500+</div>
                      <div className="stat-label">Partner Schools</div>
                  </div>
              </FadeContent>
          </div>
      </section>

      <section className="section bg-surface-soft" id="pillars">
          <div className="container">
              <FadeContent delay={0.2} className="section-header">
                  <span className="section-eyebrow">01 — EXPLORE</span>
                  <h2 className="section-title">Core Academic Pillars</h2>
                  <p className="section-desc">Learning paths for curious minds. Comprehensive programs that build innovators of the future.</p>
              </FadeContent>
              
              <div className="cards-grid">
                  <ScaleIn delay={0.1}>
                  <article className="card">
                      <div className="card-icon">
                          <Microscope size={24} />
                      </div>
                      <h3>STEM & Experiential Learning</h3>
                      <p>Robotics, AI, Avionics, and 3D printing labs designed to build innovators of the future.</p>
                      <Link to="/stem" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.2}>
                  <article className="card">
                      <div className="card-icon">
                          <BookOpen size={24} />
                      </div>
                      <h3>Dream Goals Foundation</h3>
                      <p>Structured IIT-JEE, NEET, and Olympiad training ensuring top percentile outcomes.</p>
                      <Link to="/academics" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.3}>
                  <article className="card">
                      <div className="card-icon">
                          <BrainCircuit size={24} />
                      </div>
                      <h3>Elite Scorer Diagnostics</h3>
                      <p>AI-driven performance tracking and personalized learning paths for individual student growth.</p>
                      <Link to="/academics" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.4}>
                  <article className="card">
                      <div className="card-icon">
                          <Building2 size={24} />
                      </div>
                      <h3>Institutional Solutions</h3>
                      <p>Complete B2B offerings including ERP, teacher placement, and smart campus integrations.</p>
                      <Link to="/schools" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
              </div>
          </div>
      </section>

      <section className="section bg-white">
          <div className="container">
              <FadeContent delay={0.2} className="section-header">
                  <span className="section-eyebrow">02 — PARTNERS</span>
                  <h2 className="section-title">Edumatrix Ecosystem</h2>
                  <p className="section-desc">Our integrated platforms provide a seamless educational experience for students and institutions.</p>
              </FadeContent>
              
              <div className="partners-grid">
                  <ScaleIn delay={0.1}><div className="partner-logo">INNOBOTS</div></ScaleIn>
                  <ScaleIn delay={0.2}><div className="partner-logo">EliteSchool ERP</div></ScaleIn>
                  <ScaleIn delay={0.3}><div className="partner-logo">EliteScorer AI</div></ScaleIn>
                  <ScaleIn delay={0.4}><div className="partner-logo">Elite Jobs</div></ScaleIn>
              </div>
          </div>
      </section>
    </>
  );
}
