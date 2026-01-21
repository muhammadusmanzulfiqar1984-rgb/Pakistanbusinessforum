#!/bin/bash
# One-command deployment script
# Just run: ./DEPLOY_NOW.sh

cd "/Users/shahtabraiz/Think Tank"

echo "🚀 Starting deployment..."
echo ""

# Check login status
if ! npx vercel whoami &>/dev/null; then
    echo "📝 You need to login first (one-time setup)..."
    echo "   This will open your browser..."
    npx vercel login
    echo ""
fi

echo "📦 Building project..."
npm run build

echo ""
echo "🌐 Deploying to production..."
npx vercel --prod --yes

echo ""
echo "✅ Done! Your site URL is shown above."
echo "   Copy that URL and share it with anyone!"
