import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import { Paginator } from './Paginator'

export const PagePagination = () =>{

	const[page,setPage] = useState('')
	const params = useParams()
	console.log(params)
	useEffect(()=>{
			// useParams() не работает с option parameter
			let page = new URLSearchParams(window.location.search).get("page")
			page && setPage(page)
		},[setPage])

    return(
			<>
				
        <p>Page Pagination</p>
			</>	
    )
}