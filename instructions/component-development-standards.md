# 🧱 Component Development Standards

## 🚨 CRITICAL: ZERO DEVIATION FROM WORKING EXAMPLES

**MANDATORY COMPLIANCE**: When provided with working example code (e.g., TailAdmin examples, existing component patterns):

**PRESERVE WORKING PATTERNS**: The core UI behavior, styling, and positioning logic from the working example must remain identical

**ACCEPTABLE twetool INTEGRATION**:
✅ Adding BaseFormControl wrapper (required for form integration)
✅ Adding TypeScript interfaces and props (required for type safety)
✅ Splitting into Base/Wrapper components (required for BaseFormControl pattern)
✅ Adding necessary state management (required for functionality)
✅ Adapting content/data to fit new use cases

**FORBIDDEN MODIFICATIONS** (these introduce problems):
❌ Changing z-index values when example works with standard values
❌ Adding portal rendering when example uses simple relative/absolute positioning
❌ Adding useEffect/useRef for position calculations when example uses simple patterns
❌ Modifying CSS classes or DOM structure when example works as-is
❌ "Improving" working positioning/layering logic that already functions correctly
❌ Adding complex state management when example uses simple patterns

**CORRECT APPROACH**:
✅ Keep the exact same dropdown positioning logic (relative/absolute with same z-index)
✅ Preserve the exact same CSS classes and DOM structure for the interactive elements
✅ Maintain the same complexity level for the core UI behavior
✅ Only add twetool integration patterns (BaseFormControl, TypeScript, etc.)

## Core Principle

The `src/app/(examples)` folder serves as the **authoritative source** for all component implementations, patterns, and best practices in the twetool application.

## Architecture Overview

### 1. Examples Folder Structure

```
src/app/(examples)/
├── layout.tsx                    # Shared layout for all examples
├── form-elements/               # Form component examples
│   ├── page.tsx                # Main form elements showcase
│   ├── DefaultInputs.tsx       # Basic input demonstrations
│   ├── DateInputs.tsx          # Date component examples
│   ├── PhoneInputs.tsx         # Phone input examples
│   └── [more-categories].tsx   # Additional form categories
├── layout-components/          # Layout component examples
│   ├── page.tsx                # Layout components showcase
│   └── [component-demos].tsx   # Individual demos
└── [other-categories]/         # Additional component categories
```

### 2. Component Implementation Rules

#### ✅ REQUIRED: Use Pre-built Components

- **ALL** implementations must use components from `src/components/`
- **NO** custom implementations or inline component creation
- **NO** duplicate component logic outside of `src/components/`

#### ✅ REQUIRED: Reference Examples First

- Before implementing any component, check `(examples)` folder
- Follow established patterns from existing examples
- Use identical prop patterns and component combinations

#### ✅ REQUIRED: Page Structure

Every example category must include:

- `page.tsx` - Main showcase aggregating all demos in the category
- Individual demo files (e.g., `PhoneInputs.tsx`, `DateInputs.tsx`)
- Consistent naming convention: `[ComponentType]s.tsx` (plural)

## Development Workflow

### 1. Component Discovery Process

1. **Check Examples First**: Look in `(examples)` for existing implementations
2. **Follow Established Patterns**: Use the same component combinations and props
3. **Reference Components**: Use only pre-built components from `src/components/`
4. **No Custom Logic**: Avoid creating new component patterns

### 2. Adding New Components

1. **Implement in Components**: Create the component in `src/components/`
2. **Create Example**: Add demonstration in appropriate `(examples)` category
3. **Update Page**: Include in the category's `page.tsx`
4. **Document Usage**: Show various states and configurations
5. **🚨 CRITICAL - Add to Source Control**:
   - Run `git add src/components/[new-component-path]/`
   - Run `git add src/app/(examples)/[new-example-path]/`
   - Verify with `git status` that files are tracked
   - Never leave new components untracked
6. **Update Documentation**: Automatically sync all instruction files:
   - Add component entry to `/instructions/ui-glossary.md`
   - Update relevant prompts in `.github/prompts/`
   - Add patterns to component development standards
   - Ensure cross-references are consistent

### 3. Component Categories

#### Form Elements (`form-elements/`)

