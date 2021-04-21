import React from 'react'
import './ItemStack.css'

function ItemStack(props) {
    return (
        <div className="item-stack">
            <div className="price-text">{props.price}</div>
            <div className="location-text">{props.location}</div>
        </div>
    )
}

export default ItemStack
