import { useSearchParams } from "react-router-dom"
import { useEffect } from "react";
import { List } from "./List";
import { Paginator } from "./Paginator";
import { go } from '../../store/paginationSlice'

import { useSelector, useDispatch } from 'react-redux'

export const PagePagination = () =>{
  let [searchParams, setSearchParams] = useSearchParams();
 
  const page_s = useSelector((state) => {console.log(state); return state.pagination.page})
	const dispatch = useDispatch()
	dispatch(go(+searchParams.get('page')))


	
	
  return(
    <>
      <Paginator page={page_s}/>
      <List page={page_s}/>
    </>
  )
}