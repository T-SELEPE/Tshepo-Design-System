import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.styles';

/**
 * Button component that supports multiple variants and sizes as per design system
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  rounded = false,
  iconOnly = false,
  className = '',
  onClick,
  ...props
}) => {
  const buttonClassNames = [
    className,
    iconOnly ? 'icon-only' : '',
  ].filter(Boolean).join(' ');

  return (
    <ButtonContainer
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      rounded={rounded}
      className={buttonClassNames}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {iconLeft && <span className="icon-left">{iconLeft}</span>}
      {children}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </ButtonContainer>
  );
};

Button.propTypes = {
  /** Button contents */
  children: PropTypes.node,
  /** Button visual variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'success', 'danger', 'warning', 'info', 'rounded']),
  /** How large should the button be? */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Whether the button is disabled */
  disabled: PropTypes.bool,
  /** Whether the button should take up the full width of its container */
  fullWidth: PropTypes.bool,
  /** Icon to display on the left side of the button text */
  iconLeft: PropTypes.node,
  /** Icon to display on the right side of the button text */
  iconRight: PropTypes.node,
  /** Whether to use a fully rounded (pill) shape */
  rounded: PropTypes.bool,
  /** Whether this is an icon-only button with no text */
  iconOnly: PropTypes.bool,
  /** Additional CSS class */
  className: PropTypes.string,
  /** Optional click handler */
  onClick: PropTypes.func,
};

export default Button; 