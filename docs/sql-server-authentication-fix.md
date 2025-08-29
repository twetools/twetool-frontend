# SQL Server SA Account Authentication Fix

## 🚨 Issue Summary

**Error**: `Login failed for user 'sa'`  
**Root Cause**: SQL Server 2022 Developer Edition installs with Windows Authentication mode only and SA account disabled by default for security.

## 🔍 Problem Analysis

The diagnostic shows:

- ✅ Environment variables are correctly loaded
- ✅ SQL Server service is running
- ✅ TypeORM configuration is correct
- ❌ SA account authentication is failing
- ❌ SQL Server is in Windows Authentication mode only

## 🛠️ Solution Options

### Option 1: Automated Fix (Recommended)

**Run as Administrator** - Choose one:

**Command Prompt:**

```cmd
cd /d "d:\dev\twetool"
scripts\maintenance\fix-sa-account.bat
```

**PowerShell:**

```powershell
cd "d:\dev\twetool"
.\scripts\maintenance\fix-sa-account.ps1
```

### Option 2: Manual Fix Using SSMS

1. **Open SQL Server Management Studio as Administrator**
2. **Connect using Windows Authentication** (your current Windows user)
3. **Enable Mixed Mode Authentication:**
   - Right-click server instance → **Properties**
   - Go to **Security** tab
   - Change **Server authentication** to **SQL Server and Windows Authentication mode**
   - Click **OK**
4. **Configure SA Account:**
   - Expand **Security** → **Logins**
   - Right-click **sa** → **Properties**
   - **General tab**: Set password to `password`
   - **Status tab**: Set **Login** = **Enabled**
   - Click **OK**
5. **Restart SQL Server:**
   ```cmd
   net stop MSSQLSERVER
   net start MSSQLSERVER
   ```

### Option 3: Manual Fix Using Command Line

**Run Command Prompt as Administrator:**

```cmd
rem Enable SA account
sqlcmd -E -S localhost -Q "ALTER LOGIN sa ENABLE"

rem Set SA password
sqlcmd -E -S localhost -Q "ALTER LOGIN sa WITH PASSWORD = 'password'"

rem Enable Mixed Mode Authentication
sqlcmd -E -S localhost -Q "EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'LoginMode', REG_DWORD, 2"

rem Restart SQL Server
net stop MSSQLSERVER
net start MSSQLSERVER
```

## ✅ Verification Steps

### 1. Run Diagnostic Script

```cmd
cd /d "d:\dev\tweagent"
node scripts\maintenance\sql-server-diagnostic.js
```

### 2. Test SQLCMD Connection

```cmd
sqlcmd -S localhost -U sa -P password -Q "SELECT GETDATE()"
```

### 3. Test TypeORM Connection

```cmd
cd /d "d:\dev\tweagent"
node test-connection.js
```

### 4. Test Application

```cmd
npm run dev
```

Navigate to `http://localhost:3000/pipeline` - should load without database connection errors.

## 🚨 Important Security Notes

**For Development Only**: This configuration uses a simple password (`password`) and enables SA account, which is appropriate for development but **NOT for production**.

**Production Security**: In production environments:

- Use strong, complex passwords
- Consider using Windows Authentication
- Disable SA account if not needed
- Use dedicated service accounts
- Enable encryption and additional security features

## 🔄 Troubleshooting

### If Fix Scripts Fail:

1. **Ensure running as Administrator**
2. **Check SQL Server installation**
3. **Verify Windows user has sysadmin privileges**
4. **Check SQL Server error logs** in Event Viewer

### If Application Still Fails:

1. **Restart your development server** (`npm run dev`)
2. **Check environment variables** are loaded correctly
3. **Verify firewall settings** allow localhost:1433
4. **Test with SQL Server Configuration Manager**

## 📁 Related Files

- **Diagnostic Script**: `scripts/maintenance/sql-server-diagnostic.js`
- **Auto Fix (Batch)**: `scripts/maintenance/fix-sa-account.bat`
- **Auto Fix (PowerShell)**: `scripts/maintenance/fix-sa-account.ps1`
- **Environment Config**: `.env` and `.env.local`
- **TypeORM Config**: `src/lib/typeorm.ts`

## 🎯 Expected Results After Fix

- ✅ SA account login successful
- ✅ Mixed Mode Authentication enabled
- ✅ TypeORM connects without errors
- ✅ Application loads pipeline page successfully
- ✅ Database operations work normally
