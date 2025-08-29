# Table Components

This directory contains table-related components organized by functionality, following the refactor-components pattern.

## Structure

```
table/
├── DataTable.tsx              # Main composed data table component
├── DataTableHeader.tsx        # Table header with title/filters
├── DataTableControls.tsx      # Search and pagination controls
├── DataTableBody.tsx          # Table body with sorting
├── DataTablePagination.tsx    # Pagination footer
├── DataTableSortButton.tsx    # Sortable column header button
├── SearchField.tsx           # Search input component
├── ShowEntries.tsx           # Rows per page selector
├── PaginationWithIcon.tsx    # Pagination with navigation
├── MenuActions.tsx           # Row action menu
├── index.tsx                 # Base table components (Table, TableRow, etc.)
├── exports.ts                # Barrel exports for all components
└── README.md                 # This documentation
```

## Components

### DataTable (Main Component)

The primary data table component that composes all sub-components.

```typescript
<DataTable
  data={contacts}
  columns={columnDefinitions}
  searchPlaceholder="Search contacts..."
  title="Contact Pipeline"
  addButton={<AddContactButton />}
  groups={filterGroups}
  onGroupChange={handleGroupChange}
/>
```

### DataTableHeader

Renders table title, description, add button, and filter groups.

```typescript
<DataTableHeader
  title="Pipeline"
  desc="Manage your contact pipeline"
  addButton={<AddButton />}
  groups={filterGroups}
  selectedGroup={selectedGroup}
  onGroupChange={onGroupChange}
/>
```

### DataTableControls

Contains search field and entries per page controls.

```typescript
<DataTableControls
  searchTerm={searchTerm}
  onSearchChange={handleSearch}
  searchPlaceholder="Search..."
  rowsPerPage={rowsPerPage}
  rowsPerPageOptions={[5, 10, 25]}
  onRowsPerPageChange={handleRowsChange}
  actions={<CustomActions />}
/>
```

### DataTableBody

Renders the actual table with sortable headers and data rows.

```typescript
<DataTableBody
  data={currentPageData}
  columns={visibleColumns}
  sortKey={sortKey}
  sortOrder={sortOrder}
  onSort={handleSort}
/>
```

### DataTablePagination

Shows pagination info and navigation controls.

```typescript
<DataTablePagination
  startIndex={0}
  endIndex={10}
  totalEntries={100}
  totalPages={10}
  currentPage={1}
  onPageChange={handlePageChange}
/>
```

### DataTableSortButton

Sortable column header with visual indicators.

```typescript
<DataTableSortButton
  isActive={sortKey === column.key}
  sortOrder={sortOrder}
  onSort={() => handleSort(column.key)}
  align="center"
>
  Column Title
</DataTableSortButton>
```

## Features

- **Modular Design**: Each component handles a specific responsibility
- **TypeScript Support**: Fully typed with generic support for any data type
- **Composable**: Components can be used independently or together
- **Sorting**: Built-in sorting with visual indicators
- **Search**: Full-text search across all columns
- **Pagination**: Configurable pagination with multiple options
- **Filtering**: Support for group-based filtering
- **Responsive**: Mobile-friendly design
- **Dark Mode**: Full dark mode support

## Usage Patterns

### Basic Data Table

```typescript
const columns = [
  { key: "name", label: "Name", sortable: true },
  { key: "email", label: "Email", sortable: true },
  {
    key: "actions",
    label: "Actions",
    sortable: false,
    render: (row) => <Actions row={row} />,
  },
];

<DataTable data={users} columns={columns} />;
```

### Advanced with Filtering

```typescript
<DataTable
  data={contacts}
  columns={columns}
  title="Contact Pipeline"
  searchPlaceholder="Search contacts..."
  groups={[
    { key: "all", label: "All", count: 100 },
    { key: "active", label: "Active", count: 75 },
    { key: "inactive", label: "Inactive", count: 25 },
  ]}
  selectedGroup="active"
  onGroupChange={setSelectedGroup}
  addButton={<AddContactButton />}
/>
```

### Custom Column Rendering

```typescript
const columns = [
  {
    key: "status",
    label: "Status",
    render: (row) => <StatusBadge status={row.status} />,
    align: "center",
  },
  {
    key: "created_at",
    label: "Created",
    render: (row) => formatDate(row.created_at),
    sortable: true,
  },
];
```

## Benefits

1. **Maintainability**: Smaller, focused components are easier to maintain
2. **Reusability**: Components can be reused across different tables
3. **Testability**: Each component can be tested independently
4. **Customization**: Easy to customize individual sections
5. **Performance**: Better bundle splitting and lazy loading potential
6. **Developer Experience**: Clear separation of concerns

## Migration from Old DataTable

The refactored DataTable maintains the same public API, so existing usage should continue to work without changes. The internal structure is now modular for better maintainability.
