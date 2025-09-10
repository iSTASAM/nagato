'use client';

import { useState, useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  staggerDelay?: number;
  index?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { delay = 0.5, threshold = 0.1, triggerOnce = true, staggerDelay = 0.1, index = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!triggerOnce || !hasAnimated) {
            const totalDelay = (delay + (index * staggerDelay)) * 1000;
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, totalDelay);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold, triggerOnce, hasAnimated, index, staggerDelay]);

  // Reset animation on page refresh
  useEffect(() => {
    const handlePageLoad = () => {
      setIsVisible(false);
      setHasAnimated(false);
      setTimeout(() => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
          if (isInViewport) {
            const totalDelay = (delay + (index * staggerDelay)) * 1000;
            setTimeout(() => {
              setIsVisible(true);
              setHasAnimated(true);
            }, totalDelay);
          }
        }
      }, 100);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, [delay, index, staggerDelay]);

  return {
    elementRef,
    isVisible,
    animationClasses: isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8'
  };
};
