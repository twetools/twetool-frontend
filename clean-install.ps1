Write-Host "Cleaning node_modules and package-lock.json..."

# Step 1: Delete contents of node_modules
if (Test-Path .\node_modules\) {
    Get-ChildItem .\node_modules\ -Recurse -Force | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item .\node_modules\ -Force -ErrorAction SilentlyContinue
}

# Step 2: Delete package-lock.json
if (Test-Path .\package-lock.json) {
    Remove-Item .\package-lock.json -Force -ErrorAction SilentlyContinue
}

Write-Host "Installing dependencies with relaxed peer resolution..."
npm install --legacy-peer-deps