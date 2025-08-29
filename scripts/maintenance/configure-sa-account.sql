-- SQL Server SA Account Configuration Script
-- Run this in SQL Server Management Studio (SSMS) as an Administrator

-- 1. Enable SQL Server Authentication (Mixed Mode)
USE [master]
GO
EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE', 
    N'Software\Microsoft\MSSQLServer\MSSQLServer', N'LoginMode', REG_DWORD, 2
GO

-- 2. Enable SA account
ALTER LOGIN [sa] ENABLE
GO

-- 3. Reset SA password
ALTER LOGIN [sa] WITH PASSWORD = N'password'
GO

-- 4. Check SA account status
SELECT 
    name,
    is_disabled,
    is_policy_checked,
    is_expiration_checked,
    create_date,
    modify_date
FROM sys.server_principals 
WHERE name = 'sa'
GO

-- 5. Check authentication mode
SELECT CASE 
    WHEN SERVERPROPERTY('IsIntegratedSecurityOnly') = 1 
    THEN 'Windows Authentication Mode'
    ELSE 'Mixed Mode (Windows and SQL Server Authentication)'
END AS [Authentication Mode]
GO

-- 6. Grant sysadmin role to SA (if needed)
ALTER SERVER ROLE [sysadmin] ADD MEMBER [sa]
GO

-- IMPORTANT: After running these commands, restart SQL Server service
PRINT 'SA account configuration complete. Please restart SQL Server service.'
PRINT 'Use: net stop MSSQLSERVER && net start MSSQLSERVER'
