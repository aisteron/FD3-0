import { Component } from "react";
import { myEvents } from "./List";

export default class Filter extends Component {

  
  render(){

    return(
      <div className="filter">
        <button onClick={()=>myEvents.emit('filter', 'all')}>Все</button>
        <button onClick={()=>myEvents.emit('filter', 'active')}>Активные</button>
        <button onClick={()=>myEvents.emit('filter', 'blocked')}>Заблокированные</button>
      </div>
    )
  }
}