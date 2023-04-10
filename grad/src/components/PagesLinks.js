import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

export function PagesLinks(){
		const cart = useSelector((state) => state.goods50.cart)
    return(
        <div className="navlinks">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active': ''}>50 товаров</NavLink>
            <NavLink to="/pagination" className={({ isActive }) => isActive ? 'active': ''}>Пагинация</NavLink>
            <NavLink to="/cart" className={({ isActive }) => isActive ? 'active': ''}>Корзина {cart.length  !== 0 && cart.length}</NavLink>
        </div>
    )

}