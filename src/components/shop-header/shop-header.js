import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './shop-header.css';

const ShopHeader = ({ totalPrice, count }) => {
    return (
        <div className="header bg-primary mb-2">
            <div className="container pl-0 pr-0">
                <nav className="navbar">
                    <Link to="/" className="navbar-brand text-white">GameStore</Link>
                    <Link to="/cart" className="text-white cart">
                        <i className="cart-icon fa fa-shopping-cart mr-2"></i>
                        {count > 0 ? <span>{count} items ({totalPrice.toFixed(2)}$)</span> : <span>Cart is empty</span>}
                    </Link>
                </nav>
            </div>
        </div>
    );
}

const mapStateToProps = ({cartList: {count, totalPrice} }) => {
    return{
        count,
        totalPrice
    }
}

export default connect(mapStateToProps)(ShopHeader);