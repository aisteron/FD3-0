import { useSearchParams } from "react-router-dom"
import { List } from "./List";
import { Paginator } from "./Paginator";

export const PagePagination = () =>{
  let [searchParams, setSearchParams] = useSearchParams();
  //console.log(searchParams.get('page'))
  
  return(
    <>
      <Paginator cbSetPage={setSearchParams} page={searchParams.get('page')}/>
      <List/>
    </>
  )
}