import { NavLink } from 'react-router-dom';

export function PagesLinks(){
    return(
        <div className="navlinks">
            <NavLink to="/">50 товаров</NavLink>
            <NavLink to="/pagination">Пагинация</NavLink>
            <NavLink to="/cart">Корзина</NavLink>
        </div>
    )

}