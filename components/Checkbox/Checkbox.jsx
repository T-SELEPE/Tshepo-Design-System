import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { 
  CheckboxContainer, 
  CheckboxInput, 
  CheckboxLabel, 
  CheckboxCheckmark,
  CheckIcon 
} from './Checkbox.styles';
import { MaterialIcons } from '../utils/materialIcons';

/**
 * Checkbox component that supports multiple variants and states
 */
export const Checkbox = ({
  id,
  name,
  label,
  checked = false,
  disabled = false,
  variant = 'default',
  error = false,
  onChange,
  className = '',
  hint,
  ...props
}) => {
  // Internal state for the checkbox when onChange is not provided
  const [isChecked, setIsChecked] = useState(checked);
  
  // Update internal state when checked prop changes
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  
  // Handle the checkbox change
  const handleChange = (event) => {
    if (onChange) {
      onChange(event);
    } else {
      setIsChecked(!isChecked);
    }
  };

  // Generate a unique ID if none is provided
  const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
  
  // The actual checked state to use (from props if onChange is provided, from state otherwise)
  const checkboxChecked = onChange ? checked : isChecked;

  return (
    <CheckboxContainer className={className} disabled={disabled} error={error}>
      <CheckboxInput
        id={checkboxId}
        name={name}
        type="checkbox"
        checked={checkboxChecked}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      <CheckboxCheckmark 
        className="checkmark" 
        variant={variant} 
        checked={checkboxChecked} 
        disabled={disabled}
        error={error}
      >
        {checkboxChecked && (
          <CheckIcon>
            <MaterialIcons.Check />
          </CheckIcon>
        )}
      </CheckboxCheckmark>
      {label && (
        <CheckboxLabel htmlFor={checkboxId} disabled={disabled}>
          {label}
          {hint && <div className="hint">{hint}</div>}
        </CheckboxLabel>
      )}
    </CheckboxContainer>
  );
};

Checkbox.propTypes = {
  /** Unique identifier for the checkbox */
  id: PropTypes.string,
  /** Name attribute for the checkbox input */
  name: PropTypes.string,
  /** Label text to display next to the checkbox */
  label: PropTypes.node,
  /** Whether the checkbox is checked */
  checked: PropTypes.bool,
  /** Whether the checkbox is disabled */
  disabled: PropTypes.bool,
  /** Visual variant of the checkbox */
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  /** Whether to show error styling */
  error: PropTypes.bool,
  /** Handler for change events */
  onChange: PropTypes.func,
  /** Additional CSS class */
  className: PropTypes.string,
  /** Hint text to display below the label */
  hint: PropTypes.node,
};

export default Checkbox; 