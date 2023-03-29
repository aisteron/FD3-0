export const ListItem = ({item}) => {
    
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.upc}</td>
            <td>{item.price}</td>
						<td><span>remove</span></td>
        </tr>
    )
}