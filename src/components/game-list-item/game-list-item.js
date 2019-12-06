import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './game-list-item.css'

const GameListItem = ({ game, onAddToCart, notLink = false }) => {
    const { title, developer, publisher, cover, releaseDate, price, id } = game;
    const cardTitle = !notLink ? <Link to={`/product/${id}`} className="card-title">{ title }</Link> : <h5 className="mb-3">{title}</h5>
    return(
        <Fragment>
            <img src={ cover } className="card-img-top" alt={ title }></img>
            <div className="card-body">
                { cardTitle }
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Developer: <span>{ developer }</span></li>
                    <li className="list-group-item">Publisher: <span>{ publisher }</span></li>
                    <li className="list-group-item">Release Date: <span>{ releaseDate }</span></li>
                    <li className="list-group-item">Price: <span>{`${price.toFixed(2)}$`}</span></li>
                </ul>
                <button className="btn btn-primary"
                        onClick={onAddToCart}
                >Add to cart</button>
            </div>
        </Fragment>
    )
}

export default GameListItem;