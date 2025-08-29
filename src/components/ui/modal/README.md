# Modal Components

This directory contains modal-related components organized by functionality.

## Structure

```
modal/
├── FormModal.tsx           # Main form modal component
├── FormModalHeader.tsx     # Modal header with title/subtitle
├── FormModalContent.tsx    # Form wrapper with focus management
├── FormModalActions.tsx    # Modal footer with action buttons
├── index.tsx              # Base Modal component
├── index.ts               # Barrel exports
└── README.md              # This documentation
```

## Components

### FormModal

Main form modal component that composes all sub-components.

```typescript
<FormModal
  isOpen={isOpen}
  onClose={onClose}
  title="Create New Item"
  subTitle="Fill out the form below"
  onSave={handleSave}
  saveLabel="Create"
  isLoading={isSubmitting}
>
  {/* Form content */}
</FormModal>
```

### FormModalHeader

Renders the modal title and optional subtitle.

```typescript
<FormModalHeader
  title="Edit Profile"
  subTitle="Update your personal information"
/>
```

### FormModalContent

Wraps form content with focus management and form submission handling.

```typescript
<FormModalContent isOpen={isOpen} onSubmit={handleSubmit}>
  {/* Form fields */}
</FormModalContent>
```

### FormModalActions

Renders action buttons (Cancel/Save) with loading states.

```typescript
<FormModalActions
  onClose={onClose}
  onSave={onSave}
  saveLabel="Update"
  isLoading={isLoading}
/>
```

## Features

- **Automatic Focus Management**: First input field is automatically focused when modal opens
- **Scrollbar Compensation**: Prevents layout shift when modal opens
- **Loading States**: Built-in support for loading indicators
- **Form Submission**: Handles form submission and prevents double-submit
- **Keyboard Navigation**: ESC key closes modal
- **Composition**: Components can be used independently or together

## Usage Patterns

### Simple Form Modal

```typescript
<FormModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Add New Contact"
  onSave={handleCreateContact}
  isLoading={isCreating}
>
  <ContactForm />
</FormModal>
```

### Custom Actions

```typescript
<FormModal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Advanced Settings"
  showFooter={false}
>
  <AdvancedSettings />
  <FormModalActions
    onClose={() => setShowModal(false)}
    onSave={handleSave}
    saveLabel="Apply Settings"
  >
    <button onClick={handleReset}>Reset</button>
  </FormModalActions>
</FormModal>
```
