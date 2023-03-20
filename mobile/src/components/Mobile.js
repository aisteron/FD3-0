import { Component } from "react";
import Filter from "./Filter";
import List from "./List";

export default class Mobile extends Component{
  render(){
    console.log(this.props.clients)
    return(
      <>
      <Filter/>
      <List clients={this.props.clients}/>
      <button>Добавить клиента</button>
      </>
    )
  }
}