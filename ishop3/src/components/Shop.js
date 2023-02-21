import { useEffect, useState } from "react";
import axios from 'axios'
import Product from "./Product";
import View from './View'
import Fields from './Fields'
import './Shop.css'

function Shop() {

  const [products, setProducts] = useState([])

  async function fetchProducts(){
    const response = await axios.get("http://localhost:3001/products")
    setProducts(response.data)
  }
  
  useEffect(()=> {fetchProducts()},[])

  const [state, setState] = useState({
    selected:null,
    edited: null
  })

  const cbSelected = function(id){
    setState( {...state, selected:id, edited: null} );
  }
  const cbEdited = function(id){
    setState( {...state, edited:id, selected: id} );
  }

console.log(state)
  return (
    <>
    <div className="shop">
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>URL</th>
          <th>Quantity</th>
          <th>Control</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => 
        <Product 
          product={product} 
          key={product.id} 
          cbSelected={cbSelected} 
          cbEdited={cbEdited} 
          state={state}/>)}
      </tbody>
      </table>

      <button>New Product</button>
    </div>

    <View products={products} state={state}/>
    <Fields products={products} state={state}/>

    </>

  );
}

export default Shop;
