import { Component } from "react";

class Error extends Component{

  render(){
    let state = this.props.state
    let name = this.props.name
    
    let res = state.errors.filter(el => Object.keys(el)[0] === name)
    
    return (
      res.length ? <i>{Object.values(res[0])}</i>: ''
    )
    
  }
}

export default Error;