# Input Field Semantic Layer Architecture

## Overview

Refactored input field components to use **InputField** and **TextareaBase** as semantic base layers, eliminating code duplication and providing consistent functionality across all input components.

## New Architecture

```
InputField (semantic base layer)
    ↑
Specialized Input Components (EmailField, NameField, PhoneField, etc.)

TextareaBase (semantic base layer)
    ↑
Specialized Textarea Components (NotesField, etc.)
```

## Enhanced InputField Features

### Core Props

- All standard HTML input props (`type`, `value`, `onChange`, etc.)
- State props (`disabled`, `error`, `success`, `readOnly`)
- Enhanced styling and behavior

### Semantic Layer Props

- `leftIcon` / `rightIcon` - Custom icons with proper positioning
- `leftPadding` / `rightPadding` - Automatic padding when using icons
- `iconBorder` - Border separator for left icons
- `copyable` - Built-in copy functionality
- `onCopy` - Custom copy handler

## Specialized Components

### EmailField

```tsx
<EmailField
  value={email}
  onChange={setEmail}
  copyable={true}
  error={hasError}
/>
```

### PhoneField

```tsx
<PhoneField
  value={phone}
  onChange={setPhone}
  icon={<CustomIcon />}
  copyable={false}
/>
```

### NameField

```tsx
<NameField value={name} onChange={setName} placeholder="Enter full name" />
```

## TextareaBase Features

### Core Props

- All standard HTML textarea props
- State props (`disabled`, `error`, `success`, `readOnly`)
- Enhanced styling and behavior

### Semantic Layer Props

- `leftIcon` / `rightIcon` - Icon support for textareas
- `resize` - Control resize behavior
- `minHeight` - Minimum height constraint

## Specialized Textarea Components

### NotesField

```tsx
<NotesField
  value={notes}
  onChange={setNotes}
  placeholder="Enter notes..."
  rows={4}
/>
```

## Benefits

### 1. DRY Principle

- Single source of truth for input/textarea styling
- No code duplication across components
- Consistent behavior and appearance

### 2. Maintainability

- Changes to base components affect all specialized components
- Single place to fix bugs or add features
- Easier to maintain design system

### 3. Flexibility

- Base components can be used directly for custom needs
- Easy to create new specialized components
- Icon support built-in

### 4. Consistency

- All input fields behave identically
- Uniform error/success/disabled states
- Consistent spacing and styling

### 5. Developer Experience

- Intuitive prop names and behavior
- TypeScript support with proper types
- Easy to remember and use

## Usage Examples

### Direct Base Component Usage

```tsx
// Custom input with icon
<InputField
  placeholder="Search..."
  leftIcon={<SearchIcon />}
  value={search}
  onChange={setSearch}
/>

// Custom textarea with icon
<TextareaBase
  placeholder="Description..."
  leftIcon={<DocumentIcon />}
  rows={3}
  value={description}
  onChange={setDescription}
/>
```

### Specialized Component Usage

```tsx
// Using specialized components
<EmailField value={email} onChange={setEmail} />
<PhoneField value={phone} onChange={setPhone} />
<NotesField value={notes} onChange={setNotes} />
```

### State Management

```tsx
// All components support consistent state props
<EmailField
  value={email}
  onChange={setEmail}
  error={emailError}
  success={emailValid}
  disabled={isLoading}
  readOnly={isReadOnly}
  hint="Email format: user@domain.com"
/>
```

## Migration Guide

### Before (Old EmailField)

```tsx
<EmailField value={email} onChange={setEmail} copyable={true} />
```

### After (New EmailField)

```tsx
<EmailField
  value={email}
  onChange={setEmail}
  copyable={true}
  error={hasError}
  hint="Validation message"
/>
```

**Note**: The refactoring maintains backward compatibility - existing code continues to work while gaining access to new features.

## File Structure

```
src/components/form-elements/
├── input/
│   ├── InputField.tsx          # Base semantic layer
│   ├── TextareaBase.tsx        # Base textarea layer
│   ├── EmailField.tsx          # Specialized email input
│   ├── NameField.tsx           # Specialized name input
│   └── NotesField.tsx          # Specialized notes textarea
├── phone/
│   ├── PhoneField.tsx          # Specialized phone input
│   ├── MobilePhoneField.tsx    # Mobile phone variant
│   ├── HomePhoneField.tsx      # Home phone variant
│   └── WorkPhoneField.tsx      # Work phone variant
└── dates/
    └── DateField.tsx           # Date field (already refactored)
```

## Future Enhancements

1. **Additional Specialized Components**

   - AddressField
   - PasswordField with strength indicator
   - SearchField with autocomplete
   - NumberField with formatting

2. **Enhanced Features**

   - Validation integration
   - Accessibility improvements
   - Animation support
   - Theme variants

3. **Form Integration**
   - FormField wrapper integration
   - Error handling improvements
   - Label association
   - Field grouping support
