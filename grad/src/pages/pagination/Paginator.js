export const Paginator = ({cbSetPage, page}) =>{
  
  return(
    <>
    <p>{page}</p>
    <p onClick={()=>cbSetPage({ page: 2  })}>click</p>
    </>
  )
}