# 🧠 tweAgent UI Glossary

This glossary defines standardized UI field types, components, and structural patterns used across the tweAgent application.

## 🗄️ Database Standards

### Schema Naming Conventions


**Models**: Use PascalCase for C# classes (e.g., `Account`, `Contact`, `BuyerStatus`)

- ✅ `Account`, `Contact`, `BuyerStatus`
- ❌ `account`, `contact`, `buyer_status`, `contacts`

**Fields**: Use PascalCase for C# properties (e.g., `FirstName`, `CreatedAt`, `PrimaryAddressId`)

- ✅ `FirstName`, `PrimaryAddressId`, `CreatedAt`
- ❌ `first_name`, `primary_address_id`, `created_at`

**Table/Column Mapping**: Use `[Table("TableName")]` and `[Column("ColumnName")]` attributes to match the SQL Server schema provided by your DBA. Do not force snake_case—use the exact names as defined in the database.

// No Prisma schema file. Use C# model classes and attributes to map to SQL Server tables/columns as provided by your DBA.

### 📋 Card Components

- **Component**: `ComponentCard` from `/components/common/`
- **Examples**: `src/app/(examples)/layout-components/CardExamples.tsx`
- **Usage**: Content organization, consistent styling

### 🧭 Breadcrumb and Navigation Components

**PageBreadcrumb**: `PageBreadcrumb` from `/components/common/`

- **Purpose**: Page title display with icon and navigation breadcrumb
- **Props**: `pageTitle` (string), `icon?` (React.ReactNode)
- **Dynamic Title Pattern**: For edit pages, include entity name for better UX
- **Examples**:
  - Static: `"Pipeline"`, `"New Buyer"`
  - Dynamic: `"Edit Buyer - John Smith"`, `"Edit Contact - Jane Doe"`
