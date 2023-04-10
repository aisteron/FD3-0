import { useEffect, useState } from "react"
import { ListItem } from "./ListItem"
import { Form } from "./Form"
import './index.css'
import { setGoods } from '../../store/goods50Slice'
import { useSelector, useDispatch } from 'react-redux'


export const PageIndex = () => {
    //const[data,setData] = useState([])

		const goods = useSelector((state) => state.goods50.goods)
		const dispatch = useDispatch()

    useEffect(()=>{

			const fetchData = async () => {
				const response = await fetch('http://localhost:3001/products?_limit=50')
				const data = await response.json()  
				//setData(data)
				dispatch(setGoods(data))
			}

			fetchData().catch(console.error);
    },[])

    return(
				<>
					<div className="tools">
						<span>sort</span>
					</div>
					<section>
						<table className="list">
							<thead>
								<tr>
									<td>name</td>
									<td>upc</td>
									<td>price</td>
									<td></td>
								</tr>
							</thead>
							<tbody>
								{goods.map(item => <ListItem item={item} key={item.id}/>)}
							</tbody>
						</table>

						<aside>
							<Form />
						</aside>
					</section>
				</>

    )
}