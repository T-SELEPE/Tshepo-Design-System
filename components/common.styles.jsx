import { createGlobalStyle, css } from 'styled-components';

// Color palette based on screenshots
export const colors = {
  // Primary colors
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  // Neutrals
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  // Semantic colors
  success: {
    light: '#d1fae5',
    default: '#10b981',
    dark: '#047857',
  },
  error: {
    light: '#fee2e2',
    default: '#ef4444',
    dark: '#b91c1c',
  },
  warning: {
    light: '#fef3c7',
    default: '#f59e0b',
    dark: '#92400e',
  },
  info: {
    light: '#dbeafe',
    default: '#3b82f6',
    dark: '#1e40af',
  },
};

// Font settings
export const typography = {
  fontFamily: "'Poppins', sans-serif",
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
  },
};

// Common borders, shadows, and spacing
export const borders = {
  radius: {
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    pill: '9999px',
  },
  width: {
    thin: '1px',
    regular: '2px',
    thick: '4px',
  },
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};

export const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
};

// Animation durations
export const animation = {
  fast: '100ms',
  normal: '200ms',
  slow: '300ms',
};

// Focus styles for accessibility
export const focusStyle = css`
  outline: none;
  box-shadow: 0 0 0 2px ${colors.primary[300]};
`;

// Global styles to apply the font family and other base styles
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  
  html {
    font-size: 16px;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: ${typography.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  button, input, textarea, select {
    font-family: ${typography.fontFamily};
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin-top: 0;
    font-family: ${typography.fontFamily};
  }
`;

// Common component styles
export const baseInputStyles = css`
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSizes.md};
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${borders.radius.md};
  border: ${borders.width.thin} solid ${colors.gray[300]};
  background-color: white;
  transition: all ${animation.normal} ease-in-out;
  
  &:focus {
    ${focusStyle}
    border-color: ${colors.primary[500]};
  }
  
  &:disabled {
    background-color: ${colors.gray[100]};
    color: ${colors.gray[500]};
    cursor: not-allowed;
  }
`;

export default {
  colors,
  typography,
  borders,
  shadows,
  spacing,
  animation,
  focusStyle,
  baseInputStyles,
}; 