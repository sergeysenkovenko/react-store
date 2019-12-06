import updateGamesList from './games-list';
import updateShoppingCart from './cart-list';

const reducer = (state, action) => {
    return {
        gamesList: updateGamesList(state, action),
        cartList: updateShoppingCart(state, action)
    }
}

export default reducer;