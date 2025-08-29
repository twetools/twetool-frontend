# 🧠 twetool App Constitution

This document defines the overarching rules and automation standards for AI-assisted development in twetool. It serves as the single source of truth for GitHub Copilot Pro and all automated development workflows.

---

## 🏗️ Component Development Framework

**PRIMARY REFERENCE**: All component development must follow the detailed standards in `/instructions/component-development-standards.md`.

### Core Directives

- **Examples First**: `src/app/(examples)` is the authoritative source for all implementations
- **Pre-built Only**: Use components from `src/components/` exclusively
- **Pattern Consistency**: Follow established patterns without deviation
- **Living Documentation**: Examples replace all model files and documentation

### Reference Hierarchy

1. **Implementation Patterns**: `src/app/(examples)` for how to use components
2. **Component Library**: `src/components/` for actual components
3. **Detailed Standards**: `/instructions/component-development-standards.md` for rules
4. **Component Specs**: `/instructions/ui-glossary.md` for quick reference
5. **Workflow Prompts**: `.github/prompts/` for specific tasks

---

## 🤖 AI Assistant Automation Standards

### Universal Execution Directives

**Execute without prompts**: Complete all implementation steps automatically. Never ask "Continue to iterate?" or "Should I proceed?".

**Examples Reference Required**: ALWAYS check `src/app/(examples)` before implementing any component functionality.

**Component Standards Enforcement**: Follow `/instructions/component-development-standards.md` for all component tasks.

**Documentation Sync Required**: Automatically update all relevant documentation when adding or refactoring components:

- Update `/instructions/ui-glossary.md` with new component entries
- Modify `/instructions/component-development-standards.md` with new patterns
- Update relevant prompts in `.github/prompts/` to include new functionality
- Ensure cross-references are consistent across all documentation

**Full Automation**: Use terminal commands, file operations, and error handling without requesting permission.

**Completion**: Provide comprehensive summary only after ALL steps completed successfully.

### Command Line Access

Automatically execute as needed:

- `npx prisma db push --accept-data-loss`
- `npm run build` / `npx tsc --noEmit`
- File operations and error checking
- Git operations and package installations

### Error Handling Protocol

- Fix errors automatically and continue implementation
- Only report if unable to resolve after multiple attempts
- Use available tools proactively for context and validation

---

## 📝 Form Field Implementation Standards

**REFERENCE**: Complete implementation patterns in `/instructions/component-development-standards.md`

### Required Workflow

1. **Examples First**: Check `src/app/(examples)/form-elements/` for similar implementations
2. **Schema Update**: Update your Entity Framework model classes to match the database schema provided by your DBA
3. **Database Sync**: Use Entity Framework migrations or ensure your model matches the SQL Server schema as provided
4. **Component Usage**: Use only pre-built components following example patterns
5. **Integration**: Update TypeScript interfaces, state management, and persistence
6. **Validation**: Ensure all database queries include new fields

### Critical Success Factors

- ✅ Follow exact patterns from examples
- ✅ Use pre-built components exclusively
- ✅ Update ALL database queries that load entity data
- ❌ NO `*Model.tsx` files (DEPRECATED)
- ❌ NO custom implementations outside `src/components/`

---

## 🗄️ Database Standards

### Schema Guidelines

**Naming Conventions:**

- **Models**: Use PascalCase for C# classes (e.g., `Account`, `Contact`, `BuyerStatus`)
- **Fields/Properties**: Use PascalCase for C# properties (e.g., `FirstName`, `CreatedAt`, `PrimaryAddressId`)
- **Table/Column Mapping**: Use `[Table("TableName")]` and `[Column("ColumnName")]` attributes to match the SQL Server schema provided by your DBA. Do not force snake_case—use the exact names as defined in the database.

**Field Standards:**

- Use nullable types (e.g., `string?`, `DateTime?`) for optional fields
- Use the data types and sizes as defined by your DBA
- Include timestamp fields if present in the database
- Define foreign key relationships using navigation properties and attributes as needed

### Development Workflow

**🚨 CRITICAL**: Use Entity Framework Core for all database access and schema management.

- **Development**: Update your model classes to match the provided SQL Server schema
- **Production**: Coordinate with your DBA for any schema changes; do not alter the schema without approval
- **Data Loss**: Never drop or alter tables/columns without explicit DBA approval

**Automation Standards:**

- All AI assistants must use the provided SQL Server schema as the source of truth
- Never generate or modify schema.prisma or use Prisma CLI
- Always match C# model and property names to the actual database table and column names using attributes

---

## 🎯 Quality Assurance Standards

### Code Quality Requirements

- All TypeScript code must compile without errors
- Follow existing component patterns exactly
- Include proper error states and user feedback
- Maintain accessibility with labels and ARIA patterns

### Testing Requirements

- Manual testing in development environment
- Verify data persistence (create and edit operations)
- Test error states and validation
- Confirm styling matches existing patterns

---

## 📚 Reference Documentation

### Core Standards

- **Component Development**: `/instructions/component-development-standards.md`
- **UI Component Specs**: `/instructions/ui-glossary.md`
- **Migration Guide**: `/instructions/migration-checklist.md`

### Working Examples

- **Form Elements**: `src/app/(examples)/form-elements/`
- **Layout Components**: `src/app/(examples)/layout-components/`
- **Component Showcase**: Each category has a `page.tsx` for browsing

### Workflow Prompts

- **Add Form Field**: `.github/prompts/add-form-field.prompt.md`
- **Create Examples**: `.github/prompts/create-component-example.prompt.md`
- **Component Refactoring**: `.github/prompts/refactor-components.prompt.md`

---

## 🚨 Enforcement Rules

### Mandatory Requirements

- All new components MUST have corresponding examples
- All examples MUST use pre-built components only
- All implementations MUST follow established patterns
- NO model files or custom component implementations allowed

### Success Metrics

- 100% pattern consistency across similar components
- 0 new `*Model.tsx` files created
- All AI prompts reference examples instead of models
- Reduced development time through proven patterns
