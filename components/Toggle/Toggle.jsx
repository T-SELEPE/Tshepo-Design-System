import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  ToggleContainer, 
  ToggleInput, 
  ToggleSlider,
  ToggleLabel,
} from './Toggle.styles';

/**
 * Toggle switch component that supports multiple variants and sizes
 */
export const Toggle = ({
  id,
  name,
  label,
  checked = false,
  disabled = false,
  size = 'medium',
  variant = 'default',
  onChange,
  className = '',
  ...props
}) => {
  // Internal state for the toggle when onChange is not provided
  const [isChecked, setIsChecked] = useState(checked);
  
  // Update internal state when checked prop changes
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  
  // Handle the toggle change
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    } else {
      setIsChecked(!isChecked);
    }
  };

  // Generate a unique ID if none is provided
  const toggleId = id || `toggle-${Math.random().toString(36).substring(2, 9)}`;

  // The actual checked state to use (from props if onChange is provided, from state otherwise)
  const toggleChecked = onChange ? checked : isChecked;

  return (
    <ToggleContainer className={className} disabled={disabled}>
      <ToggleInput
        id={toggleId}
        name={name}
        type="checkbox"
        checked={toggleChecked}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      <ToggleSlider 
        className="slider" 
        size={size}
        variant={variant} 
        disabled={disabled}
      />
      {label && (
        <ToggleLabel htmlFor={toggleId} disabled={disabled}>
          {label}
        </ToggleLabel>
      )}
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  /** Unique identifier for the toggle */
  id: PropTypes.string,
  /** Name attribute for the toggle input */
  name: PropTypes.string,
  /** Label text to display next to the toggle */
  label: PropTypes.node,
  /** Whether the toggle is checked/on */
  checked: PropTypes.bool,
  /** Whether the toggle is disabled */
  disabled: PropTypes.bool,
  /** Size of the toggle */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Visual variant of the toggle */
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'danger', 'warning', 'info']),
  /** Handler for change events */
  onChange: PropTypes.func,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default Toggle; 