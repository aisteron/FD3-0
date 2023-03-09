import { Component } from "react";

class ListItem extends Component{

  select = event =>{
    event.stopPropagation();
    !this.props.state.editing && this.props.cbSelected(this.props.product.id)
    
  }
  
  edit = event => {
    event.stopPropagation();
    this.props.cbEdited(this.props.product.id)
  }

  render(){
    const {name,price,url,qty,id} = this.props.product
    let selected = this.props.state.selected
    let edited = this.props.state.edited
    let editing = this.props.state.editing


    
    return(
      <tr 
        onClick={this.select} 
        className={(id === selected || id === edited) ? 'selected':''}>
        <td>{name}</td>
        <td>{price}</td>
        <td>{url}</td>
        <td>{qty}</td>
        <td>
          <button className="edit" onClick={this.edit} disabled={editing}>Edit</button>
          <button className="delete" disabled={editing}>Delete</button>
        </td>
      </tr>
    )
  }
}

export default ListItem;