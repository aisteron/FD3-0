import { useEffect, useState } from "react"
import { ListItem } from "./ListItem"
import { Form } from "./Form"
import './index.css'
import { setGoods,sort } from '../../store/goods50Slice'
import { useSelector, useDispatch } from 'react-redux'


export const PageIndex = () => {

		const goods = useSelector((state) => state.goods50.goods)
		const sorted = useSelector((state) => state.goods50.sort)
		const dispatch = useDispatch()

    useEffect(()=>{

			const fetchData = async () => {
				const response = await fetch('http://localhost:3001/products?_limit=50')
				const data = await response.json()  
				dispatch(setGoods(data))
			}

			fetchData().catch(console.error);
    },[])


    return(
				<>
					<div className="tools">
						<span 
						onClick={()=>dispatch(sort())}
						className={sorted}
						>sort</span>
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