import { useEffect } from 'react';
import { Monitor, Users, Presentation, LayoutDashboard, Flag, ArrowRight, Building2, Briefcase, School, Library, GraduationCap, ClipboardCheck, Laptop, FolderOpen, Settings } from 'lucide-react';
import { SchoolsBackground } from '../components/Backgrounds';
import { BlurText, FadeContent, ScaleIn } from '../components/Animations';
import { Link } from 'react-router-dom';

export default function Schools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
          <SchoolsBackground />
          
          <div className="hidden-mobile">
              {/* Left Side Cluster */}
              <div style={{ position: 'absolute', left: '2%', top: '22%', opacity: 0.12, color: '#660033', pointerEvents: 'none' }} className="float-1">
                  <School size={90} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', left: '14%', top: '38%', opacity: 0.15, color: '#660033', pointerEvents: 'none' }} className="float-2">
                  <Presentation size={60} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', left: '3%', top: '55%', opacity: 0.1, color: '#660033', pointerEvents: 'none' }} className="float-1">
                  <Library size={80} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', left: '15%', top: '72%', opacity: 0.12, color: '#660033', pointerEvents: 'none' }} className="float-1">
                  <GraduationCap size={90} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', left: '4%', top: '88%', opacity: 0.15, color: '#660033', pointerEvents: 'none' }} className="float-2">
                  <ClipboardCheck size={70} strokeWidth={1.5} />
              </div>

              {/* Right Side Cluster */}
              <div style={{ position: 'absolute', right: '3%', top: '22%', opacity: 0.12, color: '#660033', pointerEvents: 'none' }} className="float-2">
                  <LayoutDashboard size={100} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', right: '14%', top: '38%', opacity: 0.15, color: '#660033', pointerEvents: 'none' }} className="float-1">
                  <Laptop size={70} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', right: '2%', top: '55%', opacity: 0.1, color: '#660033', pointerEvents: 'none' }} className="float-2">
                  <FolderOpen size={80} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', right: '15%', top: '72%', opacity: 0.12, color: '#660033', pointerEvents: 'none' }} className="float-2">
                  <Users size={90} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', right: '4%', top: '88%', opacity: 0.15, color: '#660033', pointerEvents: 'none' }} className="float-1">
                  <Settings size={80} strokeWidth={1.5} />
              </div>
          </div>

          <div className="container hero-content">
              <h1>
                  <BlurText text="Institutional" delay={0.05} /> <br />
                  <span className="highlight">
                      <BlurText text="B2B Solutions" delay={0.05} />
                  </span>
              </h1>
              <FadeContent delay={0.5}>
                  <p>End-to-end educational infrastructure, software, and recruitment services to elevate your institution's operational efficiency and brand value.</p>
              </FadeContent>
          </div>
      </section>

      <section className="section bg-primary-light">
          <div className="container">
              <FadeContent delay={0.2} className="section-header">
                  <span className="section-eyebrow">SERVICES</span>
                  <h2 className="section-title">Solutions for Schools</h2>
                  <p className="section-desc">Partner with Edumatrix to transform your campus into a next-generation educational hub.</p>
              </FadeContent>

              <div className="cards-grid">
                  <ScaleIn delay={0.1}>
                  <article className="card">
                      <div className="card-icon">
                          <LayoutDashboard size={24} />
                      </div>
                      <h3>School ERP (EliteSchool.info)</h3>
                      <p>Complete management software covering admissions, fee collection, attendance, timetable, and parent communications.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.2}>
                  <article className="card">
                      <div className="card-icon">
                          <Users size={24} />
                      </div>
                      <h3>Elite Jobs - Teacher Placement</h3>
                      <p>Rigorous recruitment and training to supply schools with highly qualified, tech-savvy educators.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.3}>
                  <article className="card">
                      <div className="card-icon">
                          <Monitor size={24} />
                      </div>
                      <h3>Smart Interactive Panels</h3>
                      <p>Upgrading traditional classrooms with interactive touch panels, digital content integration, and teacher training.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>

                  <ScaleIn delay={0.4}>
                  <article className="card">
                      <div className="card-icon">
                          <Presentation size={24} />
                      </div>
                      <h3>Complete School Branding</h3>
                      <p>Marketing, brand positioning, and digital presence management to increase admissions and prestige.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.5}>
                  <article className="card">
                      <div className="card-icon">
                          <Flag size={24} />
                      </div>
                      <h3>Science Expos & Fests</h3>
                      <p>Organizing district and state-level science fairs to showcase student talent and institutional capabilities.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
              </div>
          </div>
      </section>
    </>
  );
}
