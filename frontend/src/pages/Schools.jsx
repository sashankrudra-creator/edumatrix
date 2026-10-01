import { useEffect } from 'react';
import { Monitor, Users, Presentation, LayoutDashboard, Flag, ArrowRight, Building2, Briefcase, School, Library, GraduationCap, ClipboardCheck, Laptop, FolderOpen, Settings } from 'lucide-react';
import { BlurText, FadeContent, ScaleIn } from '../components/Animations';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

export default function Schools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
          
          <div className="hidden-mobile">
              {/* Left Side Cluster */}
              <div style={{ position: 'absolute', left: '2%', top: '22%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <School size={90} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', left: '14%', top: '38%', opacity: 0.3, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <Presentation size={60} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', left: '3%', top: '55%', opacity: 0.2, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <Library size={80} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', left: '15%', top: '72%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <GraduationCap size={90} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', left: '4%', top: '88%', opacity: 0.3, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <ClipboardCheck size={70} strokeWidth={2} />
              </div>

              {/* Right Side Cluster */}
              <div style={{ position: 'absolute', right: '3%', top: '22%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <LayoutDashboard size={100} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', right: '14%', top: '38%', opacity: 0.3, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <Laptop size={70} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', right: '2%', top: '55%', opacity: 0.2, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <FolderOpen size={80} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', right: '15%', top: '72%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <Users size={90} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', right: '4%', top: '88%', opacity: 0.3, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <Settings size={80} strokeWidth={2} />
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
                  <CourseCard
                      icon={LayoutDashboard}
                      title="School ERP (EliteSchool.info)"
                      description="Complete management software covering admissions, fee collection, attendance, timetable, and parent communications."
                      category="B2B Services"
                      imageSrc="/images/EduMatrix Classroom ERP Dashboard.png"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.2}>
                  <CourseCard
                      icon={Users}
                      title="Elite Jobs - Teacher Placement"
                      description="Rigorous recruitment and training to supply schools with highly qualified, tech-savvy educators."
                      category="B2B Services"
                      imageSrc="/images/EduMatrix Teacher Placement Interview.png"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.3}>
                  <CourseCard
                      icon={Monitor}
                      title="Smart Interactive Panels"
                      description="Upgrading traditional classrooms with interactive touch panels, digital content integration, and teacher training."
                      category="B2B Services"
                      imageSrc="/images/Interactive Solar System Classroom.png"
                      linkTo="#"
                    />
                  </ScaleIn>

                  <ScaleIn delay={0.4}>
                  <CourseCard
                      icon={Presentation}
                      title="Complete School Branding"
                      description="Marketing, brand positioning, and digital presence management to increase admissions and prestige."
                      category="B2B Services"
                      imageSrc="/images/EduMatrix School Branding Strategy Meeting.png"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.5}>
                  <CourseCard
                      icon={Flag}
                      title="Science Expos & Fests"
                      description="Organizing district and state-level science fairs to showcase student talent and institutional capabilities."
                      category="B2B Services"
                      imageSrc="/images/EduMatrix Sustainable Science Fair.png"
                      linkTo="#"
                    />
                  </ScaleIn>
              </div>
          </div>
      </section>
    </>
  );
}
