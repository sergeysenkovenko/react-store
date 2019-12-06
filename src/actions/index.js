const gamesLoaded = (newGames) => {
    return {
        type: 'FETCH_GAMES_SUCCESS',
        payload: newGames
    }
}

const gamesRequested = () => {
    return {
        type: 'FETCH_GAMES_REQUEST'
    }
}

const gamesError = (error) => {
    return {
        type: 'FETCH_GAMES_FAILURE',
        payload: error
    }
}

export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: id
    }
}

export const removeAllFromCart = (id) => {
    return {
        type: 'REMOVE_ALL_FROM_CART',
        payload: id
    }
}


export const fetchGames = (dispatch, appService) => async () => {
    try {
        dispatch(gamesRequested())
        const data = await appService.getGames()
        dispatch(gamesLoaded(data))
    } catch(err) {
        dispatch(gamesError(err))
    }
}