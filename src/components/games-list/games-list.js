import React, { Component } from 'react'
import GamesListItem from '../game-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { connect } from 'react-redux';
import { withAppService } from '../hoc';
import { fetchGames, addToCart } from '../../actions';
import { compose } from '../../utils';
import './games-list.css'

class GamesListContainer extends Component {

    componentDidMount () {
        this.props.fetchGames()
    }

    render () {
        const { games, loading, error, onAddToCart } = this.props;
        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <ErrorIndicator/>
        }
        return <GamesList games={games} onAddToCart={onAddToCart}/>
    }
}

const GamesList = ({ games, onAddToCart }) => {
    return (
        <div className="container cards__wrapper">
             {
                 games.map(game => {
                     return(
                         <div className="card" key={game.id}>
                             <GamesListItem game={game}
                                            onAddToCart={() => onAddToCart(game.id)}
                             />
                        </div>
                     )
                 })
             }
        </div>
     )
}

const mapStateToProps = ({gamesList: { games, loading, error }}) => {
    return {
        games,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch, { appService }) => {
    return {
        fetchGames: fetchGames(dispatch, appService),
        onAddToCart: (id) => dispatch(addToCart(id))
    }
}

export default compose(
    withAppService(),
    connect(mapStateToProps, mapDispatchToProps)
)(GamesListContainer);