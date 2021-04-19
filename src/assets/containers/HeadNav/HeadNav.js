import React from 'react'
import './HeadNav.css'
import SearchContainer from '../SearchContainer/SearchContainer'
import { faBell, faSlidersH, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import PillBar from '../../components/PillBar/PillBar'

function HeadNav(props) {
    if (props.extended === false){
        return (
            <div className="head-nav">
                <div className="place-holder-bar"/>
                <SearchContainer innerIcon={faBars} outerIcon={faBell}/>
            </div>
        );
    }else{
        return (
            <div className="head-nav">
                <div className="place-holder-bar"/>
                <SearchContainer innerIcon={faArrowLeft} outerIcon={faSlidersH}/>
                <PillBar/>
            </div>
        );
    }
    
}

export default HeadNav;
