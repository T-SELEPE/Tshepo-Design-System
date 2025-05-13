import styled, { css } from 'styled-components';
import { colors, typography, borders, spacing, animation, focusStyle } from '../common.styles';

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  margin-bottom: ${spacing.sm};
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0;
  
  &:focus + .radio-button {
    ${focusStyle}
  }
`;

const getVariantStyles = (variant, checked, error) => {
  if (error) {
    return css`
      border: ${borders.width.thin} solid ${colors.error.default};
      
      &:after {
        background-color: ${checked ? colors.error.default : 'transparent'};
      }
    `;
  }

  switch (variant) {
    case 'outlined':
      return css`
        border: ${borders.width.thin} solid ${colors.primary[600]};
        background-color: transparent;
        
        &:after {
          background-color: ${checked ? colors.primary[600] : 'transparent'};
        }
      `;
    case 'filled':
      return css`
        border: ${borders.width.thin} solid ${colors.primary[600]};
        background-color: ${colors.primary[50]};
        
        &:after {
          background-color: ${checked ? colors.primary[600] : 'transparent'};
        }
      `;
    default:
      return css`
        border: ${borders.width.thin} solid ${colors.gray[400]};
        background-color: white;
        
        &:after {
          background-color: ${checked ? colors.primary[600] : 'transparent'};
        }
      `;
  }
};

export const RadioButton = styled.span`
  position: relative;
  display: inline-block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  transition: all ${animation.normal} ease;
  
  ${props => getVariantStyles(props.variant, props.checked, props.error)}
  
  &:after {
    content: "";
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all ${animation.normal} ease;
  }
  
  &:hover {
    ${props => !props.disabled && css`
      border-color: ${colors.primary[500]};
    `}
  }
`;

export const RadioLabel = styled.label`
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSizes.md};
  color: ${props => props.disabled ? colors.gray[500] : colors.gray[900]};
  margin-left: ${spacing.sm};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`; 