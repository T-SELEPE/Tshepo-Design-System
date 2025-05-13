import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TextareaContainer,
  TextareaLabel,
  TextareaWrapper,
  StyledTextarea,
  HelperText,
  CharacterCounter
} from './Textarea.styles';

export const Textarea = ({
  label,
  value,
  onChange,
  placeholder = '',
  helperText = '',
  maxLength,
  required = false,
  disabled = false,
  state = 'default',  // default, error, success
  variant = 'default', // default, outlined, filled
  size = 'medium', // small, medium, large
  resize = 'vertical', // vertical, horizontal, both, none
  className = '',
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e);
  };
  
  const characterCount = inputValue.length;
  const isOverLimit = maxLength && characterCount > maxLength;
  
  return (
    <TextareaContainer className={className} disabled={disabled}>
      {label && (
        <TextareaLabel state={state} disabled={disabled}>
          {label}
          {required && <span className="required-indicator">*</span>}
        </TextareaLabel>
      )}
      
      <TextareaWrapper variant={variant} state={state} disabled={disabled}>
        <StyledTextarea
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          size={size}
          resize={resize}
          maxLength={maxLength}
          required={required}
          aria-invalid={state === 'error'}
          aria-describedby={helperText ? 'helper-text' : undefined}
          {...props}
        />
      </TextareaWrapper>
      
      {helperText && (
        <HelperText id="helper-text" state={state}>
          {helperText}
        </HelperText>
      )}
      
      {maxLength && (
        <CharacterCounter isOverLimit={isOverLimit}>
          {characterCount}/{maxLength}
        </CharacterCounter>
      )}
    </TextareaContainer>
  );
};

Textarea.propTypes = {
  /** Label text */
  label: PropTypes.string,
  /** Textarea value */
  value: PropTypes.string,
  /** Change event handler */
  onChange: PropTypes.func,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Helper text shown below the textarea */
  helperText: PropTypes.string,
  /** Maximum character limit */
  maxLength: PropTypes.number,
  /** Whether the textarea is required */
  required: PropTypes.bool,
  /** Whether the textarea is disabled */
  disabled: PropTypes.bool,
  /** State of the textarea */
  state: PropTypes.oneOf(['default', 'error', 'success']),
  /** Visual variant */
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  /** Size of the textarea */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Resize behavior */
  resize: PropTypes.oneOf(['vertical', 'horizontal', 'both', 'none']),
  /** Additional CSS class */
  className: PropTypes.string,
};

export default Textarea; 