import React from 'react';
import { MaterialButton } from './MaterialButton';
import { MaterialIcons } from '../utils/materialIcons';

export default {
  title: 'Components/MaterialButton',
  component: MaterialButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

// Base variants
export const Contained = {
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const Outlined = {
  args: {
    children: 'Button',
    variant: 'outlined',
    color: 'primary',
  },
};

export const Text = {
  args: {
    children: 'Button',
    variant: 'text',
    color: 'primary',
  },
};

// Colors
export const PrimaryColor = {
  args: {
    children: 'Primary',
    color: 'primary',
  },
};

export const SecondaryColor = {
  args: {
    children: 'Secondary',
    color: 'secondary',
  },
};

export const SuccessColor = {
  args: {
    children: 'Success',
    color: 'success',
  },
};

export const ErrorColor = {
  args: {
    children: 'Error',
    color: 'error',
  },
};

export const WarningColor = {
  args: {
    children: 'Warning',
    color: 'warning',
  },
};

export const InfoColor = {
  args: {
    children: 'Info',
    color: 'info',
  },
};

// Sizes
export const SmallSize = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

export const MediumSize = {
  args: {
    children: 'Medium Button',
    size: 'medium',
  },
};

export const LargeSize = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

// States
export const DisabledButton = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidthButton = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

export const RoundedButton = {
  args: {
    children: 'Rounded Button',
    rounded: true,
  },
};

// With icons
export const WithStartIcon = {
  args: {
    children: 'With Start Icon',
    startIcon: <MaterialIcons.Plus />,
  },
};

export const WithEndIcon = {
  args: {
    children: 'With End Icon',
    endIcon: <MaterialIcons.ChevronDown />,
  },
};

export const WithBothIcons = {
  args: {
    children: 'With Both Icons',
    startIcon: <MaterialIcons.Check />,
    endIcon: <MaterialIcons.ChevronRight />,
  },
};

export const IconOnlyButton = {
  args: {
    iconOnly: true,
    startIcon: <MaterialIcons.Plus />,
    'aria-label': 'Add item',
  },
};

export const IconOnlyRoundedButton = {
  args: {
    iconOnly: true,
    startIcon: <MaterialIcons.Plus />,
    rounded: true,
    'aria-label': 'Add item',
  },
};

export const IconOnlyWithEndIcon = {
  args: {
    iconOnly: true,
    endIcon: <MaterialIcons.ChevronDown />,
    'aria-label': 'Expand',
  },
};

// Multiple examples
export const ButtonVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <MaterialButton variant="contained">Contained</MaterialButton>
      <MaterialButton variant="outlined">Outlined</MaterialButton>
      <MaterialButton variant="text">Text</MaterialButton>
    </div>
  ),
};

export const ButtonColors = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <MaterialButton color="primary">Primary</MaterialButton>
      <MaterialButton color="secondary">Secondary</MaterialButton>
      <MaterialButton color="success">Success</MaterialButton>
      <MaterialButton color="error">Error</MaterialButton>
      <MaterialButton color="warning">Warning</MaterialButton>
      <MaterialButton color="info">Info</MaterialButton>
    </div>
  ),
};

export const ButtonSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <MaterialButton size="small">Small</MaterialButton>
      <MaterialButton size="medium">Medium</MaterialButton>
      <MaterialButton size="large">Large</MaterialButton>
    </div>
  ),
};

export const IconButtonSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <MaterialButton 
        iconOnly 
        size="small" 
        startIcon={<MaterialIcons.Plus />} 
        aria-label="Small Icon" 
      />
      <MaterialButton 
        iconOnly 
        size="medium" 
        startIcon={<MaterialIcons.Plus />} 
        aria-label="Medium Icon" 
      />
      <MaterialButton 
        iconOnly 
        size="large" 
        startIcon={<MaterialIcons.Plus />} 
        aria-label="Large Icon" 
      />
    </div>
  ),
};

export const OutlinedWithIcons = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <MaterialButton 
        variant="outlined" 
        startIcon={<MaterialIcons.Check />}
      >
        Start Icon
      </MaterialButton>
      <MaterialButton 
        variant="outlined" 
        endIcon={<MaterialIcons.ChevronDown />}
      >
        End Icon
      </MaterialButton>
      <MaterialButton 
        variant="outlined" 
        startIcon={<MaterialIcons.Check />}
        endIcon={<MaterialIcons.ChevronDown />}
      >
        Both Icons
      </MaterialButton>
    </div>
  ),
}; 