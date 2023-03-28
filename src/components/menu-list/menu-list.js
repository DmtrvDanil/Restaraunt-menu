import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';

import './menu-list.scss';
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import Spinner from "../spinner";
import {addToCart, menuLoaded} from "../../actions";

class MenuList extends Component {

    componentDidMount() {
        const {RestoService} = this.props;
        RestoService.getMenuItems().then(res => this.props.menuLoaded(res));
    }


    render() {
        const {menuItems, loading} = this.props;
        if (loading) return <Spinner />
        return (
            <ul className="menu__list">
                {
                menuItems.map(menuItem => {
                    return <MenuListItem key={menuItem.id} menuItem={menuItem} onAddToCart={this.props.addToCart} incTotal={this.props.incTotal} incCountCart={this.props.incCountCart}/>
                })}
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuLoaded: (newMenu) => {
            dispatch(menuLoaded(newMenu))
        },
        addToCart: (id) => {
            dispatch(addToCart(id));
        },
        incTotal: (price) => {
            dispatch({
                type: 'INC_TOTAL',
                itemPrice: price
            })
        },
        incCountCart: () => {
            dispatch({
                type: 'INC_COUNT'
            })
        }
    }
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));