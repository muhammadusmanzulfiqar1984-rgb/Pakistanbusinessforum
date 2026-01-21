#!/bin/bash

echo "🔧 Fixing deployment issue..."
echo ""

cd "/Users/shahtabraiz/Think Tank"

# Step 1: Re-login if needed
echo "📝 Step 1: Checking login status..."
if ! npx vercel whoami &>/dev/null; then
    echo "   ⚠️  Not logged in. Please login..."
    echo "   (This will open your browser)"
    npx vercel login
    echo ""
fi

# Step 2: Build
echo "📦 Step 2: Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""

# Step 3: Deploy
echo "🚀 Step 3: Deploying to production..."
echo "   (This may take 1-2 minutes)"
echo ""

npx vercel --prod --yes

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ DEPLOYMENT COMPLETE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Look above for your Production URL"
echo "   It will look like: https://your-project.vercel.app"
echo ""
echo "💡 Copy that URL and use it to access your website!"
echo ""
