import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import DiscGolfBasket from '../../Images/discgolfbasket.png'
import {Link, useParams} from 'react-router-dom'
import CourseData from './CourseData'
import scrollTop from '../ScrollToTop'

function Header(){

    const { slug } = useParams();
    const course = CourseData[slug];

    const { name } = course;

    return (
        <header className="header-container">
            <div className="header-home">
                <Link to="/" onClick={scrollTop}>
                    <FontAwesomeIcon 
                        icon={faHome}
                        style={{color: 'white'}}
                    />
                </Link>
            </div>
            <div className="header-hole">{name}</div>
            <div className="header-image-wrapper">
                <img className="header-image" src={DiscGolfBasket} alt="Discgolf basket"></img>
            </div>
        </header>
    )
}

export default Header