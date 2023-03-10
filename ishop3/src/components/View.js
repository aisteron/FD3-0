import { Component } from "react";

class View extends Component{
  
  render(){
    if(this.props.prod === undefined) return

    const {name, price, qty} = this.props.prod

    return(
    <div className="view">
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Qty: {qty}</p>
    </div>
    )

  }
}

export default View;