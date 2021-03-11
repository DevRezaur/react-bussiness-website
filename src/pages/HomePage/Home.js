import React from 'react'
import { aboutObject, mentorshipObject, testimonialObject } from './Data'; 
import { InfoSection } from '../../components'

const Home = () => {
    return (
        <>
            <InfoSection {...aboutObject} />
            <InfoSection {...mentorshipObject} />
            <InfoSection {...testimonialObject} />
        </>
    )
}

export default Home
