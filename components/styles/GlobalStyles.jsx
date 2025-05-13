import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { typography } from './globals';

const GlobalStylesComponent = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Apply Poppins to all design system components by default */
  body, button, input, select, textarea {
    font-family: ${typography.fontFamily};
  }
`;

export const GlobalStyles = () => <GlobalStylesComponent />;

export default GlobalStyles; 