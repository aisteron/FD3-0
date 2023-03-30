import { NavLink } from 'react-router-dom';

export function PagesLinks(){
    return(
        <div className="navlinks">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active': ''}>50 товаров</NavLink>
            <NavLink to="/pagination" className={({ isActive }) => isActive ? 'active': ''}>Пагинация</NavLink>
            <NavLink to="/cart" className={({ isActive }) => isActive ? 'active': ''}>Корзина</NavLink>
        </div>
    )

}