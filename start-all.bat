@echo off
REM Start tweagent-backend (dotnet run)
cd /d "%~dp0..\tweagent-backend"
start "tweagent-backend" dotnet run

REM Start tweagent-frontend (npm run dev)
cd /d "%~dp0"
start "tweagent-frontend" cmd /c "npm run dev"

echo Both backend and frontend have been started in separate windows.
pause
