import { Component } from "react";
import ListItem from './ListItem'
import View from "./View";
import Fields from "./Fields";


class List extends Component {

  state = {
    goods: this.props.goods,
    selected: null,
    edited: null,
    editing: false,
    new: false
  }

  selected = id => this.setState({selected: id, edited: null})

  edited = id => this.setState({selected: null, edited: id})

  editing = (status, hide) => {
    this.setState({editing: status})
    hide && this.setState({edited: null, new: false})
  }

  save = goods => this.setState({editing:false, goods: goods})
  new = _ => this.setState({new:!this.state.new, edited:null, editing: true, selected: null})
  
  delete = id => {
    let res = this.state.goods.products.filter(el => el.id !== id)
    this.setState({goods:{products: res}, selected: null, edited: null, new: false})
  }

   
  render(){
    console.log(this.state)
   
    return(
      <>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>URL</th>
              <th>Qty</th>
              <th>Control</th>
            </tr>
          </thead>
          <tbody>
            { this.state.goods.products.map(product => 
            <ListItem 
              product={product} 
              key={product.id}
              cbSelected={this.selected}
              cbEdited={this.edited}
              cbDeleted={this.delete}
              state = {this.state}
            />) }
          </tbody>
        </table>
        
        <button disabled={this.state.editing} onClick={this.new}>New Product</button>
        <View state={this.state}/>
        <Fields state={this.state} cbEditing={this.editing}  cbSave={this.save}/>
        
        
      </>
    )
    
    
  }
}

export default List;