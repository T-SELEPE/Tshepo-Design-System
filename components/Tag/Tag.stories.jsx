import React from 'react';
import { Tag } from './Tag';
import { Icons } from '../utils/icons.jsx';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    onDismiss: { action: 'dismissed' },
  },
};

// Basic tag
export const Default = {
  args: {
    label: 'Default Tag',
  },
};

// Tag with icon
export const WithIcon = {
  args: {
    label: 'Tag with Icon',
    icon: <Icons.AlertCircle />,
  },
};

// Dismissible tag
export const Dismissible = {
  args: {
    label: 'Dismissible Tag',
    dismissible: true,
  },
};

// Tag with icon and dismissible
export const WithIconAndDismissible = {
  args: {
    label: 'Tag with Icon',
    icon: <Icons.AlertCircle />,
    dismissible: true,
  },
};

// Different colors
export const Colors = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Tag label="Default" color="default" />
      <Tag label="Primary" color="primary" />
      <Tag label="Success" color="success" />
      <Tag label="Error" color="error" />
      <Tag label="Warning" color="warning" />
      <Tag label="Info" color="info" />
    </div>
  ),
};

// Different variants
export const Variants = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Tag label="Filled" variant="filled" color="primary" />
      <Tag label="Outlined" variant="outlined" color="primary" />
      <Tag label="Subtle" variant="subtle" color="primary" />
    </div>
  ),
};

// Different sizes
export const Sizes = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Tag label="Small" size="small" color="primary" />
      <Tag label="Medium" size="medium" color="primary" />
      <Tag label="Large" size="large" color="primary" />
    </div>
  ),
};

// Disabled tags
export const Disabled = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Tag label="Disabled" disabled />
      <Tag label="Disabled with Icon" icon={<Icons.AlertCircle />} disabled />
      <Tag label="Disabled Dismissible" dismissible disabled />
      <Tag 
        label="Disabled Clickable" 
        onClick={() => console.log('This should not fire')} 
        disabled 
      />
    </div>
  ),
};

// Clickable tags
export const Clickable = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Tag 
        label="Clickable" 
        onClick={() => console.log('Tag clicked')} 
      />
      <Tag 
        label="Clickable Primary" 
        color="primary"
        onClick={() => console.log('Tag clicked')} 
      />
      <Tag 
        label="Clickable Success" 
        color="success"
        onClick={() => console.log('Tag clicked')} 
      />
    </div>
  ),
};

// All variants together
export const AllTags = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Filled Tags</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Tag label="Default" variant="filled" color="default" />
          <Tag label="Primary" variant="filled" color="primary" />
          <Tag label="Success" variant="filled" color="success" />
          <Tag label="Error" variant="filled" color="error" />
          <Tag label="Warning" variant="filled" color="warning" />
          <Tag label="Info" variant="filled" color="info" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Outlined Tags</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Tag label="Default" variant="outlined" color="default" />
          <Tag label="Primary" variant="outlined" color="primary" />
          <Tag label="Success" variant="outlined" color="success" />
          <Tag label="Error" variant="outlined" color="error" />
          <Tag label="Warning" variant="outlined" color="warning" />
          <Tag label="Info" variant="outlined" color="info" />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Subtle Tags</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Tag label="Default" variant="subtle" color="default" />
          <Tag label="Primary" variant="subtle" color="primary" />
          <Tag label="Success" variant="subtle" color="success" />
          <Tag label="Error" variant="subtle" color="error" />
          <Tag label="Warning" variant="subtle" color="warning" />
          <Tag label="Info" variant="subtle" color="info" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Tags with Icons</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Tag label="Default" icon={<Icons.AlertCircle />} color="default" />
          <Tag label="Primary" icon={<Icons.CheckCircle />} color="primary" />
          <Tag label="Success" icon={<Icons.Check />} color="success" />
          <Tag label="Error" icon={<Icons.XCircle />} color="error" />
          <Tag label="Warning" icon={<Icons.AlertTriangle />} color="warning" />
          <Tag label="Info" icon={<Icons.AlertCircle />} color="info" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '1rem', fontFamily: 'Poppins, sans-serif' }}>Dismissible Tags</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Tag label="Default" dismissible color="default" />
          <Tag label="Primary" dismissible color="primary" />
          <Tag label="Success" dismissible color="success" />
          <Tag label="Error" dismissible color="error" />
          <Tag label="Warning" dismissible color="warning" />
          <Tag label="Info" dismissible color="info" />
        </div>
      </div>
    </div>
  ),
}; 