- **Implementation**: `${contact.first_name ?? ""} ${contact.last_name ?? ""}`.trim() || "Unknown [Entity]"`
- **Benefits**: Helps users identify which record they're editing when switching tabs
- **Navigation**: Built-in Home breadcrumb with proper responsive design

**Breadcrumb**: `Breadcrumb` from `/components/ui/breadcrumb/`

- **Purpose**: Hierarchical navigation breadcrumbs for deep page structures
- **Examples**: `src/app/(examples)/(ui-elements)/breadcrumbs/`
- **Variants**: `default` (slash), `withIcon` (home icon), `dotted` (dots), `chevron` (arrows)
- **Props**: `items` (required), `variant?`
- **Best Practices**: Don't link current page, keep depth reasonable (2-5 levels)
- **Accessibility**: Proper ARIA labels, semantic HTML structurens\*\*: Match target model names in `snake_case`

- ✅ `buyer_status`, `contact_source`, `primary_address`
- ❌ `buyerStatus`, `contactSource`, `primaryAddress`

**Table Mapping**: Use singular `snake_case` with `@@map`

- ✅ `@@map("contact")`, `@@map("buyer_status")`
- ❌ `@@map("contacts")`, `@@map("BuyerStatus")`

### Contact Role and Stage Logic

**Core Principle**: Contact roles and stages must align with lifecycle status

**Role Structure**:

- `contact.role_id` → `contact_role.id` (either "lead" or "client")
- `contact.client_type_id` → `client_type.id` (only if role is "client")

**Stage Assignment Rules**:

- **Leads** (`role = "lead"`): Use `contact.lead_stage_id` → `lead_stage.id`
- **Buyer Clients** (`role = "client"` AND `client_type = "buyer"`): Use `buyer.stage_id` → `buyer_stage.id`
- **Other Combinations**: No stage assignment

**Constraints**:

- ❌ Never populate both `lead_stage_id` and buyer stage simultaneously
- ✅ Stage must reflect current lifecycle status
- ✅ Client type is required only for "client" role
- ✅ Buyer stage is managed through `buyer.stage_id`, not contact table

**Stage Examples**:

- **Lead Stages**: "New Lead", "Contacted", "Qualified", "Nurturing", "Converted", "Lost"
- **Buyer Stages**: "Initial Contact", "Pre-Approval", "Touring", "Offer Submitted", "Under Contract", "Closed"

### Pipeline Table

**PipelineTable Component**: `PipelineTable` from `/components/pipeline/`

- **Purpose**: Main contact/buyer management table with filtering and stage tracking
- **Column Layout**: Name, Status, Role, Type, Stage, Email (hidden), Company (hidden), Home Phone (hidden), Work Phone (hidden), Last Contact
- **Stage Display**: Role-based stage display - shows lead stage for leads (`contact.lead_stage_id`) and buyer stage for buyer clients (`buyer.stage_id`)
- **Smart Stage Logic**: Checks contact role first, then displays appropriate stage type
- **Database Query**: **FIXED** - Pipeline page now correctly selects `lead_stage_id` from database for proper stage display
- **Stage Column**: **FIXED** - Now properly displays lead stages when contact role is "lead"
- **Removed Columns**: Mobile phone and created date removed for cleaner layout
- **Filtering**: Multi-filter support for status, type, role, and stage with role-aware stage filtering
- **Actions**: Edit buyer, delete contact, new buyer creation
- **Dynamic Titles**: Shows buyer name in page title when editing
- **Integration**: Links to NewBuyer form for contact management
- **Error Handling**: Proper null handling for stage data and missing relationships

### Contact Form Components

**NewLead Component**: `NewLead` from `/components/forms/lead/`

- **Purpose**: Lead creation and editing form with intelligent stage assignment
- **Stage Logic**: Uses `leadStages` for stage selection when role is "lead"
- **Client Type**: Auto-assigns "Lead" client type for proper role categorization
- **Default Stage**: "New Lead" stage for new lead creation
- **Icon**: Uses `LeadIcon` for delete button and visual consistency
- **Contact Source**: Located in PersonalInfoSection for better user experience
- **Props**: `leadStages`, `buyerStages`, `roles`, `clientTypes`, `buyer_statuses`, `contactSources`
- **Features**: Tab-based form sections (Personal, Spouse, Home, Business, Status, Notes)
- **Validation**: First name and last name required, email format validation
- **Integration**: Uses shared form sections from buyer components for consistency
- **Usage**: Lead management, contact pipeline, lead conversion tracking

**NewBuyer Component**: `NewBuyer` from `/components/forms/buyer/`

- **Purpose**: Buyer creation and editing form with intelligent stage assignment
- **Stage Logic**: **FIXED** - Now correctly determines stage field based on role and client type:
  - **Leads** (`role = "lead"`): Passes `lead_stage_id` to contact actions
  - **Buyer Clients** (`role = "client"` AND `client_type = "buyer"`): Passes `stage_id` to contact actions
  - **Smart Field Mapping**: Uses form `stage_id` internally but maps to correct database field on save
- **Edit Mode**: **FIXED** - Correctly loads existing stage data based on role (loads `lead_stage_id` for leads, `stage_id` for buyers)
- **Client Type**: Auto-assigns "Buyer" client type for proper role categorization
- **Default Stage**: "Initial Contact" stage for new buyer creation, "New Lead" for leads
- **Icon**: Uses `BuyerIcon` for delete button and visual consistency
- **Contact Source**: Located in PersonalInfoSection for better user experience
- **Features**: Identical tab structure and validation as NewLead for consistency
- **Database Integration**: **FIXED** - Ensures lead stages are properly saved to `contact.lead_stage_id` when role is "lead"

**PersonalInfoSection**: Enhanced with contact source field

- **Location**: `/components/forms/buyer/PersonalInfoSection.tsx`
- **Contact Source**: Now includes contact source selection at the end of personal information
- **Layout**: Contact source field spans 2 columns for better visibility
- **Integration**: Seamlessly integrated with existing personal information fields
- **Validation**: Contact source is required field with proper error handling

### Development Workflow

**Database Operations**: Use `db push` in development ONLY

- ✅ `npx prisma db push --accept-data-loss`
- ❌ `npx prisma migrate dev` (production only)

**TypeScript Integration**: Prisma generates camelCase for client

- Schema: `buyer_status` → Client: `buyerStatus`
- Schema: `contact_source` → Client: `contactSource`

---

## 🎨 UI Components

### 🚨 Alert Components

- **Component**: `Alert`### 🔽 Select Components

- **Component**: `Select` from `/components/form-elements/select/`
- \*\*Example### 📊 Pagination Components

- **Component**: `Pagination` from `/components/ui/pagination/`
- **Examples**: `src/app/(examples)/(ui-elements)/pagination/PaginationExamples.tsx`
- **Features**: Multiple variants, responsive design, ellipsis for large page counts, disabled states, dark mode compatibility
- **Variants**: `default` (responsive), `icon-only` (compact), `text-with-icon` (always shows both)
- **Props**: `totalPages` (required), `initialPage?`, `onPageChange?`, `variant?`, `className?`
- **Page Logic**: Smart ellipsis rendering, edge case handling (first/last page), maximum 7 visible pages
- **Usage**: Data table navigation, search results, content browsing, list pagination

### 📈 Progress Bar Components

- **Component**: `ProgressBar` from `/components/ui/progress-bar/`
- **Examples**: `src/app/(examples)/(ui-elements)/progress-bar/BasicUsage.tsx`, `ProgressBarSizes.tsx`, `ProgressBarWithLabels.tsx`, `InteractiveProgress.tsx`, `RealWorldExamples.tsx`
- **DataTable Integration**: `src/app/(examples)/(ui-elements)/tables/data-tables/DataTableCustomization.tsx` demonstrates both standard and custom progress bar implementations
- **Features**: Multiple sizes, label positioning, animated progress, dark mode compatibility
- **Sizes**: `sm` (h-2), `md` (h-3), `lg` (h-4), `xl` (h-5)
- **Label Types**: `none` (default), `outside` (right-aligned percentage), `inside` (centered on progress bar)
- **Props**: `progress` (required), `size?`, `label?`, `className?`
- **Progress Range**: Automatically clamped between 0-100
- **DataTable Usage**: Use `size="sm"` for table cells, custom color-coding can be achieved through wrapper components
- **Usage**: Task completion, goal tracking, file uploads/downloads, system resource monitoring, table progress visualization

### 🎀 Ribbon Components

- **Component**: `Ribbon` from `/components/ui/ribbons/`
- **Examples**: `src/app/(examples)/(ui-elements)/ribbons/BasicRibbons.tsx`, `RibbonShapes.tsx`, `RibbonColors.tsx`, `RibbonFeatures.tsx`
- **Features**: Multiple variants, color themes, icon support, hover animations, dark mode compatibility
- **Variants**: `filled` (diagonal corner banner), `rounded` (smooth left edge), `shaped` (pointed ribbon), `hover` (animated reveal)
- **Colors**: `brand`, `success`, `warning`, `danger`, `info` - semantic color system integration
- **Props**: `children` (required), `variant?`, `color?`, `text?`, `icon?`, `animated?`, `className?`
- **Components**: `Ribbon` (main), `RibbonWrapper` (container), `RibbonContent` (content area)
- **Usage**: Feature highlighting, promotional tags, status indicators, premium content markers

### 🌀 Spinner Components

- **Components**: `Spinner`, `LoadingSpinner`, `SegmentedSpinner`, `ButtonSpinner` from `/components/ui/spinners/`
- **Examples**: `src/app/(examples)/(ui-elements)/spinners/BasicSpinners.tsx`, `AdvancedSpinners.tsx`, `ButtonSpinnerExamples.tsx`
- **Features**: Multiple variants, sizes, animated loading states, button integration, dark mode compatibility
- **Variants**: `primary` (brand color), `secondary` (gray), `outline` (base Button outline variant)
- **Sizes**: `xs` (w-4 h-4), `sm` (w-5 h-5), `md` (w-6 h-6), `lg` (w-8 h-8), `xl` (w-10 h-10)
- **Spinner Types**: Basic circular spinner with partial arc animation, segmented spinner with gradient fade, loading spinner with dual-circle design
- **Button Integration**: `ButtonSpinner` wraps base Button component with loading states for primary and outline variants
- **Template Compliance**: Follows base Button component standards with proper variant inheritance and icon sizing
- **Props**: `size?`, `variant?`, `className?`, plus button-specific props (`loading?`, `disabled?`, `onClick?`)
- **Usage**: Loading states, data fetching indicators, form submissions, async operations

### � Tooltip Components

- **Component**: `Tooltip` from `/components/ui/tooltip/`
- **Examples**: `src/app/(examples)/(ui-elements)/tooltip/BasicTooltips.tsx`, `TooltipPositioning.tsx`, `TooltipThemes.tsx`, `TooltipUseCases.tsx`
- **Features**: Multiple positions, theme variants, hover activation, dark mode compatibility
- **Positions**: `top` (default), `right`, `bottom`, `left` - automatic arrow positioning
- **Themes**: `light` (default, white background), `dark` (gray background for emphasis)
- **Props**: `children` (required), `content` (required), `position?`, `theme?`, `className?`
- **Components**: `Tooltip` (main component with positioning logic)
- **Activation**: Hover-triggered with smooth fade transition, CSS-only implementation
- **Usage**: Form field help, icon explanations, status information, interactive element guidance

### �🗂️ Card Componentspp/(examples)/form-elements/select/DefaultSelects.tsx`

