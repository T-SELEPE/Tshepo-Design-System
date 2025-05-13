import React from 'react';
import PropTypes from 'prop-types';
import {
  AlertContainer,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertDescription,
  AlertCloseButton,
  LeftBorder
} from './Alert.styles';
import { Icons } from '../utils/icons.jsx';

/**
 * Alert component for displaying messages with different status types
 */
export const Alert = ({
  title,
  children,
  type = 'info',
  variant = 'default',
  onClose,
  withBorder = false,
  className = '',
  ...props
}) => {
  // Get the right icon based on type from our icons utility
  const getIcon = () => {
    switch (type) {
      case 'info':
        return <Icons.AlertCircle />;
      case 'warning':
        return <Icons.AlertTriangle />;
      case 'success':
        return <Icons.CheckCircle />;
      case 'error':
        return <Icons.XCircle />;
      default:
        return null;
    }
  };

  return (
    <AlertContainer 
      type={type} 
      variant={variant}
      className={className}
      {...props}
    >
      {withBorder && <LeftBorder type={type} />}
      <AlertIcon type={type}>
        {getIcon()}
      </AlertIcon>
      <AlertContent>
        {title && <AlertTitle>{title}</AlertTitle>}
        {children && <AlertDescription>{children}</AlertDescription>}
      </AlertContent>
      {onClose && (
        <AlertCloseButton onClick={onClose} type={type} aria-label="Close alert">
          <Icons.X />
        </AlertCloseButton>
      )}
    </AlertContainer>
  );
};

Alert.propTypes = {
  /** Alert title */
  title: PropTypes.string,
  /** Alert content/description */
  children: PropTypes.node,
  /** Alert type/status */
  type: PropTypes.oneOf(['info', 'warning', 'success', 'error']),
  /** Visual variant */
  variant: PropTypes.oneOf(['default', 'subtle']),
  /** Close handler function */
  onClose: PropTypes.func,
  /** Whether to display a colored border on the left */
  withBorder: PropTypes.bool,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default Alert; 