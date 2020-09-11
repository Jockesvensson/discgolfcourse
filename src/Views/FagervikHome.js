import React from 'react'
import HeaderFagervik from '../Components/Fagervik/HeaderFagervik'
import PlaceFagervik from '../Components/Fagervik/PlaceFagervik'
import CourseListFagervik from '../Components/Fagervik/CourseListFagervik'
import FooterBackToTopFagervik from '../Components/Fagervik/FooterBackToTopFagervik'

function FagervikHome(){
    return (
        <div>
            <HeaderFagervik />
            <PlaceFagervik />
            <CourseListFagervik />
            <FooterBackToTopFagervik />
        </div>
    )
}

export default FagervikHome
