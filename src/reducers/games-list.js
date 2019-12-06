const updateGamesList = (state, action) => {
    if(state === undefined){
        return {
            games: [],
            loading: true,
            error: null,
        }
    }
    switch (action.type){
        case 'FETCH_GAMES_REQUEST':
            return {
                games: [],
                loading: true,
                error: null
            }
        case 'FETCH_GAMES_SUCCESS':
            return {
                games: action.payload,
                loading: false,
                error: null
            }
        case 'FETCH_GAMES_FAILURE':
            return {
                games: [],
                loading: false,
                error: action.payload
            }
        default:
            return state.gamesList; 
    }
}

export default updateGamesList;