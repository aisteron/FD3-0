import { Component } from "react";
import Error from "./Error";

class Fields extends Component{

  state = {
    errors:[],
    prod: this.props.prod,
    new: false,
    edited: null
  }  

  componentDidUpdate(prevProps){
    
    console.log('• state: ',this.state)
    console.log('○ prevProps: ', prevProps)
    console.log('○ this.props:', this.props)

    if(prevProps.edited !== this.props.edited){
      this.setState({prod: this.props.prod})
    }
    
    
    if(!prevProps.new && this.props.new){

       this.setState(
        { new: true,
          errors: [
          {name: "Product name can not be empty"},
          {price: "Price can not be empty"},
          {url: "Url can not be empty"},
          {qty: "Qty can not be empty"},
        ]}
      ) 
    }

    
      



  }


  validate = event =>{

    this.props.cbEditing(true)

    let id = event.target.id
    
    let msg = ''
    
    let arr = [...this.state.errors]
    

    switch(id){
      case 'name':

        if(event.target.value.length === 0){
          msg = 'Product name can not be empty'       
          arr.push({[id]:msg})         
          this.setState({ errors: arr, prod:{...this.state.prod, name:event.target.value} })
        } else {
          this.setState({ 
            errors: arr.filter(el => Object.keys(el)[0] !== 'name'),
            prod:{...this.state.prod, name:event.target.value}
         })
        }

        break;
      case 'price':
        if(event.target.value.length === 0){
          msg = 'Product price can not be empty'
        } else  if(event.target.value === '0'){
          msg = 'Product price can not be zero'  
        } else if(isNaN(event.target.value)){
          msg = "Letters not permit. Use 0,1,2,3,4,5,6,7,8,9"
        }
        
        if(msg.length){
          arr = arr.filter(el => el[id] === id)
          arr.push({[id]:msg})
          this.setState({ errors: arr, prod:{...this.state.prod, price:event.target.value}})
        } else {

          this.setState({ 
            errors: arr.filter(el => Object.keys(el)[0] !== 'price'),
            prod:{...this.state.prod, price:+event.target.value}
           })
        }

        break;

        case 'url':

        if(event.target.value.length === 0){
          msg = 'Product URL can not be empty'       
          arr.push({[id]:msg})         
          this.setState({ errors: arr, prod:{...this.state.prod, url:event.target.value} })
        } else {

          this.setState({ 
            errors: arr.filter(el => Object.keys(el)[0] !== 'url'),
            prod:{...this.state.prod, url:event.target.value}
           })
        }

        break;

        case 'qty':

        if(event.target.value.length === 0){
          msg = 'Quantity can not be empty'       
          arr.push({[id]:msg})         
          this.setState({ errors: arr,prod:{...this.state.prod, qty:event.target.value} })
        } else {

          this.setState({ 
            errors: arr.filter(el => Object.keys(el)[0] !== 'qty'),
            prod:{...this.state.prod, qty:event.target.value} 
          })
        }

        break;
      default:

    }
  }

  save = () => {
    console.log('save')
    this.setState({prod: undefined}, this.props.cbSave(this.state.prod))
  }

  cancel = () => {
    console.log('cancel')
    this.setState({prod: undefined, errors:[]}, this.props.cbEditing(false, true))
   
  }  

  render(){
    
    if(this.state.prod === undefined && this.props.new === false) return ''

    let id = null
    let name = ''
    let price = ''
    let url = ''
    let qty = ''

    if(this.state.prod){
      id = this.state.prod.id
      name = this.state.prod.name
      price = this.state.prod.price
      url = this.state.prod.url
      qty = this.state.prod.qty
    }
    

    return(
      <>
        {id ? <h3>Edit existing product</h3> : <h3>Create new product</h3>}
        
        <div className="edit">
          <div className="row">{id && `ID: ${id}`}</div>
          
          <div className="row">
            <label>
              <span>Name</span>
              <input type="text" value={name} onChange={this.validate} id="name"/>
            </label>
    
            <Error state={this.state} name="name"/>
            
          </div>
          <div className="row">
            <label>
              <span>Price</span>
              <input type="text" value={price} onChange={this.validate} id="price"/>
            </label>
    
            
            <Error state={this.state} name="price"/>
            
            
          </div>
          <div className="row">
            <label>
              <span>URL</span>
              <input type="text" value={url} onChange={this.validate} id="url"/>
            </label>
            <Error state={this.state} name="url"/>
          </div>
          <div className="row">
            <label>
              <span>Qty</span>
              <input type="text" value={qty} onChange={this.validate} id="qty"/>
            </label>
    
            
            <Error state={this.state} name="qty"/>
          </div>
        </div>
        <div className="buttons">
          {this.props.new 
          ? <button className="add" disabled={this.state.errors.length||!this.state.prod} onClick={this.save}>Add</button>
          : <button className="save" disabled={this.state.errors.length} onClick={this.save}>Save</button>
          }
          <button className="cancel" onClick={this.cancel}>Cancel</button>
        </div>
      </>
    
    ) 
  }
}

export default Fields;