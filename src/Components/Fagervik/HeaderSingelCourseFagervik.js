import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import DiscGolfBasket from '../../Images/discgolfbasket.png'
import {Link, useParams} from 'react-router-dom'
import CourseDataFagervik from './CourseDataFagervik'
import scrollTop from '../ScrollToTop'

function HeaderSingelCourseFagervik(){

    const { slug } = useParams();
    const course = CourseDataFagervik[slug];

    const { name } = course;

    return (
        <header className="header-container">
            <div className="header-home">
                <Link to="/fagervik" onClick={scrollTop}>
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

export default HeaderSingelCourseFagervik