- Input fields (text, email, password, etc.)
- Date and time pickers
- Phone number inputs
- Select dropdowns and multi-selects
- Checkboxes and radio buttons
- File uploads
- Form validation examples

#### Layout Components (`layout-components/`)

- Modals and dialogs
- Cards and containers
- Navigation components
- Sidebars and panels
- Grid systems

#### Data Display (`data-display/`)

- Tables and data grids
- Lists and galleries
- Charts and visualizations
- Status indicators

#### Interactive Components (`interactive/`)

- Alerts and notifications
- Buttons and actions
- Tooltips and popovers
- Tabs and accordions
- Drag and drop interfaces

## Implementation Standards

### 1. Example File Structure

```typescript
"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import [ActualComponent] from "@/components/[category]/[ActualComponent]";

export default function [ComponentType]s() {
  const [state, setState] = useState(/* initial state */);

  return (
    <ComponentCard title="[Component Type]s">
      <div className="space-y-8">
        {/* Section 1: Basic Usage */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic examples */}
          </div>
        </div>

        {/* Section 2: States and Validation */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            States and Validation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* State examples */}
          </div>
        </div>

        {/* Additional sections as needed */}
      </div>
    </ComponentCard>
  );
}
```

### 2. Page File Structure

```typescript
"use client";
import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import [Demo1] from "./[Demo1]";
import [Demo2] from "./[Demo2]";

export default function [CategoryName]() {
  return (
    <div>
      <PageBreadcrumb pageTitle="[Category Display Name]" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <[Demo1] />
        </div>
        <div className="space-y-6">
          <[Demo2] />
        </div>
      </div>
    </div>
  );
}
```

## Anti-Patterns to Avoid

### ❌ FORBIDDEN: Model Files

- **NO** `*Model.tsx` files for AI guidance
- **NO** helper files explaining component usage
- **USE** actual examples in `(examples)` instead

### ❌ FORBIDDEN: Inline Components

- **NO** creating components inside other components
- **NO** custom hooks for component-specific logic outside of `src/components/`
- **USE** pre-built components only

### ❌ FORBIDDEN: Duplicate Logic

- **NO** reimplementing existing component functionality
- **NO** copy-pasting component code
- **USE** proper imports and component composition

## Enforcement Rules

### 1. AI Development Guidelines

- AI must check `(examples)` before suggesting implementations
- AI must reference existing patterns from examples
- AI must use only pre-built components from `src/components/`
- AI must create examples for new components
- **AI must automatically update all relevant documentation**

### 2. Documentation Maintenance

**Automatic Updates Required for Any Component Changes**:

- **UI Glossary**: Add/update component entries with examples location
- **Prompts**: Update relevant `.github/prompts/` files with new patterns
- **Standards**: Add new patterns to this document
- **Cross-References**: Ensure consistency across all documentation
- **Examples**: Create or update demonstration files

### 3. Code Review Requirements

- All new components must have examples
- All examples must use pre-built components only
- No Model files or AI helper files allowed
- Examples must demonstrate multiple states and use cases
- **Documentation must be synchronized with implementation**

### 3. Component Lifecycle

1. **Component Creation** → Add to `src/components/`
2. **Example Creation** → Add to appropriate `(examples)` category
3. **Documentation** → Examples serve as living documentation
4. **Usage** → Reference examples for implementation patterns

## Button Component Standards

### Critical Implementation Rules

#### 1. Template Compliance

- **NEVER** create custom button implementations
- **ALWAYS** use base `Button` component for all button functionality
- **ALL** specialized buttons (SaveButton, CancelButton, etc.) must wrap base Button

#### 2. Size Consistency

- **ALWAYS** specify explicit `size` prop on all Button instances
- **DEFAULT** to `size="sm"` for consistency across examples
- **AVOID** mixing button sizes without clear UX justification

#### 3. Icon Integration

- **USE** `startIcon` and `endIcon` props for icon placement
- **ADD** explicit `className="h-5 w-5"` for problematic icons (SaveIcon, etc.)
- **NEVER** place icons directly as Button children

#### 4. Text Centering

- **TRUST** the conditional gap logic in base Button component
- **NO** manual centering overrides needed
- **CONDITIONAL** gap applied automatically: `gap-2` only when icons present

#### 5. Specialized Button Patterns

