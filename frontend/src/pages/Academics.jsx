import { useEffect } from 'react';
import { Target, BarChart2, Award, MessageSquare, Calculator, Users, Lightbulb, Gamepad2, ArrowRight, Trophy, GraduationCap, BookOpen, Pencil, CheckCircle, Star, ClipboardList, BarChart3, Medal, Sparkles } from 'lucide-react';
import { AcademicsBackground } from '../components/Backgrounds';
import { BlurText, FadeContent, ScaleIn } from '../components/Animations';
import { Link } from 'react-router-dom';

export default function Academics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero" style={{ minHeight: '60vh', paddingBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
          <AcademicsBackground />
          
          <div className="hidden-mobile">
              {/* Left Side Cluster */}
              <div style={{ position: 'absolute', left: '2%', top: '25%', opacity: 0.12, color: '#660033', pointerEvents: 'none' }} className="float-1">
                  <Trophy size={90} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', left: '14%', top: '45%', opacity: 0.15, color: '#660033', pointerEvents: 'none' }} className="float-2">
                  <BookOpen size={60} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', left: '3%', top: '65%', opacity: 0.1, color: '#660033', pointerEvents: 'none' }} className="float-1">
                  <Pencil size={80} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', left: '15%', top: '85%', opacity: 0.12, color: '#660033', pointerEvents: 'none' }} className="float-1">
                  <CheckCircle size={90} strokeWidth={1.5} />
              </div>

              {/* Right Side Cluster */}
              <div style={{ position: 'absolute', right: '3%', top: '25%', opacity: 0.12, color: '#660033', pointerEvents: 'none' }} className="float-2">
                  <GraduationCap size={100} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', right: '14%', top: '45%', opacity: 0.15, color: '#660033', pointerEvents: 'none' }} className="float-1">
                  <ClipboardList size={70} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', right: '2%', top: '65%', opacity: 0.1, color: '#660033', pointerEvents: 'none' }} className="float-2">
                  <BarChart3 size={110} strokeWidth={1.5} />
              </div>
              <div style={{ position: 'absolute', right: '15%', top: '85%', opacity: 0.12, color: '#660033', pointerEvents: 'none' }} className="float-2">
                  <Medal size={90} strokeWidth={1.5} />
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
                  <article className="card">
                      <div className="card-icon">
                          <Target size={24} />
                      </div>
                      <h3>IIT-JEE & NEET Foundation</h3>
                      <p>Early-stage conceptual clarity designed to seamlessly bridge the gap between school curriculum and competitive entrances.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.2}>
                  <article className="card">
                      <div className="card-icon">
                          <BarChart2 size={24} />
                      </div>
                      <h3>Elite Scorer Diagnostics</h3>
                      <p>AI-based mock tests that analyze individual weaknesses down to the topic level, providing actionable improvement graphs.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.3}>
                  <article className="card">
                      <div className="card-icon">
                          <Award size={24} />
                      </div>
                      <h3>Advanced Olympiad Training</h3>
                      <p>Specialized coaching for National and International Math, Physics, and Chemistry Olympiads.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>

                  <ScaleIn delay={0.4}>
                  <article className="card">
                      <div className="card-icon">
                          <MessageSquare size={24} />
                      </div>
                      <h3>Language Club & English Mastery</h3>
                      <p>Comprehensive communication skills, public speaking, and vocabulary enhancement workshops.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.5}>
                  <article className="card">
                      <div className="card-icon">
                          <Calculator size={24} />
                      </div>
                      <h3>Abacus & Vedic Math</h3>
                      <p>Mental calculation techniques that increase brain capacity, speed, and numerical confidence.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.6}>
                  <article className="card">
                      <div className="card-icon">
                          <Users size={24} />
                      </div>
                      <h3>Psychological Counselling</h3>
                      <p>Dedicated support to manage exam stress, guide career choices, and ensure mental well-being.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>

                  <ScaleIn delay={0.7}>
                  <article className="card">
                      <div className="card-icon">
                          <Gamepad2 size={24} />
                      </div>
                      <h3>Gamified Learning</h3>
                      <p>Interactive, game-based educational modules that make complex concepts fun and engaging.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
                  
                  <ScaleIn delay={0.8}>
                  <article className="card">
                      <div className="card-icon">
                          <Lightbulb size={24} />
                      </div>
                      <h3>Entrepreneurship</h3>
                      <p>Fostering leadership, business acumen, and startup thinking among young innovators.</p>
                      <Link to="#" className="card-link">Explore <ArrowRight size={16} /></Link>
                  </article>
                  </ScaleIn>
              </div>
          </div>
      </section>
    </>
  );
}
