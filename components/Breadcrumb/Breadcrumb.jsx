import React from 'react';
import PropTypes from 'prop-types';
import {
  BreadcrumbContainer,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator
} from './Breadcrumb.styles';
import { MaterialIcons } from '../utils/materialIcons';

/**
 * Breadcrumb component for navigation with linked items and current page
 */
export const Breadcrumb = ({ items, className = '', ...props }) => {
  return (
    <BreadcrumbContainer className={className} aria-label="Breadcrumb" {...props}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink 
                href={item.href} 
                current={isLast}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </BreadcrumbLink>
              
              {!isLast && (
                <BreadcrumbSeparator>
                  <MaterialIcons.ChevronRight />
                </BreadcrumbSeparator>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

Breadcrumb.propTypes = {
  /** Array of breadcrumb items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Label text for the breadcrumb item */
      label: PropTypes.string.isRequired,
      /** URL the breadcrumb item links to */
      href: PropTypes.string.isRequired
    })
  ).isRequired,
  /** Additional CSS class */
  className: PropTypes.string
};

export default Breadcrumb; 