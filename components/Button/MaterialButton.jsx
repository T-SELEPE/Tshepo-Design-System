import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { colors, typography, spacing, borderRadius } from '../styles/globals';

// Create a styled Material UI button that uses our design system tokens
const StyledButton = styled(Button)(({ theme, size, variant, color }) => {
  // Size styles
  const sizeStyles = {
    small: {
      padding: '6px 12px',
      fontSize: typography.fontSizes.sm,
      height: '36px',
    },
    medium: {
      padding: '8px 16px',
      fontSize: typography.fontSizes.md,
      height: '44px',
    },
    large: {
      padding: '10px 20px',
      fontSize: typography.fontSizes.lg,
      height: '52px',
    },
  };

  // Get color based on variant and color prop
  const getButtonColors = () => {
    const baseColors = {
      primary: {
        main: colors.primary,
        hover: '#5735B5', // darker shade of primary
        text: colors.white,
      },
      secondary: {
        main: colors.gray200,
        hover: colors.gray300,
        text: colors.gray900,
      },
      success: {
        main: colors.success,
        hover: '#0EA56A', // darker shade of success
        text: colors.white,
      },
      error: {
        main: colors.error,
        hover: '#E03E3E', // darker shade of error
        text: colors.white,
      },
      warning: {
        main: colors.warning,
        hover: '#E58208', // darker shade of warning
        text: colors.white,
      },
      info: {
        main: colors.info,
        hover: '#0A94D5', // darker shade of info
        text: colors.white,
      },
    };
    
    const selectedColor = baseColors[color] || baseColors.primary;
    
    if (variant === 'contained') {
      return {
        backgroundColor: selectedColor.main,
        color: selectedColor.text,
        '&:hover': {
          backgroundColor: selectedColor.hover,
        },
      };
    } else if (variant === 'outlined') {
      return {
        backgroundColor: 'transparent',
        color: selectedColor.main,
        border: `1px solid ${selectedColor.main}`,
        '&:hover': {
          backgroundColor: `${selectedColor.main}10`, // 10% opacity
          borderColor: selectedColor.hover,
        },
      };
    } else { // text variant
      return {
        backgroundColor: 'transparent',
        color: selectedColor.main,
        '&:hover': {
          backgroundColor: `${selectedColor.main}10`, // 10% opacity
        },
      };
    }
  };

  return {
    fontFamily: typography.fontFamily,
    fontWeight: typography.fontWeights.medium,
    borderRadius: borderRadius.md,
    textTransform: 'none',
    ...sizeStyles[size || 'medium'],
    ...getButtonColors(),
    '&.Mui-disabled': {
      opacity: 0.6,
      color: variant === 'contained' ? colors.white : colors.gray500,
    },
    '& .MuiButton-startIcon': {
      marginRight: spacing.sm,
      marginLeft: 0,
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiButton-endIcon': {
      marginLeft: spacing.sm,
      marginRight: 0,
      display: 'flex',
      alignItems: 'center',
    },
  };
});

// Create a styled IconButton that uses our design system tokens
const StyledIconButton = styled(IconButton)(({ theme, size, color }) => {
  // Size styles
  const sizeStyles = {
    small: {
      padding: '6px',
      fontSize: typography.fontSizes.sm,
      width: '36px',
      height: '36px',
    },
    medium: {
      padding: '8px',
      fontSize: typography.fontSizes.md,
      width: '44px',
      height: '44px',
    },
    large: {
      padding: '10px',
      fontSize: typography.fontSizes.lg,
      width: '52px',
      height: '52px',
    },
  };

  const selectedColor = color || 'primary';
  
  return {
    fontFamily: typography.fontFamily,
    color: colors[selectedColor] || colors.primary,
    ...sizeStyles[size || 'medium'],
    '&:hover': {
      backgroundColor: `${colors[selectedColor] || colors.primary}15`, // 15% opacity
    },
    '&.Mui-disabled': {
      opacity: 0.6,
    },
  };
});

/**
 * Material Button component that integrates Material UI with our design system
 */
export const MaterialButton = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  startIcon = null,
  endIcon = null,
  iconOnly = false,
  rounded = false,
  onClick,
  className = '',
  ...props
}) => {
  if (iconOnly && (startIcon || endIcon)) {
    return (
      <StyledIconButton
        size={size}
        color={color}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        className={className}
        sx={{ borderRadius: rounded ? '50%' : undefined }}
        {...props}
      >
        {startIcon || endIcon}
      </StyledIconButton>
    );
  }

  return (
    <StyledButton
      variant={variant}
      color={color}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={disabled ? undefined : onClick}
      className={className}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{ borderRadius: rounded ? '50px' : undefined }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

MaterialButton.propTypes = {
  /** Button content */
  children: PropTypes.node,
  /** Button variant */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  /** Button color */
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'warning', 'info']),
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Whether the button should take up the full width of its container */
  fullWidth: PropTypes.bool,
  /** Icon to display at the start of the button */
  startIcon: PropTypes.node,
  /** Icon to display at the end of the button */
  endIcon: PropTypes.node,
  /** Whether this is an icon-only button */
  iconOnly: PropTypes.bool,
  /** Whether to use rounded corners */
  rounded: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default MaterialButton; 