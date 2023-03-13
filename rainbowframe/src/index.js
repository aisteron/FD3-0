import React from 'react';
import ReactDOM from 'react-dom/client';

import RainbowFrame from './RainbowFrame';


const root = ReactDOM.createRoot(document.getElementById('root'));
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

root.render(
  
  <React.StrictMode>
    <RainbowFrame colors={colors}>
      Hello
    </RainbowFrame>
  </React.StrictMode>
);


