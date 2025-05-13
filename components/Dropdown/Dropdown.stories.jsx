import React from 'react';
import { Dropdown } from './Dropdown';
import { Icons } from '../utils/icons.jsx';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onOpen: { action: 'opened' },
    onClose: { action: 'closed' },
  },
};

// Sample options for the dropdown
const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
  { value: 'option5', label: 'Option 5' },
];

const sampleOptionsWithIcons = [
  { value: 'option1', label: 'Option 1', icon: <Icons.AlertCircle /> },
  { value: 'option2', label: 'Option 2', icon: <Icons.Check /> },
  { value: 'option3', label: 'Option 3', icon: <Icons.CheckCircle /> },
  { value: 'option4', label: 'Option 4', icon: <Icons.XCircle /> },
  { value: 'option5', label: 'Option 5', icon: <Icons.AlertTriangle /> },
];

// Default dropdown story
export const Default = {
  args: {
    label: 'Dropdown Label',
    placeholder: 'Select an option',
    options: sampleOptions,
  },
};

// Dropdown with a default selected value
export const WithDefaultValue = {
  args: {
    label: 'Dropdown Label',
    placeholder: 'Select an option',
    options: sampleOptions,
    defaultValue: 'option2',
  },
};

// Dropdown with icons
export const WithIcons = {
  args:{
    label:'Dropdown with Icons',
    placeholder:"Select an opti",
    options:sampleOptionsWithIcons,
    withIcon:false,
  },
};

// Dropdown with dividers
export const WithDividers = {
  args: {
    label: 'Dropdown with Dividers',
    placeholder: 'Select an option',
    options: sampleOptions,
    withDividers: true,
  },
};

// Loading state
export const Loading = {
  args: {
    label: 'Loading Dropdown',
    placeholder: 'Select an option',
    options: sampleOptions,
    loading: true,
  },
};

// Error state
export const Error = {
  args: {
    label: 'Error Dropdown',
    placeholder: 'Select an option',
    options: sampleOptions,
    error: true,
  },
};

// Disabled state
export const Disabled = {
  args: {
    label: 'Disabled Dropdown',
    placeholder: 'Select an option',
    options: sampleOptions,
    disabled: true,
  },
};

// Different sizes
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Dropdown
        label="Small Dropdown"
        placeholder="Small size"
        options={sampleOptions}
        size="small"
      />
      <Dropdown
        label="Medium Dropdown"
        placeholder="Medium size"
        options={sampleOptions}
        size="medium"
      />
      <Dropdown
        label="Large Dropdown"
        placeholder="Large size"
        options={sampleOptions}
        size="large"
      />
    </div>
  ),
};

// Different variants
export const Variants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Dropdown
        label="Default Variant"
        placeholder="Default variant"
        options={sampleOptions}
        variant="default"
      />
      <Dropdown
        label="Outlined Variant"
        placeholder="Outlined variant"
        options={sampleOptions}
        variant="outlined"
      />
      <Dropdown
        label="Filled Variant"
        placeholder="Filled variant"
        options={sampleOptions}
        variant="filled"
      />
    </div>
  ),
};

// With header and footer
export const WithHeaderAndFooter = {
  args: {
    label: 'Dropdown with Header and Footer',
    placeholder: 'Select an option',
    options: sampleOptions,
    headerContent: <div style={{ fontWeight: 'bold' }}>Dropdown Header</div>,
    footerContent: <div style={{ fontStyle: 'italic' }}>Dropdown Footer</div>,
  },
};

// All variants together
export const AllDropdowns = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Default Dropdowns</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          <Dropdown
            label="Basic Dropdown"
            placeholder="Select an option"
            options={sampleOptions}
          />
          <Dropdown
            label="With Default Value"
            placeholder="Select an option"
            options={sampleOptions}
            defaultValue="option3"
          />
          <Dropdown
            label="With Icons"
            placeholder="Select an option"
            options={sampleOptionsWithIcons}
            withIcon
          />
          <Dropdown
            label="With Dividers"
            placeholder="Select an option"
            options={sampleOptions}
            withDividers
          />
          <Dropdown
            label="Loading State"
            placeholder="Select an option"
            options={sampleOptions}
            loading
          />
          <Dropdown
            label="Error State"
            placeholder="Select an option"
            options={sampleOptions}
            error
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Dropdown Sizes</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <Dropdown
            label="Small Size"
            placeholder="Small"
            options={sampleOptions}
            size="small"
          />
          <Dropdown
            label="Medium Size"
            placeholder="Medium"
            options={sampleOptions}
            size="medium"
          />
          <Dropdown
            label="Large Size"
            placeholder="Large"
            options={sampleOptions}
            size="large"
          />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Dropdown Variants</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <Dropdown
            label="Default Variant"
            placeholder="Default"
            options={sampleOptions}
            variant="default"
          />
          <Dropdown
            label="Outlined Variant"
            placeholder="Outlined"
            options={sampleOptions}
            variant="outlined"
          />
          <Dropdown
            label="Filled Variant"
            placeholder="Filled"
            options={sampleOptions}
            variant="filled"
          />
        </div>
      </div>
    </div>
  ),
}; 