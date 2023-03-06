import { Component } from "react";
import ListItem from './ListItem'
import View from "./View";
import Fields from "./Fields";


class List extends Component {

  state = {
    goods: this.props.goods,
    selected: null,
    edited: null
  }

  selected = (id) =>{
    this.setState({selected: id, edited: null})
  }

  edited = id => {
    this.setState({selected: null, edited: id})
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
            { this.props.goods.products.map(product => 
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
        <Fields state={this.state}/>
      </>
    )
    
    
  }
}

export default List;