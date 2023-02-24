import React from 'react'

const Count = ({product, increase, decrease, changeValue}) => {
    return (
        <div className="count">
            <div className="count__box">
                <input type="number" className="count__input" min="1" max="100" value={product.count} 
                onChange={(e => changeValue(product.id, +e.target.value))}/>
            </div>
            <div className="count__controls">
                <button type="button" className="count_up">
                    <img src="./img/icons/icon-up.svg" alt="Increase" onClick={() => increase(product)}/>
                </button>
                <button type="button" className="count_down" onClick={() => decrease(product)}>
                    <img src="./img/icons/icon-down.svg" alt="Decrease" />
                </button>
            </div>
        </div>
    )
}

export default Count