import React, { useState } from 'react';
import { Rating } from './Rating';

export default {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// Static rating examples
export const Default = {
  args: {
    value: 3,
    maxValue: 5,
  },
};

export const SmallSize = {
  args: {
    value: 3,
    size: 'small',
  },
};

export const MediumSize = {
  args: {
    value: 3,
    size: 'medium',
  },
};

export const LargeSize = {
  args: {
    value: 3,
    size: 'large',
  },
};

export const OutlinedVariant = {
  args: {
    value: 3,
    variant: 'outlined',
  },
};

export const FilledVariant = {
  args: {
    value: 3,
    variant: 'filled',
  },
};

export const Disabled = {
  args: {
    value: 3,
    disabled: true,
  },
};

export const DisabledZeroValue = {
  args: {
    value: 0,
    disabled: true,
  },
};

export const CustomMaxValue = {
  args: {
    value: 7,
    maxValue: 10,
  },
};

// Interactive rating example
export const Interactive = () => {
  const [rating, setRating] = useState(0);
  
  return (
    <div>
      <h3 style={{ marginBottom: '0.5rem', fontFamily: 'Poppins, sans-serif' }}>Rate this product:</h3>
      <Rating value={rating} onChange={setRating} />
      <p style={{ marginTop: '0.5rem', fontFamily: 'Poppins, sans-serif' }}>
        Selected rating: {rating} of 5
      </p>
    </div>
  );
};

// All variants and sizes
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontFamily: 'Poppins, sans-serif' }}>
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Filled Variant (Default)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <p>0 of 5 stars:</p>
            <Rating value={0} variant="filled" />
          </div>
          <div>
            <p>1 of 5 stars:</p>
            <Rating value={1} variant="filled" />
          </div>
          <div>
            <p>2 of 5 stars:</p>
            <Rating value={2} variant="filled" />
          </div>
          <div>
            <p>3 of 5 stars:</p>
            <Rating value={3} variant="filled" />
          </div>
          <div>
            <p>4 of 5 stars:</p>
            <Rating value={4} variant="filled" />
          </div>
          <div>
            <p>5 of 5 stars:</p>
            <Rating value={5} variant="filled" />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Outlined Variant</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <p>0 of 5 stars:</p>
            <Rating value={0} variant="outlined" />
          </div>
          <div>
            <p>1 of 5 stars:</p>
            <Rating value={1} variant="outlined" />
          </div>
          <div>
            <p>2 of 5 stars:</p>
            <Rating value={2} variant="outlined" />
          </div>
          <div>
            <p>3 of 5 stars:</p>
            <Rating value={3} variant="outlined" />
          </div>
          <div>
            <p>4 of 5 stars:</p>
            <Rating value={4} variant="outlined" />
          </div>
          <div>
            <p>5 of 5 stars:</p>
            <Rating value={5} variant="outlined" />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>Sizes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <p>Small:</p>
            <Rating value={3} size="small" />
          </div>
          <div>
            <p>Medium (default):</p>
            <Rating value={3} size="medium" />
          </div>
          <div>
            <p>Large:</p>
            <Rating value={3} size="large" />
          </div>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '0.5rem' }}>States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <p>Enabled:</p>
            <Rating value={3} />
          </div>
          <div>
            <p>Disabled:</p>
            <Rating value={3} disabled />
          </div>
        </div>
      </div>
    </div>
  ),
}; 