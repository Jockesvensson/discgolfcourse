import React from 'react'
import Header from '../Components/Sticksjo/Header'
import Place from '../Components/Sticksjo/Place'
import CourseList from '../Components/Sticksjo/CourseList'
import FooterBackToTop from '../Components/Sticksjo/FooterBackToTop'

function Home(){
    return (
        <div>
            <Header />
            <Place />
            <CourseList />
            <FooterBackToTop />
        </div>
    )
}

export default Home