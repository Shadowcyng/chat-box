import React from 'react'
import './Infobar.css'
import onlineIcon from '../../Icons/onlineIcon.png'
import closeIcon from '../../Icons/closeIcon.png'

const Infobar = ({room}) => {
    return (
        <div className='infobar'>
            <div className='leftInnerContainer'>
                <img className='onlineIcon' src={onlineIcon} alt='online' />
                <h3>{room}</h3>
            </div>
            <div className='rightInnerContainer'>
                <a href = '/'><img src={closeIcon} alt='close' /> </a>
            </div>           
        </div>
    )
}

export default Infobar
