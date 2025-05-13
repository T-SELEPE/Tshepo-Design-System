import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  DropdownContainer,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownIcon,
  DropdownDivider,
  DropdownLabel,
  DropdownItemText,
  DropdownHeader,
  DropdownFooter,
  DropdownItemIcon,
  DropdownLoadingIndicator
} from './Dropdown.styles';
import { Icons } from '../utils/icons.jsx';

/**
 * Dropdown component for displaying a menu of options
 */
export const Dropdown = ({
  label,
  placeholder = 'Select an option',
  options = [],
  value,
  defaultValue,
  disabled = false,
  size = 'medium',
  variant = 'default',
  loading = false,
  error = false,
  withIcon = false,
  withDividers = false,
  headerContent,
  footerContent,
  onChange,
  onOpen,
  onClose,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    value || defaultValue || null
  );
  const containerRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        if (onClose) onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Update selected option when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedOption(value);
    }
  }, [value]);

  const handleToggle = () => {
    if (disabled || loading) return;
    
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    
    if (newIsOpen && onOpen) {
      onOpen();
    } else if (!newIsOpen && onClose) {
      onClose();
    }
  };

  const handleSelect = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value, option);
    }
    if (onClose) {
      onClose();
    }
  };

  // Find the selected option object
  const selectedOptionObj = options.find(option => option.value === selectedOption);
  
  // Get display text
  const displayText = selectedOptionObj 
    ? selectedOptionObj.label 
    : placeholder;
  
  return (
    <DropdownContainer 
      ref={containerRef} 
      className={className}
      disabled={disabled}
      isOpen={isOpen}
      {...props}
    >
      {label && <DropdownLabel disabled={disabled}>{label}</DropdownLabel>}
      
      <DropdownTrigger
        onClick={handleToggle}
        size={size}
        variant={variant}
        isOpen={isOpen}
        disabled={disabled}
        hasValue={!!selectedOption}
        error={error}
      >
        {selectedOptionObj && selectedOptionObj.icon && (
          <DropdownItemIcon>
            {selectedOptionObj.icon}
          </DropdownItemIcon>
        )}
        <span>{displayText}</span>
        
        {loading ? (
          <DropdownLoadingIndicator>
            <Icons.LoadingSpinner />
          </DropdownLoadingIndicator>
        ) : (
          <DropdownIcon isOpen={isOpen} disabled={disabled}>
            <Icons.ChevronDown />
          </DropdownIcon>
        )}
      </DropdownTrigger>
      
      {isOpen && (
        <DropdownMenu size={size}>
          {headerContent && (
            <DropdownHeader>{headerContent}</DropdownHeader>
          )}
          
          {options.map((option, index) => (
            <React.Fragment key={option.value || index}>
              <DropdownItem
                onClick={() => handleSelect(option)}
                isSelected={selectedOption === option.value}
                disabled={option.disabled}
              >
                {option.icon && (
                  <DropdownItemIcon>
                    {option.icon}
                  </DropdownItemIcon>
                )}
                <DropdownItemText>{option.label}</DropdownItemText>
                {selectedOption === option.value && (
                  <DropdownIcon>
                    <Icons.Check />
                  </DropdownIcon>
                )}
              </DropdownItem>
              {withDividers && index < options.length - 1 && (
                <DropdownDivider />
              )}
            </React.Fragment>
          ))}
          
          {footerContent && (
            <DropdownFooter>{footerContent}</DropdownFooter>
          )}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  /** Label text for the dropdown */
  label: PropTypes.string,
  /** Placeholder text when no option is selected */
  placeholder: PropTypes.string,
  /** Array of options for the dropdown */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
    })
  ),
  /** Current selected value (controlled) */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Default selected value (uncontrolled) */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Whether the dropdown is disabled */
  disabled: PropTypes.bool,
  /** Size of the dropdown */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Visual variant of the dropdown */
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  /** Whether the dropdown is in loading state */
  loading: PropTypes.bool,
  /** Whether the dropdown has an error */
  error: PropTypes.bool,
  /** Whether to show icons in the dropdown */
  withIcon: PropTypes.bool,
  /** Whether to show dividers between options */
  withDividers: PropTypes.bool,
  /** Content to display in the header */
  headerContent: PropTypes.node,
  /** Content to display in the footer */
  footerContent: PropTypes.node,
  /** Handler for change events */
  onChange: PropTypes.func,
  /** Handler for when dropdown opens */
  onOpen: PropTypes.func,
  /** Handler for when dropdown closes */
  onClose: PropTypes.func,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default Dropdown; 