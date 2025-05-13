import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { Button } from '../Button/Button';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const Vertical = {
  args: {
    vertical: true,
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
};

export const ButtonCount = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* 2 buttons */}
      <ButtonGroup>
        <Button variant="primary">Button 1</Button>
        <Button variant="primary">Button 2</Button>
      </ButtonGroup>
      
      {/* 3 buttons */}
      <ButtonGroup>
        <Button variant="primary">Button 1</Button>
        <Button variant="primary">Button 2</Button>
        <Button variant="primary">Button 3</Button>
      </ButtonGroup>
      
      {/* 4 buttons */}
      <ButtonGroup>
        <Button variant="primary">Button 1</Button>
        <Button variant="primary">Button 2</Button>
        <Button variant="primary">Button 3</Button>
        <Button variant="primary">Button 4</Button>
      </ButtonGroup>
      
      {/* 5 buttons */}
      <ButtonGroup>
        <Button variant="primary">Button 1</Button>
        <Button variant="primary">Button 2</Button>
        <Button variant="primary">Button 3</Button>
        <Button variant="primary">Button 4</Button>
        <Button variant="primary">Button 5</Button>
      </ButtonGroup>
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ButtonGroup>
        <Button variant="primary">Button 1</Button>
        <Button variant="primary">Button 2</Button>
        <Button variant="primary">Button 3</Button>
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

export const GroupSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ButtonGroup size="small">
        <Button>Small 1</Button>
        <Button>Small 2</Button>
        <Button>Small 3</Button>
      </ButtonGroup>
      
      <ButtonGroup size="medium">
        <Button>Medium 1</Button>
        <Button>Medium 2</Button>
        <Button>Medium 3</Button>
      </ButtonGroup>
      
      <ButtonGroup size="large">
        <Button>Large 1</Button>
        <Button>Large 2</Button>
        <Button>Large 3</Button>
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
        <Button iconLeft="◀" iconOnly aria-label="Previous" />
        <Button iconLeft="▶" iconOnly aria-label="Play" />
        <Button iconLeft="↻" iconOnly aria-label="Repeat" />
        <Button iconLeft="↓" iconOnly aria-label="Download" />
      </ButtonGroup>
    </div>
  ),
}; 