```typescript
// ✅ CORRECT: Specialized button wrapping base Button
const SaveButton = ({ showIcon, ...props }) => (
  <Button startIcon={showIcon ? <SaveIcon /> : undefined} {...props}>
    {children}
  </Button>
);

// ❌ WRONG: Custom button implementation
const SaveButton = ({ showIcon, ...props }) => (
  <button className="custom-styles">
    {showIcon && <SaveIcon />}
    {children}
  </button>
);
```

#### 6. Common Pitfalls to Avoid

- **DON'T** create buttons without explicit size props
- **DON'T** mix `size="md"` and `size="sm"` in same section
- **DON'T** bypass base Button component for specialized buttons
- **DON'T** add manual gap spacing - let conditional logic handle it

## Alert Component Standards

### Core Implementation Rules

- **ALWAYS** use the base `Alert` component from `/components/ui/alert/`
- **NEVER** create custom alert implementations
- **ALL** alerts must specify a valid `variant` prop
- **REQUIRED** props: `variant`, `title`, `message`

### Variant Usage Guidelines

#### 1. Variant Selection

- **success**: Positive feedback, successful operations, confirmations
- **error**: Critical errors, failed operations, validation failures
- **warning**: Cautionary information, potential issues, deprecation notices
- **info**: General information, tips, neutral system messages

#### 2. Content Standards

- **title**: Keep concise and action-oriented (e.g., "Success", "Error", "Warning")
- **message**: Provide clear, actionable information
- **linkText**: Use specific action words (e.g., "View details", "Learn more", "Try again")

#### 3. Link Implementation

```tsx
// ✅ CORRECT: Alert with optional link
<Alert
  variant="error"
  title="Validation Error"
  message="Please fix the following errors before submitting."
  showLink={true}
  linkHref="/help/validation"
  linkText="View validation guide"
/>

// ❌ WRONG: Custom alert implementation
<div className="custom-alert-styles">
  <span>Error message</span>
</div>
```

#### 4. Common Pitfalls to Avoid

- **DON'T** use generic titles like "Message" or "Notification"
- **DON'T** include redundant information in title and message
- **DON'T** use alerts for loading states (use loading indicators instead)
- **DON'T** create custom alert variants outside the defined set

## Avatar Component Standards

### Core Implementation Rules

- **ALWAYS** use the base `Avatar` component from `/components/ui/avatar/`
- **NEVER** create custom avatar implementations
- **ALL** avatars must provide a valid `src` prop
- **REQUIRED** props: `src`

### Size and Status Guidelines

#### 1. Size Selection

- **xsmall** (24px): Inline mentions, compact lists, small UI elements
- **small** (32px): Comment threads, chat messages, notification items
- **medium** (40px): Default size, user lists, navigation elements
- **large** (48px): Profile headers, team member cards, prominent displays
- **xlarge** (56px): User profile pages, settings pages, emphasis contexts
- **xxlarge** (64px): Large profile displays, hero sections, primary user identification

#### 2. Status Indicators

- **online**: Active users, available for communication
- **offline**: Inactive users, not currently available
- **busy**: Users in meetings, do not disturb status, focused work
- **none**: No status information, general profile display

#### 3. Implementation Standards

```tsx
// ✅ CORRECT: Avatar with proper sizing and status
<Avatar
  src="/images/user/user-01.png"
  alt="John Doe"
  size="medium"
  status="online"
/>

// ✅ CORRECT: Avatar in user profile context
<Avatar
  src={user.profileImage}
  alt={user.fullName}
  size="large"
  status={user.isOnline ? "online" : "offline"}
/>

// ❌ WRONG: Custom avatar implementation
<div className="custom-avatar-styles">
  <img src={user.image} alt={user.name} />
  <span className="status-dot"></span>
</div>
```

#### 4. Accessibility Requirements

- **ALWAYS** provide meaningful `alt` text
- **USE** descriptive alt text including user names when available
- **AVOID** generic alt text like "Avatar" or "Profile Picture"
- **INCLUDE** status information in alt text when relevant

#### 5. Common Pitfalls to Avoid

- **DON'T** create avatars without alt text
- **DON'T** use placeholder images in production
- **DON'T** mix avatar sizes within the same context without purpose
- **DON'T** override the circular shape styling
- **DON'T** create custom status indicators outside the defined set

