import styled, { css } from 'styled-components';
import { colors, typography, borderRadius, spacing, animation, focusStyle } from '../styles/globals';

// Colors for different alert types
const alertColors = {
  info: {
    background: colors.infoLight,
    borderColor: colors.info,
    color: colors.info,
  },
  success: {
    background: colors.successLight,
    borderColor: colors.success,
    color: colors.success,
  },
  warning: {
    background: colors.warningLight,
    borderColor: colors.warning,
    color: colors.warning,
  },
  error: {
    background: colors.errorLight,
    borderColor: colors.error,
    color: colors.error,
  },
};

// Alert container with variants
export const AlertContainer = styled.div`
  display: flex;
  width: 50%;
  font-family: ${typography.fontFamily};
  border-radius: ${borderRadius.md};
  padding: ${spacing.md};
  position: relative;
  overflow: hidden;
  align-items: flex-start;
  line-height: 1.5;

  /* Basic style based on type */
  ${({ type }) => {
    const typeColors = alertColors[type] || alertColors.info;
    return css`
      background-color: ${typeColors.background};
      color: ${typeColors.color};
    `;
  }}

  /* Variant styles */
  ${({ variant, type }) => {
    if (variant === 'subtle') {
      return css`
        background-color: transparent;
        border-left: 4px solid ${alertColors[type].borderColor};
      `;
    }
    return '';
  }}
`;

export const LeftBorder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  
  ${({ type }) => {
    const typeColors = alertColors[type] || alertColors.info;
    return css`
      background-color: ${typeColors.borderColor};
    `;
  }}
`;

export const AlertIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${spacing.sm};
  
  ${({ type }) => {
    const typeColors = alertColors[type] || alertColors.info;
    return css`
      color: ${typeColors.color};
    `;
  }}
`;

export const AlertContent = styled.div`
  flex: 1;
`;

export const AlertTitle = styled.div`
  font-weight: ${typography.fontWeights.semibold};
  font-size: ${typography.fontSizes.md};
  margin-bottom: ${spacing.xs};
  color: inherit;
`;

export const AlertDescription = styled.div`
  font-size: ${typography.fontSizes.sm};
  font-weight: ${typography.fontWeights.regular};
  color: inherit;
`;

export const AlertCloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.xs};
  border-radius: ${borderRadius.sm};
  margin-left: ${spacing.sm};
  color: inherit;
  transition: background-color ${animation.normal} ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  &:focus {
    outline: none;
  }
`; 