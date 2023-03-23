import {ContextApp} from "../reducer.js";
import {useContext} from "react";


export default function List(){

  const {state} = useContext(ContextApp);
  const listItems = filter(state).map((el,i) => <li key={i}>{el}</li>)
  
  console.log('render <List/>');
  
  return(
    <ul className="list">
      {listItems}
    </ul>
  )

  
}

function filter(state){
  
  let list = state.list

  if(!state.sort && state.search === '') return list

  if(state.search.length){
    list = [...list].filter(el => el.includes(state.search))
  }
  if(state.sort){
    list = list = [...list].sort()
  }

  return list
}