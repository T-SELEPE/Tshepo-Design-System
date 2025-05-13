import styled, { css } from 'styled-components';
import { colors, typography, borders, spacing, animation, focusStyle } from '../common.styles';

export const ToggleCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  
  & > div {
    display: flex;
    align-items: center;
  }
`;

export const ToggleCounterLabel = styled.label`
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSizes.md};
  color: ${props => props.disabled ? colors.gray[500] : colors.gray[900]};
  margin-bottom: ${spacing.xs};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
`;

const getVariantStyles = (variant) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${colors.primary[600]};
        color: white;
        border: none;
        
        &:hover:not(:disabled) {
          background-color: ${colors.primary[700]};
        }
        
        &:active:not(:disabled) {
          background-color: ${colors.primary[800]};
        }
      `;
    case 'outlined':
      return css`
        background-color: transparent;
        color: ${colors.primary[600]};
        border: 1px solid ${colors.primary[600]};
        
        &:hover:not(:disabled) {
          background-color: ${colors.primary[50]};
        }
        
        &:active:not(:disabled) {
          background-color: ${colors.primary[100]};
        }
      `;
    default:
      return css`
        background-color: ${colors.gray[200]};
        color: ${colors.gray[800]};
        border: none;
        
        &:hover:not(:disabled) {
          background-color: ${colors.gray[300]};
        }
        
        &:active:not(:disabled) {
          background-color: ${colors.gray[400]};
        }
      `;
  }
};

const getSizeStyles = (size) => {
  switch (size) {
    case 'small':
      return css`
        width: 30px;
        height: 30px;
        font-size: ${typography.fontSizes.sm};
      `;
    case 'large':
      return css`
        width: 48px;
        height: 48px;
        font-size: ${typography.fontSizes.xl};
      `;
    default: // medium
      return css`
        width: 38px;
        height: 38px;
        font-size: ${typography.fontSizes.md};
      `;
  }
};

export const ToggleCounterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borders.radius.md};
  font-weight: ${typography.fontWeights.semibold};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all ${animation.normal} ease;
  
  ${props => getVariantStyles(props.variant)}
  ${props => getSizeStyles(props.size)}
  
  &:disabled {
    opacity: 0.5;
    background-color: ${colors.gray[200]};
    color: ${colors.gray[500]};
    cursor: not-allowed;
  }
  
  &:focus {
    ${focusStyle}
  }
`;

export const ToggleCounterValue = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${typography.fontFamily};
  font-weight: ${typography.fontWeights.medium};
  color: ${props => props.disabled ? colors.gray[500] : colors.gray[900]};
  padding: 0 ${spacing.md};
  
  ${props => {
    switch (props.size) {
      case 'small':
        return css`
          width: 40px;
          font-size: ${typography.fontSizes.sm};
        `;
      case 'large':
        return css`
          width: 60px;
          font-size: ${typography.fontSizes.lg};
        `;
      default: // medium
        return css`
          width: 50px;
          font-size: ${typography.fontSizes.md};
        `;
    }
  }}
`; 