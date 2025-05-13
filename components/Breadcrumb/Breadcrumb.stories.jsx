import React from 'react';
import { Breadcrumb } from './Breadcrumb';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

const SimpleItems = [
  { label: 'Link', href: '#' },
  { label: 'Link', href: '#' },
  { label: 'Current Page', isCurrent: true },
];

const ItemsWithIcons = [
  { label: 'Link', href: '#', icon: 'ℹ️' },
  { label: 'Link', href: '#', icon: '🔗' },
  { label: 'Current Page', isCurrent: true, icon: '📄' },
];

export const Default = {
  args: {
    items: SimpleItems,
  },
};

export const TwoLevels = {
  args: {
    items: [
      { label: 'Link', href: '#' },
      { label: 'Current Page', isCurrent: true },
    ],
  },
};

export const ThreeLevels = {
  args: {
    items: SimpleItems,
  },
};

export const FourLevels = {
  args: {
    items: [
      { label: 'Link', href: '#' },
      { label: 'Link', href: '#' },
      { label: 'Link', href: '#' },
      { label: 'Current Page', isCurrent: true },
    ],
  },
};

export const WithIcons = {
  args: {
    variant: 'withIcons',
    items: ItemsWithIcons,
  },
};

export const CustomSeparator = {
  args: {
    separator: '/',
    items: SimpleItems,
  },
}; 