import React from 'react';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, removeAllFromCart } from '../../actions';
import { connect } from 'react-redux';
import './cart-list.css';

const CartList = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    const renderItem = item => {
        const {id, title, cover, price, count } = item;
        return (
            <div className="cart-item" key={id}>
                <div className="content">
                    <img src={cover} alt={title}/>
                    <Link to={`/product/${id}`} className="title">{title}</Link>
                </div>
                <div className="controls">
                    <button className="btn btn-outline-success btn-sm"
                            onClick={() => onIncrease(id)}
                    >
                        <i className="fa fa-plus-circle" />
                    </button>
                    <div className="item-count">
                        {count}
                    </div>
                    <button className="btn btn-outline-warning btn-sm"
                             onClick={() => onDecrease(id)}
                    >
                        <i className="fa fa-minus-circle" />
                    </button>
                    <div className="price">
                       {price.toFixed(2)}$
                    </div>
                    <button className="btn btn-outline-danger btn-sm trash-btn"
                             onClick={() => onDelete(id)}
                    >
                        <i className="fa fa-trash-o" />
                    </button>
                </div>
            </div>
        )
    }
    if(items.length < 1){
        return(
            <h4 className="text-center mt-4">No Items Yet</h4>
        )
    }
    return(
        <div className="container mt-4">
            <div className="info-row">
                <div className="cart-title">
                    Title:
                </div>
                <div className="right-col">
                    <div className="count">
                        Count:
                    </div>
                    <div className="price">
                        Price:
                    </div>
                </div>
            </div>
            { items.map(renderItem) }
            <div className="total mt-3">
                Total: <span>{total.toFixed(2)}$</span>
            </div>
        </div>
    )
}

const mapStateToProps = ({cartList: { cart, totalPrice }}) => {
    return {
        items: cart,
        total: totalPrice
    }
}

const mapDispatchToProps = {
    onIncrease: addToCart,
    onDecrease: removeFromCart,
    onDelete: removeAllFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
