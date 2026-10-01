import { useEffect } from 'react';
import { Target, BarChart2, Award, MessageSquare, Calculator, Users, Lightbulb, Gamepad2, ArrowRight, Trophy, GraduationCap, BookOpen, Pencil, CheckCircle, Star, ClipboardList, BarChart3, Medal, Sparkles } from 'lucide-react';
import { BlurText, FadeContent, ScaleIn } from '../components/Animations';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

export default function Academics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
          
          <div className="hidden-mobile">
              {/* Left Side Cluster */}
              <div style={{ position: 'absolute', left: '2%', top: '25%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <Trophy size={90} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', left: '14%', top: '45%', opacity: 0.3, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <BookOpen size={60} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', left: '3%', top: '65%', opacity: 0.2, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <Pencil size={80} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', left: '15%', top: '85%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <CheckCircle size={90} strokeWidth={2} />
              </div>

              {/* Right Side Cluster */}
              <div style={{ position: 'absolute', right: '3%', top: '25%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <GraduationCap size={100} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', right: '14%', top: '45%', opacity: 0.3, color: 'var(--primary)', pointerEvents: 'none' }} className="float-1">
                  <ClipboardList size={70} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', right: '2%', top: '65%', opacity: 0.2, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <BarChart3 size={110} strokeWidth={2} />
              </div>
              <div style={{ position: 'absolute', right: '15%', top: '85%', opacity: 0.25, color: 'var(--primary)', pointerEvents: 'none' }} className="float-2">
                  <Medal size={90} strokeWidth={2} />
              </div>
          </div>

          <div className="container hero-content">
              <h1>
                  <BlurText text="Core Academics &" delay={0.05} /> <br />
                  <span className="highlight">
                      <BlurText text="Testing Excellence" delay={0.05} />
                  </span>
              </h1>
              <FadeContent delay={0.5}>
                  <p>Rigorous, results-oriented methodologies engineered to help students conquer competitive exams and build strong foundations.</p>
              </FadeContent>
          </div>
      </section>

      <section className="section bg-surface-soft">
          <div className="container">
              <FadeContent delay={0.2} className="section-header">
                  <span className="section-eyebrow">CURRICULUM</span>
                  <h2 className="section-title">Academic Programs</h2>
                  <p className="section-desc">Comprehensive educational pathways designed to maximize student potential and academic achievement.</p>
              </FadeContent>

              <div className="cards-grid">
                  <ScaleIn delay={0.1}>
                  <CourseCard
                      icon={Target}
                      title="IIT-JEE & NEET Foundation"
                      description="Early-stage conceptual clarity designed to seamlessly bridge the gap between school curriculum and competitive entrances."
                      category="Academics"
                      imageSrc="/images/academics.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.2}>
                  <CourseCard
                      icon={BarChart2}
                      title="Elite Scorer Diagnostics"
                      description="AI-based mock tests that analyze individual weaknesses down to the topic level, providing actionable improvement graphs."
                      category="Academics"
                      imageSrc="/images/acad_diagnostics.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.3}>
                  <CourseCard
                      icon={Award}
                      title="Advanced Olympiad Training"
                      description="Specialized coaching for National and International Math, Physics, and Chemistry Olympiads."
                      category="Academics"
                      imageSrc="/images/acad_olympiad.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>

                  <ScaleIn delay={0.4}>
                  <CourseCard
                      icon={MessageSquare}
                      title="Language Club & English Mastery"
                      description="Comprehensive communication skills, public speaking, and vocabulary enhancement workshops."
                      category="Academics"
                      imageSrc="/images/acad_language.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.5}>
                  <CourseCard
                      icon={Calculator}
                      title="Abacus & Vedic Math"
                      description="Mental calculation techniques that increase brain capacity, speed, and numerical confidence."
                      category="Academics"
                      imageSrc="/images/acad_abacus.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.6}>
                  <CourseCard
                      icon={Users}
                      title="Psychological Counselling"
                      description="Dedicated support to manage exam stress, guide career choices, and ensure mental well-being."
                      category="Academics"
                      imageSrc="/images/acad_counselling.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>

                  <ScaleIn delay={0.7}>
                  <CourseCard
                      icon={Gamepad2}
                      title="Gamified Learning"
                      description="Interactive, game-based educational modules that make complex concepts fun and engaging."
                      category="Academics"
                      imageSrc="/images/acad_gamified.jpg"
                      linkTo="#"
                    />
                  </ScaleIn>
                  
                  <ScaleIn delay={0.8}>
                  <CourseCard
                      icon={Lightbulb}
                      title="Entrepreneurship"
                      description="Fostering leadership, business acumen, and startup thinking among young innovators."
                      category="Academics"
                      imageSrc="/images/EduMatrix Entrepreneurship Innovation Hub.png"
                      linkTo="#"
                    />
                  </ScaleIn>
              </div>
          </div>
      </section>
    </>
  );
}
