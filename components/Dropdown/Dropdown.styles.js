import styled, { css, keyframes } from 'styled-components';
import { colors, typography, borderRadius, spacing, animation, focusStyle } from '../styles/globals';

// Size variables
const dropdownSizes = {
  small: {
    height: '36px',
    padding: '8px 12px',
    fontSize: typography.fontSizes.sm,
    borderRadius: borderRadius.sm,
  },
  medium: {
    height: '44px',
    padding: '10px 14px',
    fontSize: typography.fontSizes.md,
    borderRadius: borderRadius.md,
  },
  large: {
    height: '52px',
    padding: '12px 16px', 
    fontSize: typography.fontSizes.lg,
    borderRadius: borderRadius.lg,
  },
};

// Animations
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Container for the entire dropdown component
export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 90%;
  font-family: ${typography.fontFamily};
  opacity: ${props => props.disabled ? 0.7 : 1};
`;

// Label for the dropdown
export const DropdownLabel = styled.label`
  font-size: ${typography.fontSizes.sm};
  font-weight: ${typography.fontWeights.medium};
  color: ${props => props.disabled ? colors.gray500 : colors.gray700};
  margin-bottom: 2px;
`;

// Trigger button for the dropdown
export const DropdownTrigger = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${props => dropdownSizes[props.size].height};
  padding: ${props => dropdownSizes[props.size].padding};
  font-family: ${typography.fontFamily};
  font-size: ${props => dropdownSizes[props.size].fontSize};
  font-weight: ${typography.fontWeights.regular};
  color: ${props => props.disabled 
    ? colors.gray500 
    : props.hasValue ? colors.gray900 : colors.gray500};
  background-color: ${props => props.disabled ? colors.gray50 : colors.white};
  border: 1px solid ${props => {
    if (props.error) return colors.error;
    if (props.isOpen) return colors.primary;
    if (props.disabled) return colors.gray200;
    return colors.gray300;
  }};
  border-radius: ${props => dropdownSizes[props.size].borderRadius};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all ${animation.normal};
  outline: none;
  text-align: left;

  ${props => {
    // Variant-specific styles
    if (props.variant === 'filled') {
      return css`
        background-color: ${props.disabled ? colors.gray50 : colors.gray100};
        border-color: ${props.disabled ? colors.gray200 : colors.gray100};
      `;
    } else if (props.variant === 'underlined') {
      return css`
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${props.disabled ? colors.gray200 : colors.gray300};
        padding-left: 0;
        padding-right: 0;
        background-color: transparent;
      `;
    }
  }}

  &:hover {
    ${props => !props.disabled && !props.isOpen && !props.error && css`
      border-color: ${colors.gray500};
      ${props.variant === 'underlined' && css`
        border-bottom-color: ${colors.gray500};
      `}
    `}
  }

  &:focus {
    ${props => !props.disabled && css`
      border-color: ${colors.primary};
      ${props.variant === 'underlined' && css`
        border-bottom-color: ${colors.primary};
      `}
      ${focusStyle}
    `}
  }
`;

// Dropdown menu container
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 100%;
  max-height: 300px;
  overflow-y: overlay;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray200};
  border-radius: ${props => dropdownSizes[props.size].borderRadius};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  margin-top: ${spacing.xs};
  padding: ${spacing.xs} 0;
  
  /* Hide scrollbar when not needed */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray300};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  /* Only show scrollbar when hovering */
  &:not(:hover)::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

// Individual dropdown item
export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 14px;
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSizes.sm};
  color: ${props => props.disabled ? colors.gray500 : colors.gray900};
  background-color: ${props => props.isSelected ? colors.gray100 : colors.white};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color ${animation.normal};

  &:hover {
    ${props => !props.disabled && css`
      background-color: ${colors.gray50};
    `}
  }
`;

// Dropdown item text
export const DropdownItemText = styled.span`
  flex: 1;
`;

// Icon container
export const DropdownIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ${animation.normal};

  ${props => props.isOpen && css`
    transform: rotate(180deg);
  `}

  color: ${props => props.disabled ? colors.gray300 : colors.gray500};
`;

// Divider between dropdown items
export const DropdownDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.gray200};
  margin: ${spacing.xs} 0;
`;

// Header container for the dropdown
export const DropdownHeader = styled.div`
  padding: 10px 14px;
  font-size: ${typography.fontSizes.sm};
  font-weight: ${typography.fontWeights.medium};
  color: ${colors.gray700};
  border-bottom: 1px solid ${colors.gray200};
`;

// Footer container for the dropdown
export const DropdownFooter = styled.div`
  padding: 10px 14px;
  font-size: ${typography.fontSizes.sm};
  color: ${colors.gray700};
  border-top: 1px solid ${colors.gray200};
`;

// Icon in dropdown item
export const DropdownItemIcon = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${spacing.md};
  color: ${colors.gray500};
`;

// Loading spinner
export const DropdownLoadingIndicator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${spin} 1s linear infinite;
  color: ${colors.gray500};
`; 