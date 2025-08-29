@echo off
REM SQL Server SA Account Fix Script - Run as Administrator
REM This script enables SA account and Mixed Mode authentication

echo 🔧 SQL Server SA Account Automatic Fix
echo ========================================
echo.
echo ⚠️  This script must be run as Administrator!
echo.

REM Check if running as Administrator
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERROR: This script must be run as Administrator
    echo    Right-click Command Prompt and select "Run as administrator"
    pause
    exit /b 1
)

echo ✅ Running as Administrator - proceeding with fix...
echo.

echo 1. Testing Windows Authentication connection...
sqlcmd -E -S localhost -Q "SELECT @@VERSION" -h -1 -W > nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Cannot connect to SQL Server with Windows Authentication
    echo    Please ensure SQL Server is running and you have admin access
    pause
    exit /b 1
)
echo ✅ Windows Authentication connection successful
echo.

echo 2. Enabling SA account...
sqlcmd -E -S localhost -Q "ALTER LOGIN sa ENABLE" -h -1
if %errorlevel% neq 0 (
    echo ❌ Failed to enable SA account
    pause
    exit /b 1
)
echo ✅ SA account enabled
echo.

echo 3. Setting SA password...
sqlcmd -E -S localhost -Q "ALTER LOGIN sa WITH PASSWORD = 'password'" -h -1
if %errorlevel% neq 0 (
    echo ❌ Failed to set SA password
    pause
    exit /b 1
)
echo ✅ SA password set to 'password'
echo.

echo 4. Enabling Mixed Mode Authentication...
sqlcmd -E -S localhost -Q "EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'LoginMode', REG_DWORD, 2" -h -1
if %errorlevel% neq 0 (
    echo ❌ Failed to enable Mixed Mode Authentication
    pause
    exit /b 1
)
echo ✅ Mixed Mode Authentication enabled
echo.

echo 5. Starting SQL Browser service (optional but recommended)...
net start SQLBrowser > nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ SQL Browser service started
) else (
    echo ⚠️  SQL Browser service start failed (not critical)
)
echo.

echo 6. Restarting SQL Server service...
echo    Stopping SQL Server...
net stop MSSQLSERVER
if %errorlevel% neq 0 (
    echo ❌ Failed to stop SQL Server service
    pause
    exit /b 1
)

echo    Starting SQL Server...
net start MSSQLSERVER
if %errorlevel% neq 0 (
    echo ❌ Failed to start SQL Server service
    pause
    exit /b 1
)
echo ✅ SQL Server service restarted
echo.

echo 7. Testing SA account login...
timeout /t 5 /nobreak > nul
sqlcmd -S localhost -U sa -P password -Q "SELECT GETDATE() as test_time" -h -1 -W
if %errorlevel% neq 0 (
    echo ❌ SA account login test failed
    echo    Please check SQL Server logs for more details
    pause
    exit /b 1
)

echo.
echo 🎉 SUCCESS! SA account is now configured and working!
echo.
echo ✅ SA account enabled
echo ✅ Password set to 'password'
echo ✅ Mixed Mode Authentication enabled
echo ✅ SQL Server service restarted
echo ✅ SA login test successful
echo.
echo Your TypeORM application should now connect successfully.
echo.
pause
