import { Component } from "react";

class Error extends Component{

  render(){
    let state = this.props.state
    let name = this.props.name

    // if(state.errors){
    //   let res = state.errors[name]
    //   if(res.length){
    //     return(
    //       <span className="error">{state.errors[name]}</span>
    //     )
    //   }
    // }

    console.log(state.errors)
    return ''
    
  }
}

export default Error;