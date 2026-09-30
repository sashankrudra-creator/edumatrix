import { useEffect, useRef, useState } from 'react';

export default function EdumatrixSignature() {
  const [isVisible, setIsVisible] = useState(false);
  const signatureRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (signatureRef.current) {
      observer.observe(signatureRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`edumatrix-signature-container ${isVisible ? 'is-visible' : ''}`}
      ref={signatureRef}
      aria-hidden="true"
    >
      <div className="edumatrix-signature-content">
        <img 
          src="/logo.png" 
          alt="" 
          className="edumatrix-signature-logo" 
        />
        <span className="edumatrix-signature-text">DUMATRIX</span>
      </div>
    </div>
  );
}
