#!/bin/bash

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔐 LOGIN AND DEPLOY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

cd "/Users/shahtabraiz/Think Tank"

# Clear any old tokens
echo "🧹 Clearing old authentication..."
rm -rf ~/.vercel 2>/dev/null
echo ""

# Login fresh
echo "🔐 Step 1: Logging in to Vercel..."
echo "   Please complete the login in your browser"
echo ""
npx vercel login
echo ""

# Verify login
echo "✅ Verifying login..."
if npx vercel whoami &>/dev/null; then
    echo "   ✅ Successfully logged in!"
else
    echo "   ❌ Login failed. Please try again."
    exit 1
fi
echo ""

# Build
echo "📦 Step 2: Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Deploy
echo "🚀 Step 3: Deploying to production..."
echo ""

npx vercel --prod --yes

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Check the URL above that says 'Production:'"
echo "   That's your working website link!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
