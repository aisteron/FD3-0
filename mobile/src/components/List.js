import { Component } from "react"
import Client from "./Client"
import {EventEmitter} from 'events';

export let myEvents=new EventEmitter();


export default class List extends Component{

  componentDidMount(){
    myEvents.addListener("delete", id =>{
      let res = this.state.clients.filter(el => el.id !== id)
      this.setState({clients: res})
    })
  }
  
  state = {
    clients: this.props.clients
  }

  
  render(){

    return(
      <table>
        <thead>
          <tr>
            <td>Фамилия</td>
            <td>Имя</td>
            <td>Отчество</td>
            <td>Баланс</td>
            <td>Статус</td>
            <td>Действия</td>
            
          </tr>
        </thead>
        <tbody>
          {this.state.clients.map(client => <Client client={client} key={client.id}/>) }
        </tbody>
      </table>
      
      
    )
  }
}