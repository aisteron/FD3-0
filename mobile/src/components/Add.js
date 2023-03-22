import { Component } from "react";
import { myEvents } from "./List";
import { createRef } from "react";

export default class Add extends Component{
  add = () => this.setState({adding: true})

  constructor(props) {
    super(props);
    this.state = {adding: false}
    
    this.refName = createRef();
    this.refSurname = createRef();
    this.refThirdname = createRef();
    this.refBalance = createRef();


  }


  save = () =>{

   
    let obj = {
      name: this.refName.current.value,
      surname: this.refSurname.current.value,
      thirdname: this.refThirdname.current.value,
      balance: +this.refBalance.current.value,
      color: colorArray[(Math.random() * colorArray.length) | 0]
    }
    myEvents.emit('add', obj)
    this.setState({adding: false})
  }
  
  render(){

    return(
      <>

      <button onClick={this.add}>Добавить клиента</button>

      
      {this.state.adding &&
        <form>
          <fieldset> 
            <legend>Данные формы</legend>
            <input type="text" placeholder="Имя" ref={this.refName} defaultValue=""/>
            <input type="text" placeholder="Фамилия" ref={this.refSurname} defaultValue=""/>
            <input type="text" placeholder="Отчество" ref={this.refThirdname} defaultValue=""/>
            <input type="text" placeholder="Баланс" ref={this.refBalance} defaultValue=""/>
            
            <div className="row">
              <input type="button" value="Сохранить" onClick={this.save}/>
              <input type="button" value="Отменить" onClick={() => this.setState({adding: false})}/>
            </div>
          </fieldset>
        </form>
      }
      </>
    )
    
  }

  fields =  
    <form>
      <fieldset> 
        <legend>Данные формы</legend>
        <input type="text" placeholder="Имя" ref={this.refName} defaultValue=""/>
        <input type="text" placeholder="Фамилия" ref={this.refSurname} defaultValue=""/>
        <input type="text" placeholder="Отчество" ref={this.refThirdname} defaultValue=""/>
        <input type="text" placeholder="Баланс" ref={this.refBalance} defaultValue=""/>
        <div className="row">
          <input type="button" value="Сохранить" onClick={this.save}/>
          <input type="button" value="Отменить" onClick={() => this.setState({adding: false})}/>

        </div>
      </fieldset>
    </form>
}

let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
