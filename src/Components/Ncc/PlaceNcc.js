import React from 'react'
import DiscGolfBasket from '../../Images/discgolfbasketLarge.png'

function PlaceNcc(){
    return (
        <div className="place-container">
            <div className="place-wrapper">
                <div className="place-text">
                    Ncc discgolfbana
                </div>
                <div className="place-image-wrapper">
                    <img className="image-place" src={DiscGolfBasket} alt="Discgolf basket"></img>
                </div>
            </div>
        </div>
    )
}

export default PlaceNcc