- **Features**: BaseFormControl integration, validation states, error handling
- **Pattern**: Uses BaseFormControl for automatic FormField integration when label provided
- **Backward Compatibility**: Still works without label for legacy implementations

### 🔘 Checkbox & Toggle Components

- **Checkbox Component**: `Checkbox` from `/components/form-elements/input/`
- **Toggle Component**: `ToggleSwitch` from `/components/form-elements/input/`
- **Examples**: `src/app/(examples)/(form-elements)/input/CheckboxComponents.tsx`, `ToggleSwitchExamples.tsx`
- **Features**: Boolean state management, disabled states, label integration, dark mode compatibility
- **Checkbox Props**: `checked`, `onChange`, `id?`, `name?`, `disabled?`, `value?`, `label?`, `className?`
- **Toggle Props**: `checked`, `onChange`, `id?`, `name?`, `disabled?`, `label?`, `className?`, `color?`
- **Color Themes**: `blue` (brand color), `gray` (neutral theme)
- **Usage**: Settings panels, form controls, preference toggles, feature enablement

### 📻 Radio Button Components

- **Component**: `Radio` from `/components/form-elements/input/`
- **Examples**: `src/app/(examples)/(form-elements)/input/RadioButtons.tsx`
- **Features**: Group selection, mutual exclusivity, label integration, disabled states
- **Props**: `checked`, `onChange`, `id?`, `name`, `value`, `disabled?`, `label?`, `className?`
- **Pattern**: Single selection within named groups, controlled state management
- **Usage**: Single-choice options, preference selection, form controls

### 🚨 Alert Componentsomponents/ui/alert/`

- **Examples**: `src/app/(examples)/(ui-elements)/alerts/AlertExamples.tsx`
- **Features**: Multiple variants, optional links, dark mode compatibility
- **Variants**: `success` (green), `error` (red), `warning` (yellow), `info` (blue)
- **Props**: `variant`, `title`, `message`, `showLink?`, `linkHref?`, `linkText?`
- **Usage**: User feedback, form validation, system notifications, informational messages

### 👤 Avatar Components

- **Component**: `Avatar` from `/components/ui/avatar/`
- **Examples**: `src/app/(examples)/(ui-elements)/avatars/AvatarExamples.tsx`
- **Features**: Multiple sizes, status indicators, dark mode compatibility
- **Sizes**: `xsmall` (24px), `small` (32px), `medium` (40px), `large` (48px), `xlarge` (56px), `xxlarge` (64px)
- **Status**: `online` (green), `offline` (gray), `busy` (yellow), `none` (no indicator)
- **Props**: `src`, `alt?`, `size?`, `status?`
- **Usage**: User profiles, team member lists, comment threads, chat interfaces

### 🏷️ Badge Components

- **Component**: `Badge` from `/components/ui/badge/`
- **Examples**: `src/app/(examples)/(ui-elements)/badges/BadgeExamples.tsx`, DataTable status examples in `src/app/(examples)/(ui-elements)/tables/data-tables/`
- **Features**: Multiple variants, sizes, colors, icon support, dark mode compatibility
- **Variants**: `light` (default), `solid`
- **Sizes**: `sm`, `md` (default)
- **Colors**: `primary`, `success`, `error`, `warning`, `info`, `light`, `dark`
- **Props**: `variant?`, `size?`, `color?`, `startIcon?`, `endIcon?`, `children`, `className?`
- **DataTable Usage**: Preferred for all status indicators in tables (user status, priority, department, order status)
- **Usage**: Status indicators, categories, tags, user roles, notifications, table cell status displays

