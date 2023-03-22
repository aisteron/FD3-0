import { PureComponent } from "react";
import Client from "./Client"
import {EventEmitter} from 'events';



export let myEvents=new EventEmitter();


export default class List extends PureComponent{

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

    myEvents.addListener("filter", status => this.setState({filter: status}))

  }
  
  state = {
    clients: this.props.clients,
    filter: null
  }

  filter(){
    // if(!this.state.filter || this.state.filter == 'all') return this.state.clients

    // if(this.state.filter === 'active'){
    //   return this.state.clients.filter(el => el.balance > 0)
    // }

    switch(this.state.filter){
      case null:
      case 'all':
        return this.state.clients
      case 'active':
        return this.state.clients.filter(el => el.balance > 0)
      case 'blocked':
        return this.state.clients.filter(el => el.balance <= 0)
      default:
        return this.state.clients    
    }
  }

  
  render(){

    console.log('render <List>', this.state)

    return(
      <>

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
          {
            this.filter().map(client => <Client client={client} key={client.id}/>) 
          }
        </tbody>
      </table>

      </>
   
      
      
    )
  }
}