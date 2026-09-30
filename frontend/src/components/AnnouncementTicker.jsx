import React from 'react';

const announcements = [
  "NEW — Robotics & AI Programs Now Open",
  "STEM Innovation Workshops — Registrations Open",
  "New Academic Programs Added",
  "Explore Edumatrix Learning Programs",
  "Institutional Partnerships Now Available"
];

export default function AnnouncementTicker() {
  return (
    <div className="announcement-ticker-container">
      <div className="announcement-label">
        ANNOUNCEMENTS <span className="arrow">→</span>
      </div>
      <div className="announcement-content-wrapper">
        <div className="announcement-track">
          {announcements.map((item, index) => (
            <React.Fragment key={index}>
              <span className="announcement-item">{item}</span>
              <span className="announcement-separator">•</span>
            </React.Fragment>
          ))}
          {/* Duplicate for seamless loop */}
          {announcements.map((item, index) => (
            <React.Fragment key={`dup-${index}`}>
              <span className="announcement-item">{item}</span>
              <span className="announcement-separator">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
