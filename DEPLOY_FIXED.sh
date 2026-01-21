#!/bin/bash

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 FIXING AND DEPLOYING YOUR WEBSITE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

cd "/Users/shahtabraiz/Think Tank"

# Step 1: Login
echo "📝 Step 1: Logging in to Vercel..."
echo "   (If browser opens, please login/confirm)"
npx vercel login
echo ""

# Step 2: Link project (if not linked)
echo "📎 Step 2: Linking project to Vercel..."
echo "   (Press Enter for all prompts to use defaults)"
npx vercel link --yes 2>&1 || echo "   Project linking..."
echo ""

# Step 3: Build
echo "📦 Step 3: Building your website..."
npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Build failed! Please check errors above."
    exit 1
fi

echo ""
echo "✅ Build successful!"
echo ""

# Step 4: Deploy
echo "🌐 Step 4: Deploying to production..."
echo "   This will take 1-2 minutes..."
echo ""

DEPLOY_OUTPUT=$(npx vercel --prod --yes 2>&1)
echo "$DEPLOY_OUTPUT"

# Extract URL from output
URL=$(echo "$DEPLOY_OUTPUT" | grep -o 'https://[^ ]*\.vercel\.app' | head -1)

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -n "$URL" ]; then
    echo "✅ SUCCESS! Your website is live at:"
    echo ""
    echo "   🔗 $URL"
    echo ""
    echo "   Copy this URL and open it in your browser!"
else
    echo "✅ Deployment completed!"
    echo ""
    echo "📋 Look above for the Production URL"
    echo "   It should say: Production: https://..."
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
