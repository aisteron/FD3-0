import React from "react";
import {useReducer} from 'react'
export const ContextApp = React.createContext();

var list = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

export const initialState = {

	sort: false,
	search: "",
	list: list

};

export const testReducer = (state, action) => {
    switch(action.type) {
			case 'sort':
				return {...state, sort: action.payload};
			case 'list':
				return {...state, list: action.payload}	
			case 'search':
				return {...state, search: action.payload}	
			case 'reset':
				return initialState	
			default:
				return state
    }
};

export const FilterProvider = ({children}) =>{
  const [state, dispatch] = useReducer(testReducer, initialState);
  return <ContextApp.Provider value={{dispatch, state}}>{children}</ContextApp.Provider>;
}