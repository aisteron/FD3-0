import { Component } from "react";
import Error from "./Error";

class Fields extends Component {

  state = {
    errors:[],
    //prod: this.props.prod
    name: ''
  }


  validate = event =>{

    //this.props.cbEditing(true)

    let id = event.target.id
    
    let msg = ''

    
    let arr = [...this.state.errors]
    

    switch(id){
      case 'name':

        if(event.target.value.length === 0){
          msg = 'Product name can not be empty'       
          arr.push({[id]:msg})         
          this.setState({ errors: arr })
        } else {
          this.setState({ errors: arr.filter(el => Object.keys(el)[0] !== 'name') })
          //this.prod.name = event.target.value
          //this.state.prod.name = event.target.value
          this.setState({name:event.target.value})
        }

        break;
      case 'price':
        if(event.target.value.length === 0){
          msg = 'Product price can not be empty'
        } else if(event.target.value === 0){
           msg = 'Product price can not be zero'  
        } else if(isNaN(event.target.value)){
          msg = "Letters not permit. Use 0,1,2,3,4,5,6,7,8,9"
        }
        
        if(msg.length){
          arr.push({[id]:msg})
          this.setState({ errors: arr})
        } else {
          this.prod.price = event.target.value
          this.setState({ errors: arr.filter(el => Object.keys(el)[0] !== 'price') })
        }

        break;

        case 'url':

        if(event.target.value.length === 0){
          msg = 'Product URL can not be empty'       
          arr.push({[id]:msg})         
          this.setState({ errors: arr })
        } else {
          this.prod.url = event.target.value
          this.setState({ errors: arr.filter(el => Object.keys(el)[0] !== 'url') })
        }

        break;

        case 'qty':

        if(event.target.value.length === 0){
          msg = 'Quantity can not be empty'       
          arr.push({[id]:msg})         
          this.setState({ errors: arr })
        } else {
          this.prod.qty = event.target.value
          this.setState({ errors: arr.filter(el => Object.keys(el)[0] !== 'qty') })
        }

        break;
      default:

    }
  }

  save = () => {

    if(!Object.keys(this.prod).length){
      console.log('Не было изменений')
      return
    }

    let p = JSON.parse(JSON.stringify(this.props.state.goods.products))
    let arr = p.filter(el => el.id !== this.prod.id)
    arr.push(this.prod)
    this.props.cbSave({products: arr})
    
  }

  cancel = () => this.props.cbEditing(false, true)

  render(){

    

    //const {id, name,price, url, qty} = this.state.prod

    console.log(this.state.name)
      
    return (<input type="text" value={this.state.name} onChange={this.validate} id="name"/>) 
    

    

  }
}

export default Fields;