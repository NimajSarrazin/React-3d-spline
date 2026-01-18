import { useState, useEffect } from 'react';
import { heroTexts, ANIMATION_CONFIG } from '../models/HeroModel';

/**
 * Typing Animation Controller Hook
 * This is the CONTROLLER layer in MVC pattern
 * Manages the typing animation logic and state
 * 
 * @returns {Object} Object containing displayedText for the view
 */
export const useTypingAnimation = () => {
  // State management
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Get current text from model
    const currentText = heroTexts[currentTextIndex];
    
    // Determine animation speed based on current action
    const typingSpeed = isDeleting 
      ? ANIMATION_CONFIG.DELETING_SPEED 
      : ANIMATION_CONFIG.TYPING_SPEED;

    /**
     * Handle pause after typing completes
     * Waits for a pause duration before starting deletion
     */
    if (!isDeleting && displayedText === currentText) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, ANIMATION_CONFIG.PAUSE_AFTER_TYPING);
      
      return () => clearTimeout(pauseTimer);
    }

    /**
     * Handle transition to next text after deletion completes
     * Moves to the next text in the array (loops back to first)
     */
    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
      return;
    }

    /**
     * Main typing animation timer
     * Either adds a character (typing) or removes a character (deleting)
     */
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward: add next character
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
      } else {
        // Deleting: remove last character
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
      }
    }, typingSpeed);

    // Cleanup timer on unmount or dependency change
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  // Return only the data needed by the view
  return { displayedText };
};

