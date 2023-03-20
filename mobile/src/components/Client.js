import { PureComponent } from "react";
import { myEvents } from "./List";
import { createRef } from "react";

export default class Client extends PureComponent{

  //edit = () => myEvents.emit('MyEvent1',5);
  

  constructor(props) {
    super(props);
    this.state = {edited: false}
    this.refName = createRef();
  }

  delete = () => myEvents.emit('delete', this.props.client.id)

  edited = status => this.setState({edited:status})
  save = () =>{
    console.log(this.refName.current.value)
  }
  
  render(){

    const {name, surname, thirdname, balance} = this.props.client

    if(!this.state.edited){
      return(
            <tr>
              <td>{name}</td>
              <td>{surname}</td>
              <td>{thirdname}</td>
              <td>{balance}</td>
              <td 
              className={balance < 0 ? "blocked":"active"}>
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
          <td><input type="text" defaultValue={surname}/></td>
          <td><input type="text" defaultValue={thirdname}/></td>
          <td><input type="text" defaultValue={balance}/></td>
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