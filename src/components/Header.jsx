import React from 'react';
import './blocks/_titles.scss';
import './blocks/_section-cart.scss'

const Header = () => {
  return (
    <header className="section-cart__header">
        <div className="container">
          <h1 className="title-1">Корзина товаров</h1>
        </div>
      </header>
  )
}

export default Header