### 🍞 Breadcrumb Components

- **Component**: `Breadcrumb` from `/components/ui/breadcrumb/`
- **Examples**: `src/app/(examples)/(ui-elements)/breadcrumbs/BreadcrumbExamples.tsx`
- **Features**: Multiple variants, separator styles, home icon support, dark mode compatibility
- **Variants**: `default` (slash separator), `withIcon` (home icon + slash), `dotted` (dot separator), `chevron` (arrow separator)
- **Props**: `items` (required), `variant?`
- **Item Structure**: `{ label: string, href?: string }`
- **Usage**: Navigation hierarchy, page location, file system paths, documentation structure

### � ButtonsGroup Components

- **Component**: `ButtonsGroup` from `/components/ui/buttons-group/`
- **Examples**: `src/app/(examples)/(ui-elements)/buttons-group/ButtonsGroupExamples.tsx`
- **Features**: Multiple variants, sizes, icon positions, state management, dark mode compatibility
- **Variants**: `primary` (blue theme), `secondary` (gray theme)
- **Sizes**: `small`, `medium` (default), `large`
- **Icon Positions**: `left`, `right`, `none` (default)
- **Props**: `items` (required), `variant?`, `iconPosition?`, `size?`, `className?`
- **Item Structure**: `{ label: string, icon?: ReactNode, onClick?: function, active?: boolean, disabled?: boolean }`
- **Usage**: Tab navigation, view switchers, filter controls, toolbar actions, segmented controls

### �🔘 Button ComponentsAll implementations must reference `src/app/(examples)` for actual usage patterns.

**🎯 PRIMARY REFERENCE**: For all component implementations, check `src/app/(examples)` first, then reference this glossary for component specifications.

---

## 🧱 Component Reference Framework

### Implementation Hierarchy

1. **Examples First**: `src/app/(examples)` - Authoritative implementation patterns
2. **Component Library**: `src/components/` - Pre-built components only
3. **Standards**: `/instructions/component-development-standards.md` - Rules and requirements
4. **Glossary**: This file - Component specifications and quick reference

### Dark Mode Compliance

All component examples must follow dark mode styling standards defined in `/instructions/component-development-standards.md`:

- Use proper text color combinations (`text-gray-900 dark:text-white` for headings)
- Include backgrounds for status indicators (`bg-blue-50 dark:bg-blue-900/20`)
- Always include borders for container elements

### Example Visual Hierarchy Standards

All example pages must maintain proper visual hierarchy to clearly distinguish content sections:

**Section Headers in Examples:**

- **Size**: `text-base` (not `text-lg`) - Should be smaller than main component title
- **Weight**: `font-medium` (not `font-semibold`) - Should be lighter than main title
- **Color**: `text-gray-700 dark:text-gray-300` (not `text-gray-900 dark:text-white`) - Subdued, not competing
- **Spacing**: `mb-3` (not `mb-4`) - Tighter spacing for better grouping

**Example Pattern:**

```tsx
{
  /* Section name */
}
<div>
  <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
    Section Name
  </h3>
  {/* Section content */}
</div>;
```

**Rationale**: Section headers should organize content without competing with the main ComponentCard title. This creates clear visual hierarchy where users can easily distinguish where sections begin and end.

---

## ✏️ Input Fields

### 📝 Text Inputs

- **Base Component**: `InputField` from `/components/form-elements/input/`
- **Examples**: `src/app/(examples)/form-elements/DefaultInputs.tsx`, `SpecializedInputs.tsx`
- **Variants**: Basic text, email, password, search
- **Pattern**: Uses BaseFormControl for automatic FormField integration

#### Specialized Text Fields

- **NameField**: User names with UserIcon
- **EmailField**: Email addresses with EnvelopeIcon and intelligent formatting
  - **Features**: Auto-converts to lowercase on blur, trims whitespace
  - **Validation**: Basic email format validation available
  - **UX**: Non-disruptive formatting (only on blur, not while typing)
  - **Icon**: EnvelopeIcon for visual identification
- **CreditCardField**: Credit card numbers with intelligent formatting
  - **Features**: Real-time formatting with spaces (1234 5678 9012 3456)
  - **UX**: Formats while typing for immediate visual feedback
  - **Icon**: CreditCardIcon for visual identification
- **WebsiteField**: Website URLs with intelligent formatting and validation
  - **Features**: Auto-adds https:// prefix, URL validation
  - **UX**: Smart formatting on blur, supports various URL formats
  - **Icon**: WebsiteIcon for visual identification
- **PasswordField**: Password input with visibility toggle
  - **Features**: Show/hide password functionality, security validation
  - **UX**: Eye icon toggle, proper masking, optional requirements
  - **Icon**: EyeIcon/EyeCloseIcon for toggle functionality
- **TimeField**: Time input with intelligent formatting and validation
  - **Features**: Auto-formats to HH:MM, supports 12-hour and 24-hour formats, smart AM/PM conversion (A→AM, P→PM)
  - **Intelligence**: Uses HTML5 time picker for 24-hour format, custom formatting for 12-hour with AM/PM
  - **Validation**: Format validation with browser-native support for 24-hour, custom validation for 12-hour
  - **UX**: Real-time formatting for 12-hour, native time picker UX for 24-hour
  - **Icon**: TimeIcon for visual identification (auto-positioned as visual indicator)

### 📱 Phone Inputs

