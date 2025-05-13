import styled, { css } from 'styled-components';
import { colors, typography, borderRadius, spacing, animation } from '../styles/globals';

// Color variables for tags
const colorTokens = {
  default: {
    base: colors.gray500,
    light: colors.gray100,
    lighter: colors.gray50,
    border: colors.gray300,
  },
  primary: {
    base: colors.primary,
    light: '#F4F3FF',
    lighter: '#F9F8FF',
    border: '#D6BBFB',
  },
  success: {
    base: colors.success,
    light: colors.successLight,
    lighter: '#F6FEF9',
    border: '#A6F4C5',
  },
  error: {
    base: colors.error,
    light: colors.errorLight,
    lighter: '#FFFBFA',
    border: '#FDA29B',
  },
  warning: {
    base: colors.warning,
    light: colors.warningLight,
    lighter: '#FFFDF5',
    border: '#FEC84B',
  },
  info: {
    base: colors.info,
    light: colors.infoLight,
    lighter: '#F5FBFF',
    border: '#B2DDFF',
  },
};

// Size variables for tags
const tagSizes = {
  small: {
    height: '24px',
    fontSize: typography.fontSizes.xs,
    padding: '2px 8px',
    borderRadius: borderRadius.sm,
    iconSize: '12px',
    iconMargin: spacing.xs,
  },
  medium: {
    height: '32px',
    fontSize: typography.fontSizes.sm,
    padding: '4px 10px',
    borderRadius: borderRadius.md,
    iconSize: '14px',
    iconMargin: spacing.sm,
  },
  large: {
    height: '40px',
    fontSize: typography.fontSizes.md,
    padding: '6px 12px',
    borderRadius: borderRadius.lg,
    iconSize: '16px',
    iconMargin: spacing.md,
  },
};

// Base tag container styles
export const TagContainer = styled.div`
  display: inline-flex;
  align-items: center;
  height: ${props => tagSizes[props.size].height};
  padding: ${props => tagSizes[props.size].padding};
  border-radius: ${props => tagSizes[props.size].borderRadius};
  font-family: ${typography.fontFamily};
  font-size: ${props => tagSizes[props.size].fontSize};
  font-weight: ${typography.fontWeights.medium};
  line-height: 1;
  transition: all ${animation.normal};
  opacity: ${props => props.disabled ? 0.5 : 1};
  cursor: ${props => {
    if (props.disabled) return 'not-allowed';
    if (props.clickable) return 'pointer';
    return 'default';
  }};
  user-select: none;
  
  ${props => {
    const color = colorTokens[props.color];
    
    // Variant-specific styles
    if (props.variant === 'filled') {
      return css`
        background-color: ${color.base};
        color: ${colors.white};
        border: none;
        
        &:hover {
          ${props.clickable && !props.disabled && css`
            filter: brightness(90%);
          `}
        }
      `;
    } else if (props.variant === 'outlined') {
      return css`
        background-color: transparent;
        color: ${color.base};
        border: 1px solid ${color.border};
        
        &:hover {
          ${props.clickable && !props.disabled && css`
            background-color: ${color.lighter};
          `}
        }
      `;
    } else { // subtle
      return css`
        background-color: ${color.light};
        color: ${color.base};
        border: none;
        
        &:hover {
          ${props.clickable && !props.disabled && css`
            background-color: ${color.base}15; /* 15% opacity */
          `}
        }
      `;
    }
  }}
`;

// Tag label
export const TagLabel = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Icon within tag
export const TagIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => tagSizes[props.size].iconMargin};
  font-size: ${props => tagSizes[props.size].iconSize};
  
  svg {
    width: ${props => tagSizes[props.size].iconSize};
    height: ${props => tagSizes[props.size].iconSize};
  }
  
  ${props => {
    // Inherit color from TagContainer based on variant
    if (props.variant === 'filled') {
      return css`
        color: ${colors.white};
      `;
    } else {
      return css`
        color: ${colorTokens[props.color].base};
      `;
    }
  }}
`;

// Dismiss button
export const TagDismissButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => tagSizes[props.size].iconMargin};
  width: ${props => parseInt(tagSizes[props.size].iconSize) + 2}px;
  height: ${props => parseInt(tagSizes[props.size].iconSize) + 2}px;
  padding: 0;
  background: none;
  border: none;
  border-radius: ${borderRadius.pill};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  outline: none;
  transition: background-color ${animation.normal};
  
  svg {
    width: ${props => tagSizes[props.size].iconSize};
    height: ${props => tagSizes[props.size].iconSize};
  }
  
  ${props => {
    // Inherit color from TagContainer based on variant
    if (props.variant === 'filled') {
      return css`
        color: ${colors.white};
        
        &:hover {
          ${!props.disabled && css`
            background-color: rgba(255, 255, 255, 0.2);
          `}
        }
      `;
    } else {
      return css`
        color: ${colorTokens[props.color].base};
        
        &:hover {
          ${!props.disabled && css`
            background-color: ${colorTokens[props.color].light};
          `}
        }
      `;
    }
  }}
`; 