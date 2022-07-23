import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NameContextProvider } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <NameContextProvider>
     <App />
   </NameContextProvider>
);