## Badge Component Standards

### Core Implementation Rules

- **ALWAYS** use the base `Badge` component from `/components/ui/badge/`
- **NEVER** create custom badge implementations
- **ALL** badges must have meaningful content
- **REQUIRED** props: `children`

### Variant and Color Guidelines

#### 1. Variant Selection

- **light** (default): Subtle backgrounds with colored text, ideal for most use cases
- **solid**: Bold backgrounds with white text, use for emphasis or primary actions

#### 2. Color Usage

- **primary**: Default actions, general purpose, neutral information
- **success**: Positive status, completed actions, success states
- **error**: Errors, failures, critical alerts, destructive actions
- **warning**: Cautions, pending states, attention needed
- **info**: Informational content, neutral notifications, tips
- **light**: Subtle information, secondary content, disabled states
- **dark**: High contrast, emphasis in light themes

#### 3. Size Guidelines

- **sm**: Compact layouts, inline content, lists, table cells
- **md** (default): Standard UI elements, forms, cards, general purpose

#### 4. Implementation Standards

```tsx
// ✅ CORRECT: Badge with appropriate color and variant
<Badge color="success" variant="light" size="sm">
  Completed
</Badge>

// ✅ CORRECT: Badge with icons for enhanced meaning
<Badge color="warning" startIcon={<AlertIcon />}>
  Pending Review
</Badge>

// ✅ CORRECT: Status badge in data display
<Badge
  color={status === 'active' ? 'success' : 'error'}
  variant="light"
  size="sm"
>
  {status}
</Badge>

// ❌ WRONG: Custom badge implementation
<span className="custom-badge-styles">
  Status
</span>
```

#### 5. Icon Integration

- **startIcon**: Use for status indicators, categories, or supplementary information
- **endIcon**: Use for actions, counts, or trailing information
- **Icon sizing**: Icons automatically sized to fit badge dimensions
- **Accessibility**: Ensure icons enhance rather than replace text content

#### 6. Common Pitfalls to Avoid

- **DON'T** use badges without meaningful text content
- **DON'T** overuse solid variants (use light for most cases)
- **DON'T** mix badge sizes within the same context without purpose
- **DON'T** create badges with only icons (include text for accessibility)
- **DON'T** use badges for interactive elements (use buttons instead)

## Breadcrumb Component Standards

### Core Implementation Rules

- **ALWAYS** use the base `Breadcrumb` component from `/components/ui/breadcrumb/`
- **NEVER** create custom breadcrumb implementations
- **ALL** breadcrumbs must have meaningful navigation hierarchy
- **REQUIRED** props: `items`

### Variant and Navigation Guidelines

#### 1. Variant Selection

- **default**: Standard slash separators, suitable for most navigation contexts
- **withIcon**: Home icon for the first item, ideal for web applications with clear home concept
- **dotted**: Subtle dot separators, good for minimal designs or file paths
- **chevron**: Arrow separators, excellent for step-by-step processes or hierarchical navigation

#### 2. Item Structure Best Practices

- **label**: Use clear, descriptive text that represents the actual page/section name
- **href**: Provide links for all items except the current page (last item)
- **Current page**: Never link the final breadcrumb item (represents current location)

#### 3. Implementation Standards

```tsx
// ✅ CORRECT: Proper breadcrumb with clear hierarchy
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "iPhone 15 Pro" } // No href for current page
  ]}
  variant="chevron"
/>

// ✅ CORRECT: E-commerce navigation with categories
<Breadcrumb
  items={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Orders", href: "/dashboard/orders" },
    { label: "Order Details" }
  ]}
  variant="withIcon"
/>

// ❌ WRONG: All items linked (including current page)
<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Current Page", href: "/current" } // Should not be linked
  ]}
/>

// ❌ WRONG: Custom breadcrumb implementation
<div className="custom-breadcrumb">
  <span>Home</span> / <span>Current Page</span>
</div>
```

#### 4. Navigation Hierarchy Guidelines

- **Depth**: Keep breadcrumb depth reasonable (2-5 levels typically)
- **Labels**: Use consistent naming with actual page titles
- **Truncation**: For very deep hierarchies, consider showing only relevant levels
- **Context**: Ensure breadcrumbs reflect the actual site structure

