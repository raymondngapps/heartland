import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "../components/Carousel"

const Banner = () => {
    return(
        <Carousel 
            headers={[
                'BANNER_HEARTLAND_SOCIAL_ENTERPRISE',
                'BANNER_FOUNDER_MOTTO',
                'BANNER_SERVICE',
                'BANNER_SOCIAL_ENTERPRISE'
            ]}
            contents={[
                'BANNER_HEARTLAND_SOCIAL_ENTERPRISE_CONTENT',
                'BANNER_FOUNDER_MOTTO_CONTENT', 
                'BANNER_SERVICE_CONTENT',
                'BANNER_SOCIAL_ENTERPRISE_CONTENT'
            ]}
        >
            <StaticImage src="../images/tree.png" alt="Sunset" />
            <StaticImage src="../images/beach.png" alt="Beach" />
            <StaticImage src="../images/cloud_ladder.png" alt="Services" />
            <StaticImage src="../images/sand.png" alt="Sand" />
        </Carousel>        
    );
};

export default Banner;