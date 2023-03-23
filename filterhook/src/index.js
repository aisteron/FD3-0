import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Filter from './components/Filter';
import { FilterProvider } from './reducer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterProvider>
      <Filter/>
    </FilterProvider>
  </React.StrictMode>
);

