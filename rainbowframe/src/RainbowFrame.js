import { Component } from "react";
import './index.css';


class RainbowFrame extends Component {

  
  
  render(){
    let code = this.props.children
    for(let color of this.props.colors){
      code = <div style={{border: `2px solid ${color}` }}>{code}</div>
    }

    return(
     <>{code}</>
    )
  }
}

export default RainbowFrame;
