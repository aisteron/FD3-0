import { Component } from "react";

class Fields extends Component{

  state = {
    id: this.props.prod.id,
    name: this.props.prod.name
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  componentDidUpdate(prevProps){
    prevProps.prod.id !== this.props.prod.id && this.setState({id: this.props.prod.id, name: this.props.prod.name})
  }

  render(){

    
    const {id, name} = this.state

    return(
      <>
      <p>ID: {id}</p>
      <input
          type="text"
          value={name}
          onChange={this.handleNameChange}
        />
      </>  
    )
  }
}

export default Fields;