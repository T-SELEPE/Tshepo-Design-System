# The ⚡ Elektrik

A modern React component library with consistent styling and a focus on usability, crafted by Tshepo.

## Features

- Consistent design patterns across all components
- Accessible, responsive UI components
- Flexible and customizable
- Follows modern React best practices
- Uses Poppins font family throughout

## Installation

```bash
npm install elektrik-design-system
```

## Usage

To use the design system, you need to wrap your application with the `GlobalStyles` component to ensure consistent font usage across all components:

```jsx
import React from 'react';
import { GlobalStyles, Button, Input } from 'elektrik-design-system';

function App() {
  return (
    <>
      <GlobalStyles /> {/* Add this at the root of your app */}
      <div className="app">
        <Input label="Username" placeholder="Enter your username" />
        <Button>Submit</Button>
      </div>
    </>
  );
}
```

## Available Components

- **Alert**: Notification messages in various states
- **Checkbox**: Selectable input controls with multiple variants
- **Dropdown**: Menu selection component with support for icons and custom content
- **Input**: Text input field with various states and icons
- **Radio**: Radio button inputs for exclusive selection
- **Rating**: Star-based rating component
- **Tag**: Categorization labels with variants and actions
- **Toggle**: On/off switch component
- **ToggleCounter**: Increment/decrement counter component
- **Breadcrumb**: Navigation component for page hierarchy
- **Textarea**: Multi-line text input field
- **MaterialButton**: Material UI-based button component with enhanced icon support

## Font Setup

All components use the Poppins font family. The `GlobalStyles` component will automatically import the font from Google Fonts.

If you prefer to host the font yourself, you can include it manually in your HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Theming

You can access the design system's style variables directly:

```jsx
import { colors, typography, spacing } from 'elektrik-design-system';

// Use in your own styled components
const CustomElement = styled.div`
  color: ${colors.primary};
  font-family: ${typography.fontFamily};
  padding: ${spacing.md};
`;
```

## Development

To run the component library locally:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start Storybook: `npm run storybook`

## License

MIT

## Material UI Integration

This design system includes integration with Material UI, which provides a comprehensive set of UI components and icons that can be used alongside our custom components.

### Using Material UI Icons

The design system provides a `MaterialIcons` utility that wraps Material UI icons to work seamlessly with our components:

```jsx
import { MaterialIcons } from 'elektrik-design-system';

function MyComponent() {
  return (
    <button>
      <MaterialIcons.CheckCircle /> Success
    </button>
  );
}
```

### MaterialButton Component

The `MaterialButton` component uses Material UI's Button and IconButton internally, but styled to match our design system. It provides proper handling of start and end icons:

```jsx
import { MaterialButton, MaterialIcons } from 'elektrik-design-system';

function MyComponent() {
  return (
    <>
      {/* Simple button */}
      <MaterialButton>Click Me</MaterialButton>
      
      {/* With start and end icons */}
      <MaterialButton 
        variant="outlined" 
        startIcon={<MaterialIcons.Check />}
        endIcon={<MaterialIcons.ChevronRight />}
      >
        Continue
      </MaterialButton>
      
      {/* Icon-only button */}
      <MaterialButton 
        iconOnly 
        startIcon={<MaterialIcons.Plus />}
        aria-label="Add item" 
      />
    </>
  );
}
```

### Using Other Material UI Components

You can use Material UI components directly or create styled versions that match our design system's tokens:

```