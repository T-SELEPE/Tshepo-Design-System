import React from 'react';
import { Button } from './Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

// Base variants
export const Primary = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args:{
    children:'Button',
    variant:'secondary',
    size:"medium"
  },
};

export const Outline = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Success = {
  args: {
    children: 'Button',
    variant: 'success',
  },
};

export const Danger = {
  args: {
    children: 'Button',
    variant: 'danger',
  },
};

export const Warning = {
  args: {
    children: 'Button',
    variant: 'warning',
  },
};

export const Info = {
  args: {
    children: 'Button',
    variant: 'info',
  },
};

// Size variations
export const Small = {
  args: {
    children: 'Button',
    size: 'small',
  },
};

export const Medium = {
  args: {
    children: 'Button',
    size: 'medium',
  },
};

export const Large = {
  args: {
    children: 'Button',
    size: 'large',
  },
};

// States and special features
export const Disabled = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const FullWidth = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

export const Rounded = {
  args: {
    children: 'Button',
    rounded: true,
  },
};

// With icons
export const WithLeftIcon = {
  args: {
    children: 'Button',
    iconLeft: '👈',
  },
};

export const WithRightIcon = {
  args: {
    children: 'Button',
    iconRight: '👉',
  },
};

export const IconOnly = {
  args: {
    iconLeft: '★',
    iconOnly: true,
    'aria-label': 'Star',
  },
};

export const IconOnlyRounded = {
  args: {
    iconLeft: '★',
    iconOnly: true,
    rounded: true,
    'aria-label': 'Star',
  },
};

// Button group examples
export const HorizontalButtonGroup = {
  render: () => (
    <ButtonGroup>
      <Button variant="primary">Button 1</Button>
      <Button variant="primary">Button 2</Button>
      <Button variant="primary">Button 3</Button>
    </ButtonGroup>
  ),
};

export const VerticalButtonGroup = {
  render: () => (
    <ButtonGroup vertical>
      <Button variant="primary">Button 1</Button>
      <Button variant="primary">Button 2</Button>
      <Button variant="primary">Button 3</Button>
    </ButtonGroup>
  ),
};

export const ButtonGroupSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ButtonGroup>
        <Button variant="primary" size="small">Button 1</Button>
        <Button variant="primary" size="small">Button 2</Button>
        <Button variant="primary" size="small">Button 3</Button>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="primary">Button 1</Button>
        <Button variant="primary">Button 2</Button>
        <Button variant="primary">Button 3</Button>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="primary" size="large">Button 1</Button>
        <Button variant="primary" size="large">Button 2</Button>
        <Button variant="primary" size="large">Button 3</Button>
      </ButtonGroup>
    </div>
  ),
};

export const ButtonGroupVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ButtonGroup>
        <Button variant="primary">Button 1</Button>
        <Button variant="primary">Button 2</Button>
        <Button variant="primary">Button 3</Button>
        <Button variant="primary">Button 4</Button>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="secondary">Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="secondary">Button 3</Button>
      </ButtonGroup>
      
      <ButtonGroup>
        <Button variant="outline">Button 1</Button>
        <Button variant="outline">Button 2</Button>
        <Button variant="outline">Button 3</Button>
      </ButtonGroup>
    </div>
  ),
};

export const IconButtonGroups = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ButtonGroup>
        <Button iconLeft="◀" iconOnly aria-label="Previous" />
        <Button iconLeft="▶" iconOnly aria-label="Next" />
      </ButtonGroup>
      
      <ButtonGroup>
        <Button iconLeft="◀" iconOnly aria-label="Previous" />
        <Button iconLeft="■" iconOnly aria-label="Stop" />
        <Button iconLeft="▶" iconOnly aria-label="Next" />
      </ButtonGroup>
      
      <ButtonGroup>
        <Button iconLeft="1" />
        <Button iconLeft="2" />
        <Button iconLeft="3" />
        <Button iconLeft="4" />
        <Button iconLeft="5" />
      </ButtonGroup>
    </div>
  ),
}; 