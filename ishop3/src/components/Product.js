
export default function Product({product, cbSelected, cbEdited, state}){

  const selectHandler = function(event){
    event.stopPropagation()
    cbSelected(product.id)
  }

  const editHandler = function(event){
    event.stopPropagation()
    cbEdited(product.id)
  }

  let selected = null
  state.selected === product.id && (selected = 'selected')

  return (
    <tr onClick={selectHandler} className={selected}>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.url}</td>
    <td>{product.qty}</td>
    <td>
      <button onClick={editHandler}>Edit</button>
      <button>Delete</button>
    </td>
    </tr>
  )

}