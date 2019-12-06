import React, { Component } from 'react';
import GamesListItem from '../game-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import { withAppService } from '../hoc';
import { fetchGames, addToCart } from '../../actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from '../../utils';

class ProductPage extends Component {
    componentDidMount () {
        this.props.fetchGames()
    }
    
    render () {
        const { games, loading, error, onAddToCart, match } = this.props;
        const game = games.find(game => game.id === +match.params.id)
        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <ErrorIndicator/>
        }
        return(
            <div className="container">
                <GamesListItem game={game}
                               notLink={true}
                               onAddToCart={() => onAddToCart(game.id)}
                />
            </div>
        )
    }
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
)(withRouter(ProductPage));