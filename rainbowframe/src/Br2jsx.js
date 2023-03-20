import { Component } from "react";

class Br2jsx extends Component{
  
  
  
  render(){
    let lines = this.props.text.split(/<br\s*\/*>/)
    let res = []

    for(let [i, line] of lines.entries()){
      i ? res.push(<br key={i}/>, line) : res.push(line)
    }

    return(<div>{res}</div>)
  }
}

export default Br2jsx;