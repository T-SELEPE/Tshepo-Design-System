import React from 'react';
import { Radio } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
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
    label: 'Default Radio',
    variant: 'default',
    name: 'default-radio',
  },
};

export const Outlined = {
  args: {
    label: 'Outlined Radio',
    variant: 'outlined',
    name: 'outlined-radio',
  },
};

export const Filled = {
  args: {
    label: 'Filled Radio',
    variant: 'filled',
    name: 'filled-radio',
  },
};

// States
export const Checked = {
  args: {
    label: 'Checked Radio',
    checked: true,
    name: 'checked-radio',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Radio',
    disabled: true,
    name: 'disabled-radio',
  },
};

export const CheckedDisabled = {
  args: {
    label: 'Checked Disabled Radio',
    checked: true,
    disabled: true,
    name: 'checked-disabled-radio',
  },
};

export const WithError = {
  args: {
    label: 'Error Radio',
    error: true,
    name: 'error-radio',
  },
};

export const CheckedWithError = {
  args: {
    label: 'Error Checked Radio',
    checked: true,
    error: true,
    name: 'error-checked-radio',
  },
};

// Radio group example
export const RadioGroup = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Radio 
        label="Option 1" 
        name="radio-group-example" 
        value="option1" 
        checked 
      />
      <Radio 
        label="Option 2" 
        name="radio-group-example" 
        value="option2" 
      />
      <Radio 
        label="Option 3" 
        name="radio-group-example" 
        value="option3" 
      />
      <Radio 
        label="Option 4 (Disabled)" 
        name="radio-group-example" 
        value="option4" 
        disabled 
      />
    </div>
  ),
};

// All variants and states
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Default Variant</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Radio label="Unchecked" name="default-variant" value="unchecked" />
          <Radio label="Checked" name="default-variant" value="checked" checked />
          <Radio label="Disabled" name="default-variant" value="disabled" disabled />
          <Radio label="Checked Disabled" name="default-variant" value="checked-disabled" checked disabled />
          <Radio label="Error" name="default-variant" value="error" error />
          <Radio label="Error Checked" name="default-variant" value="error-checked" checked error />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Outlined Variant</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Radio label="Unchecked" name="outlined-variant" value="unchecked" variant="outlined" />
          <Radio label="Checked" name="outlined-variant" value="checked" variant="outlined" checked />
          <Radio label="Disabled" name="outlined-variant" value="disabled" variant="outlined" disabled />
          <Radio label="Checked Disabled" name="outlined-variant" value="checked-disabled" variant="outlined" checked disabled />
          <Radio label="Error" name="outlined-variant" value="error" variant="outlined" error />
          <Radio label="Error Checked" name="outlined-variant" value="error-checked" variant="outlined" checked error />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Filled Variant</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Radio label="Unchecked" name="filled-variant" value="unchecked" variant="filled" />
          <Radio label="Checked" name="filled-variant" value="checked" variant="filled" checked />
          <Radio label="Disabled" name="filled-variant" value="disabled" variant="filled" disabled />
          <Radio label="Checked Disabled" name="filled-variant" value="checked-disabled" variant="filled" checked disabled />
          <Radio label="Error" name="filled-variant" value="error" variant="filled" error />
          <Radio label="Error Checked" name="filled-variant" value="error-checked" variant="filled" checked error />
        </div>
      </div>
    </div>
  ),
}; 