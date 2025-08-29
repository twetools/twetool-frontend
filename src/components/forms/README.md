# Forms Components

This directory contains form components organized by domain/business logic.

## Structure

```
forms/
├── buyer/              # Buyer-specific form sections
│   ├── BusinessInfoSection.tsx
│   ├── NotesSection.tsx
│   ├── PersonalInfoSection.tsx
│   ├── HomeSection.tsx
│   ├── StatusAndRoleSection.tsx
│   └── index.ts        # Barrel export for clean imports
└── index.ts            # Main barrel export
```

## Usage

### Import specific components:

```typescript
import { PersonalInfoSection, HomeSection } from "@/components/forms/buyer";
```

### Import all buyer components:

```typescript
import {
  BusinessInfoSection,
  PersonalInfoSection /* ... */,
} from "@/components/forms/buyer";
```

## Design Principles

- **Domain-driven**: Components are organized by business domain (buyer, seller, agent)
- **Reusable**: Each section can be used independently in different forms
- **Composable**: Sections can be combined to create complete forms
- **Typed**: All components use TypeScript interfaces for props

## Adding New Domains

When adding new form sections (e.g., seller, agent):

1. Create a new directory: `forms/seller/`
2. Add components: `SellerInfoSection.tsx`, etc.
3. Create barrel export: `forms/seller/index.ts`
4. Update main export: `forms/index.ts`
