#!/bin/bash
echo "🔍 Validating all projects..."

# Check for Dockerfiles
echo "📋 Checking Dockerfiles..."
find . -name "Dockerfile" -type f | wc -l
echo "Dockerfiles found"

# Check for package.json syntax
echo "📦 Validating package.json files..."
for file in $(find . -name "package.json" -type f); do
    if ! jq empty "$file" 2>/dev/null; then
        echo "❌ Invalid JSON: $file"
    else
        echo "✅ Valid: $file"
    fi
done

# Check for go.mod files
echo "🐹 Checking Go modules..."
for file in $(find . -name "go.mod" -type f); do
    echo "✅ Found: $file"
done

echo "✅ Validation complete!"