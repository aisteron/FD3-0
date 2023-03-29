import { useEffect, useState } from "react"
import { Num } from "./Num";

export const Paginator = (props) =>{
	let items_on_page = 10;
  
	const[total, setTotal] = useState(0)

	useEffect(()=>{
		const getTotal = async () =>{
			let response = await fetch("http://localhost:3001/total")
			let total_products = await response.json();
			setTotal(total_products[0].total);
		}

		getTotal()

	},[])

	function makeArray(){
		let arr = []
		if(!total) return null;

		let current_page = new URLSearchParams(window.location.search).get("page")
		if(!current_page){
			arr = [1,2,3,'more']
		}
		return arr;
	}

	return(
		<nav>
			<ul>
				{/* <Num arr={makeArray()}/> */}
			</ul>
		</nav>
	)
}