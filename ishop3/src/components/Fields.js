import { useState } from "react"

export default function Fields({products, state}){
  
  const [fields, setFields] = useState({
      name: null
    })
    
  if(!state.edited) return null
  
  
  let product = products.filter(el => state.edited === el.id)[0]

  

  const handleNameInput = function(e){
    setFields({...fields, name:e.target.value})
  }

  console.log(fields)

  return(
    <div className="fields">
    <h3>Edit product ID = {state.edited}</h3>
    <form>
    
      <div className="row id">
        <span>ID: </span>
        <span>{product.id}</span>
      </div>

      <div className="row">
        <label>
          <span>Name:</span>
          <input type="text" defaultValue={product.name} onChange={handleNameInput}/>
        </label>
      </div>

      <div className="row">
        <label>
          <span>Price:</span>
          <input type="text" defaultValue={product.price}/>
        </label>
      </div>

      <div className="row">
        <label>
          <span>URL:</span>
          <input type="text" defaultValue={product.url} />
        </label>
      </div>

      <div className="row">
        <label>
          <span>Quantity:</span>
          <input type="text" defaultValue={product.qty} />
        </label>
      </div>

      <button>Save</button>
      <button>Cancel</button>
    

    
    </form>

    </div>
  );
}