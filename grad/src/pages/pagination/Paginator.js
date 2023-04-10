import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

import './style.css';



export const Paginator = () =>{

  const navigate = useNavigate();
	const page_s = useSelector((state) => state.pagination.page)

  return(
    <>
    	{create_obj(navigate, page_s, 10,93)}
    </>
  )
}

function create_obj(navigate,page, per_page, total_goods){
  !page ? page=1: page = +page
  let last_page = Math.ceil(total_goods/per_page)

  let obj = {
    first_page: page > 3,
    m5: page > 6,
    m23: page > 3 ? 3 : false,
    left: left(),
    page: page,
    right: right(),
    p23: p23(),
    p5: (last_page - page) > 5,
    last_page: (last_page - page) > 1
  }


  function left(){

    switch(page){
      case 1:
        return false;
      case 3:
        return [1,2];
      default:
        return [page - 1];

    }
  }
  function right(){
    switch(page){
      case last_page:
      case 3:  
        return false;
      case 1:
        return [2,3];
      default:
        return [page + 1]    
    }
  }
  function p23(){

    switch(page){
      
      case 1:
        return 4;
      
      case 3:
      case (last_page - 2):    
        return 2;
      
      case (last_page - 1):
      case last_page:
        return false;
      
      default:
        return 3;  

    }
  }

  console.log(obj)
  

  return(
		<>

    <nav>
    <ul>

      <li 
        className={!obj.first_page ? "disabled first_page" :"first_page"} 
        onClick={()=>obj.first_page && navigate("/pagination")}>&lt;</li>

      {obj.m5 && <li className="m5" onClick={()=>navigate(`/pagination?page=${page - 5}`)}>-5</li>}
      {obj.m23 && <li className="m23" onClick={()=>navigate(`/pagination?page=${page - obj.m23}`)}>...</li>}
      {obj.left && obj.left.map((el,i) => <li className="left" onClick={()=>navigate(`/pagination?page=${obj.left.length > 1 ? (!i ? 1 : 2) : el}`)} key={i}>{el}</li>)}
      
      <li className='current_page'>{page}</li>
      
      {obj.right && obj.right.map((el,i) => <li className="right" onClick={()=>navigate(`/pagination?page=${obj.right.length > 1 ? el : (page+1)}`)} key={i}>{el}</li>)}
      {obj.p23 && <li className="p23" onClick={()=>navigate(`/pagination?page=${page + obj.p23}`)}>...</li>}
      {obj.p5 && <li className="p5" onClick={()=>navigate(`/pagination?page=${page + 5}`)}>+5</li>}
      
      {obj.last_page && <li className="last_page" onClick={()=>navigate(`/pagination?page=${last_page}`)}>&gt;</li>}
      
    </ul>
    </nav>
		</>
  )


}

