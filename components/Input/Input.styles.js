import styled, { css } from 'styled-components';
import { colors, typography, borderRadius, spacing, focusStyle, animation } from '../styles/globals';

// Size variables
const inputSizes = {
  small: {
    height: '36px',
    padding: '8px 12px',
    fontSize: typography.fontSizes.xs,
    iconSize: '16px',
  },
  medium: {
    height: '44px',
    padding: '10px 14px',
    fontSize: typography.fontSizes.md,
    iconSize: '18px',
  },
  large: {
    height: '52px',
    padding: '12px 16px',
    fontSize: typography.fontSizes.lg,
    iconSize: '20px',
  },
};

// Container for the whole input component including label and helper text
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  font-family: ${typography.fontFamily};
  opacity: ${props => props.disabled ? 0.7 : 1};
`;

// Label for the input
export const InputLabel = styled.label`
  font-size: ${typography.fontSizes.sm};
  font-weight: ${typography.fontWeights.medium};
  color: ${props => {
    if (props.disabled) return colors.gray500;
    if (props.state === 'error') return colors.error;
    if (props.state === 'success') return colors.success;
    return colors.gray700;
  }};
  margin-bottom: 2px;

  .required-indicator {
    color: ${colors.error};
    margin-left: 2px;
  }
`;

// Wrapper for the input and icons
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${props => inputSizes[props.size].height};
  border-radius: ${borderRadius.md};
  background-color: ${props => props.disabled ? colors.gray50 : colors.white};
  transition: all ${props => props.animation} ease;

  ${props => {
    // Base styles by variant
    if (props.variant === 'filled') {
      return css`
        background-color: ${props.disabled ? colors.gray50 : colors.gray100};
        border: 1px solid ${props.disabled ? colors.gray200 : colors.gray100};
      `;
    } else if (props.variant === 'outlined') {
      return css`
        border: 1px solid ${props.disabled ? colors.gray200 : colors.gray300};
      `;
    } else { // default
      return css`
        border: 1px solid ${props.disabled ? colors.gray200 : colors.gray300};
      `;
    }
  }}

  ${props => {
    // State-specific styles
    if (props.state === 'error') {
      return css`
        border-color: ${colors.error};
        background-color: ${props.variant === 'filled' ? colors.errorLight : colors.white};
      `;
    } else if (props.state === 'success') {
      return css`
        border-color: ${colors.success};
        background-color: ${props.variant === 'filled' ? colors.successLight : colors.white};
      `;
    } else if (props.state === 'focused') {
      return css`
        border-color: ${colors.primary};
        ${focusStyle}
      `;
    }
  }}

  &:hover {
    ${props => {
      if (!props.disabled && props.state === 'default') {
        return css`border-color: ${colors.gray500};`;
      }
    }}
  }
`;

// The actual input element
export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${typography.fontFamily};
  font-size: ${props => inputSizes[props.size]?.fontSize || typography.fontSizes.md};
  color: ${props => props.disabled ? colors.gray500 : colors.gray900};
  padding: ${props => {
    const basePadding = inputSizes[props.size]?.padding || '10px 14px';
    const [vPadding, hPadding] = basePadding.split(' ');
    
    // Adjust horizontal padding based on icons
    const leftPadding = props.hasLeadingIcon ? '36px' : hPadding;
    const rightPadding = props.hasTrailingIcon ? '36px' : hPadding;
    
    return `${vPadding} ${rightPadding} ${vPadding} ${leftPadding}`;
  }};

  &::placeholder {
    color: ${colors.gray500};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

// Helper text below the input
export const HelperText = styled.span`
  font-size: ${typography.fontSizes.sm};
  color: ${props => {
    if (props.state === 'error') return colors.error;
    if (props.state === 'success') return colors.success;
    return colors.gray500;
  }};
  margin-top: 2px;
`;

// Icon container inside the input
export const InputIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.position === 'leading' ? 'left: 12px;' : 'right: 12px;'}
  color: ${props => {
    if (props.state === 'error') return colors.error;
    if (props.state === 'success') return colors.success;
    if (props.state === 'disabled') return colors.gray300;
    return colors.gray500;
  }};
  pointer-events: none;
`; 