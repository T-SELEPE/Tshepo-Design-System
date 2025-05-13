import styled, { css } from 'styled-components';
import { colors, typography, borderRadius, spacing, animation, focusStyle, blueFocusStyle } from '../styles/globals';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  margin-bottom: ${spacing.sm};
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0;
  
  &:focus + .checkmark {
    ${blueFocusStyle}
  }
`;

const getVariantStyles = (variant, checked, error) => {
  if (error) {
    return css`
      border: 1px solid ${colors.error};
      background-color: ${checked ? colors.error : colors.white};
    `;
  }

  switch (variant) {
    case 'outlined':
      return css`
        border: 1px solid ${colors.blue500};
        background-color: transparent;
        color: ${colors.blue500};
      `;
    case 'filled':
      return css`
        border: 1px solid ${colors.blue500};
        background-color: ${checked ? colors.blue500 : 'transparent'};
        color: ${colors.white};
      `;
    default:
      return css`
        border: 1px solid ${colors.gray300};
        background-color: ${checked ? colors.blue500 : colors.white};
        color: ${colors.white};
      `;
  }
};

export const CheckboxCheckmark = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  min-width: 20px;
  width: 20px;
  border-radius: ${borderRadius.sm};
  transition: all ${animation.normal} ease;
  
  ${props => getVariantStyles(props.variant, props.checked, props.error)}
  
  &:hover {
    ${props => !props.disabled && css`
      border-color: ${colors.blue500};
    `}
  }
`;

export const CheckIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: currentColor;
  font-size: 16px;
`;

export const CheckboxLabel = styled.label`
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSizes.md};
  color: ${props => props.disabled ? colors.gray500 : colors.gray900};
  margin-left: ${spacing.sm};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  line-height: 1.5;
  
  .hint {
    font-size: ${typography.fontSizes.sm};
    color: ${colors.gray500};
    margin-top: ${spacing.xs};
  }
`; 