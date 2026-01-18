/**
 * Font Loader Utility
 * Dynamically loads fonts based on the Fonts.js configuration
 * Can be used to switch fonts programmatically
 */

import { ACTIVE_FONT } from '../data/Fonts';

/**
 * Load Google Font dynamically
 * @param {string} fontUrl - Google Fonts URL
 */
export const loadGoogleFont = (fontUrl) => {
  if (!fontUrl) return;

  // Check if link already exists
  const existingLink = document.querySelector(`link[href="${fontUrl}"]`);
  if (existingLink) return;

  // Create and append link element
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = fontUrl;
  document.head.appendChild(link);
};

/**
 * Initialize fonts based on ACTIVE_FONT configuration
 */
export const initializeFonts = () => {
  // Load Google Fonts if configured
  if (ACTIVE_FONT.googleFont && ACTIVE_FONT.googleUrl) {
    loadGoogleFont(ACTIVE_FONT.googleUrl);
  }

  // Apply font family to root element
  document.documentElement.style.setProperty('--font-primary', ACTIVE_FONT.family);
};

/**
 * Switch to a different font
 * @param {string} fontName - Name of the font from FONTS object
 */
export const switchFont = (fontName, FONTS) => {
  const selectedFont = FONTS[fontName];
  if (!selectedFont) {
    console.warn(`Font "${fontName}" not found in FONTS configuration`);
    return;
  }

  // Load Google Font if needed
  if (selectedFont.googleFont && selectedFont.googleUrl) {
    loadGoogleFont(selectedFont.googleUrl);
  }

  // Apply font family
  document.documentElement.style.setProperty('--font-primary', selectedFont.family);
};

