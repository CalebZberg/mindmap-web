import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ReactFlow, Background, Controls, applyEdgeChanges, applyNodeChanges, MiniMap} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import {FocusNode} from './components/FocusNode.jsx'
import './components/FocusNode.css'




const nodeTypes = {
  focusNode: FocusNode,
};






const initialNodes = [
  {
    id: '1',
    type: 'focusNode',
    position: { x: 0, y: 0 },
    data: { name: "Bank", description: "For players to do banking and attempt heists" },
  },
];


const initialEdges = [
  
];



function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);


  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App
