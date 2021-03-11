import React from 'react'
import { aboutObject, mentorshipObject, testimonialObject } from './Data'; 
import { CourseSection, InfoSection } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection {...aboutObject} />
            <InfoSection {...mentorshipObject} />
            <InfoSection {...testimonialObject} />
            <CourseSection />
        </>
    )
}

export default Home
