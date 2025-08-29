# SQL Server SA Account Fix Script - Run as Administrator
# This script enables SA account and Mixed Mode authentication

Write-Host "🔧 SQL Server SA Account Automatic Fix" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if running as Administrator
if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "❌ ERROR: This script must be run as Administrator" -ForegroundColor Red
    Write-Host "   Right-click PowerShell and select 'Run as administrator'" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "✅ Running as Administrator - proceeding with fix..." -ForegroundColor Green
Write-Host ""

try {
    Write-Host "1. Testing Windows Authentication connection..." -ForegroundColor Yellow
    $result = & sqlcmd -E -S localhost -Q "SELECT @@VERSION" -h -1 -W 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Cannot connect to SQL Server with Windows Authentication"
    }
    Write-Host "✅ Windows Authentication connection successful" -ForegroundColor Green
    Write-Host ""

    Write-Host "2. Enabling SA account..." -ForegroundColor Yellow
    & sqlcmd -E -S localhost -Q "ALTER LOGIN sa ENABLE" -h -1
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to enable SA account"
    }
    Write-Host "✅ SA account enabled" -ForegroundColor Green
    Write-Host ""

    Write-Host "3. Setting SA password..." -ForegroundColor Yellow
    & sqlcmd -E -S localhost -Q "ALTER LOGIN sa WITH PASSWORD = 'password'" -h -1
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to set SA password"
    }
    Write-Host "✅ SA password set to 'password'" -ForegroundColor Green
    Write-Host ""

    Write-Host "4. Enabling Mixed Mode Authentication..." -ForegroundColor Yellow
    & sqlcmd -E -S localhost -Q "EXEC xp_instance_regwrite N'HKEY_LOCAL_MACHINE', N'Software\Microsoft\MSSQLServer\MSSQLServer', N'LoginMode', REG_DWORD, 2" -h -1
    if ($LASTEXITCODE -ne 0) {
        throw "Failed to enable Mixed Mode Authentication"
    }
    Write-Host "✅ Mixed Mode Authentication enabled" -ForegroundColor Green
    Write-Host ""

    Write-Host "5. Starting SQL Browser service (optional but recommended)..." -ForegroundColor Yellow
    try {
        Start-Service -Name "SQLBrowser" -ErrorAction Stop
        Write-Host "✅ SQL Browser service started" -ForegroundColor Green
    }
    catch {
        Write-Host "⚠️  SQL Browser service start failed (not critical)" -ForegroundColor Yellow
    }
    Write-Host ""

    Write-Host "6. Restarting SQL Server service..." -ForegroundColor Yellow
    Write-Host "   Stopping SQL Server..." -ForegroundColor Gray
    Stop-Service -Name "MSSQLSERVER" -Force
    
    Write-Host "   Starting SQL Server..." -ForegroundColor Gray
    Start-Service -Name "MSSQLSERVER"
    Write-Host "✅ SQL Server service restarted" -ForegroundColor Green
    Write-Host ""

    Write-Host "7. Testing SA account login..." -ForegroundColor Yellow
    Start-Sleep -Seconds 5  # Wait for SQL Server to fully start
    
    & sqlcmd -S localhost -U sa -P password -Q "SELECT GETDATE() as test_time" -h -1 -W
    if ($LASTEXITCODE -ne 0) {
        throw "SA account login test failed"
    }

    Write-Host ""
    Write-Host "🎉 SUCCESS! SA account is now configured and working!" -ForegroundColor Green
    Write-Host ""
    Write-Host "✅ SA account enabled" -ForegroundColor Green
    Write-Host "✅ Password set to 'password'" -ForegroundColor Green
    Write-Host "✅ Mixed Mode Authentication enabled" -ForegroundColor Green
    Write-Host "✅ SQL Server service restarted" -ForegroundColor Green
    Write-Host "✅ SA login test successful" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your TypeORM application should now connect successfully." -ForegroundColor Cyan
    Write-Host ""
}
catch {
    Write-Host ""
    Write-Host "❌ ERROR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Please check SQL Server logs for more details" -ForegroundColor Yellow
    Write-Host ""
}

Read-Host "Press Enter to exit"
