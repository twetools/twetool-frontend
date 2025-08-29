# List Base Class Architecture

This directory implements a base class architecture for List components, similar to the InputField pattern used throughout the application.

## Architecture Overview

### Base Layer

- **`BaseList.tsx`** - Core list rendering logic with all variants and styling
- **`List.tsx`** - Main component that extends BaseList (similar to InputField)

### Specialized Components

- **`IconList.tsx`** - Always renders with icon variant, cleaner API
- **`NavigationList.tsx`** - Automatically creates Link components for navigation

## Usage Patterns

### Base List Component

```tsx
import { List } from "@/components/ui/list";

<List items={items} variant="icon" />
<List items={items} variant="horizontal" />
```

### Specialized Components

```tsx
import { IconList, NavigationList } from "@/components/ui/list";

// IconList - always uses icon styling
<IconList items={iconItems} horizontal={false} />

// NavigationList - automatically creates Link components
<NavigationList items={navItems} horizontal={true} />
```

## Benefits

1. **Consistent Base Logic** - All list styling and behavior centralized in BaseList
2. **Specialized APIs** - Cleaner interfaces for specific use cases
3. **Template Compliance** - All components use proper brand colors and fonts
4. **Extensible** - Easy to create new specialized list types
5. **Type Safety** - Full TypeScript support with proper interfaces

## Template Styling

All components follow the established brand standards:

- **Icons**: `text-brand-500 dark:text-brand-400`
- **Text**: `text-sm text-gray-500 dark:text-gray-400`
- **Font**: Outfit (applied globally)
- **Layout**: Consistent spacing and borders
