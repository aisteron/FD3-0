import { useEffect, useState } from 'react'
import './style.css'
import { Paginator } from './Paginator'

export const PagePagination = () =>{

	const[,setPage] = useState('')
	
	
	useEffect(()=>{
			// useParams() не работает с option parameter
			let page = new URLSearchParams(window.location.search).get("page")
			page && setPage(page)
		},[setPage])

    return(
			<>
				<Paginator cbSetPage={setPage}/>
        <p>Page Pagination</p>
			</>	
    )
}