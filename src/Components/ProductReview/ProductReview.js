import React from 'react';
import './ProductReview.css';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { Link } from 'react-router-dom';

const ProductReview = (props) => {
    // console.log('Review', props.cart.product);
    let { cart, count, OnIncrementClick, OnDecrementClick, addToCheckout, removeFromCheckout, handleDeleteProduct } = props;
    const { key, name, category, photoUrl, seller, price } = cart.product;

    return (
        <div className="review-wrapper">

            <div className="">
                <div className="packages">
                    <h2>
                        <span><LibraryAddIcon /> </span>
                        <span>Product packages</span>
                    </h2>
                </div>

                <div className="review">
                    <div className="review-left">
                        <div className="add-to-checkout">
                            <button onClick={() => addToCheckout(cart.product, count)} className="increase" style={{ marginBottom: '38px' }}><AddShoppingCartIcon /></button> <br />
                            <button onClick={() => removeFromCheckout(key)} className="decrease"><RemoveShoppingCartIcon /></button>
                        </div>
                        <div className="product-image">
                            <img src={photoUrl} alt="checkout-product-pic" />
                        </div>
                    </div>
                    <div className="review-rigth">
                        <div className="review-product extra">
                            <Link to={`/product/${category}/${key}`}><h2 style={{ color: '#db2804b9' }}>{name}</h2></Link>
                            <h3 className="review-prod-info">Category: {category}</h3>
                            <h3 className="review-prod-info">Seller: {seller}</h3>
                        </div>
                        <div className="review-product middle">
                            <h2 className="prod-price">Price: ${price}</h2>
                            <button onClick={() => handleDeleteProduct(cart._id)} className="delete"><DeleteSweepIcon /></button>
                        </div>
                        <div className="review-product">
                            <button onClick={OnIncrementClick} className="increase"><AddIcon /></button> <br />
                            <strong className="count">{count}</strong> <br />
                            <button onClick={OnDecrementClick} className="decrease"><RemoveIcon /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductReview;