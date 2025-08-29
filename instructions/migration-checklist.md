# 📋 tweAgent Component Framew### 3. Database Standards Implementation

- [x] Standardized all model names to `snake_case` singular
- [x] Converted all field names to `snake_case`
- [x] Updated relation names to match target models
- [x] Added `@@map` directives for table names
- [x] Updated development workflow to use `db push` only
- [x] Documented standards in app-constitution and component-development-standards
- [x] Updated prompts to enforce `npx prisma db push --accept-data-loss`

### 4. Layout Components Examplesrk Migration Checklist

## 🎯 Migration Overview

Transition from Model-based component guidance to Examples-based component patterns following the new tweAgent Component Development Standards.

## ✅ Completed Setup

### 1. Framework Documentation

- [x] Created `/instructions/component-development-standards.md`
- [x] Updated `/instructions/app-constitution.md`
- [x] Created `.github/prompts/create-component-example.prompt.md`
- [x] Updated `.github/prompts/add-form-field.prompt.md`
- [x] Created examples README documentation

### 2. Example Structure

- [x] Established `src/app/(examples)` as authoritative source
- [x] Created `form-elements/` category with working examples
- [x] Created `layout-components/` category with modal/card examples
- [x] Implemented proper page.tsx showcase structure

### 3. Form Elements Examples

- [x] `DefaultInputs.tsx` - Basic input field patterns
- [x] `DateInputs.tsx` - Date component examples
- [x] `PhoneInputs.tsx` - Phone input examples with all states
- [x] `page.tsx` - Form elements showcase integration

### 4. Layout Components Examples

- [x] `ModalExamples.tsx` - FormModal usage patterns
- [x] `CardExamples.tsx` - ComponentCard examples
- [x] `page.tsx` - Layout components showcase

## 🔄 Pending Migration Tasks

### 1. Component Audit

- [ ] Audit all components in `src/components/` for consistency
- [ ] Ensure all components have corresponding examples
- [ ] Verify prop patterns match between components and examples
- [ ] Update any inconsistent implementations

### 2. Prompt Updates

- [ ] Update all existing prompts in `.github/prompts/` to reference examples
- [ ] Create category-specific prompts:
  - [ ] `add-layout-component.prompt.md`
  - [ ] `add-data-display.prompt.md`
  - [ ] `add-interactive-component.prompt.md`
- [ ] Update existing prompts:
  - [ ] `refactor-components.prompt.md`
  - [ ] `debug-helper.prompt.md`

### 3. Documentation Updates

- [ ] Update main README to reference new component framework
- [ ] Create developer onboarding guide referencing examples
- [ ] Update AI assistant instructions to enforce example usage
- [ ] Create troubleshooting guide for common component issues

### 4. Testing & Validation

- [ ] Test all examples for functionality
- [ ] Verify examples work in both light and dark modes
- [ ] Test responsive behavior of all examples
- [ ] Validate TypeScript compilation
- [ ] Check for accessibility compliance in examples

### 5. Integration Verification

- [ ] Verify existing forms still work with new standards
- [ ] Check that NewBuyerModal and related forms function correctly
- [ ] Test component imports throughout the application
- [ ] Validate that no broken references exist

## 🚨 Critical Validation Steps

### Before Deployment

1. **Component Functionality**: All examples must be fully functional
2. **Import Validation**: No broken component imports anywhere in codebase
3. **TypeScript Compilation**: `npx tsc --noEmit` must pass
4. **Build Success**: `npm run build` must complete successfully
5. **Form Testing**: All existing forms must continue to work

### After Deployment

1. **Example Accessibility**: All examples pages should be accessible
2. **Pattern Usage**: Verify developers/AI are using examples as reference
3. **Component Consistency**: Monitor for adherence to established patterns
4. **Documentation Currency**: Ensure examples stay up-to-date with component changes

## 🎯 Success Metrics

### Framework Adoption

- [ ] 100% of new components have corresponding examples
- [ ] All AI prompts reference examples instead of models
- [ ] All developers reference examples for implementation patterns

### Quality Improvements

- [ ] Consistent prop patterns across similar components
- [ ] Reduced component implementation inconsistencies
- [ ] Faster development time for new features
- [ ] Improved component discoverability

### Code Quality

- [ ] No duplicate component logic outside `src/components/`
- [ ] All custom implementations use pre-built components
- [ ] Consistent state management patterns
- [ ] Proper TypeScript typing throughout

## 📞 Support & Resources

### Quick Reference

- **Standards**: `/instructions/component-development-standards.md`
- **Examples**: `src/app/(examples)/`
- **Components**: `src/components/`
- **Prompts**: `.github/prompts/`

### Troubleshooting

1. **Component not working?** → Check corresponding example
2. **Unclear implementation?** → Reference similar example
3. **Missing pattern?** → Create new example following standards
4. **AI not following standards?** → Update prompt to reference examples
