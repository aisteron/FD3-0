export default function View({products, state}){
  
  if(!state.selected) return null
  if(state.selected === state.edited) return null

  let product = products.filter(el => state.selected === el.id)[0]

  return(
    <>
      <h3>{product.name}</h3>
      <p>Price: <b>{product.price}</b></p>
    </>
  )
}