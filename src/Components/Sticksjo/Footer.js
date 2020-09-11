import React from 'react'
import DiscGolfBasket from '../../Images/discgolfbasket.png'
import {Link, useParams} from 'react-router-dom'
import CourseData from './CourseData'
import scrollTop from '../ScrollToTop'

function Footer(){

    const { slug } = useParams();
    const course = CourseData[slug];

    const { id } = course;

    return (
        <header className="footer-container">
            {id <= 1 ? (
                <Link to={`/sticksjo/course/18`} style={{textDecoration: 'none'}} onClick={scrollTop}>
                    <div className="footer-image-wrapper">
                        <img className="footer-image" src={DiscGolfBasket} alt="Discgolf basket"></img><span className="prev-course">18</span>
                    </div>
                </Link>
            ) : (
                <Link to={`/sticksjo/course/${id - 1}`} style={{textDecoration: 'none'}} onClick={scrollTop}>
                    <div className="footer-image-wrapper">
                        <img className="footer-image" src={DiscGolfBasket} alt="Discgolf basket"></img><span className="prev-course">{id - 1}</span>
                    </div>
                </Link>
            )}
            {id >= 18 ? (
                <Link to={`/sticksjo/course/1`} style={{textDecoration: 'none'}} onClick={scrollTop}>
                    <div className="footer-image-wrapper">
                        <span className="next-course">1</span><img className="footer-image" src={DiscGolfBasket} alt="Discgolf basket"></img>
                    </div>
                </Link>
            ) : (
                <Link to={`/sticksjo/course/${id + 1}`} style={{textDecoration: 'none'}} onClick={scrollTop}>
                    <div className="footer-image-wrapper">
                        <span className="next-course">{id + 1}</span><img className="footer-image" src={DiscGolfBasket} alt="Discgolf basket"></img>
                    </div>
                </Link>
            )}
        </header>
    )
}

export default Footer