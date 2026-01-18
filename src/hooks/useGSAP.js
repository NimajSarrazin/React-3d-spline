/**
 * GSAP Animation Hook
 * Provides reusable GSAP animation functions for consistent animations across the site
 */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook for fade in animations on scroll
 * @param {Object} options - Animation options
 */
export const useFadeIn = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      duration = 1,
      delay = 0,
      y = 50,
      opacity = 0,
      ease = 'power3.out',
      trigger = element,
      start = 'top 80%'
    } = options;

    gsap.fromTo(
      element,
      {
        opacity: opacity,
        y: y
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: ease,
        scrollTrigger: {
          trigger: trigger,
          start: start,
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
};

/**
 * Hook for stagger animations (multiple elements)
 * @param {Object} options - Animation options
 */
export const useStagger = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.children;
    if (children.length === 0) return;

    const {
      duration = 0.6,
      delay = 0,
      stagger = 0.1,
      y = 30,
      opacity = 0,
      ease = 'power3.out',
      start = 'top 80%'
    } = options;

    gsap.fromTo(
      children,
      {
        opacity: opacity,
        y: y
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: ease,
        scrollTrigger: {
          trigger: element,
          start: start,
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
};

/**
 * Hook for scale animations
 * @param {Object} options - Animation options
 */
export const useScaleIn = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      duration = 0.8,
      delay = 0,
      scale = 0.8,
      opacity = 0,
      ease = 'back.out(1.7)',
      start = 'top 80%'
    } = options;

    gsap.fromTo(
      element,
      {
        opacity: opacity,
        scale: scale
      },
      {
        opacity: 1,
        scale: 1,
        duration: duration,
        delay: delay,
        ease: ease,
        scrollTrigger: {
          trigger: element,
          start: start,
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return ref;
};

/**
 * Default export with all hooks
 */
export default {
  useFadeIn,
  useStagger,
  useScaleIn
};

