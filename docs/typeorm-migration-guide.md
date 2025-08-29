# Prisma to TypeORM Migration Guide

## Overview

This document outlines the migration from Prisma ORM to TypeORM for SQL Server connectivity in the twetool application.

## Migration Completed Components

### ✅ **Core Infrastructure**

- TypeORM SQL Server configuration
- Entity models for core tables
- Service layer with repository pattern
- Database connection management
- Environment configuration examples

### ✅ **Database Entities Created**

- `Address` - Address management
- `Contact` - Core contact entity
- `ClientType` - Client type lookup
- `ContactRole` - Contact role lookup
- `ContactSource` - Contact source lookup
- `LeadStage` - Lead stage lookup
- `BuyerStage` - Buyer stage lookup
- `BuyerStatus` - Buyer status lookup
- `Company` - Company entity
- `Buyer` - Buyer profile entity
- `Agent` - Agent profile entity
- `BuyerProfile` - Buyer profile details
- `Commission` - Commission tracking

### ✅ **Service Layer**

- `ContactService` - Complete CRUD operations
- Repository pattern implementation
- Relationship loading and querying
- Type-safe database operations

### ✅ **Configuration Updates**

- TypeScript decorators enabled
- SQL Server connection configuration
- Environment variable examples
- Package.json scripts updated

## Files Created

```
src/
├── config/
│   └── typeorm.config.ts          # TypeORM configuration
├── entities/
│   ├── Address.ts                 # Address entity
│   ├── Agent.ts                   # Agent entity
│   ├── Buyer.ts                   # Buyer entity
│   ├── BuyerProfile.ts           # Buyer profile entity
│   ├── BuyerStage.ts             # Buyer stage lookup
│   ├── BuyerStatus.ts            # Buyer status lookup
│   ├── ClientType.ts             # Client type lookup
│   ├── Commission.ts             # Commission entity
│   ├── Company.ts                # Company entity
│   ├── Contact.ts                # Contact entity
│   ├── ContactRole.ts            # Contact role lookup
│   ├── ContactSource.ts          # Contact source lookup
│   └── LeadStage.ts              # Lead stage lookup
├── lib/
│   ├── typeorm.ts                # Database initialization
│   └── contacts/
│       └── typeorm-actions.ts     # TypeORM replacement for Prisma actions
└── services/
    └── ContactService.ts          # Contact service layer
```

## Environment Setup

### 1. Create `.env.local` file:

```env
# TypeORM SQL Server Configuration
DB_HOST=localhost
DB_PORT=1433
DB_USERNAME=sa
DB_PASSWORD=your_password_here
DB_DATABASE=power_bridge
NODE_ENV=development
```

### 2. Update Connection String Format:

```env
# Legacy Prisma format (for reference)
DATABASE_URL="sqlserver://localhost:1433;database=power_bridge;user=sa;password=your_password_here;encrypt=true;trustServerCertificate=true"
```

## Usage Patterns

### 1. **Database Initialization**

```typescript
import { initializeDatabase } from "@/lib/typeorm";

// Initialize connection (call once at application startup)
await initializeDatabase();
```

### 2. **Service Usage**

```typescript
import { ContactService } from "@/services/ContactService";

const contactService = new ContactService();

// Get all contacts with relations
const contacts = await contactService.findAll();

// Get contact by ID
const contact = await contactService.findById(1);

// Create new contact
const newContact = await contactService.create({
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
});
```

### 3. **Direct Repository Access**

```typescript
import AppDataSource from "@/config/typeorm.config";
import { Contact } from "@/entities/Contact";

const contactRepository = AppDataSource.getRepository(Contact);
const contacts = await contactRepository.find({
  relations: ["role", "clientType", "company"],
});
```

## Key Differences from Prisma

### **Advantages of TypeORM**

- ✅ More flexible query building
- ✅ Better TypeScript integration with decorators
- ✅ More mature SQL Server support
- ✅ Advanced relationship handling
- ✅ Migration system built-in
- ✅ Multiple database support

### **Migration Considerations**

- 🔄 JSON fields converted to `nvarchar(max)` for SQL Server compatibility
- 🔄 Relationship loading is explicit (not automatic)
- 🔄 Service layer pattern recommended for complex queries
- 🔄 Manual transaction management when needed

## Next Steps

### 1. **Complete Entity Migration**

- [ ] Create remaining entities (Transaction, Property, etc.)
- [ ] Add complex relationships and constraints
- [ ] Implement custom repository methods

### 2. **Application Integration**

- [ ] Update existing Prisma calls to use TypeORM services
- [ ] Replace `@/lib/prisma` imports with `@/lib/typeorm`
- [ ] Update form actions to use new service methods

### 3. **Testing and Validation**

- [ ] Test all CRUD operations
- [ ] Validate relationship loading
- [ ] Performance testing with large datasets
- [ ] Error handling validation

### 4. **Production Preparation**

- [ ] Set up migration scripts
- [ ] Configure production environment variables
- [ ] Add logging and monitoring
- [ ] Database backup and recovery procedures

## TypeORM Commands

```bash
# Generate migration
npm run typeorm:migration:generate -- -n MigrationName

# Run migrations
npm run typeorm:migration:run

# Revert migration
npm run typeorm:migration:revert

# Sync schema (development only)
npm run typeorm:schema:sync
```

## SQL Server Migration Script

The existing SQL Server migration script (`migrate-mysql-to-sqlserver.sql`) is compatible with this TypeORM setup and should be run before starting the application.

## Troubleshooting

### **Common Issues**

1. **Decorator errors**: Ensure `experimentalDecorators` is enabled in tsconfig.json
2. **Connection errors**: Verify SQL Server is running and credentials are correct
3. **Entity not found**: Check entity imports in typeorm.config.ts
4. **Relationship loading**: Use explicit `relations` array in find operations

### **Performance Tips**

- Use `select` to limit returned columns
- Implement pagination for large datasets
- Use query builder for complex queries
- Consider indexes for frequently queried columns

This migration provides a solid foundation for transitioning from Prisma to TypeORM with full SQL Server support and improved flexibility.
