import styled, { css } from 'styled-components';
import { colors, animation } from '../common.styles';

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
`;

// Apply size styles to the star container
const getSizeStyles = (size) => {
  switch (size) {
    case 'small':
      return css`
        width: 16px;
        height: 16px;
      `;
    case 'large':
      return css`
        width: 24px;
        height: 24px;
      `;
    default: // medium
      return css`
        width: 20px;
        height: 20px;
      `;
  }
};

export const StarContainer = styled.span`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform ${animation.normal} ease;
  color: ${props => props.disabled ? colors.gray[300] : colors.warning.default};
  
  ${props => getSizeStyles(props.size)}
  
  &:hover {
    ${props => !props.disabled && css`
      transform: scale(1.1);
    `}
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`; 