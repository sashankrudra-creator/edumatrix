import React from 'react';
import './Backgrounds.css';

export function StemBackground() {
  return (
    <div className="bg-illustration-container">
      <svg className="bg-illustration stem-bg" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#DDBCCB" strokeWidth="1" fill="none" opacity="0.4">
          <circle cx="600" cy="300" r="250" strokeDasharray="4 8" className="spin-slow" />
          <circle cx="600" cy="300" r="150" stroke="#EAD6E0" strokeWidth="2" className="spin-slow-reverse" />
          
          <path d="M400,100 L500,200 L650,150 L750,250" stroke="#EAD6E0" />
          <path d="M450,450 L550,350 L700,400 L800,300" stroke="#F8EEF3" strokeWidth="2" />
          <path d="M300,300 L450,300 L550,200" stroke="#DDBCCB" strokeDasharray="2 4" />
        </g>
        
        <g fill="#EAD6E0" opacity="0.6">
          <circle cx="500" cy="200" r="6" className="float-1" />
          <circle cx="650" cy="150" r="4" className="float-2" />
          <circle cx="750" cy="250" r="8" className="float-3" />
          <circle cx="550" cy="350" r="5" className="float-1" />
          <circle cx="700" cy="400" r="7" className="float-2" />
          <circle cx="450" cy="300" r="4" className="float-3" />
        </g>

        <g fill="#660033" opacity="0.15">
          <rect x="580" y="280" width="40" height="40" rx="8" className="pulse-slow" />
          <circle cx="600" cy="300" r="8" fill="#FFFFFF" />
          <circle cx="500" cy="200" r="3" />
          <circle cx="700" cy="400" r="3" />
        </g>
      </svg>
    </div>
  );
}

export function AcademicsBackground() {
  return (
    <div className="bg-illustration-container">
      <svg className="bg-illustration academics-bg" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#DDBCCB" strokeWidth="1.5" fill="none" opacity="0.4">
          <rect x="400" y="100" width="300" height="400" rx="20" stroke="#EAD6E0" className="float-1" />
          <rect x="450" y="150" width="300" height="400" rx="20" strokeDasharray="6 6" className="float-2" />
          
          <path d="M350,450 C 450,450 500,250 600,250 C 700,250 750,150 850,150" stroke="#DDBCCB" strokeWidth="2" />
          <path d="M350,500 C 500,500 550,300 700,300" stroke="#F8EEF3" strokeWidth="3" />
          
          <line x1="500" y1="200" x2="650" y2="200" strokeDasharray="4 4" />
          <line x1="500" y1="250" x2="600" y2="250" strokeDasharray="4 4" />
          <line x1="500" y1="300" x2="650" y2="300" strokeDasharray="4 4" />
        </g>
        
        <g fill="#EAD6E0" opacity="0.6">
          <circle cx="600" cy="250" r="6" className="pulse-slow" />
          <circle cx="700" cy="300" r="8" className="pulse-slow" style={{ animationDelay: '1s' }} />
        </g>

        <g stroke="#660033" strokeWidth="2" fill="none" opacity="0.15">
          <path d="M680,180 L700,200 L740,160" className="float-3" />
          <path d="M520,350 L540,370 L580,330" className="float-1" />
          <circle cx="600" cy="250" r="12" />
        </g>
      </svg>
    </div>
  );
}

export function SchoolsBackground() {
  return (
    <div className="bg-illustration-container">
      <svg className="bg-illustration schools-bg" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#DDBCCB" strokeWidth="1" fill="none" opacity="0.4">
          <polygon points="600,100 750,200 750,400 600,500 450,400 450,200" stroke="#EAD6E0" strokeWidth="2" className="spin-slow" />
          <polygon points="600,150 700,220 700,380 600,450 500,380 500,220" strokeDasharray="4 6" className="spin-slow-reverse" />
          
          <line x1="600" y1="100" x2="600" y2="500" />
          <line x1="450" y1="200" x2="750" y2="400" />
          <line x1="450" y1="400" x2="750" y2="200" />
          
          <path d="M300,300 Q 450,200 600,300 T 900,300" stroke="#F8EEF3" strokeWidth="3" />
        </g>
        
        <g fill="#EAD6E0" opacity="0.6">
          <circle cx="600" cy="100" r="8" className="float-1" />
          <circle cx="750" cy="200" r="6" className="float-2" />
          <circle cx="750" cy="400" r="7" className="float-3" />
          <circle cx="600" cy="500" r="8" className="float-1" />
          <circle cx="450" cy="400" r="6" className="float-2" />
          <circle cx="450" cy="200" r="7" className="float-3" />
          <circle cx="600" cy="300" r="10" className="pulse-slow" />
        </g>

        <g fill="#660033" opacity="0.12">
          <rect x="585" y="285" width="30" height="30" rx="4" />
          <rect x="735" y="185" width="30" height="30" rx="4" />
          <rect x="435" y="385" width="30" height="30" rx="4" />
        </g>
      </svg>
    </div>
  );
}
