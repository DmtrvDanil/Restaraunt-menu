import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart, incTotal}) => {
    const {title, category, price, url, id} = menuItem;
    if (!menuItem.count) menuItem.count = 1;
    return (
        <>
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt="Cesar salad"></img>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}$</span></div>
                <button className="menu__btn" onClick={() => {incTotal(price); onAddToCart(id)}}>Add to cart</button>
            </li>
        </>
    )
}


export default MenuListItem;
