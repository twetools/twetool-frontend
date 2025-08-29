# tweAgent SQL Server backup: schema (.sql) + full database (.bak)
# Output: backups/backup-YYYY-MM-DD-HHmmss.sql (schema), backups/backup-YYYY-MM-DD-HHmmss.bak (full backup)

param(
    [string]$ServerName = "localhost",
    [string]$DatabaseName = "tweagent"
)

$backupDir = Join-Path $PSScriptRoot "..\..\backups"
if (-not (Test-Path $backupDir)) { New-Item -ItemType Directory -Path $backupDir | Out-Null }
$timestamp = Get-Date -Format "yyyy-MM-dd-HHmmss"
$schemaFile = Join-Path $backupDir "backup-$timestamp.sql"
$bakFile = Join-Path $backupDir "backup-$timestamp.bak"

Import-Module SqlServer

# --- 1. Script schema only (no data) ---
$server = New-Object Microsoft.SqlServer.Management.Smo.Server $ServerName
$db = $server.Databases[$DatabaseName]
$scripter = New-Object Microsoft.SqlServer.Management.Smo.Scripter($server)
$scripter.Options.WithDependencies = $true
$scripter.Options.ScriptSchema = $true
$scripter.Options.ScriptData = $false
$scripter.Options.ScriptBatchTerminator = $true
$scripter.Options.IncludeHeaders = $true
$scripter.Options.Indexes = $true
$scripter.Options.DriAll = $true
$scripter.Options.Triggers = $true
$scripter.Options.FullTextIndexes = $true
$scripter.Options.Statistics = $true
$scripter.Options.SchemaQualify = $true
$scripter.Options.NoCommandTerminator = $false

# Manually generate DROP TABLE IF EXISTS for each table
$tables = $db.Tables | Where-Object { -not $_.IsSystemObject }
$urns = @()
foreach ($table in $tables) { $urns += $table.Urn }
$dropStatements = @()
foreach ($table in $tables) {
    $schema = $table.Schema
    $name = $table.Name
    $dropStatements += "IF OBJECT_ID(N'[$schema].[$name]', N'U') IS NOT NULL DROP TABLE [$schema].[$name];"
}
$scripter.Options.ScriptDrops = $false
$createScript = $scripter.Script($urns)
$allScript = $dropStatements + $createScript
[System.IO.File]::WriteAllLines($schemaFile, $allScript, [System.Text.Encoding]::UTF8)

# --- 2. Native SQL Server backup (.bak) ---
$backup = New-Object Microsoft.SqlServer.Management.Smo.Backup
$backup.Action = 'Database'
$backup.Database = $DatabaseName
$backup.Devices.AddDevice($bakFile, 'File')
$backup.Initialize = $true
$backup.SqlBackup($server)

Write-Host "Schema .sql backup: $schemaFile"
Write-Host ".bak full backup: $bakFile"
