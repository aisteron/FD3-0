import { Component } from "react";
import Error from "./Error";

class Fields extends Component{

  validate = event =>{

    let id = event.target.id
    
    let msg = ''


    switch(id){
      case 'name':
        event.target.value.length < 0 && (msg = 'Product name can not be empty')
        isNaN(event.target.value) && (msg = "Only digits not permit")
        this.setState({ errors: {...this.state.errors, [id]:msg}})
        break;
      case 'price':
        if(event.target.value.length === 0){
          msg = 'Product price can not be empty'
        } else if(event.target.value === 0){
           msg = 'Product price can not be zero'  
        } else if(isNaN(event.target.value)){
          msg = "Letters not permit. Use 0,1,2,3,4,5,6,7,8,9"
        }
        console.log(msg)
        //msg.length && this.setState({ errors: {...this.state.errors, [id]:msg}})
        
        break;
      default:

    }
  }

  state = {errors:[]}

  render(){
    console.log(this.state)

    let edited = this.props.state.edited
    
    if(edited){
      const {id, name,price, url, qty} = this.props.state.goods.products.filter(el => el.id === edited)[0]
      return(
        <>
          <h3>Edit existing product</h3>
          <div className="edit">
            <div className="row">
              ID: {id}
            </div>
            <div className="row">
              <label>
                <span>Name</span>
                <input type="text" defaultValue={name} onChange={this.validate} id="name"/>
              </label>
              
              <Error state={this.state} name="name"/>
            </div>
            <div className="row">
              <label>
                <span>Price</span>
                <input type="text" defaultValue={price} onChange={this.validate} id="price"/>
              </label>
              <Error state={this.state} name="price"/>
            </div>
            <div className="row">
              <label>
                <span>URL</span>
                <input type="text" value={url} id="url"/>
              </label>
            </div>
            <div className="row">
              <label>
                <span>Qty</span>
                <input type="text" value={qty} id="qty"/>
              </label>
            </div>
          </div>
          
          <button className="save">Save</button>
          <button className="cancel">Cancel</button>
        </>

      ) 

    }
    

  }
}

export default Fields;