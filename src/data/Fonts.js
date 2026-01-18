/**
 * Font Configuration Data
 * Centralized font settings for easy management and switching
 * 
 * To change the active font, update the ACTIVE_FONT constant below
 */

// Available font options
export const FONTS = {
  SPACE_GROTESK: {
    name: 'Space Grotesk',
    family: 'Space Grotesk, sans-serif',
    weights: ['300', '400', '500', '600', '700'],
    googleFont: true,
    // Google Fonts URL
    googleUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
  },
  SATOSHI: {
    name: 'Satoshi',
    family: 'Satoshi, sans-serif',
    weights: ['300', '400', '500', '600', '700', '900'],
    googleFont: false,
    // Note: Satoshi is a premium font, you'll need to host it yourself
    // Or use an alternative like Inter from Google Fonts
    googleUrl: null
  },
  INTER: {
    name: 'Inter',
    family: 'Inter, sans-serif',
    weights: ['300', '400', '500', '600', '700'],
    googleFont: true,
    // Alternative similar to Satoshi
    googleUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  }
};

// Active font - change this to switch fonts throughout the application
export const ACTIVE_FONT = FONTS.SPACE_GROTESK;

// Font weight constants for easy usage
export const FONT_WEIGHTS = {
  LIGHT: '300',
  REGULAR: '400',
  MEDIUM: '500',
  SEMIBOLD: '600',
  BOLD: '700',
  BLACK: '900'
};

