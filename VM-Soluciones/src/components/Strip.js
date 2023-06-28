import React, { useEffect, useRef } from 'react';
import StripImage from '../images/strip-image.svg';
import '../styles/strip.css';

export default function Strip() {
  const stripRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    if (stripRef.current) {
      observer.observe(stripRef.current);
    }

    return () => {
      if (stripRef.current) {
        observer.unobserve(stripRef.current);
      }
    };
  }, []);

  return (
    <div className="strip--container" ref={stripRef}>
      <img
        src={StripImage}
        alt="Information Strip"
        className="strip--image"
      />
    </div>
  );
}
