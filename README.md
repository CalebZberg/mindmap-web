# Mindmap – Web version

A node-based mind mapping system for designing and planning projects.  
Supports multi-parent relationships and cycles (not just trees).  
This app is local-first: it runs entirely in the browser and saves to your device.  
Cloud share/collab will come later.

## Features (planned → shipping)
- Create/edit nodes (name, description, tags)
- Connect nodes (directed edges), multi-parent nodes
- Drag to move / pan / zoom canvas
- Views: all nodes, focus node, descendants/ancestors (cycle-safe)
- Undo/redo via command stack
- Local autosave (IndexedDB) + export/import (.mindmap.json)
- Keyboard shortcuts (N new, Del delete, Ctrl/Cmd+Z undo)

## Tech Stack
React + TypeScript + Vite  
React Flow (graph)  
Zustand + Immer (state management)  
IndexedDB (`idb-keyval`) for local persistence  
Zod (schema validation)  
Chakra UI (UI components)  
Jest + React Testing Library (tests)

## Quick Start
```bash
git clone https://github.com/CalebZberg/mindmap-web.git
cd mindmap-web
npm install
npm run dev
```

Current Status
Scaffold only

License
MIT
