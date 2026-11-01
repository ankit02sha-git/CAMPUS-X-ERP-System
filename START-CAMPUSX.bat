@echo off
cd /d "%~dp0"
echo Writing .env ...
(
echo DATABASE_URL="file:./dev.db"
echo AUTH_SECRET="kj83hd72hs9dk2js8dh3-campusx-local-dev-secret-key"
echo AUTH_TRUST_HOST=true
echo SEED_ADMIN_EMAIL="admin@campusx.local"
echo SEED_ADMIN_PASSWORD="Admin@12345"
echo SEED_DEMO_STUDENT_PASSWORD="Student@12345"
) > .env
if exist .next rmdir /s /q .next
call npm install || goto :err
call npm run db:setup || goto :err
echo.
echo Starting CampusX at http://localhost:3000  (keep this window open)
call npm run dev
goto :eof
:err
echo.
echo SETUP FAILED - copy the error above and send it to Claude.
pause
