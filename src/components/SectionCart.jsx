import React, { useEffect, useState } from 'react'

import './blocks/_cart-section.scss'
import './blocks/_cart-footer.scss'
import Product from './Product'
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'

const SectionCart = ({ data }) => {
  const [cart, setCart] = useState(data);
  const [total, setTotal] = useState({
    price: cart.reduce((sum, elem) => sum + elem.priceTotal, 0),
    count: cart.reduce((sum, elem) => sum + elem.count, 0),
  })

  useEffect(() => {
    setTotal({
      price: cart.reduce((sum, elem) => sum + elem.priceTotal, 0),
      count: cart.reduce((sum, elem) => sum + elem.count, 0),
    }
    )

  }, [cart])


  const deleteProduct = (item) => {
    setCart(cart.filter(product => product.id !== item.id))
  }

  const increase = (product) => {
    setCart(cart => {
      return cart.map(item => {
        if (item.id === product.id) {
          return {
            ...item,
            count: ++item.count,
            priceTotal: item.count * item.price
          }
        }
        return item;
      })
    })
  }

  const decrease = (product) => {
    setCart(cart => {
      return cart.map(item => {
        if (item.id === product.id && item.count > 1) {
          return {
            ...item,
            count: --item.count,
            priceTotal: item.count * item.price
          }
        }
        return item;
      })
    })
  }

  const changeValue = (id, value) => {
    setCart(cart => {
      return cart.map(product => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price
          }
        }
        return product;
      })
    })
  }

  return (
    <div className="section-cart__body">
      <div className="container">
        <CartHeader />
        {cart.length > 0 ?
          cart.map(product => <Product product={product} key={product.id} changeValue={changeValue}
            deleteProduct={deleteProduct} increase={increase} decrease={decrease} />)
          : <h1 style={{ textAlign: 'center' }}>Корзина пуста</h1>}
        <CartFooter total={total} />
      </div>
    </div>
  )
}

export default SectionCart