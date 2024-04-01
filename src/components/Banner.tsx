import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "../components/Carousel"

const Banner = () => {
    return(
        <Carousel 
            headers={[
                'BANNER_HEARTLAND_SOCIAL_ENTERPRISE',
                'BANNER_SEX_EDUCATION',
                'BANNER_UNDERSTAND_DEATH',
                'BANNER_TRAUMA_INFORMED_PRACTICE',
                'BANNER_SOCIAL_ENTERPRISE'
            ]}
            contents={[
                'BANNER_HEARTLAND_SOCIAL_ENTERPRISE_CONTENT',
                'BANNER_SEX_EDUCATION_CONTENT',
                'BANNER_UNDERSTAND_DEATH_CONTENT',
                'BANNER_TRAUMA_INFORMED_PRACTICE_CONTENT',
                'BANNER_SOCIAL_ENTERPRISE_CONTENT'
            ]}
        >
            <StaticImage src="../images/sunset.png" alt="Sunset" />
            <StaticImage src="../images/cloud_ladder.png" alt="Cloud" />
            <StaticImage src="../images/child_hands.png" alt="Hands" />
            <StaticImage src="../images/sand.png" alt="Sand" />
            <StaticImage src="../images/sand.png" alt="Sand" />
        </Carousel>        
    );
};

export default Banner;