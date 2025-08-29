@echo off
setlocal enabledelayedexpansion

:: Define cache paths
set "vscodeCache=%APPDATA%\Code\Cache"
set "vscodeCachedData=%APPDATA%\Code\CachedData"
set "vscodeLocalStorage=%APPDATA%\Code\Local Storage"

:: Clear Cache
echo Clearing VS Code Cache...
for %%F in ("%vscodeCache%" "%vscodeCachedData%" "%vscodeLocalStorage%") do (
    if exist "%%F" (
        echo Deleting contents of: %%F
        del /F /Q /S "%%F\*" >nul 2>&1
        echo Cleared: %%F
    ) else (
        echo Not found: %%F
    )
)

echo.
echo All done. You can now restart VS Code.
echo.
echo REMINDER: After running this script, you must run:
echo   npm install
echo   npx prisma generate
echo before starting development.
pause
