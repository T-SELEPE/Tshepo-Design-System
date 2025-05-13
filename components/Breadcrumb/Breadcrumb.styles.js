import styled, { css } from 'styled-components';
import { colors, typography, spacing } from '../styles/globals';

export const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  font-family: ${typography.fontFamily};
  margin: ${spacing.md} 0;
`;

export const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${typography.fontSizes.md};
  
  &:last-child {
    color: ${colors.gray700};
    font-weight: ${typography.fontWeights.medium};
  }
`;

export const BreadcrumbLink = styled.a`
  color: ${props => props.current ? colors.gray700 : colors.primary};
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  
  ${props => !props.current && css`
    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const BreadcrumbSeparator = styled.span`
  display: flex;
  align-items: center;
  margin: 0 ${spacing.sm};
  color: ${colors.gray500};
`; 