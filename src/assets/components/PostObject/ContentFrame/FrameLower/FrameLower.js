import React from 'react'
import './FrameLower.css'
import ItemStack from './ItemStack/ItemStack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


function FrameLower(props) {
    return (
        <div className="frame-lower">
            <ItemStack price={props.price} location={props.location}/>
            <FontAwesomeIcon className="favs-icon" icon={faStar} size='lg'/>
        </div>
    )
}

export default FrameLower
