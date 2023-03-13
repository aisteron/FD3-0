import { Component } from "react";
import './index.css';

const Border = props => <div style={{borderColor:props.current}}>{props.children}</div>

class RainbowFrame extends Component {

  
  
  render(){

    let str = ''

    let res = this.props.colors.reduce((str, current, index, arr)=>{
      //return str += <Border current={current}>{str}</Border>
      //return str += current
      //return str +=<Border current={current}>{str}</Border>
      return <Border>{str}</Border>
    }, this.props.children)

    
    //console.log(res)


    return (
      // <div className="App">
      //   <div style={{borderColor:this.props.colors[1]}}>
      //     <div style={{borderColor:this.props.colors[0]}}>
      //       <p>{this.props.children}</p>
      //     </div>
      //   </div>
      // </div>
      // <div className="App">
      //   <Border current="red">
      //     Hello
      //   </Border>  
      // </div>
      {res}
    )
  }
}

export default RainbowFrame;
