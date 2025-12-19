'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGsapScrollAnimations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // Check if DOM is fully loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAnimations);
      } else {
        initAnimations();
      }
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  const initAnimations = () => {
    // Hero section animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelector('h1'),
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Content section animation
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-item');

      elements.forEach((el, index) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 50%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }
  };

  return { heroRef, sectionRef };
};