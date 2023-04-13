import { useEffect} from "react"
import { ListItem } from "./ListItem"
import { Form } from "./Form"
import './index.css'
import { setGoods,sort } from '../../store/goods50Slice'
import { useSelector, useDispatch } from 'react-redux'

import { CSSTransitionGroup } from 'react-transition-group'


export const PageIndex = () => {

		const goods = useSelector((state) => state.goods50.goods)
		const sorted = useSelector((state) => state.goods50.sort)
		const dispatch = useDispatch()

    useEffect(()=>{
			
			const fetchData = async () => {
				const response = await fetch('https://6437cd07894c9029e8c6543c.mockapi.io/products?limit=50')
				const data = await response.json()  
				dispatch(setGoods(data))
			}

			fetchData().catch(console.error);
			// eslint-disable-next-line react-hooks/exhaustive-deps
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
									<td className="upc">upc</td>
									<td>price</td>
									<td></td>
								</tr>
							</thead>
							
							<CSSTransitionGroup
								transitionName="example"
								component="tbody"
								transitionEnterTimeout={500}
								transitionLeaveTimeout={300}>
								{goods.map(item => <ListItem item={item} key={item.id}/>)}
								</CSSTransitionGroup>	
							
						</table>

						<aside>
							<Form />
						</aside>
					</section>
				</>

    )
}