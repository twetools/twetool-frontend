# Popover Component

## Overview

The Popover component provides contextual overlays that appear on demand to display additional information, actions, or content. Built with full dark mode support and consistent with the twetool design system.

## Features

- **4 Position Options**: Top, right, bottom, left positioning
- **Click Outside Dismissal**: Automatically closes when clicking outside
- **Dark Mode Compatible**: Full support for dark/light themes
- **Customizable Content**: Rich content support including headers, actions, and complex layouts
- **Flexible Triggers**: Works with any React element as a trigger
- **Template Styling**: Consistent with twetool brand colors and typography

## Usage

### Basic Popover

```tsx
import { Popover } from "@/components/ui/popovers";
import Button from "@/components/ui/button/Button";

<Popover position="bottom" trigger={<Button size="sm">Open Popover</Button>}>
  <div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
    <h3 className="text-base font-semibold text-gray-800 dark:text-white">
      Popover Title
    </h3>
  </div>
  <div className="p-5">
    <p className="text-sm text-gray-700 dark:text-gray-300">
      Popover content goes here.
    </p>
  </div>
</Popover>;
```

### With Icon Trigger

```tsx
<Popover
  position="top"
  trigger={
    <InfoIcon className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
  }
>
  <div className="w-72">
    <div className="p-3">
      <p className="text-xs text-gray-700 dark:text-gray-300">
        Helpful information or tooltip content.
      </p>
    </div>
  </div>
</Popover>
```

## Props

| Prop        | Type                                     | Default | Description                                 |
| ----------- | ---------------------------------------- | ------- | ------------------------------------------- |
| `position`  | `"top" \| "right" \| "bottom" \| "left"` | -       | Position of the popover relative to trigger |
| `trigger`   | `React.ReactNode`                        | -       | The element that triggers the popover       |
| `children`  | `React.ReactNode`                        | -       | Content to display in the popover           |
| `className` | `string`                                 | `""`    | Additional CSS classes for the container    |

## Content Patterns

### Standard Header + Content

```tsx
<div className="relative rounded-t-xl border-b border-gray-200 bg-gray-100 px-5 py-3 dark:border-gray-700 dark:bg-gray-800">
  <h3 className="text-base font-semibold text-gray-800 dark:text-white">
    Header Title
  </h3>
</div>
<div className="p-5">
  <p className="text-sm text-gray-700 dark:text-gray-300">
    Content text
  </p>
</div>
```

### Simple Content (No Header)

```tsx
<div className="p-3">
  <p className="text-xs text-gray-700 dark:text-gray-300">
    Brief tooltip content
  </p>
</div>
```

### Action Menu

```tsx
<div className="p-2">
  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
    Action Item
  </button>
</div>
```

## Width Control

Control popover width by wrapping content in a div with width classes:

```tsx
<Popover position="bottom" trigger={trigger}>
  <div className="w-64"> {/* Compact */}
    {content}
  </div>
</Popover>

<Popover position="bottom" trigger={trigger}>
  <div className="w-96"> {/* Wide */}
    {content}
  </div>
</Popover>
```

## Design Guidelines

### When to Use

- **Contextual Information**: Additional details that don't fit in the main interface
- **Help Text**: Explanations for form fields or features
- **Quick Actions**: Small menus or action lists
- **Rich Tooltips**: Enhanced tooltips with formatted content

### Best Practices

- Keep content concise and scannable
- Use appropriate positioning for screen real estate
- Include clear headers for complex content
- Maintain consistent spacing and typography
- Ensure adequate contrast in dark mode
- Use icons and visual hierarchy effectively

### Accessibility

- Popover automatically manages focus and click-outside behavior
- Use semantic HTML within popover content
- Ensure sufficient color contrast for text
- Consider keyboard navigation for interactive elements

## Template Compliance

All styling follows the established brand standards:

- **Colors**: Uses standard gray scale and brand colors
- **Typography**: Outfit font family with consistent sizing
- **Spacing**: Standard padding and margin patterns
- **Borders**: Consistent border radius and colors
- **Shadows**: Template-compliant shadow-lg styling
- **Dark Mode**: Full compatibility with dark theme

## Examples

See complete examples in:

- `src/app/(examples)/(ui-elements)/popovers/BasicPopovers.tsx`
- `src/app/(examples)/(ui-elements)/popovers/PopoversWithContent.tsx`
- `src/app/(examples)/(ui-elements)/popovers/PopoverVariations.tsx`
