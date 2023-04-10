import {useDispatch } from 'react-redux'
import { remove,to_cart } from '../../store/goods50Slice'
export const ListItem = ({item}) => {

	const dispatch = useDispatch()
    
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.upc}</td>
            <td>{item.price}</td>
						<td>
							<span onClick={()=> dispatch(remove(item.id))}>remove </span>
							| 
							<span onClick={() => dispatch(to_cart(item))}> add to cart</span>
							</td>
        </tr>
    )
}