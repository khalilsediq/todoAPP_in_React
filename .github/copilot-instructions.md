# AI Coding Guidelines for Todo App

## Project Overview
A React + Vite todo application demonstrating fundamental state management and CRUD operations. The app uses Tailwind CSS for styling (v4.1.18 with Vite plugin integration).

## Architecture & Core Concepts

### Component Structure
- **Single Component Pattern**: The app currently uses one `Todo` component (in `src/App.jsx`) that handles all logic:
  - Form management (title + description inputs)
  - Local state for todo items array
  - Rendering todo list with edit/delete buttons (UI not yet implemented)
  - No component decomposition currently

### State Management Pattern
```jsx
const [userTitle, setTitle] = useState('')
const [userDescription, setDecription] = useState('')
const [userTodo, setTodo] = useState([])
```
- Direct useState for form inputs and todo array
- No centralized context or state management library
- Form submission spreads array: `setTodo([...userTodo])`
- Note: Bug exists - directly mutating array before spread (`userTodo.push()`)

### Data Structure
Todos are plain objects:
```js
{ userTitle: string, userDescription: string }
```
Currently missing: unique IDs, timestamps, completion status

## Build & Development

### Scripts
- `npm run dev` - Start Vite dev server with HMR (hot reload)
- `npm run build` - Production build to `dist/`
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

### Vite Configuration
- React Fast Refresh via `@vitejs/plugin-react`
- Tailwind CSS Vite plugin (not traditional PostCSS setup)
- Entry point: `src/main.jsx` → `index.html` root div

## Key Patterns & Conventions

### Naming
- Variables: camelCase for state (`userTitle`, `userTodo`), event params use descriptive names (`practice` - unconventional, should be `event` or `e`)
- Components: PascalCase (`Todo`)
- JSX files use `.jsx` extension

### Event Handling
```jsx
const addTodo = (event)=>{
  event.preventDefault();
  // logic
}
```
- Arrow function syntax
- Prevent default on form submission

### Rendering Conditionals
```jsx
{userTodo.length > 0 ? userTodo.map(...) : <h3>Todo's To be Added</h3>}
```
- Ternary for conditional rendering
- `.map()` with index as key (anti-pattern, should use unique IDs)

## Styling & UI

### Tailwind CSS Integration
- Configured via `@tailwindcss/vite` in `vite.config.js`
- `src/index.css` imports Tailwind directives
- No styling currently applied to components - opportunity to add Tailwind classes

### CSS Files
- `src/index.css` - Global styles
- `src/App.css` - Component-specific styles (currently unused)

## Known Issues & Improvement Areas

1. **State Bug**: Direct array mutation before spread
   ```jsx
   userTodo.push({...})  // mutates state
   setTodo([...userTodo]) // then spreads
   ```
   Should be: `setTodo([...userTodo, { userTitle, userDescription }])`

2. **Missing Features**: Edit/Delete buttons exist but have no handlers
3. **No IDs**: Use index as key (causes bugs on reorder/delete)
4. **Event Naming**: `practice` parameter should be `event` or `e`
5. **Typo**: `setDecription` (missing 's')

## Development Workflow

When making changes:
1. Changes hot-reload automatically with `npm run dev`
2. ESLint validation runs on save (check console/Problems panel)
3. Build locally with `npm run build` before PR if available
4. Keep components simple initially - refactor only if complexity grows

## External Dependencies
- React 19.2.0
- Vite 7.2.4
- Tailwind CSS 4.1.18 (v4 uses simpler config)
- ESLint 9.39.1 (flat config)
