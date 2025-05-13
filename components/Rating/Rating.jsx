import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RatingContainer, StarContainer } from './Rating.styles';
import { MaterialIcons } from '../utils/materialIcons';

/**
 * Rating component that displays a star rating
 */
export const Rating = ({
  value = 0,
  maxValue = 5,
  size = 'medium',
  variant = 'filled',
  disabled = false,
  onChange,
  className = '',
  ...props
}) => {
  // Internal state for controlled and uncontrolled usage
  const [rating, setRating] = useState(value);
  const [hoverRating, setHoverRating] = useState(0);
  
  // Update internal state when value prop changes
  useEffect(() => {
    setRating(value);
  }, [value]);

  // Create an array with the length of maxValue
  const stars = Array.from({ length: maxValue }, (_, index) => index + 1);

  const handleClick = (newRating) => {
    if (disabled) return;
    
    const actualRating = newRating === rating ? 0 : newRating; // Toggle off if clicking the same star
    
    // Update internal state for uncontrolled usage
    if (!onChange) {
      setRating(actualRating);
    } else {
      // Call the onChange handler for controlled usage
      onChange(actualRating);
    }
  };

  const handleKeyDown = (event, newRating) => {
    if (disabled) return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      
      const actualRating = newRating === rating ? 0 : newRating; // Toggle off if clicking the same star
      
      if (!onChange) {
        setRating(actualRating);
      } else {
        onChange(actualRating);
      }
    }
  };
  
  const handleMouseEnter = (star) => {
    if (!disabled) {
      setHoverRating(star);
    }
  };
  
  const handleMouseLeave = () => {
    if (!disabled) {
      setHoverRating(0);
    }
  };

  // The actual displayed rating (hover value takes precedence, then controlled or internal state)
  const displayRating = hoverRating || (onChange ? value : rating);

  // Get the size of the star based on the size prop
  const getStarSize = () => {
    switch (size) {
      case 'small':
        return '16px';
      case 'large':
        return '24px';
      default: // medium
        return '20px';
    }
  };

  return (
    <RatingContainer className={className} disabled={disabled} {...props}>
      {stars.map((star) => (
        <StarContainer
          key={star}
          onClick={() => handleClick(star)}
          onKeyDown={(e) => handleKeyDown(e, star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          tabIndex={disabled ? -1 : 0}
          role="button"
          aria-label={`Rate ${star} of ${maxValue} stars`}
          size={size}
          disabled={disabled}
        >
          <MaterialIcons.Star 
            filled={variant === 'filled' && star <= displayRating}
            sx={{ fontSize: getStarSize() }}
          />
        </StarContainer>
      ))}
    </RatingContainer>
  );
};

Rating.propTypes = {
  /** Current rating value */
  value: PropTypes.number,
  /** Maximum rating value */
  maxValue: PropTypes.number,
  /** Size of the rating stars */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Visual variant of the rating */
  variant: PropTypes.oneOf(['filled', 'outlined']),
  /** Whether the rating is disabled */
  disabled: PropTypes.bool,
  /** Handler for rating change */
  onChange: PropTypes.func,
  /** Additional CSS class */
  className: PropTypes.string,
};

export default Rating; 