- **Base Component**: `PhoneField` from `/components/form-elements/phone/`
- **Specialized Components**: `MobilePhoneField`, `HomePhoneField`, `WorkPhoneField`
- **Examples**: `src/app/(examples)/form-elements/phone/PhoneInputs.tsx`, `SpecializedPhoneInputs.tsx`
- **Features**: Automatic formatting `(555) 123-4567`, copy functionality, validation
- **Inheritance Pattern**: Specialized fields inherit all PhoneField functionality including automatic formatting
- **Critical Requirements**:
  - Both `value` and `onChange` props required for formatting to display correctly
  - Specialized fields automatically inherit formatting from base PhoneField
  - Use `formatPhoneNumber` utility for consistent formatting across components

### 📅 Date Inputs

- **Components**: `DateField`, `BirthDateField`, `CreatedDateField`, `LastUpdatedDate`, `LastContactDateField`
- **Location**: `/components/form-elements/dates/`
- **Examples**: `src/app/(examples)/form-elements/DateInputs.tsx`
- **Enhanced Features**:
  - **Format Support**: Accepts YYYY-MM-DD, MM/DD/YYYY, DD/MM/YYYY input formats
  - **Consistent Output**: Always returns YYYY-MM-DD format regardless of input
  - **Auto-formatting**: Intelligent slash/dash insertion while typing (MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD)
  - **Smart Cursor**: Maintains proper cursor position during auto-formatting
  - **Validation**: Built-in date validation with min/max constraints
  - **Auto-population**: Optional today's date auto-fill
  - **Timezone Safe**: Prevents date shifting issues
  - **Smart Placeholders**: Auto-generated based on preferred format
- **Pattern**: Uses BaseFormControl integration, conditional rendering for system dates
- **New Props**: `minDate`, `maxDate`, `dateFormat`, `autoPopulateToday`, `autoFormat`
- **Auto-formatting Props**:
  - `autoFormat?: boolean` (default: true) - Enable/disable automatic formatting
  - `inputFormat?: "YYYY-MM-DD" | "MM/DD/YYYY" | "DD/MM/YYYY"` - Formatting pattern
- **Conditional Logic**:
  - `CreatedDateField`: Hidden for new records without values
  - `LastUpdatedDate`: Hidden for new records OR empty values
  - Use `isNewRecord` prop to control visibility in forms
- **User Experience**: Type "07252025" → automatically formats to "07/25/2025" with proper cursor positioning

### � Textarea Fields

- **Component**: `TextareaField` from `/components/form-elements/input/`
- **Examples**: Available in DefaultInputs examples
- **Features**: Resizable, icon support, validation states

### 🔽 Select Components

- **Component**: `Select` from `/components/form-elements/select/`
- **Examples**: `src/app/(examples)/form-elements/select/DefaultSelects.tsx`
- **Features**: BaseFormControl integration, validation states, error handling
- **Pattern**: Uses BaseFormControl for automatic FormField integration when label provided
- **Backward Compatibility**: Still works without label for legacy implementations

- **Component**: `StateSelect` from `/components/form-elements/select/`
- **Examples**: `src/app/(examples)/form-elements/select/StateSelectExamples.tsx`, `StateSelectStates.tsx`
- **Features**: US state selection, abbreviation storage, BaseFormControl integration, validation states
- **Data**: All 50 US states alphabetically ordered, stores abbreviations (e.g., "CA", "TX")
- **Pattern**: Extends Select component pattern with specialized US states data
- **Props**: Same as Select component plus specialized state data
- **Usage**: Address forms, shipping forms, business registration, location selection

- **Component**: `CountrySelect` from `/components/form-elements/select/`
- **Examples**: `src/app/(examples)/form-elements/select/CountrySelectExamples.tsx`, `CountrySelectStates.tsx`
- **Features**: Country selection, ISO country codes, BaseFormControl integration, validation states
- **Data**: Comprehensive country list alphabetically ordered, stores ISO codes (e.g., "US", "CA", "GB")
- **Default**: United States ("US") as default selection
- **Pattern**: Extends Select component pattern with specialized country data
- **Props**: Same as Select component plus specialized country data
- **Usage**: Address forms, shipping forms, international business forms, user registration
- **Props**: Same as Select component plus specialized state data
- **Usage**: Address forms, shipping forms, business registration, location selection

### � Alert Components

- **Component**: `Alert` from `/components/ui/alert/`
- **Examples**: `src/app/(examples)/(ui-elements)/alerts/AlertExamples.tsx`
- **Features**: Multiple variants, optional links, dark mode compatibility
- **Variants**: `success` (green), `error` (red), `warning` (yellow), `info` (blue)
- **Props**: `variant`, `title`, `message`, `showLink?`, `linkHref?`, `linkText?`
- **Usage**: User feedback, form validation, system notifications, informational messages

### �🔘 Button Components

- **Base Component**: `Button` from `/components/ui/button/`
- **Specialized Components**: `AddButton`, `SaveButton`, `CancelButton`, `CloseButton`, `DownloadButton`
- **Examples**: `src/app/(examples)/ui-elements/buttons/ButtonExamples.tsx`, `SpecializedButtons.tsx`
- **Features**: Multiple variants, sizes, loading states, icon support, accessibility
- **Template Styling**: Uses exact template sizing (`px-4 py-3`, `px-5 py-3.5`) and `shadow-theme-xs`
- **Variants**: `primary`, `outline`, `ghost`, `danger`, `success`
- **Sizes**: `sm` (px-4 py-3), `md` (px-5 py-3.5)
- **Icon Support**: `startIcon`, `endIcon` with automatic 5x5 sizing
- **States**: loading, disabled, with comprehensive styling for all combinations

#### Critical Button Implementation Rules

