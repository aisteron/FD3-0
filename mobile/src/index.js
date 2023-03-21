import React from 'react';
import ReactDOM from 'react-dom/client';
import Mobile from './components/Mobile';

import './index.css';

let clients=require('./clients.json');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Mobile clients={clients}/>
  </React.StrictMode>
);
