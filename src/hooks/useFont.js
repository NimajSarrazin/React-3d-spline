/**
 * useFont Hook
 * React hook for managing and switching fonts dynamically
 * Uses the Fonts.js configuration
 */

import { useEffect } from 'react';
import { ACTIVE_FONT, FONTS } from '../data/Fonts';
import { switchFont, initializeFonts } from '../utils/fontLoader';

/**
 * Custom hook to manage fonts
 * @param {string} fontName - Optional font name to switch to (from FONTS object)
 * @returns {Object} Font utilities and current font info
 */
export const useFont = (fontName = null) => {
  useEffect(() => {
    // Initialize fonts on mount
    initializeFonts();

    // Switch to specified font if provided
    if (fontName && FONTS[fontName]) {
      switchFont(fontName, FONTS);
    }
  }, [fontName]);

  return {
    currentFont: ACTIVE_FONT,
    availableFonts: FONTS,
    switchFont: (name) => switchFont(name, FONTS)
  };
};