- **ALWAYS specify size prop**: Use `size="sm"` for consistency across all examples
- **Conditional gap logic**: Base Button applies `gap-2` only when icons are present
- **Icon sizing**: Always add `className="h-5 w-5"` to problematic icons (SaveIcon, etc.)
- **Template compliance**: Never deviate from base Button component - all specialized buttons must wrap it
- **Text centering**: Achieved through conditional gap logic - buttons without icons have no gap spacing

#### Specialized Button Patterns

- **AddButton**: Primary action button with PlusIcon, optimized for "add new" operations
- **SaveButton**: Save action button with SaveIcon, supports loading and success variants
- **CancelButton**: Secondary action button for canceling operations
- **CloseButton**: Close/dismiss button for modals and overlays
- **DownloadButton**: Secondary button with download icon for file/content downloads
- **Inheritance Pattern**: All specialized buttons extend base Button component
- **Icon Integration**: Fixed h-5 w-5 sizing for consistent appearance
- **Usage Context**: Form actions, CRUD operations, navigation, status actions
- **Spacing Standards**: Use `gap-4` for action button groups, `gap-3` for smaller groups

### 📋 List Components

- **Component**: `List` from `/components/ui/list/`
- **Examples**:
  - Base Architecture: `src/app/(examples)/(ui-elements)/list/IconLists.tsx`
  - Interactive Features: `src/app/(examples)/(ui-elements)/list/InteractiveLists.tsx`
  - State Management: `src/app/(examples)/(ui-elements)/list/StateManagement.tsx`
- **Base Classes**: `BaseList` (core logic), `List` (main wrapper), `IconList` (specialized)
- **Features**: Multiple variants, interactive states, icons, dark mode compatibility
- **Variants**: `default`, `ordered`, `unordered`, `checkbox`, `radio`, `button`, `icon`, `horizontal`
- **Props**: `items` (required), `variant?`, `className?`, `radioName?`, `selectedRadioValue?`, `onRadioChange?`
- **Item Structure**: `{ id?, content, icon?, checked?, selected?, disabled?, onClick?, onCheckboxChange?, onRadioChange? }`
- **Interactive Features**: Checkbox selection, radio button groups, clickable button lists
- **Layout Options**: Vertical (default) or horizontal orientation with responsive design
- **Usage**: Navigation menus, option selection, data display, interactive content organization

### 📊 DataTable Components

- **Component**: `DataTable` from `/components/ui/tables/`
- **Examples**: `src/app/(examples)/(ui-elements)/tables/data-tables/`
  - Basic Usage: `BasicDataTable.tsx`
  - CRUD Operations: `DataTableWithActions.tsx`
  - Filtering: `DataTableWithFiltering.tsx`
  - Sorting: `DataTableSorting.tsx`
  - Top Pagination: `DataTableWithTopPagination.tsx`
  - Advanced Features: `DataTableAdvancedFeatures.tsx`
  - Customization: `DataTableCustomization.tsx`
- **Features**: Built-in search, pagination, sorting, filtering, responsive design, actions integration
- **Column Configuration**: `DataTableColumn<T>` interface with key, label, sortable, align, render options
- **Sorting**: Supports text, number, date, and React element sorting with automatic text extraction from complex rendered cells
- **Pagination Options**: Bottom pagination (default), optional top pagination (`showTopPagination` prop), synchronized controls
- **Status Display**: All status indicators use `Badge` component with appropriate colors (success, error, warning, info)
- **Actions Integration**: MenuActions component for CRUD operations with async delete handling
- **Filter Groups**: TableFilterGroup for category-based filtering with count badges
- **Customization**: Custom cell rendering, progress bars (using ProgressBar component), tags, conditional styling
- **Progress Integration**: DataTableCustomization demonstrates both standard ProgressBar component and custom color-coded progress implementations
- **Props**: `data` (required), `columns` (required), `searchPlaceholder?`, `defaultRowsPerPage?`, `rowsPerPageOptions?`, `title?`, `desc?`, `showTopPagination?`
- **Badge Standards**: Use `size="sm"` for all table badges, semantic colors (success/error/warning/info)
- **ProgressBar Standards**: Use `size="sm"` for table progress bars, custom color-coding through wrapper components when needed
- **Usage**: Data management, admin panels, reports, user lists, order management, complex data visualization

## 🎨 Layout Components

### 🖼️ Modal Components

- **Component**: `FormModal` from `/components/ui/modal/`
- **FormModalActions**: `FormModalActions` from `/components/ui/modal/`
- **Examples**: `src/app/(examples)/layout-components/ModalExamples.tsx`
- **Features**: Loading states, custom sizing, save/cancel actions
- **FormModalActions Props**:
  - `showSaveIcon?: boolean` - Controls SaveIcon display (default: true)
  - `isLoading?: boolean` - Enables loading state with spinner
  - Uses SaveButton's built-in loading and icon functionality for proper text centering

### � Pagination Components

- **Component**: `Pagination` from `/components/ui/pagination/`
- **Examples**: `src/app/(examples)/(ui-elements)/pagination/PaginationExamples.tsx`
- **Features**: Multiple variants, responsive design, ellipsis for large page counts, disabled states, dark mode compatibility
- **Variants**: `default` (responsive), `icon-only` (compact), `text-with-icon` (always shows both)
- **Props**: `totalPages` (required), `initialPage?`, `onPageChange?`, `variant?`, `className?`
- **Page Logic**: Smart ellipsis rendering, edge case handling (first/last page), maximum 7 visible pages
- **Usage**: Data table navigation, search results, content browsing, list pagination

### �📋 Card Components

- **Component**: `ComponentCard` from `/components/common/`
- **Examples**: `src/app/(examples)/layout-components/CardExamples.tsx`
- **Usage**: Content organization, consistent styling

