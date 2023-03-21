import { Component } from "react";
import List from "./List";
import Add from "./Add";

export default class Mobile extends Component{
  render(){
    return(
      <>
      
      <List clients={this.props.clients}/>
      <Add/>
      </>
    )
  }
}