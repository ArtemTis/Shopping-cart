import React from 'react'
import './blocks/_cart-header.scss'

const CartHeader = () => {
    return (
        <header className="cart-header">
            <div className="cart-header__title">наименование</div>
            <div className="cart-header__count">количество</div>
            <div className="cart-header__price">стоимость</div>
        </header>
    )
}

export default CartHeader