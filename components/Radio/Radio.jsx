import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  RadioContainer, 
  RadioInput, 
  RadioLabel, 
  RadioButton 
} from './Radio.styles';

/**
 * Radio button component that supports multiple variants and states
 */
export const Radio = ({
  id,
  name,
  value,
  label,
  checked = false,
  disabled = false,
  variant = 'default',
  error = false,
  onChange,
  className = '',
  ...props
}) => {
  // Internal state for the radio when onChange is not provided
  const [isChecked, setIsChecked] = useState(checked);
  
  // Update internal state when checked prop changes
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  
  // Handle the radio change
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    } else {
      setIsChecked(true);
    }
  };

  // Generate a unique ID if none is provided
  const radioId = id || `radio-${Math.random().toString(36).substring(2, 9)}`;

  // The actual checked state to use (from props if onChange is provided, from state otherwise)
  const radioChecked = onChange ? checked : isChecked;

  return (
    <RadioContainer className={className} disabled={disabled} error={error}>
      <RadioInput
        id={radioId}
        name={name}
        value={value}
        type="radio"
        checked={radioChecked}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      <RadioButton 
        className="radio-button" 
        variant={variant} 
        checked={radioChecked} 
        disabled={disabled}
        error={error}
      />
      {label && (
        <RadioLabel htmlFor={radioId} disabled={disabled}>
          {label}
        </RadioLabel>
      )}
    </RadioContainer>
  );
};

Radio.propTypes = {
  /** Unique identifier for the radio button */
  id: PropTypes.string,
  /** Name attribute for the radio input */
  name: PropTypes.string,
  /** Value attribute for the radio input */
  value: PropTypes.string,
  /** Label text to display next to the radio button */
  label: PropTypes.node,
  /** Whether the radio button is checked */
  checked: PropTypes.bool,
  /** Whether the radio button is disabled */
  disabled: PropTypes.bool,
  /** Visual variant of the radio button */
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  /** Whether to show error styling */
  error: PropTypes.bool,
  /** Handler for change events */
  onChange: PropTypes.func,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default Radio; 