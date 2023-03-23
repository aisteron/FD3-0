import {useReducer} from 'react'
import Controls from "./Controls";
import List from "./List";
import {ContextApp, initialState, testReducer} from "../reducer";

export default function Filter(){
  
  const [state, dispatch] = useReducer(testReducer, initialState);

  
  return(
    <ContextApp.Provider value={{dispatch, state}}>
      <Controls />
      <List/>
    </ContextApp.Provider> 
  )
}