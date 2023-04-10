import {useDispatch,useSelector } from 'react-redux'
import { remove,to_cart } from '../../store/goods50Slice'
export const ListItem = ({item}) => {

	const dispatch = useDispatch()
	const cart = useSelector((state) => state.goods50.cart)


	const check = () => {
		return cart.filter(el => el.id === item.id).length && 'green'
	}


    
	return(
		<tr>
			<td>{item.name}</td>
			<td>{item.upc}</td>
			<td>{item.price}</td>
			<td>
				<span onClick={()=> dispatch(remove(item.id))}>remove </span>
				| 
				<span onClick={() => dispatch(to_cart(item))} className={check()}> {check() == 'green' ? 'in cart' : 'add to cart'}</span>
				</td>
		</tr>
	)
}