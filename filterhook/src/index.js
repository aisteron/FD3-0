import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Filter from './components/Filter';

var list = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Filter list={list}/>
  </React.StrictMode>
);

