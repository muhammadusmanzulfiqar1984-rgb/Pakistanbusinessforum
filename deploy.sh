#!/bin/bash

# Deployment Script for Pakistan Business Forum Website
# This will deploy your site to Vercel and give you a public URL

echo "🚀 Deploying Pakistan Business Forum Website to Vercel..."
echo ""

# Check if vercel is installed
if ! command -v npx &> /dev/null; then
    echo "❌ npx not found. Please install Node.js first."
    exit 1
fi

# Build the project first
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo ""
echo "✅ Build successful!"
echo ""
echo "🔐 Now you need to log in to Vercel..."
echo "   (This will open a browser window for authentication)"
echo ""

# Deploy to Vercel
npx vercel --prod

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your site is now live at the URL shown above!"
echo "   You can share this URL with anyone to access your website."