#### 5. Accessibility Requirements

- **Semantic HTML**: Uses `nav` and `ol` elements for proper structure
- **ARIA Labels**: Includes `aria-label="Breadcrumb"` for screen readers
- **Link States**: Proper focus and hover states for keyboard navigation
- **Current Page**: Final item is not interactive (represents current location)

#### 6. Common Pitfalls to Avoid

- **DON'T** link the current page (final breadcrumb item)
- **DON'T** create overly deep breadcrumb hierarchies (>6 levels)
- **DON'T** use breadcrumbs for single-level navigation
- **DON'T** make breadcrumb labels different from actual page titles
- **DON'T** use breadcrumbs as primary navigation replacement

## ButtonsGroup Component Standards

### Core Implementation Rules

- **ALWAYS** use the base `ButtonsGroup` component from `/components/ui/buttons-group/`
- **NEVER** create custom button group implementations
- **ALL** button groups must have meaningful item labels
- **REQUIRED** props: `items`

### Variant and Size Guidelines

#### 1. Variant Selection

- **primary**: Blue theme with high contrast, ideal for primary actions and main navigation
- **secondary**: Gray theme with subtle styling, perfect for secondary controls and filters

#### 2. Size Guidelines

- **small**: Compact layouts, toolbar actions, filter controls, inline elements
- **medium** (default): Standard UI elements, tab navigation, general purpose controls
- **large**: Prominent displays, hero sections, primary action groups

#### 3. Icon Position Standards

- **left**: Status indicators, categories, navigation items with clear meaning
- **right**: Actions, next steps, directional controls
- **none** (default): Text-only groups, simple toggles, minimal interfaces

#### 4. Implementation Standards

```tsx
// ✅ CORRECT: Primary button group for main navigation
<ButtonsGroup
  items={[
    { label: "Dashboard", active: currentView === 0, onClick: () => setCurrentView(0) },
    { label: "Analytics", active: currentView === 1, onClick: () => setCurrentView(1) },
    { label: "Reports", active: currentView === 2, onClick: () => setCurrentView(2) }
  ]}
  variant="primary"
/>

// ✅ CORRECT: Secondary button group with icons for filtering
<ButtonsGroup
  items={[
    { label: "All", icon: <AllIcon />, active: filter === 'all', onClick: () => setFilter('all') },
    { label: "Active", icon: <ActiveIcon />, active: filter === 'active', onClick: () => setFilter('active') },
    { label: "Pending", icon: <PendingIcon />, active: filter === 'pending', onClick: () => setFilter('pending') }
  ]}
  variant="secondary"
  iconPosition="left"
  size="small"
/>

// ❌ WRONG: Custom button group implementation
<div className="button-group-custom">
  <button>Option 1</button>
  <button>Option 2</button>
</div>
```

#### 5. State Management Guidelines

- **active**: Use to highlight the currently selected option
- **disabled**: Use for unavailable options, maintain visual consistency
- **onClick**: Always provide meaningful callback functions
- **State synchronization**: Ensure button group state reflects application state

#### 6. Accessibility Requirements

- **Click handlers**: All interactive buttons must have onClick functions
- **Keyboard navigation**: Component handles keyboard focus automatically
- **Screen readers**: Labels must be descriptive and meaningful
- **State indication**: Active states are properly communicated to assistive technology

#### 7. Common Pitfalls to Avoid

- **DON'T** create button groups with only one item
- **DON'T** mix different themes within the same interface context
- **DON'T** use button groups for single actions (use regular buttons instead)
- **DON'T** create overly long button groups (>6 items typically)
- **DON'T** forget to implement onClick handlers for interactive functionality

## Dark Mode Styling Standards

### Text Color Guidelines

All component examples must ensure readability in both light and dark modes:

#### Primary Text Colors:

- **Headings**: `text-gray-900 dark:text-white`
- **Body text**: `text-gray-700 dark:text-gray-300`
- **Strong/Bold text**: `text-gray-900 dark:text-white`
- **Muted text**: `text-gray-600 dark:text-gray-400` (use sparingly, only for non-critical info)

#### Status and Accent Colors:

