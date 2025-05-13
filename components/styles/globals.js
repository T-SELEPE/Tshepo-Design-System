// Global styles and constants for the design system

// Font variables
export const typography = {
  fontFamily: 'Poppins, sans-serif',
  fontWeights: {
    regular: 400,
    medium: 500, 
    semibold: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
  },
};

// Color variables
export const colors = {
  primary: '#6941C6',
  gray50: '#F9FAFB',
  gray100: '#F2F4F7',
  gray200: '#EAECF0',
  gray300: '#D0D5DD',
  gray500: '#667085',
  gray700: '#344054',
  gray900: '#101828',
  white: '#FFFFFF',
  focus: 'rgba(105, 65, 198, 0.3)', // Primary with 30% opacity for focus ring
  success: '#12B76A',
  error: '#F04438',
  warning: '#F79009',
  info: '#0BA5EC',
  successLight: '#ECFDF3',
  errorLight: '#FEF3F2',
  warningLight: '#FFFAEB',
  infoLight: '#EFF8FF',
};

// Border radius
export const borderRadius = {
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  pill: '9999px',
};

// Spacing
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  xxl: '32px',
};

// Animations
export const animation = {
  fast: '0.15s',
  normal: '0.2s',
  slow: '0.3s',
};

// Focus style for accessibility
export const focusStyle = `
  outline: none;
  box-shadow: 0 0 0 4px ${colors.focus};
`;

// Use in components like:
// import { typography, colors, borderRadius } from '../styles/globals'; 