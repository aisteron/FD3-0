import { Component } from "react";

export default class DoubleButton extends Component{

  press = num => this.props.cbPressed(num)
  
  render(){

    return(
      <div className="doubleButton">
        <input type="button" value={this.props.caption1} onClick={() => this.press(1)}/>
          {this.props.children}
        <input type="button" value={this.props.caption2} onClick={() => this.press(2)}/>
      </div>
    )
  }
}