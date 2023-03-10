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

  save = prod => {
    

    if(prod.id){
      let arr = this.state.goods.products.filter(el => el.id !== prod.id)
      arr.push(prod)
      arr.sort((a,b) => a.id - b.id)
      this.setState({
        editing:false, 
        goods: {products: arr},
        new: false,
        selected: prod.id,
        edited: null
      })
    } else {
      let ids = this.state.goods.products.map(el => el.id)
      let nextId = Math.max(...ids) + 1
      prod = {id: nextId, ...prod}

      let products = [...this.state.goods.products]
      products.push(prod)


      this.setState({
        editing:false, 
        goods: {products: products},
        new: false,
        selected: prod.id
      })

    }
    
  }
  new = _ => this.setState({new:!this.state.new, edited:null, editing: true, selected: null})
  
  delete = id => {
    let res = this.state.goods.products.filter(el => el.id !== id)
    this.setState({goods:{products: res}, selected: null, edited: null, new: false})
  }

  getProd(type){
    return this.state.goods.products.filter(el => el.id === this.state[type])[0]
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
        <View prod={this.getProd('selected')}/>
        <Fields prod={this.getProd('edited')} cbEditing={this.editing}  cbSave={this.save} new={this.state.new} edited={this.state.edited}/>
        
        
      </>
    )
    
    
  }
}

export default List;