import React from 'react';
import { Toggle } from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

// Base variant
export const Default = {
  args: {
    label: 'Toggle Switch',
  },
};

// Variants
export const Primary = {
  args: {
    label: 'Primary Toggle',
    variant: 'primary',
  },
};

export const Success = {
  args: {
    label: 'Success Toggle',
    variant: 'success',
  },
};

export const Danger = {
  args: {
    label: 'Danger Toggle',
    variant: 'danger',
  },
};

export const Warning = {
  args: {
    label: 'Warning Toggle',
    variant: 'warning',
  },
};

export const Info = {
  args: {
    label: 'Info Toggle',
    variant: 'info',
  },
};

// Sizes
export const Small = {
  args: {
    label: 'Small Toggle',
    size: 'small',
  },
};

export const Medium = {
  args: {
    label: 'Medium Toggle',
    size: 'medium',
  },
};

export const Large = {
  args: {
    label: 'Large Toggle',
    size: 'large',
  },
};

// States
export const Checked = {
  args: {
    label: 'Checked Toggle',
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Toggle',
    disabled: true,
  },
};

export const CheckedDisabled = {
  args: {
    label: 'Checked Disabled Toggle',
    checked: true,
    disabled: true,
  },
};

// All variants and sizes
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Toggle label="Default Toggle" checked />
          <Toggle label="Primary Toggle" variant="primary" checked />
          <Toggle label="Success Toggle" variant="success" checked />
          <Toggle label="Danger Toggle" variant="danger" checked />
          <Toggle label="Warning Toggle" variant="warning" checked />
          <Toggle label="Info Toggle" variant="info" checked />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Toggle label="Small Toggle" size="small" checked />
          <Toggle label="Medium Toggle" size="medium" checked />
          <Toggle label="Large Toggle" size="large" checked />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Toggle label="Unchecked Toggle" />
          <Toggle label="Checked Toggle" checked />
          <Toggle label="Disabled Toggle" disabled />
          <Toggle label="Checked Disabled Toggle" checked disabled />
        </div>
      </div>
    </div>
  ),
}; 