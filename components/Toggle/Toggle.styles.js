import styled, { css } from 'styled-components';
import { colors, typography, borderRadius, spacing, animation, focusStyle } from '../styles/globals';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  font-family: ${typography.fontFamily};
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  
  &:focus + .slider {
    ${focusStyle}
  }
`;

const getVariantColor = (variant) => {
  switch (variant) {
    case 'primary':
      return colors.primary;
    case 'success':
      return colors.success;
    case 'danger':
      return colors.error;
    case 'warning':
      return colors.warning;
    case 'info':
      return colors.info;
    default:
      return colors.primary;
  }
};

const getSizeStyles = (size) => {
  switch (size) {
    case 'small':
      return css`
        width: 36px;
        height: 20px;
        
        &:before {
          height: 14px;
          width: 14px;
          transform: translate(3px, -50%);
        }
        
        ${ToggleInput}:checked + & {
          &:before {
            transform: translate(19px, -50%);
          }
        }
      `;
    case 'large':
      return css`
        width: 60px;
        height: 32px;
        
        &:before {
          height: 24px;
          width: 24px;
          transform: translate(4px, -50%);
        }
        
        ${ToggleInput}:checked + & {
          &:before {
            transform: translate(32px, -50%);
          }
        }
      `;
    default: // medium
      return css`
        width: 44px;
        height: 24px;
        
        &:before {
          height: 18px;
          width: 18px;
          transform: translate(3px, -50%);
        }
        
        ${ToggleInput}:checked + & {
          &:before {
            transform: translate(23px, -50%);
          }
        }
      `;
  }
};

export const ToggleSlider = styled.span`
  position: relative;
  display: inline-block;
  border-radius: ${borderRadius.pill};
  background-color: ${colors.gray300};
  transition: all ${animation.normal};
  
  ${props => getSizeStyles(props.size)}
  
  &:before {
    position: absolute;
    content: "";
    border-radius: 50%;
    background-color: ${colors.white};
    transition: all ${animation.normal};
    top: 50%;
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  }
  
  ${ToggleInput}:checked + & {
    background-color: ${props => getVariantColor(props.variant)};
  }
  
  ${ToggleInput}:disabled + & {
    background-color: ${colors.gray200};
    cursor: not-allowed;
    
    &:before {
      background-color: ${colors.gray300};
    }
  }
`;

export const ToggleLabel = styled.label`
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSizes.sm};
  font-weight: ${typography.fontWeights.medium};
  color: ${props => props.disabled ? colors.gray500 : colors.gray700};
  margin-left: ${spacing.md};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`; 