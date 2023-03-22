import Controls from "./Controls";
import List from "./List";

export default function Filter({list}){
  return(
    <>
      <Controls />
      <List list={list} />
    </>  
  )
}