# Pagination Component

A responsive, accessible pagination component following twetool design patterns.

## Features

- **Multiple Variants**: Default (responsive), icon-only (compact), text-with-icon (always shows both)
- **Smart Page Logic**: Automatically handles ellipsis for large page counts
- **Responsive Design**: Shows icons on mobile, text on desktop (default variant)
- **Dark Mode Support**: Full dark mode compatibility
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Edge Cases**: Proper handling of first/last page states

## Usage

```tsx
import { Pagination } from "@/components/ui/pagination";

<Pagination
  totalPages={20}
  initialPage={1}
  variant="default"
  onPageChange={(page) => {
    console.log("Page changed to:", page);
    // Handle page change logic
  }}
/>;
```

## Props

| Prop           | Type                                           | Default     | Description                |
| -------------- | ---------------------------------------------- | ----------- | -------------------------- |
| `totalPages`   | `number`                                       | required    | Total number of pages      |
| `initialPage`  | `number`                                       | `1`         | Starting page number       |
| `onPageChange` | `(page: number) => void`                       | `undefined` | Callback when page changes |
| `variant`      | `"default" \| "icon-only" \| "text-with-icon"` | `"default"` | Display variant            |
| `className`    | `string`                                       | `""`        | Additional CSS classes     |

## Variants

### Default (Responsive)

- Shows icons on mobile, text on desktop
- Best for general use cases

### Icon Only

- Compact design with only navigation icons
- Best for space-constrained layouts

### Text with Icon

- Always shows both text and icons
- Best when clarity is paramount

## Examples

Visit `/pagination` in the development environment to see all variants and use cases in action.

## Integration

The component is automatically included in the sidebar navigation under "UI Elements > Pagination".
