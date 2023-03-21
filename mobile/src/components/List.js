import { Component } from "react"
import Client from "./Client"
import {EventEmitter} from 'events';
import Filter from './Filter'


export let myEvents=new EventEmitter();


export default class List extends Component{

  componentDidMount(){
    
    myEvents.addListener("delete", id =>{
      let res = this.state.clients.filter(el => el.id !== id)
      this.setState({clients: res})
    })

    myEvents.addListener("save", obj => {
      
      let index = this.state.clients.findIndex(o => o.id === obj.id);

      this.setState({
        clients: [
          ...this.state.clients.slice(0,index),
          obj,
          ...this.state.clients.slice(index+1, this.state.clients.length)
        ]
      })
    })

    myEvents.addListener("add", obj => {
      
      let ids = this.state.clients.map(el => el.id)
      let nextId = Math.max(...ids) + 1
      obj = {id: nextId, ...obj}

      this.setState({
        clients: [
          ...this.state.clients,
          obj
        ]
      })
    })


  }
  
  state = {
    clients: this.props.clients
  }

  
  render(){

    console.log('render <List>', this.state)

    return(
      <>
      <Filter stateClients = {this.state.clients} {...this.props}/>

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

      </>
   
      
      
    )
  }
}