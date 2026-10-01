import { useEffect } from 'react';
import { Bot, Plane, Network, Telescope, Printer, Glasses, ArrowRight, Cpu, FlaskConical, Settings, Microscope, Atom, BrainCircuit, Rocket, Lightbulb, CircuitBoard } from 'lucide-react';
import { BlurText, FadeContent, ScaleIn } from '../components/Animations';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

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
                  <CourseCard
                      icon={Bot}
                      title="Robotics & Automation"
                      description="Hands-on experience with building and programming autonomous systems and robotic arms."
                      category="STEM Lab"
                      imageSrc="/images/stem_robotics.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.2}>
                  <CourseCard
                      icon={Plane}
                      title="Avionics & Drone UAV"
                      description="Learn aerodynamics, flight mechanics, and pilot skills with custom-built quadcopters."
                      category="STEM Lab"
                      imageSrc="/images/stem_drone.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.3}>
                  <CourseCard
                      icon={Network}
                      title="AI & Machine Learning"
                      description="Introduction to neural networks, computer vision, and predictive modeling for high school students."
                      category="STEM Lab"
                      imageSrc="/images/ai_ml.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>

                  <ScaleIn delay={0.4}>
                  <CourseCard
                      icon={Telescope}
                      title="Astrophysics & Astrolabs"
                      description="Explore the cosmos with professional-grade telescopes and celestial mapping software."
                      category="STEM Lab"
                      imageSrc="/images/stem_astrophysics.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.5}>
                  <CourseCard
                      icon={Printer}
                      title="3D Printing"
                      description="From CAD design to rapid prototyping using industry-standard additive manufacturing."
                      category="STEM Lab"
                      imageSrc="/images/EduMatrix 3D Printing Innovation Lab.png"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.6}>
                  <CourseCard
                      icon={Glasses}
                      title="AR / VR Immersive Tech"
                      description="Virtual field trips, simulated surgeries, and interactive physics experiments in the metaverse."
                      category="STEM Lab"
                      imageSrc="/images/stem_arvr.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>
              </div>
          </div>
      </section>
    </>
  );
}
