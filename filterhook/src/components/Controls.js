import {ContextApp} from "../reducer.js";
import { useContext } from "react";

export default function Controls(){
  const {state, dispatch} = useContext(ContextApp);
  console.log(state);
  return(
    <div className="controls">

      <input type="checkbox" 
        onChange={(eo) =>dispatch({type: 'sort', payload: eo.target.checked})} 
        checked={state.sort}/>

      <input type="text"
        onChange={(eo) =>dispatch({type: 'search', payload: eo.target.value})}
        value={state.search}/>

      <input type="button" value="сброс" onClick={_ =>dispatch({type: 'reset'})}/>
    </div>
  )
}