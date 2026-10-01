import { Link } from 'react-router-dom';
import { Microscope, BookOpen, BrainCircuit, Building2, ArrowRight, Lightbulb, Trophy, Rocket, GraduationCap } from 'lucide-react';
import { BlurText, FadeContent, ScaleIn } from '../components/Animations';
import AnnouncementTicker from '../components/AnnouncementTicker';
import WhyEdumatrix from '../components/WhyEdumatrix';
import CourseCard from '../components/CourseCard';

export default function Home() {
  return (
    <>
      <div style={{ paddingTop: '100px', backgroundColor: 'var(--background)' }}>
        <AnnouncementTicker />
      </div>
      <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden', minHeight: '80vh' }}>
          <div className="container hero-two-column">
              <div className="hero-text-side">
                  <h1>
                      <BlurText text="Empowering Tomorrow’s Leaders" delay={0.05} /> <br />
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
              <div className="hero-image-side">
                  <ScaleIn delay={0.8}>
                      <img 
                          src="/images/EduMatrix STEM Innovators.png" 
                          alt="Edumatrix STEM Innovators" 
                      />
                  </ScaleIn>
              </div>
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
                    <CourseCard
                      icon={Microscope}
                      title="STEM & Experiential Learning"
                      description="Robotics, AI, Avionics, and 3D printing labs designed to build innovators of the future."
                      category="Laboratories"
                      imageSrc="/images/stem_robotics.jpg"
                      linkTo="/stem"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.2}>
                    <CourseCard
                      icon={BookOpen}
                      title="Dream Goals Foundation"
                      description="Structured IIT-JEE, NEET, and Olympiad training ensuring top percentile outcomes."
                      category="Academics"
                      imageSrc="/images/Dream Goals Education Pathway.png"
                      linkTo="/academics"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.3}>
                    <CourseCard
                      icon={BrainCircuit}
                      title="Elite Scorer Diagnostics"
                      description="AI-driven performance tracking and personalized learning paths for individual student growth."
                      category="Platform"
                      imageSrc="/images/ai_ml.jpg"
                      linkTo="/academics"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.4}>
                    <CourseCard
                      icon={Building2}
                      title="Institutional Solutions"
                      description="Complete B2B offerings including ERP, teacher placement, and smart campus integrations."
                      category="B2B Solutions"
                      imageSrc="/images/schools.jpg"
                      linkTo="/schools"
                    />
                  </ScaleIn>
              </div>
          </div>
      </section>

      <section className="section bg-white">
          <div className="container">
              <FadeContent delay={0.2} className="section-header">
                  <span className="section-eyebrow">02 — OUR PLATFORMS</span>
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

      <WhyEdumatrix />
    </>
  );
}
