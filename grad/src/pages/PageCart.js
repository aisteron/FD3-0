import { useSelector } from 'react-redux'

export const PageCart = () => {
	const cart = useSelector((state) => state.goods50.cart)

	let t = 0
	
	const total =
	<>
		{cart.map(el => { 
			t+= +el.price; 
			return <li key={el.id}>{el.name} | ${el.price}</li> })}
		<hr/>
		<h2>Total: $ {t.toFixed(2)}</h2>
	</>

	return( cart.length ? total : <p>Your cart is empty</p>)
}
