import { PureComponent } from "react";
import { myEvents } from "./List";
import { createRef } from "react";

export default class Client extends PureComponent{

  //edit = () => myEvents.emit('MyEvent1',5);
  

  constructor(props) {
    super(props);
    this.state = {edited: false, color: this.props.client.color}
    this.refName = createRef();
    this.refSurname = createRef();
    this.refThirdname = createRef();
    this.refBalance = createRef();
  }

  delete = () => myEvents.emit('delete', this.props.client.id)

  edited = status => this.setState({edited:status})
  
  save = () =>{
   
    let obj = {
      id: this.props.client.id,
      name: this.refName.current.value,
      surname: this.refSurname.current.value,
      thirdname: this.refThirdname.current.value,
      balance: this.refBalance.current.value,
    }
    myEvents.emit('save', obj)
    this.setState({edited: false})
  }
  
  render(){

    
    const {name, surname, thirdname, balance} = this.props.client

    console.log(`%c render ${name}`, `color:${this.state.color}`)

    if(!this.state.edited){
      return(
            <tr>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{thirdname}</td>
              <td>{balance}</td>
              <td 
              className={balance <= 0 ? "blocked":"active"}>
                {balance > 0 ? 'активен' : 'заблокирован'}
              </td>
              <td className="actions">
                <button onClick={()=>this.edited(true)}>Редактировать</button>
                <button onClick={()=>this.delete()}>Удалить</button>
              </td>
            </tr>
          )
    } else {
      return(
        <tr>
          <td><input type="text" defaultValue={name} ref={this.refName}/></td>
          <td><input type="text" defaultValue={surname} ref={this.refSurname}/></td>
          <td><input type="text" defaultValue={thirdname} ref={this.refThirdname}/></td>
          <td><input type="text" defaultValue={balance} ref={this.refBalance}/></td>
          <td 
          className={balance < 0 ? "blocked":"active"}>
            {balance > 0 ? 'активен' : 'заблокирован'}
          </td>
          <td className="actions">
            <button onClick={()=>this.save()}>Сохранить</button>
            <button onClick={()=>this.edited(false)}>Отменить</button>
          </td>
        </tr>
      )
    }

    
  }
}