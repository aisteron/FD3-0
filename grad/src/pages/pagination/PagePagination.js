import { useSearchParams } from "react-router-dom"
import { List } from "./List";
import { Paginator } from "./Paginator";

export const PagePagination = () =>{
  let [searchParams, ] = useSearchParams();
 
  
  return(
    <>
      <Paginator page={searchParams.get('page')}/>
      <List page={searchParams.get('page')}/>
    </>
  )
}