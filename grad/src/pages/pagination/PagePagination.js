import { useSearchParams } from "react-router-dom"
import { List } from "./List";
import { Paginator } from "./Paginator";
import { go } from '../../store/paginationSlice'

import { useSelector, useDispatch } from 'react-redux'

export const PagePagination = () =>{
  let [searchParams, setSearchParams] = useSearchParams();
 
  const page_s = useSelector((state) => state.pagination.page)
	const dispatch = useDispatch()
	page_s !== 1 && dispatch(go(searchParams.get('page')))
	
	
  return(
    <>
      <Paginator page={searchParams.get('page')}/>
      <List page={searchParams.get('page')}/>
    </>
  )
}