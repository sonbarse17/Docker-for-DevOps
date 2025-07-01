@echo off
for %%i in (3 4 5 6 7 8 9 10) do (
    echo Updating service%%i...
    
    REM Update package.json name
    powershell -Command "(Get-Content services\service%%i\package.json) -replace '\"service1\"', '\"service%%i\"' | Set-Content services\service%%i\package.json"
    
    REM Update index.ts
    powershell -Command "(Get-Content services\service%%i\src\index.ts) -replace 'service1', 'service%%i' | Set-Content services\service%%i\src\index.ts"
    
    echo service%%i updated.
)
echo All services updated successfully!