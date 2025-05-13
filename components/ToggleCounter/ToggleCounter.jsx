import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  ToggleCounterContainer, 
  ToggleCounterValue,
  ToggleCounterButton, 
  ToggleCounterLabel
} from './ToggleCounter.styles';
import { Icons } from '../utils/icons.jsx';

/**
 * ToggleCounter component for incrementing and decrementing a value
 */
export const ToggleCounter = ({
  id,
  label,
  minValue = 0,
  maxValue = 100,
  initialValue = 0,
  step = 1,
  disabled = false,
  variant = 'default',
  size = 'medium',
  onChange,
  className = '',
  ...props
}) => {
  const [value, setValue] = useState(initialValue);
  
  // Generate a unique ID if none is provided
  const toggleCounterId = id || `toggle-counter-${Math.random().toString(36).substring(2, 9)}`;
  
  const handleIncrement = () => {
    if (disabled) return;
    const newValue = Math.min(value + step, maxValue);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };
  
  const handleDecrement = () => {
    if (disabled) return;
    const newValue = Math.max(value - step, minValue);
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <ToggleCounterContainer className={className} disabled={disabled}>
      {label && (
        <ToggleCounterLabel htmlFor={toggleCounterId} disabled={disabled}>
          {label}
        </ToggleCounterLabel>
      )}
      <div>
        <ToggleCounterButton
          type="button"
          onClick={handleDecrement}
          disabled={disabled || value <= minValue}
          size={size}
          variant={variant}
          aria-label="Decrease value"
        >
          <Icons.Minus />
        </ToggleCounterButton>
        <ToggleCounterValue 
          id={toggleCounterId}
          size={size}
          disabled={disabled}
        >
          {value}
        </ToggleCounterValue>
        <ToggleCounterButton
          type="button"
          onClick={handleIncrement}
          disabled={disabled || value >= maxValue}
          size={size}
          variant={variant}
          aria-label="Increase value"
        >
          <Icons.Plus />
        </ToggleCounterButton>
      </div>
    </ToggleCounterContainer>
  );
};

ToggleCounter.propTypes = {
  /** Unique identifier for the toggle counter */
  id: PropTypes.string,
  /** Label text to display with the toggle counter */
  label: PropTypes.node,
  /** Minimum allowed value */
  minValue: PropTypes.number,
  /** Maximum allowed value */
  maxValue: PropTypes.number,
  /** Starting value */
  initialValue: PropTypes.number,
  /** Amount to increment/decrement by */
  step: PropTypes.number,
  /** Whether the toggle counter is disabled */
  disabled: PropTypes.bool,
  /** Visual variant of the toggle counter buttons */
  variant: PropTypes.oneOf(['default', 'primary', 'outlined']),
  /** Size of the toggle counter */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Handler for change events */
  onChange: PropTypes.func,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default ToggleCounter; 