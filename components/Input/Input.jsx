import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { 
  InputContainer, 
  StyledInput, 
  InputLabel, 
  InputIcon,
  HelperText,
  InputWrapper
} from './Input.styles';
import { Icons } from '../utils/icons.jsx';

/**
 * Input component that supports multiple variants and states
 */
export const Input = ({
  id,
  name,
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text',
  variant = 'default',
  size = 'medium',
  state = 'default',
  helperText,
  leadingIcon,
  trailingIcon,
  disabled = false,
  readOnly = false,
  required = false,
  onChange,
  onFocus,
  onBlur,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  // Generate a unique ID if none is provided
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  
  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  
  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  // Determine the input state based on props
  const getInputState = () => {
    if (disabled) return 'disabled';
    if (state === 'error') return 'error';
    if (state === 'success') return 'success';
    return isFocused ? 'focused' : 'default';
  };

  const inputState = getInputState();

  // Determine if we should show the leading/trailing icons
  const hasLeadingIcon = !!leadingIcon;
  const hasTrailingIcon = !!trailingIcon || state === 'error' || state === 'success';

  // Get the appropriate icon for success/error states
  const getStateIcon = () => {
    if (state === 'success') return <Icons.CheckCircle />;
    if (state === 'error') return <Icons.XCircle />;
    return null;
  };

  return (
    <InputContainer className={className} disabled={disabled}>
      {label && (
        <InputLabel 
          htmlFor={inputId} 
          disabled={disabled}
          state={inputState}
          required={required}
        >
          {label}
          {required && <span className="required-indicator">*</span>}
        </InputLabel>
      )}
      <InputWrapper
        variant={variant}
        size={size}
        state={inputState}
        focused={isFocused}
        hasLeadingIcon={hasLeadingIcon}
        hasTrailingIcon={hasTrailingIcon}
      >
        {hasLeadingIcon && (
          <InputIcon position="leading" state={inputState}>
            {leadingIcon}
          </InputIcon>
        )}
        <StyledInput
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          hasLeadingIcon={hasLeadingIcon}
          hasTrailingIcon={hasTrailingIcon}
          {...props}
        />
        {hasTrailingIcon && (
          <InputIcon position="trailing" state={inputState}>
            {trailingIcon || getStateIcon()}
          </InputIcon>
        )}
      </InputWrapper>
      {helperText && (
        <HelperText state={inputState}>
          {helperText}
        </HelperText>
      )}
    </InputContainer>
  );
};

Input.propTypes = {
  /** Unique identifier for the input */
  id: PropTypes.string,
  /** Name attribute for the input element */
  name: PropTypes.string,
  /** Label text to display above the input */
  label: PropTypes.node,
  /** Placeholder text to display inside the input */
  placeholder: PropTypes.string,
  /** Controlled value for the input */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Default value for the input (uncontrolled) */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Type of the input element */
  type: PropTypes.string,
  /** Visual variant of the input */
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  /** Size of the input */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Current state of the input */
  state: PropTypes.oneOf(['default', 'error', 'success']),
  /** Helper text to display below the input */
  helperText: PropTypes.node,
  /** Icon to display at the beginning of the input */
  leadingIcon: PropTypes.node,
  /** Icon to display at the end of the input */
  trailingIcon: PropTypes.node,
  /** Whether the input is disabled */
  disabled: PropTypes.bool,
  /** Whether the input is read-only */
  readOnly: PropTypes.bool,
  /** Whether the input is required */
  required: PropTypes.bool,
  /** Handler for change events */
  onChange: PropTypes.func,
  /** Handler for focus events */
  onFocus: PropTypes.func,
  /** Handler for blur events */
  onBlur: PropTypes.func,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default Input; 