## 🔧 Implementation Patterns

### Form Field Integration

```typescript
// Example from DefaultInputs.tsx
<InputField
  label="Field Label"
  value={values.fieldName}
  onChange={handleFieldChange("fieldName")}
  error={errors.fieldName}
  required={true}
  hint="Field description"
/>

// Example from DefaultSelects.tsx
<Select
  label="Select Label"
  options={optionsArray}
  value={values.selectField}
  onChange={handleSelectChange("selectField")}
  error={errors.selectField}
  required={true}
  hasValue={!!values.selectField}
  hasBeenTouched={touchedFields.selectField}
  hint="Select description"
/>
```

### State Management Pattern

```typescript
// From Examples: Consistent state handling
const [values, setValues] = useState({});
const [errors, setErrors] = useState({});
const [touchedFields, setTouchedFields] = useState({});

const handleChange = (field: string) => (value: any) => {
  setValues((prev) => ({ ...prev, [field]: value }));
  setTouchedFields((prev) => ({ ...prev, [field]: true }));
  if (errors[field]) {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }
};
```

### InputField Icon Positioning Standards

**Functional Button Detection System** (NEW):

InputField automatically detects functional buttons vs visual indicators using:

```typescript
// Auto-detection logic in InputField
const isRightIconButton =
  React.isValidElement(effectiveRightIcon) &&
  effectiveRightIcon.type === "button";

// Positioning: right-0 for buttons, right-3 for visual indicators
// Padding: pr-[90px] for buttons, pr-12 for visual indicators
```

**Right-Side Functional Buttons** (for user interaction):

```typescript
// Pattern: Copy icon, password toggle (detected automatically)
<button
  type="button"
  className="inline-flex cursor-pointer items-center gap-1 border-l border-gray-200 py-3 pl-3.5 pr-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
  onClick={handleClick}
>
  <Icon className="h-5 w-5" />
</button>

// Auto-positioned at right-0 with pr-[90px] input padding
// Includes: Copy functionality, password toggle, other interactive buttons
// Note: py-3 maintains full-height border separator without gaps
```

**Visual Indicators** (non-interactive):

```typescript
// Pattern: Status icons, field type indicators
<Icon className="h-5 w-5" />

// Auto-positioned at right-3 with pr-12 input padding (48px)
// Used for: Field type identification, status display, non-interactive icons
```

**⚠️ Critical**:

- **Automatic Detection**: InputField detects button elements and applies right-0 positioning automatically
- **Functional buttons**: Auto-positioned at `right-0` with `pr-[90px]` input padding (90px for wider button space)
- **Visual indicators**: Auto-positioned at `right-3` with `pr-12` input padding (48px for standard icon space)
- **Icon size**: All rightIcon elements must use `h-5 w-5` (20px) for consistent positioning
- **Border continuity**: Functional buttons must use `py-3` to prevent gaps in vertical separators
- **No manual positioning**: Never override InputField's automatic positioning - it handles both button and icon types correctly

### Error Handling Pattern

```typescript
// Validation following Examples
const validate = () => {
  const newErrors = {};
  if (!values.required_field?.trim()) {
    newErrors.required_field = "This field is required";
  }
  return newErrors;
};

// Conditional validation (format validation without required)
const validateEmail = (value: string) => {
  if (!value.trim()) return ""; // Empty is valid (not required)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? "" : "Please enter a valid email address";
};
```

## � Quick Reference

### Component Discovery

1. **Check Examples**: `src/app/(examples)/[category]/`
2. **Find Component**: Import from `src/components/`
3. **Copy Pattern**: Use exact props and state management
4. **Follow Standards**: Reference `/instructions/component-development-standards.md`

### Common Components

| Type               | Component          | Examples Location                            |
| ------------------ | ------------------ | -------------------------------------------- |
| Text Input         | `InputField`       | `form-elements/DefaultInputs.tsx`            |
| Specialized        | Various Fields     | `form-elements/SpecializedInputs.tsx`        |
| Phone Input        | `PhoneField`       | `form-elements/PhoneInputs.tsx`              |
| Specialized Phone  | `MobilePhoneField` | `form-elements/SpecializedPhoneInputs.tsx`   |
| Date Input         | `DateField`        | `form-elements/DateInputs.tsx`               |
| Select             | `Select`           | `form-elements/select/DefaultSelects.tsx`    |
| Button             | `Button`           | `ui-elements/buttons/ButtonExamples.tsx`     |
| Specialized Button | `AddButton`        | `ui-elements/buttons/SpecializedButtons.tsx` |
| Modal              | `FormModal`        | `layout-components/ModalExamples.tsx`        |
| Card               | `ComponentCard`    | `layout-components/CardExamples.tsx`         |

### Anti-Patterns (Forbidden)

- ❌ Custom component implementations outside `src/components/`
- ❌ `*Model.tsx` files for AI guidance (DEPRECATED)
- ❌ Ignoring example patterns
- ❌ Inline component definitions
- **Implementation Model**: `/ui-models/form-elements/DateFieldModel.tsx` (All date fields must follow this model for prop types, handler signatures, error handling, and integration patterns)
- **Wrapper**: `/components/form-elements/FormField.tsx`
- **Specialized Components**: `/components/form-elements/dates/LastContactDateField.tsx`, `/components/form-elements/dates/BirthDateField.tsx`

### 📅 Date Field Pattern

**Enhanced DateField Usage:**

