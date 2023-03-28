const initialState = {
    menu: [],
    cart: [],
    loading: true,
    total: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false
            };
        case 'ADD_CART':
            const id = action.payload;
            const item = state.menu.find(menuItem => menuItem.id === id);
            const itemCart = state.cart.find(itemCart => itemCart.id === id);
            if (itemCart) {
                itemCart.count += 1;
                itemCart.price += item.price;
                return state;
            }
            const addItem = {
                title: item.title,
                price: item.price,
                url: item.url,
                category: item.category,
                id: item.id,
                count: item.count
            }
            return {
                ...state,
                cart: [...state.cart, addItem]
                };
        case 'DEL_CART':
            const idDel = action.payload;
            const delItem = state.cart.find(cartItem => cartItem.id === idDel);
            const index = state.cart.indexOf(delItem);
            if (state.countItemCart > 1) {
                return state;
            }
            const newCart = [...state.cart.slice(0, index), ...state.cart.slice(index + 1)];
            return {
                ...state,
                cart: newCart
            }
        case 'INC_TOTAL':
            return {
                ...state,
                total: state.total + action.itemPrice
            }
        case 'DEC_TOTAL':
            return {
                ...state,
                total: state.total - action.itemPrice
            }
        // case 'INC_COUNT':
        //     return {
        //         ...state,
        //         countItemCart: state.countItemCart +1
        //     }
        // case 'DEC_COUNT':
        //     return {
        //         ...state,
        //         countItemCart: state.countItemCart -1
        //     }
        default:
            return state;
    }
}

export default reducer;