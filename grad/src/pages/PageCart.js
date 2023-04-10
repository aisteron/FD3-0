import { useSelector } from 'react-redux'

export const PageCart = () => {
	const cart = useSelector((state) => state.goods50.cart)
	return(
		cart.length ?
		cart.map(el => <li key={el.id}>{el.name}</li>)
		: <p>Your cart is empty</p>
	)
}