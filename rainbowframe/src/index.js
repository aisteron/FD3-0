import React from 'react';
import ReactDOM from 'react-dom/client';

import RainbowFrame from './RainbowFrame';
import Br2jsx from './Br2jsx';
import DoubleButton from './DoubleButton';
//import FramedDoubleButton from './FramedDoubleButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];


const withRainbowFrame = colors => DoubleButton => props =>{

  let code = <DoubleButton {...props}/>
    for(let color of colors){
      code = <div style={{border: `2px solid ${color}` }}>{code}</div>
    }

    return(
     <>{code}</>
    )

}

let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);

root.render(
  
  <React.StrictMode>

    <RainbowFrame colors={colors}>
      Hello
    </RainbowFrame>
    
    <Br2jsx text="первый<br>второй<br/>третий<br />последний"/>
    
    <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>

    <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>
  
  </React.StrictMode>
);


