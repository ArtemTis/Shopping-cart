import React from 'react'
import './blocks/_count.scss';
import Count from './Count';

const Product = ({ product, deleteProduct, increase, decrease, changeValue }) => {

    const priceFormatter = new Intl.NumberFormat();

    console.log('Rerender ' + product.id);
    return (
        <section className="product">
            <div className="product__image">
                <img src={product.img} alt={product.title} />
            </div>
            <div className="product__title">
                {product.title}
            </div>
            <div className="product__count">
                <Count product={product} increase={increase} decrease={decrease} changeValue={changeValue} />
            </div>
            <div className="product__price">
                {priceFormatter.format(product.priceTotal)} руб.
            </div>
            <div className="product__controls">
                <button type="button" onClick={() => deleteProduct(product)}>
                    <img src="./img/icons/cross.svg" alt="delete" />
                </button>
            </div>
        </section>
    )
}

export default Product