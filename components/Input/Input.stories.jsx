import React from 'react';
import { Input } from './Input';
import { Icons } from '../utils/icons.jsx';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
};

// Default input
export const Default = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

// Input with label and helper text
export const WithHelperText = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'This is a hint text to help the user.',
  },
};

// Input with error state
export const Error = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    state: 'error',
    helperText: 'This is an error message.',
    defaultValue: 'Input text',
  },
};

// Input with success state
export const Success = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    state: 'success',
    helperText: 'This was successful!',
    defaultValue: 'Input text',
  },
};

// Input with leading icon
export const WithLeadingIcon = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    leadingIcon: <Icons.AlertCircle />,
  },
};

// Input with trailing icon
export const WithTrailingIcon = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    trailingIcon: <Icons.X />,
  },
};

// Input with both icons
export const WithBothIcons = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    leadingIcon: <Icons.AlertCircle />,
    trailingIcon: <Icons.X />,
  },
};

// Disabled input
export const Disabled = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    disabled: true,
    defaultValue: 'Disabled input',
  },
};

// Required input
export const Required = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    required: true,
  },
};

// Different sizes
export const Small = {
  args: {
    label: 'Label',
    placeholder: 'Small input',
    size: 'small',
  },
};

export const Medium = {
  args: {
    label: 'Label',
    placeholder: 'Medium input',
    size: 'medium',
  },
};

export const Large = {
  args: {
    label: 'Label',
    placeholder: 'Large input',
    size: 'large',
  },
};

// Different variants
export const DefaultVariant = {
  args: {
    label: 'Default variant',
    placeholder: 'Default input',
    variant: 'default',
  },
};

export const OutlinedVariant = {
  args: {
    label: 'Outlined variant',
    placeholder: 'Outlined input',
    variant: 'outlined',
  },
};

export const FilledVariant = {
  args: {
    label: 'Filled variant',
    placeholder: 'Filled input',
    variant: 'filled',
  },
};

// All variants together
export const AllInputs = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Default Inputs</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <Input 
            label="Default input" 
            placeholder="Placeholder"
          />
          <Input 
            label="With helper text" 
            placeholder="Placeholder"
            helperText="This is a helper text"
          />
          <Input 
            label="With leading icon" 
            placeholder="Placeholder"
            leadingIcon={<Icons.AlertCircle />}
          />
          <Input 
            label="With trailing icon" 
            placeholder="Placeholder"
            trailingIcon={<Icons.X />}
          />
          <Input 
            label="Error state" 
            placeholder="Placeholder"
            state="error"
            helperText="This is an error message"
            defaultValue="Input text"
          />
          <Input 
            label="Success state" 
            placeholder="Placeholder"
            state="success"
            helperText="Validation successful"
            defaultValue="Input text"
          />
          <Input 
            label="Disabled input" 
            placeholder="Placeholder"
            disabled
            defaultValue="Disabled input"
          />
          <Input 
            label="Required input" 
            placeholder="Placeholder"
            required
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Outlined Inputs</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <Input 
            label="Default input" 
            placeholder="Placeholder"
            variant="outlined"
          />
          <Input 
            label="With helper text" 
            placeholder="Placeholder"
            helperText="This is a helper text"
            variant="outlined"
          />
          <Input 
            label="With leading icon" 
            placeholder="Placeholder"
            leadingIcon={<Icons.AlertCircle />}
            variant="outlined"
          />
          <Input 
            label="With trailing icon" 
            placeholder="Placeholder"
            trailingIcon={<Icons.X />}
            variant="outlined"
          />
          <Input 
            label="Error state" 
            placeholder="Placeholder"
            state="error"
            helperText="This is an error message"
            defaultValue="Input text"
            variant="outlined"
          />
          <Input 
            label="Success state" 
            placeholder="Placeholder"
            state="success"
            helperText="Validation successful"
            defaultValue="Input text"
            variant="outlined"
          />
          <Input 
            label="Disabled input" 
            placeholder="Placeholder"
            disabled
            defaultValue="Disabled input"
            variant="outlined"
          />
          <Input 
            label="Required input" 
            placeholder="Placeholder"
            required
            variant="outlined"
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Filled Inputs</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <Input 
            label="Default input" 
            placeholder="Placeholder"
            variant="filled"
          />
          <Input 
            label="With helper text" 
            placeholder="Placeholder"
            helperText="This is a helper text"
            variant="filled"
          />
          <Input 
            label="With leading icon" 
            placeholder="Placeholder"
            leadingIcon={<Icons.AlertCircle />}
            variant="filled"
          />
          <Input 
            label="With trailing icon" 
            placeholder="Placeholder"
            trailingIcon={<Icons.X />}
            variant="filled"
          />
          <Input 
            label="Error state" 
            placeholder="Placeholder"
            state="error"
            helperText="This is an error message"
            defaultValue="Input text"
            variant="filled"
          />
          <Input 
            label="Success state" 
            placeholder="Placeholder"
            state="success"
            helperText="Validation successful"
            defaultValue="Input text"
            variant="filled"
          />
          <Input 
            label="Disabled input" 
            placeholder="Placeholder"
            disabled
            defaultValue="Disabled input"
            variant="filled"
          />
          <Input 
            label="Required input" 
            placeholder="Placeholder"
            required
            variant="filled"
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Input Sizes</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <Input 
            label="Small input" 
            placeholder="Small size"
            size="small"
          />
          <Input 
            label="Medium input" 
            placeholder="Medium size"
            size="medium"
          />
          <Input 
            label="Large input" 
            placeholder="Large size"
            size="large"
          />
        </div>
      </div>
    </div>
  ),
}; 