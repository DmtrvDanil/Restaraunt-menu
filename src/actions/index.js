const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const addToCart = (menuItem) => {
    return {
        type: 'ADD_CART',
        payload: menuItem
    }
}

const delFromCart = (cartItem) => {
    return {
        type: 'DEL_CART',
        payload: cartItem
    }
}

export {
    menuLoaded,
    addToCart,
    delFromCart
};