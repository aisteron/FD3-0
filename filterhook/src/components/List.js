export default function List({list}){

  const listItems = list.map(el => <li>{el}</li>)
  
  return(
    <ul className="list">
    {listItems}
    </ul>
  )
}