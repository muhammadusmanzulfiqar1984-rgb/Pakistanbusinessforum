#!/bin/bash

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 DEPLOYING TO NETLIFY (Alternative to Vercel)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

cd "/Users/shahtabraiz/Think Tank"

# Install Netlify CLI locally
echo "📦 Installing Netlify CLI..."
npm install netlify-cli --save-dev
echo ""

# Use npx to run netlify
NETLIFY_CMD="npx netlify"

# Login
echo "🔐 Step 1: Logging in to Netlify..."
echo "   (This will open your browser)"
$NETLIFY_CMD login
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
echo "🌐 Step 3: Deploying to production..."
echo ""

# Deploy to Netlify
$NETLIFY_CMD deploy --prod

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Check the URL above!"
echo "   Your site is now live on Netlify!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
