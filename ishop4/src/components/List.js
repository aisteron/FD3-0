import { Component } from "react";
import ListItem from './ListItem'
import View from "./View";
import Fields from "./Fields";


class List extends Component {

  state = {
    goods: this.props.goods,
    selected: null,
    edited: null,
    editing: false
  }

  selected = id => this.setState({selected: id, edited: null})

  edited = id => this.setState({selected: null, edited: id})

  editing = (status, hide) => {
    this.setState({editing: status})
    hide && this.setState({edited: null})
  }

  save = goods => this.setState({editing:false, goods: goods})

  getProd(){
    return this.state.goods.products.filter(el => el.id === this.state.edited)[0]
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
              state = {this.state}
            />) }
          </tbody>
        </table>
        
        <button>New Product</button>
        <View state={this.state}/>
        
        {this.state.edited && (
          <Fields prod={this.getProd()} cbEditing={this.editing}  cbSave={this.save}/>
        )}
        
      </>
    )
    
    
  }
}

export default List;