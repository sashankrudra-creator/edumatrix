import { Link } from 'react-router-dom';
import { Bot, GraduationCap, BrainCircuit, Microscope, Building2, TrendingUp } from 'lucide-react';
import { FadeContent } from './Animations';

const whyCards = [
  {
    title: "STEM & Innovation",
    description: "Robotics • AI • Science",
    icon: <Bot size={28} strokeWidth={1.5} />,
    className: "why-card-pos-1"
  },
  {
    title: "Academic Excellence",
    description: "Strong foundations • Deeper learning",
    icon: <GraduationCap size={28} strokeWidth={1.5} />,
    className: "why-card-pos-2"
  },
  {
    title: "Future-Ready Skills",
    description: "Technology • Problem solving",
    icon: <BrainCircuit size={28} strokeWidth={1.5} />,
    className: "why-card-pos-3"
  },
  {
    title: "Hands-On Learning",
    description: "Projects • Experiments • Practice",
    icon: <Microscope size={28} strokeWidth={1.5} />,
    className: "why-card-pos-4"
  },
  {
    title: "For Institutions",
    description: "School • Faculty • Student ecosystem",
    icon: <Building2 size={28} strokeWidth={1.5} />,
    className: "why-card-pos-5"
  },
  {
    title: "Personalized Growth",
    description: "Learning • Assessment • Progress",
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    className: "why-card-pos-6"
  }
];

export default function WhyEdumatrix() {
  return (
    <section className="section why-edumatrix-section">
      <div className="container">
        <div className="why-edumatrix-grid">
          {/* Left Content */}
          <div className="why-content">
            <FadeContent delay={0.1} yOffset={20}>
              <h2 className="why-title">
                Learning That Goes <br />
                Beyond the Classroom
              </h2>
              <p className="why-desc">
                Edumatrix brings STEM innovation, academic excellence, practical learning, and future-ready skills together in one learning ecosystem.
              </p>
              <Link to="/stem" className="btn btn-primary why-btn">
                Explore Edumatrix
              </Link>
            </FadeContent>
          </div>

          {/* Right Floating Composition */}
          <div className="why-floating-composition">
            {whyCards.map((card, index) => (
              <FadeContent 
                key={index} 
                delay={0.2 + (index * 0.1)} 
                yOffset={30}
                className={`why-card-wrapper ${card.className}`}
              >
                <div className="why-card">
                  <div className="why-card-icon">
                    {card.icon}
                  </div>
                  <div className="why-card-text">
                    <h4 className="why-card-title">{card.title}</h4>
                    <p className="why-card-desc">{card.description}</p>
                  </div>
                </div>
              </FadeContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
