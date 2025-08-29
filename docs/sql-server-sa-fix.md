# SQL Server SA Account Fix Guide

## Issue

SQL Server SA account authentication is failing even though you can connect manually. This typically happens when:

1. SQL Server is in "Windows Authentication Mode" only (not Mixed Mode)
2. SA account is disabled
3. SQL Server Browser service is not running

## Fix Steps

### Step 1: Enable Mixed Mode Authentication

1. Open **SQL Server Management Studio (SSMS)** as Administrator
2. Connect using Windows Authentication (your current Windows user)
3. Right-click on the server instance → **Properties**
4. Go to **Security** tab
5. Change **Server authentication** to **SQL Server and Windows Authentication mode**
6. Click **OK**

### Step 2: Enable and Configure SA Account

1. In SSMS, expand **Security** → **Logins**
2. Right-click on **sa** → **Properties**
3. On **General** tab:
   - Set password to: `password`
   - Uncheck "Enforce password policy" (for development)
   - Uncheck "Enforce password expiration"
4. On **Status** tab:
   - Set **Permission to connect to database engine**: **Grant**
   - Set **Login**: **Enabled**
5. Click **OK**

### Step 3: Start SQL Server Browser Service (Run as Administrator)

```cmd
net start SQLBrowser
```

### Step 4: Restart SQL Server Service (Run as Administrator)

```cmd
net stop MSSQLSERVER
net start MSSQLSERVER
```

### Step 5: Test Connection

```cmd
sqlcmd -S localhost -U sa -P password -Q "SELECT GETDATE() as test"
```

### Alternative: SQL Commands Method

If you prefer to use SQL commands instead of SSMS GUI, run this in SSMS:

```sql
-- Enable Mixed Mode Authentication
USE [master]
GO
EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE',
    N'Software\Microsoft\MSSQLServer\MSSQLServer', N'LoginMode', REG_DWORD, 2
GO

-- Enable SA account
ALTER LOGIN [sa] ENABLE
GO

-- Reset SA password
ALTER LOGIN [sa] WITH PASSWORD = N'password'
GO

-- Check SA account status
SELECT
    name,
    is_disabled,
    is_policy_checked,
    is_expiration_checked
FROM sys.server_principals
WHERE name = 'sa'
GO
```

**Then restart SQL Server service.**

## Why This Happened

SQL Server 2022 installs in "Windows Authentication Mode" by default for security reasons. The SA account is also disabled by default. For development purposes, we need Mixed Mode authentication enabled.

## After Fix

Once fixed, test with:

```cmd
cd /d "d:\dev\twetool"
node test-connection.js
```

The TypeORM connection should work perfectly after these steps.
