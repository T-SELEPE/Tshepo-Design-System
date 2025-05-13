import React from 'react';
import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' },
  },
};

// Base alert with no title
export const Default = {
  args: {
    children: 'This is where the alert description goes, please replace it with your own.',
  },
};

// Alert with title
export const WithTitle = {
  args: {
    title: 'Alert message goes here!',
    children: 'This is where the alert description goes, please replace it with your own.',
  },
};

// Alert with title and close button
export const WithCloseButton = {
  args: {
    title: 'Alert message goes here!',
    children: 'This is where the alert description goes, please replace it with your own.',
    onClose: () => {},
  },
};

// Alert with left border
export const WithLeftBorder = {
  args: {
    title: 'Alert message goes here!',
    children: 'This is where the alert description goes, please replace it with your own.',
    withBorder: true,
    onClose: () => {},
  },
};

// Alert with subtle variant
export const SubtleVariant = {
  args: {
    title: 'Alert message goes here!',
    children: 'This is where the alert description goes, please replace it with your own.',
    variant: 'subtle',
    onClose: () => {},
  },
};

// Alert types
export const InfoAlert = {
  args: {
    title: 'Alert message goes here!',
    children: 'This is where the alert description goes, please replace it with your own.',
    type: 'info',
    onClose: () => {},
  },
};

export const WarningAlert = {
  args: {
    title: 'Alert message goes here!',
    children: 'This is where the alert description goes, please replace it with your own.',
    type: 'warning',
    onClose: () => {},
  },
};

export const SuccessAlert = {
  args: {
    title: 'Alert message goes here!',
    children: 'This is where the alert description goes, please replace it with your own.',
    type: 'success',
    onClose: () => {},
  },
};

export const ErrorAlert = {
  args: {
    title: 'Alert message goes here!',
    children: 'This is where the alert description goes, please replace it with your own.',
    type: 'error',
    onClose: () => {},
  },
};

// All variants together
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontFamily: 'Poppins, sans-serif' }}>Info Alerts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Alert 
            title="Alert message goes here!" 
            type="info"
            onClose={() => {}}
          >
            This is where the alert description goes, please replace it with your own.
          </Alert>
          <Alert 
            title="Alert message goes here!" 
            type="info"
            variant="subtle"
            onClose={() => {}}
          >
            This is where the alert description goes, please replace it with your own.
          </Alert>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontFamily: 'Poppins, sans-serif' }}>Warning Alerts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Alert 
            title="Alert message goes here!" 
            type="warning"
            onClose={() => {}}
          >
            This is where the alert description goes, please replace it with your own.
          </Alert>
          <Alert 
            title="Alert message goes here!" 
            type="warning"
            variant="subtle"
            onClose={() => {}}
          >
            This is where the alert description goes, please replace it with your own.
          </Alert>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontFamily: 'Poppins, sans-serif' }}>Success Alerts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Alert 
            title="Alert message goes here!" 
            type="success"
            onClose={() => {}}
          >
            This is where the alert description goes, please replace it with your own.
          </Alert>
          <Alert 
            title="Alert message goes here!" 
            type="success"
            variant="subtle"
            onClose={() => {}}
          >
            This is where the alert description goes, please replace it with your own.
          </Alert>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem', fontFamily: 'Poppins, sans-serif' }}>Error Alerts</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Alert 
            title="Alert message goes here!" 
            type="error"
            onClose={() => {}}
          >
            This is where the alert description goes, please replace it with your own.
          </Alert>
          <Alert 
            title="Alert message goes here!" 
            type="error"
            variant="subtle"
            onClose={() => {}}
          >
            This is where the alert description goes, please replace it with your own.
          </Alert>
        </div>
      </div>
    </div>
  ),
}; 