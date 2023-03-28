import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {delFromCart} from "../../actions";

const CartTable = ({items, delFromCart, decTotal, decCountCat}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title, price, url, id, count} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{count}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div className="cart__close" onClick={() => {decTotal(price); delFromCart(id); decCountCat()}}>&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.cart,
        countItemCart: state.countItemCart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delFromCart: (id) => {
            dispatch(delFromCart(id));
        },
        decTotal: (price) => {
            debugger
            dispatch({
                type: 'DEC_TOTAL',
                itemPrice: price
            })
        },
        decCountCat: () => {
            dispatch({
                type: 'DEC_COUNT'
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartTable);