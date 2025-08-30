# React Context API vs Zustand Comparison

This monorepo demonstrates the differences between React Context API and Zustand for state management through two identical Todo applications.

## 🏗️ Architecture

```
├── apps/
│   ├── context-app/     # Context API implementation (port 3003)
│   └── zustand-app/     # Zustand implementation (port 3004)
└── packages/
    └── shared-components/  # Reusable UI components
```

## 🚀 Quick Start

```bash
# Easy setup (installs everything)
./setup.sh

# Or manual setup:
npm install

# Run Context API app
npm run dev:context

# Run Zustand app  
npm run dev:zustand

# Run both apps simultaneously
npm run dev:all
```

## 📊 Key Differences

### Context API App
- **Port**: 3003
- **Bundle Size**: Smaller (no extra deps)
- **Performance**: Can cause unnecessary re-renders
- **DevTools**: Limited React DevTools support
- **Setup**: Requires Provider wrapping
- **Learning Curve**: Familiar to React developers

### Zustand App  
- **Port**: 3004
- **Bundle Size**: +2.5kb for Zustand
- **Performance**: Granular subscriptions, better performance
- **DevTools**: Excellent dedicated devtools
- **Setup**: No providers needed
- **Learning Curve**: Simple API, easy to learn

## 🔍 What to Compare

1. **Performance**: 
   - Context API: Watch how the entire component tree re-renders
   - Zustand: Only components using specific state slices re-render

2. **DevTools**:
   - Context API: Basic React DevTools
   - Zustand: Install Redux DevTools extension for time-travel debugging

3. **Code Complexity**:
   - Context API: More boilerplate (Provider, useContext, useReducer)
   - Zustand: Cleaner, more direct API

4. **Type Safety**:
   - Both have excellent TypeScript support
   - Zustand has slightly better inference

## 🏆 Verdict: Zustand Wins

**Why Zustand is Better:**

1. **Performance**: Granular subscriptions prevent unnecessary re-renders
2. **DevTools**: Superior debugging experience with time-travel
3. **Simplicity**: No providers, less boilerplate
4. **Scalability**: Better for complex state logic
5. **Bundle Size**: 2.5kb is negligible for the benefits

**When to Use Context API:**
- Very simple state (theme, user auth)
- Want to avoid external dependencies
- Team is not comfortable with external state libraries

**When to Use Zustand:**
- Any complex state management
- Performance is important
- Want excellent debugging tools
- Building scalable applications

## 🛠️ Technical Implementation

### Shared Components
- `TodoItem`: Individual todo component
- `AddTodoForm`: Form for adding todos  
- `RenderCounter`: Performance monitoring
- `PerformanceTest`: Stress testing component
- All components are framework-agnostic and reusable

### Context API Implementation
- Uses `useReducer` for state management
- Requires `TodoProvider` wrapper
- All state changes trigger full context re-render

### Zustand Implementation  
- Direct store access with `create()`
- Built-in devtools middleware
- Granular subscriptions with selectors
- No provider wrapping needed

## 📈 Performance Testing

Open both apps and:
1. Add multiple todos
2. Toggle completion status
3. Use browser DevTools to profile re-renders
4. Notice Zustand's superior performance

## 🔧 DevTools Setup

For the best Zustand experience:
1. Install Redux DevTools browser extension
2. Open Zustand app (port 3004)
3. Open DevTools → Redux tab
4. Enjoy time-travel debugging!

---

**Conclusion**: While Context API is great for simple use cases, Zustand provides better performance, developer experience, and scalability for most real-world applications.