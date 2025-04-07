import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Make sure we're targeting the correct root element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 