- **Success**: `text-green-600 dark:text-green-400`
- **Error**: `text-red-600 dark:text-red-400`
- **Warning**: `text-amber-600 dark:text-amber-400`
- **Info**: `text-blue-600 dark:text-blue-400`

### Background Guidelines

Always pair colored text with appropriate backgrounds for better contrast:

#### Background Patterns:

- **Info containers**: `bg-gray-50 dark:bg-gray-800`
- **Code blocks**: `bg-gray-100 dark:bg-gray-900`
- **Status indicators**: `bg-blue-50 dark:bg-blue-900/20`
- **Always include borders**: `border border-gray-200 dark:border-gray-700`

#### Status Background Combinations:

```tsx
// ✅ Good: Status with proper background
<div className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-200 dark:border-blue-800">
  Status message
</div>

// ❌ Bad: Status text without background
<p className="text-blue-600 dark:text-blue-400">
  Status message
</p>
```

## Example Visual Hierarchy Standards

### Component Title vs Section Header Hierarchy

**CRITICAL**: Maintain proper visual hierarchy in example components to support main component titles:

#### Main Component Card Title (Highest Priority):

- **Usage**: ComponentCard title prop
- **Styling**: Set automatically by ComponentCard component
- **Purpose**: Primary identification of component being demonstrated

#### Section Headers (Subordinate):

- **Usage**: Within example sections (e.g., "Basic Usage", "States and Validation")
- **Styling**: `text-base font-medium text-gray-700 dark:text-gray-300 mb-3`
- **Purpose**: Group related examples without competing with main title

#### Pattern Example:

```tsx
<ComponentCard title="Radio Buttons">
  {" "}
  {/* Main title - handled by ComponentCard */}
  <div className="space-y-8">
    <div>
      <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
        Basic Usage {/* Section header - subordinate styling */}
      </h3>
      {/* Examples */}
    </div>
  </div>
</ComponentCard>
```

#### Visual Hierarchy Rules:

1. **Main Title**: Automatically styled by ComponentCard (largest, most prominent)
2. **Section Headers**: Use `text-base font-medium` (smaller, subordinate to main title)
3. **Content**: Standard text sizing within examples
4. **Labels**: Component-specific styling as needed

#### Anti-Patterns to Avoid:

❌ **NO** `text-lg font-semibold` for section headers (competes with main title)
❌ **NO** section headers larger than ComponentCard title
❌ **NO** inconsistent hierarchy within same example file
❌ **NO** missing dark mode variants for section headers

### Validation Checklist

Before committing any example component:

- [ ] All text is readable in light mode
- [ ] All text is readable in dark mode
- [ ] Status indicators have proper backgrounds
- [ ] Borders are included for container elements
- [ ] Strong/bold text uses proper contrast colors
- [ ] Muted text is only used for non-critical information

````

## 🗄️ Database Integration Standards

### Schema Naming Conventions


**CRITICAL**: All database models and fields must follow .NET/SQL Server and DBA-provided naming conventions:

- **Models**: Use PascalCase for C# classes (e.g., `Account`, `Contact`, `BuyerStatus`)
- **Fields/Properties**: Use PascalCase for C# properties (e.g., `FirstName`, `CreatedAt`, `PrimaryAddressId`)
- **Table/Column Mapping**: Use `[Table("TableName")]` and `[Column("ColumnName")]` attributes to match the SQL Server schema provided by your DBA. Do not force snake_case—use the exact names as defined in the database.

**🚨 CRITICAL**: Development environment uses Entity Framework Core ONLY:

- Update your model classes to match the provided SQL Server schema
- Use attributes to map C# properties to the correct table/column names
- Never use Prisma CLI, schema.prisma, or MySQL workflows
### Development Workflow

**🚨 CRITICAL**: Development environment uses `db push` ONLY:

```bash
# ✅ Development workflow
npx prisma db push --accept-data-loss

# ❌ DO NOT USE in development
npx prisma migrate dev
```

**Database Operation Standards**:

- Use `npx prisma db push --accept-data-loss` for all schema changes in development
- Always include `--accept-data-loss` flag in development environment
- Migrations are reserved for production deployment only
- Data loss is acceptable and expected in development

### TypeScript Integration

**Model References**:

