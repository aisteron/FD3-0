import { Component } from "react";

export default class Filter extends Component{
  render(){

    return(
      <div className="filter">
        <button>Все</button>
        <button>Активные</button>
        <button>Заблокированные</button>
      </div>
    )
  }
}