```tsx
<DateField
  label="Date Label"
  htmlFor="date_field"
  value={formData.dateField}
  onChange={(dateString) =>
    setFormData((prev) => ({ ...prev, dateField: dateString }))
  }
  error={errors.dateField}
  dateFormat="MM/DD/YYYY" // Optional: YYYY-MM-DD (default), MM/DD/YYYY, DD/MM/YYYY
  minDate="2020-01-01" // Optional: minimum allowed date
  maxDate={new Date()} // Optional: maximum allowed date (e.g., today)
  autoPopulateToday={true} // Optional: auto-fill with today's date if empty
  placeholder="Enter date" // Optional: custom placeholder
/>
```

**Legacy DatePicker Pattern (still supported):**

```tsx
<FormField label="Date Label" htmlFor="date_field" error={errors.dateField}>
  <DatePicker
    id="date_field"
    key={`date_field-${dateField || "empty"}`}
    defaultDate={dateField || undefined}
    onChange={onDateFieldChange}
    placeholder="Select date"
  />
</FormField>
```

**🚨 CRITICAL: Date Field Key Prop**

- Always include `key={`${htmlFor}-${dateField || "empty"}`}` in DatePicker
- This forces re-render when date value changes in edit mode
- Without this, dates won't display when editing existing records
- Use unique htmlFor values to prevent conflicts between multiple date fields

### 📋 Date Field Integration Checklist

> **Note:** For all date fields, reference `/ui-models/form-elements/DateFieldModel.tsx` for implementation details, handler signatures, error handling, and integration patterns.

- [ ] Add field to TypeScript interfaces (form state, props, contact)
- [ ] Create change handler following pattern: `handleDateFieldChange`
- [ ] Add to form state initialization (empty string for new, contact.dateField ?? "" for edit)
- [ ] Include in contactData object for persistence
- [ ] Update Prisma schema with `DateTime?` type for optional dates
- [ ] Handle date formatting for database storage and display
- [ ] **🚨 CRITICAL: Update ALL database queries that load entity data to include new field**

---

## 🚨 Error Handling System

The tweAgent application uses a comprehensive error handling system that replaces React errors with user-friendly modal dialogs.

### Error Context

**Location**: `src/context/ErrorContext.tsx`
**Provider**: Included in `src/providers/providers.tsx` at app level
**Usage**: Available to all child components automatically

### Error Handler Hook

**Location**: `src/hooks/useErrorHandler.ts`
**Import**: `import { useErrorHandler } from "@/hooks/useErrorHandler";`

**Available Methods**:

- `handleFormError(operation, context, entityName)` - Form-specific error handling
- `handleApiError(operation, operationName)` - API operation error handling
- `handleValidationError(fieldName, message)` - Field validation errors
- `handlePermissionError(action)` - Permission denied errors
- `handleNetworkError()` - Network connectivity errors
- `handleUserError(title, message, variant)` - Custom user-facing errors

### Error Boundary

**Location**: `src/components/common/ErrorBoundary.tsx`
**Purpose**: Catches React errors and displays fallback UI
**Integration**: Automatically included at app level in providers

### Global Error Handler

**Location**: `src/components/common/GlobalErrorHandler.tsx`
**Purpose**: Renders error modals using appropriate modal alert components based on error variant
**Integration**: Automatically included at app level in providers

**Modal Component Selection**:

- **ModalAlertDanger**: For danger errors (database errors, network failures, critical issues)
- **ModalAlertWarning**: For warning errors (validation errors, permission issues)
- **ModalAlertInfo**: For informational messages
- **ModalAlertConfirm**: ONLY for confirmations requiring user choice (NOT for error display)

**Correct Usage**: All error modals show only an "OK" button, no confusing "No" button for error messages.

**Dynamic Confirmation Messages**: For delete confirmations, include entity name for better UX:

```typescript
// ✅ GOOD: Specific confirmation with entity name
message={
  contact
    ? `Are you sure you want to delete ${`${contact.first_name ?? ""} ${contact.last_name ?? ""}`.trim() || "this buyer"}? This action cannot be undone.`
    : "Are you sure you want to delete this buyer? This action cannot be undone."
}

// ❌ BAD: Generic confirmation
message="Are you sure you want to delete this buyer? This action cannot be undone."
```

**Benefits**: Users know exactly which record they're deleting, reducing accidental deletions

### Usage Examples

```typescript
// Basic form error handling - ErrorContext formats actual errors automatically
const { handleFormError } = useErrorHandler();

const handleSave = async () => {
  const success = await handleFormError(
    async () => {
      await saveContact(contactData);
    },
    "create",
    "contact"
  );

  if (success) {
    // Continue with success logic
  }
};

// Custom error handling for specific scenarios
const { handleUserError } = useErrorHandler();
handleUserError("Custom Error", "Something specific went wrong", "warning");
```

**Error Message Formatting**: The ErrorContext automatically formats database errors (Prisma), network errors (HTTP status), and other exceptions into user-friendly messages. Generic fallback messages are avoided to show actual error details.

### Error Types Handled

- **Prisma Database Errors**: Automatic user-friendly message conversion
- **Network Errors**: HTTP status code interpretation
- **Validation Errors**: Field-specific error display
- **Permission Errors**: Access denied scenarios
- **React Errors**: Caught by Error Boundary with fallback UI
- **Custom Errors**: Application-specific error scenarios

### Integration Pattern

All components automatically inherit error handling capabilities through the provider system. No additional setup required for child components.

**Example Location**: `src/app/(examples)/error-handling/` - Complete implementation examples

---

## 🎨 Styling Standards

All visual styles must inherit from the established global application styles for consistency and accessibility.

### 📁 Base Styling

- Global styles are defined in: /app/global.css

### 📁 Schema

- Schema file location: prisma/schema.prisma
