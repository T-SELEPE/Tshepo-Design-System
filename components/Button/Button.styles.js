import styled, { css } from 'styled-components';

// Color map for different button variants
const variantStyles = {
  primary: css`
    background-color: #2563eb;
    color: white;
    border: none;
    &:hover {
      background-color: #1d4ed8;
    }
    &:active {
      background-color: #1e40af;
    }
  `,
  secondary: css`
    background-color: #f3f4f6;
    color: #1f2937;
    border: 1px solid #e5e7eb;
    &:hover {
      background-color: #e5e7eb;
    }
    &:active {
      background-color: #d1d5db;
    }
  `,
  outline: css`
    background-color: transparent;
    color: #2563eb;
    border: 1px solid #2563eb;
    &:hover {
      background-color: rgba(37, 99, 235, 0.05);
    }
    &:active {
      background-color: rgba(37, 99, 235, 0.1);
    }
  `,
  success: css`
    background-color: #10b981;
    color: white;
    border: none;
    &:hover {
      background-color: #059669;
    }
    &:active {
      background-color: #047857;
    }
  `,
  danger: css`
    background-color: #ef4444;
    color: white;
    border: none;
    &:hover {
      background-color: #dc2626;
    }
    &:active {
      background-color: #b91c1c;
    }
  `,
  warning: css`
    background-color: #f59e0b;
    color: white;
    border: none;
    &:hover {
      background-color: #d97706;
    }
    &:active {
      background-color: #b45309;
    }
  `,
  info: css`
    background-color: #3b82f6;
    color: white;
    border: none;
    &:hover {
      background-color: #2563eb;
    }
    &:active {
      background-color: #1d4ed8;
    }
  `,
  // Additional styles for rounded versions shown in the screenshots
  rounded: css`
    border-radius: 9999px;
    background-color: #2563eb;
    color: white;
    border: none;
    &:hover {
      background-color: #1d4ed8;
    }
  `,
};

// Size styles for different button sizes
const sizeStyles = {
  small: css`
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    height: 2rem;
  `,
  medium: css`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    height: 2.5rem;
  `,
  large: css`
    padding: 0.625rem 1.25rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    height: 3rem;
  `,
};

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: ${props => props.rounded ? '9999px' : '0.375rem'};
  transition: all 150ms ease-in-out;
  cursor: pointer;
  white-space: nowrap;
  ${({ size }) => sizeStyles[size || 'medium']}
  ${({ variant }) => variantStyles[variant || 'primary']}
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  
  /* Disabled state */
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      pointer-events: none;
    `}
  
  /* Icon spacing */
  .icon-left {
    margin-right: 0.5rem;
    display: inline-flex;
    align-items: center;
  }
  
  .icon-right {
    margin-left: 0.5rem;
    display: inline-flex;
    align-items: center;
  }

  /* Icon-only buttons */
  &.icon-only {
    padding: 0.5rem;
    width: ${props => {
      if (props.size === 'small') return '2rem';
      if (props.size === 'large') return '3rem';
      return '2.5rem'; // medium is default
    }};
    height: ${props => {
      if (props.size === 'small') return '2rem';
      if (props.size === 'large') return '3rem';
      return '2.5rem'; // medium is default
    }};
  }
`; 