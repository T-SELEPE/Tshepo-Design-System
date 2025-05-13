import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroupContainer } from './ButtonGroup.styles';

/**
 * ButtonGroup component for grouping multiple buttons together with consistent styling
 */
export const ButtonGroup = ({
  children,
  vertical = false,
  attached = true,
  size,
  variant,
  ...props
}) => {
  // Clone children to pass down size and variant props if specified
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        size: size || child.props.size,
        variant: variant || child.props.variant,
      });
    }
    return child;
  });

  return (
    <ButtonGroupContainer 
      vertical={vertical} 
      attached={attached} 
      {...props}
    >
      {childrenWithProps}
    </ButtonGroupContainer>
  );
};

ButtonGroup.propTypes = {
  /** Button elements to group together */
  children: PropTypes.node.isRequired,
  /** Whether to stack buttons vertically */
  vertical: PropTypes.bool,
  /** Whether buttons should be attached to each other */
  attached: PropTypes.bool,
  /** Size for all buttons in the group */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Variant for all buttons in the group */
  variant: PropTypes.string,
};

export default ButtonGroup; 