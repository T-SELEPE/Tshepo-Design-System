import React from 'react';
import { ToggleCounter } from './ToggleCounter';

export default {
  title: 'Components/ToggleCounter',
  component: ToggleCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

// Base examples
export const Default = {
  args: {
    label: 'Default Counter',
    initialValue: 0,
  },
};

// Variants
export const Primary = {
  args: {
    label: 'Primary Counter',
    variant: 'primary',
    initialValue: 5,
  },
};

export const Outlined = {
  args: {
    label: 'Outlined Counter',
    variant: 'outlined',
    initialValue: 5,
  },
};

// Sizes
export const Small = {
  args: {
    label: 'Small Counter',
    size: 'small',
    initialValue: 5,
  },
};

export const Medium = {
  args: {
    label: 'Medium Counter',
    size: 'medium',
    initialValue: 5,
  },
};

export const Large = {
  args: {
    label: 'Large Counter',
    size: 'large',
    initialValue: 5,
  },
};

// States
export const Disabled = {
  args: {
    label: 'Disabled Counter',
    disabled: true,
    initialValue: 5,
  },
};

export const WithMinMax = {
  args: {
    label: 'Counter with Min/Max (0-10)',
    minValue: 0,
    maxValue: 10,
    initialValue: 5,
  },
};

export const WithStep = {
  args: {
    label: 'Counter with Step (2)',
    step: 2,
    initialValue: 6,
  },
};

// All variants
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Variants</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ToggleCounter 
            label="Default" 
            initialValue={5} 
          />
          <ToggleCounter 
            label="Primary" 
            variant="primary"
            initialValue={5} 
          />
          <ToggleCounter 
            label="Outlined" 
            variant="outlined"
            initialValue={5} 
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Sizes</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ToggleCounter 
            label="Small" 
            size="small"
            initialValue={5} 
          />
          <ToggleCounter 
            label="Medium" 
            size="medium"
            initialValue={5} 
          />
          <ToggleCounter 
            label="Large" 
            size="large"
            initialValue={5} 
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>States</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <ToggleCounter 
            label="Normal" 
            initialValue={5} 
          />
          <ToggleCounter 
            label="Disabled" 
            disabled
            initialValue={5} 
          />
          <ToggleCounter 
            label="Min (0)/Max (10)" 
            minValue={0}
            maxValue={10}
            initialValue={5} 
          />
        </div>
      </div>
    </div>
  ),
}; 