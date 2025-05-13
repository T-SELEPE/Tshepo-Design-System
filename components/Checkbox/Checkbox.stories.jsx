import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

// Base variants
export const Default = {
  args: {
    label: 'Default Checkbox',
    variant: 'default',
  },
};

export const Outlined = {
  args: {
    label: 'Outlined Checkbox',
    variant: 'outlined',
  },
};

export const Filled = {
  args: {
    label: 'Filled Checkbox',
    variant: 'filled',
  },
};

// States
export const Checked = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const CheckedDisabled = {
  args: {
    label: 'Checked Disabled Checkbox',
    checked: true,
    disabled: true,
  },
};

export const WithError = {
  args: {
    label: 'Error Checkbox',
    error: true,
  },
};

export const CheckedWithError = {
  args: {
    label: 'Error Checked Checkbox',
    checked: true,
    error: true,
  },
};

// All variants and states
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Default Variant</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" checked />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Checked Disabled" checked disabled />
          <Checkbox label="Error" error />
          <Checkbox label="Error Checked" checked error />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Outlined Variant</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Checkbox label="Unchecked" variant="outlined" />
          <Checkbox label="Checked" variant="outlined" checked />
          <Checkbox label="Disabled" variant="outlined" disabled />
          <Checkbox label="Checked Disabled" variant="outlined" checked disabled />
          <Checkbox label="Error" variant="outlined" error />
          <Checkbox label="Error Checked" variant="outlined" checked error />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Filled Variant</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Checkbox label="Unchecked" variant="filled" />
          <Checkbox label="Checked" variant="filled" checked />
          <Checkbox label="Disabled" variant="filled" disabled />
          <Checkbox label="Checked Disabled" variant="filled" checked disabled />
          <Checkbox label="Error" variant="filled" error />
          <Checkbox label="Error Checked" variant="filled" checked error />
        </div>
      </div>
    </div>
  ),
}; 