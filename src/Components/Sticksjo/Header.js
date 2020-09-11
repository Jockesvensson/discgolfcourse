import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import DiscGolfBasket from '../../Images/discgolfbasket.png'
import {Link} from 'react-router-dom'
import scrollTop from '../ScrollToTop'

function Header(){

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <header className="header-container">
                <div className="header-home">
                    <Link to="/" onClick={scrollTop}>
                        <FontAwesomeIcon 
                            icon={faHome}
                            style={{color: 'white'}}
                        />
                    </Link>
                </div>
                <div className="header-image-wrapper">
                    <img className="header-image" src={DiscGolfBasket} alt="Discgolf basket" onClick={() => setShowMenu(!showMenu)}></img>
                </div>
            </header>
            { showMenu ? (
            <div className="header-select-wrapper">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="header-select-course">Sticksjö</div>
                </Link>
                <Link to="/fagervik" style={{textDecoration: 'none'}}>
                    <div className="header-select-course">Fagervik</div>
                </Link>
                {/* <Link to="/ncc" style={{textDecoration: 'none'}}>
                    <div className="header-select-course">NCC</div>
                </Link> */}
            </div>
            ) : (
                <div className="course-right-item-hide"></div>
            )}
        </div>
    )
}

export default Header
