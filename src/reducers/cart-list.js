const updateCartItems = (cart, item, index) => {
    if(item.count === 0){
        return [
            ...cart.slice(0, index),
            ...cart.slice(index + 1)
        ]
    }

    if(index === -1){
        return [
            ...cart,
            item
        ]
    }

    return [
        ...cart.slice(0, index),
        item,
        ...cart.slice(index + 1)
    ]
}

const updateCartItem = (game, item, quantity) => {
    if(item) {
        return {
            ...item,
            count: item.count + quantity,
            price: item.price + quantity*game.price
        }
    } else {
        return {
            id: game.id,
            title: game.title,
            cover: game.cover,
            count: 1,
            price: game.price
        }
    }
}

const updateOrder = (state, gameID, quantity) => {
    const { gamesList: { games }, cartList: { cart, totalPrice, count } } = state

    const game = games.find(game => game.id === gameID)
    const itemIndex = cart.findIndex(game => game.id === gameID)
    const item = cart[itemIndex]

    const newItem = updateCartItem(game, item, quantity)
    return {
        count: count + quantity,
        totalPrice: totalPrice + game.price*quantity,
        cart: updateCartItems(cart, newItem, itemIndex)
    }
}

const updateShoppingCart = (state, action) => {
    if(state === undefined){
        return {
            cart: [],
            totalPrice: 0,
            count: 0
        }
    }
    switch (action.type){
        case 'ADD_TO_CART':
            return updateOrder(state, action.payload, 1)

        case 'REMOVE_FROM_CART':
           return updateOrder(state, action.payload, -1)

        case 'REMOVE_ALL_FROM_CART':
            const item = state.cartList.cart.find(game => game.id === action.payload)
            return updateOrder(state, action.payload, -item.count) 
        default:
            return state.cartList;
    }
}

export default updateShoppingCart;