import styled, { css } from 'styled-components';
import { colors, typography, borderRadius, spacing, animation, focusStyle } from '../styles/globals';

// Size variables
const textareaSizes = {
  small: {
    minHeight: '80px',
    padding: '8px 12px',
    fontSize: typography.fontSizes.sm,
  },
  medium: {
    minHeight: '120px',
    padding: '10px 14px',
    fontSize: typography.fontSizes.md,
  },
  large: {
    minHeight: '160px',
    padding: '12px 16px',
    fontSize: typography.fontSizes.lg,
  },
};

// Container for the whole textarea component including label and helper text
export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  font-family: ${typography.fontFamily};
  opacity: ${props => props.disabled ? 0.7 : 1};
`;

// Label for the textarea
export const TextareaLabel = styled.label`
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

// Wrapper for the textarea
export const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${borderRadius.md};
  background-color: ${props => props.disabled ? colors.gray50 : colors.white};
  transition: all ${animation.normal};

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
    }
  }}

  &:focus-within {
    border-color: ${colors.primary};
    ${focusStyle}
  }

  &:hover:not(:focus-within) {
    ${props => {
      if (!props.disabled && props.state === 'default') {
        return css`border-color: ${colors.gray500};`;
      }
    }}
  }
`;

// The actual textarea element
export const StyledTextarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-family: ${typography.fontFamily};
  font-size: ${props => textareaSizes[props.size]?.fontSize || typography.fontSizes.md};
  color: ${props => props.disabled ? colors.gray500 : colors.gray900};
  resize: ${props => props.resize || 'vertical'};
  min-height: ${props => textareaSizes[props.size]?.minHeight || '120px'};
  padding: ${props => textareaSizes[props.size]?.padding || '10px 14px'};

  &::placeholder {
    color: ${colors.gray500};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

// Helper text below the textarea
export const HelperText = styled.span`
  font-size: ${typography.fontSizes.sm};
  color: ${props => {
    if (props.state === 'error') return colors.error;
    if (props.state === 'success') return colors.success;
    return colors.gray500;
  }};
  margin-top: 2px;
`;

// Character counter
export const CharacterCounter = styled.div`
  font-size: ${typography.fontSizes.xs};
  color: ${props => props.isOverLimit ? colors.error : colors.gray500};
  margin-top: 2px;
  text-align: right;
`; 