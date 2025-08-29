
@echo off
setlocal
set "BACKUP_DIR=%~dp0..\..\backups"
if exist "%BACKUP_DIR%\*.sql" del /q "%BACKUP_DIR%\*.sql"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0backup-db-and-data.ps1"
endlocal