```typescript
// ✅ Use PascalCase in TypeScript (Prisma client convention)
const contact = await prisma.contact.findMany();
const buyerStatus = await prisma.buyerStatus.findMany(); // Auto-generated camelCase
```

**Type Definitions**:

```typescript
// ✅ Match schema field names in interfaces
interface ContactForm {
  first_name: string;
  primary_address_id?: number;
  created_at?: string;
}
```

## Benefits of This Approach

✅ **Consistency**: All implementations follow established patterns
✅ **Discoverability**: Examples show all possible use cases
✅ **Maintainability**: Single source of truth for component usage
✅ **Documentation Sync**: Automatic updates ensure instructions stay current
✅ **Developer Experience**: Comprehensive guidance always available
✅ **Quality Assurance**: Enforced standards prevent implementation drift
✅ **Quality**: Examples ensure components work in real scenarios
✅ **Efficiency**: Developers can copy proven patterns
✅ **Standards**: Enforces use of pre-built components

## Error Handling Standards

### Application-Level Error Management

**🚨 CRITICAL**: All components automatically inherit comprehensive error handling through the provider system.

**Architecture**:

- **Error Context**: `src/context/ErrorContext.tsx` - Global error state management
- **Error Boundary**: `src/components/common/ErrorBoundary.tsx` - React error catching
- **Global Handler**: `src/components/common/GlobalErrorHandler.tsx` - Modal error display
- **Error Hook**: `src/hooks/useErrorHandler.ts` - Standardized error handling patterns

### Required Error Handling Patterns

**Form Operations**:

```typescript
// ✅ Required pattern for all form save operations
const { handleFormError } = useErrorHandler();

const handleSave = async () => {
  if (isSaving) return;
  setIsSaving(true);

  // Validation first
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setIsSaving(false);
    return;
  }

  // Use error handler for async operations - no custom message needed
  // ErrorContext will format actual database/API errors appropriately
  const success = await handleFormError(
    async () => {
      if (existingId) {
        await updateEntity(existingId, entityData);
      } else {
        const newEntity = await createEntity(entityData);
        entityId = newEntity.id;
      }
    },
    existingId ? "update" : "create",
    "entity-name"
  );

  if (success) {
    onSaved?.();
  }
  setIsSaving(false);
};
```

**API Operations**:

```typescript
// ✅ Required pattern for API calls - let ErrorContext handle error formatting
const { handleApiError } = useErrorHandler();

const performOperation = async () => {
  const success = await handleApiError(async () => {
    await apiCall();
  }, "perform operation");

  if (success) {
    // Continue with success logic
  }
};
```

**Validation Errors**:

```typescript
// ✅ Required pattern for validation feedback
const { handleValidationError } = useErrorHandler();

if (!isValid) {
  handleValidationError("Field Name", "Specific validation message");
  return;
}
```

### Error Handling Integration

**Automatic Features**:

- **Prisma Error Translation**: Database errors automatically converted to user-friendly messages
- **Network Error Handling**: HTTP status codes interpreted with appropriate messages
- **React Error Boundary**: Catches component errors with fallback UI
- **Modal Display**: All errors shown via ModalAlertConfirm component
- **Context Inheritance**: Available to all child components without additional setup

**Forbidden Patterns**:

```typescript
// ❌ DO NOT USE - Console errors without user feedback
try {
  await operation();
} catch (error) {
  console.error("Error:", error); // Users never see this
}

// ❌ DO NOT USE - Throwing unhandled errors
throw new Error("Something went wrong"); // Crashes the UI

// ❌ DO NOT USE - Alert() or other non-modal error display
alert("Error occurred"); // Not consistent with app design
```

**Required Import**:

```typescript
import { useErrorHandler } from "@/hooks/useErrorHandler";
```

### Error Handling Examples

**Complete examples available at**: `src/app/(examples)/error-handling/`

**Demonstrates**:

- Form error handling patterns
- API error handling
- Validation error display
- Permission error scenarios
- Network error handling
- Custom error messaging
- Integration with existing components

## Migration Strategy

### Existing Model Files

- Remove all `*Model.tsx` files
- Replace references with actual examples
- Update AI prompts to reference examples

### Component Consolidation

- Audit existing implementations for consistency
- Create examples for components lacking them
- Standardize prop patterns across similar components
````
