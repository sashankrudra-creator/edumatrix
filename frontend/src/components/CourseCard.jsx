import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, BookOpen } from 'lucide-react';

const CourseCard = ({ 
  icon: Icon, 
  title, 
  description, 
  category = "Program",
  imageSrc, 
  linkTo = "#",
  info = "Available Now",
  infoIcon = <BookOpen size={14} />
}) => {
  return (
    <article className="card">
      {imageSrc && (
        <div className="card-image-wrapper">
          <img src={imageSrc} alt={title} />
          <div className="card-category">{category}</div>
        </div>
      )}
      <div className="card-content">
        <div className="card-header">
          {Icon && (
            <div className="card-icon">
              <Icon size={20} />
            </div>
          )}
          <div className="card-info-badge">
            {infoIcon}
            <span>{info}</span>
          </div>
        </div>
        
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="card-footer">
          <Link to={linkTo} className="card-link">
            Explore Program <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
