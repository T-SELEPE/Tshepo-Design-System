import React from 'react';
import PropTypes from 'prop-types';
import { 
  TagContainer, 
  TagLabel, 
  TagIcon,
  TagDismissButton 
} from './Tag.styles';
import { Icons } from '../utils/icons.jsx';

/**
 * Tag component for displaying categorization labels
 */
export const Tag = ({
  label,
  icon,
  color = 'default',
  size = 'medium',
  variant = 'filled',
  dismissible = false,
  disabled = false,
  onClick,
  onDismiss,
  className = '',
  ...props
}) => {
  const handleDismiss = (e) => {
    e.stopPropagation();
    if (disabled) return;
    if (onDismiss) onDismiss();
  };

  const handleClick = () => {
    if (disabled || !onClick) return;
    onClick();
  };

  const isClickable = !!onClick && !disabled;

  return (
    <TagContainer 
      className={className}
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      clickable={isClickable}
      onClick={isClickable ? handleClick : undefined}
      {...props}
    >
      {icon && (
        <TagIcon size={size} color={color} variant={variant} disabled={disabled}>
          {icon}
        </TagIcon>
      )}
      <TagLabel>{label}</TagLabel>
      {dismissible && (
        <TagDismissButton 
          type="button"
          onClick={handleDismiss}
          disabled={disabled}
          size={size}
          color={color}
          variant={variant}
          aria-label="Dismiss tag"
        >
          <Icons.X />
        </TagDismissButton>
      )}
    </TagContainer>
  );
};

Tag.propTypes = {
  /** Text content of the tag */
  label: PropTypes.string.isRequired,
  /** Optional icon to display before the label */
  icon: PropTypes.node,
  /** Color scheme of the tag */
  color: PropTypes.oneOf(['default', 'primary', 'success', 'error', 'warning', 'info']),
  /** Size of the tag */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Visual variant of the tag */
  variant: PropTypes.oneOf(['filled', 'outlined', 'subtle']),
  /** Whether the tag can be dismissed/removed */
  dismissible: PropTypes.bool,
  /** Whether the tag is disabled */
  disabled: PropTypes.bool,
  /** Handler for click events (makes the tag clickable) */
  onClick: PropTypes.func,
  /** Handler for dismiss button click */
  onDismiss: PropTypes.func,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default Tag; 