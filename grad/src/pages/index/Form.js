import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { add } from '../../store/goods50Slice'

export const Form = () => {
	const dispatch = useDispatch()
	
	let nameRef = useRef()
	let upcRef = useRef()
	let priceRef = useRef()

	function send(event){
		event.preventDefault()
		
		let obj = {
			name: nameRef.current.value,
			upc: upcRef.current.value,
			price: priceRef.current.value
		}
		dispatch(add(obj))

	}

	return(
		<form onSubmit={(event)=>send(event)}>
			<fieldset>
				<input type="text" placeholder="Name" ref={nameRef}/>
				<input type="text" placeholder="UPC" ref={upcRef}/>
				<input type="text" placeholder="price" ref={priceRef}/>
				<input type="submit" value="Submit" />
			</fieldset>
		</form>
	)
}