import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MonacoEditor from './components/MonacoEditor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MonacoEditor />
  </React.StrictMode>,
);
