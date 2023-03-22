import { Component } from "react";
import List from "./List";
import Add from "./Add";
import Filter from './Filter'

export default class Mobile extends Component{
  render(){
    return(
      <>
      <Filter/>
      <List clients={this.props.clients}/>
      <Add/>
      </>
    )
  }
}