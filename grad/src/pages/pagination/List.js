import { useEffect, useState } from "react"

export const List = ({page}) => {

  const[data,setData] = useState([])

  useEffect(()=>{
    const getData = async () =>{
      let response = await fetch(`http://localhost:3001/products?_limit=10${page ? '&_page='+page: ''}`)
      setData(await response.json())
    }
    getData()

    return () => setData([])
  },[page])

  return(
    <ul className="list">
      {!data.length && 'Загрузка...'}
    {data.map(el => 
      <li key={el.id}>
        <span className="id">{el.id}.</span>
        <span className="name">{el.name}</span>
        <span className="price">${el.price}</span>
        </li>
    )
    }

    </ul>
  )
}