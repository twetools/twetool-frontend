# 🧱 tweAgent Component Examples

This folder serves as the **authoritative source** for all component implementations, patterns, and best practices in the tweAgent application.

## 📁 Structure Overview

```
src/app/(examples)/
├── layout.tsx                    # Shared layout for all example pages
├── form-elements/               # Form component demonstrations
│   ├── page.tsx                # Form elements showcase page
│   ├── DefaultInputs.tsx       # Basic input field examples
│   ├── DateInputs.tsx          # Date component examples
│   ├── PhoneInputs.tsx         # Phone input examples
│   └── [future-categories].tsx
├── layout-components/          # Layout component demonstrations
│   ├── page.tsx                # Layout components showcase page
│   ├── ModalExamples.tsx       # Modal usage examples
│   ├── CardExamples.tsx        # Card component examples
│   └── [future-components].tsx
└── [future-categories]/        # Additional component categories
```

## 🎯 Purpose & Benefits

### 1. **Living Documentation**

- Examples serve as the primary documentation for component usage
- Shows real implementation patterns instead of theoretical descriptions
- Demonstrates multiple states, configurations, and edge cases

### 2. **Pattern Consistency**

- Enforces consistent prop usage across the application
- Provides copy-paste ready implementations
- Eliminates guesswork for developers and AI assistants

### 3. **Component Discovery**

- Centralized location to find all available components
- Visual showcase of component capabilities
- Easy browsing of different component states

### 4. **Quality Assurance**

- Examples ensure components work in real scenarios
- Testing ground for component functionality
- Validation of component APIs and props

## 🛠️ Development Workflow

### For Developers

1. **Before implementing**: Check examples for existing patterns
2. **Copy patterns**: Use exact prop combinations from examples
3. **Follow standards**: Reference `/instructions/component-development-standards.md`
4. **Use pre-built components**: Import only from `src/components/`

### For AI Assistants

1. **Check examples first**: Always reference existing implementations
2. **Follow established patterns**: Copy exact usage from examples
3. **Use pre-built components only**: No custom implementations
4. **Maintain consistency**: Use identical prop patterns

## 📋 Example File Standards

### Required Structure

```typescript
"use client";
import React, { useState } from "react";
import ComponentCard from "@/components/common/ComponentCard";
import [Component] from "@/components/[category]/[Component]";

export default function [ComponentType]s() {
  // State management following established patterns
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  // Handler functions following examples
  const handleChange = (field: string) => (value: any) => {
    // Implementation following established patterns
  };

  return (
    <ComponentCard title="[Component Type]s">
      <div className="space-y-8">
        {/* Required: Basic Usage Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Basic Usage
          </h3>
          {/* Basic examples */}
        </div>

        {/* Required: States and Validation Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            States and Validation
          </h3>
          {/* State examples */}
        </div>

        {/* Optional: Additional sections as needed */}
      </div>
    </ComponentCard>
  );
}
```

### Page Integration Requirements

```typescript
"use client";
import React from "react";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import [Example1] from "./[Example1]";
import [Example2] from "./[Example2]";

export default function [CategoryName]() {
  return (
    <div>
      <PageBreadcrumb pageTitle="[Category Display Name]" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <[Example1] />
        </div>
        <div className="space-y-6">
          <[Example2] />
        </div>
      </div>
    </div>
  );
}
```

## 🚫 Anti-Patterns (Forbidden)

### ❌ Model Files

- **NO** `*Model.tsx` files for AI guidance
- **NO** separate documentation files
- **USE** actual examples instead

### ❌ Custom Implementations

- **NO** creating components inside examples
- **NO** custom hooks specific to examples
- **USE** pre-built components from `src/components/`

### ❌ Pattern Violations

- **NO** different prop patterns for same component type
- **NO** inconsistent state management approaches
- **FOLLOW** established patterns exactly

## 🔧 Component Categories

### Current Categories

#### Form Elements (`form-elements/`)

- Text inputs with various states
- Date pickers and date fields
- Phone number inputs with formatting
- Select dropdowns and multi-select
- Validation and error handling patterns

#### Layout Components (`layout-components/`)

- Modal implementations and patterns
- Card components and layouts
- Container and wrapper patterns

### Future Categories (Planned)

#### Data Display (`data-display/`)

- Table implementations
- List and gallery patterns
- Chart and visualization examples

#### Interactive Components (`interactive/`)

- Button variations and states
- Tooltip and popover examples
- Tab and accordion patterns

#### Navigation (`navigation/`)

- Menu implementations
- Breadcrumb patterns
- Pagination examples

## 📚 Reference Materials

- **Component Standards**: `/instructions/component-development-standards.md`
- **App Constitution**: `/instructions/app-constitution.md`
- **UI Glossary**: `/instructions/ui-glossary.md`
- **Prompts**: `.github/prompts/` for specific workflows

## 🎯 Goals

1. **Eliminate Model Files**: Replace all `*Model.tsx` files with actual examples
2. **Enforce Consistency**: Single source of truth for component usage
3. **Improve Developer Experience**: Fast, reliable component discovery
4. **Quality Assurance**: Components tested in real scenarios
5. **AI Assistance**: Clear patterns for AI to follow and reference
