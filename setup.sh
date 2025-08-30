#!/bin/bash

echo "🚀 Setting up State Management Comparison Project..."

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install Context API app dependencies
echo "📦 Installing Context API app dependencies..."
cd apps/context-app && npm install && cd ../..

# Install Zustand app dependencies  
echo "📦 Installing Zustand app dependencies..."
cd apps/zustand-app && npm install && cd ../..

echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "  npm run dev:context  # Run Context API app (port 3001)"
echo "  npm run dev:zustand  # Run Zustand app (port 3002)" 
echo "  npm run dev:all      # Run both apps"
echo ""
echo "🔍 Compare the apps at:"
echo "  Context API: http://localhost:3003"
echo "  Zustand:     http://localhost:3004"