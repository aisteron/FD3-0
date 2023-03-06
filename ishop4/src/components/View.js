import { Component } from "react";

class View extends Component{
  render(){
    let selected = this.props.state.selected
    
    if(selected){
      const {name, price, qty} = this.props.state.goods.products.filter(el => el.id === selected)[0]

      return(
      <div className="view">
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p>Qty: {qty}</p>
      </div>
      )
    }
  }
}

export default View;