import React from 'react';
import { Box } from '@mui/material';
import { Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image";

const CarouselHome = () => {
    return (
        <>
        <StaticImage src="../images/tree.png" alt="Tree" />
        <Box 
                sx={{
                    position: 'absolute',
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,.5)',
                    fontSize: '50px',
                    margin: '10px',
                    paddingLeft: '30px',
                    paddingRight: '30px',
                }}
            > 
                    <Trans>{'BANNER_HEARTLAND_SOCIAL_ENTERPRISE'}</Trans> 
            </Box>
            <Box 
                sx={{
                    position: 'absolute',
                    color: 'white',
                    alignSelf: 'flex-end',
                    fontSize: '20px',
                    margin: '10px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    backgroundColor: 'rgba(0,0,0,.7)',
                }}
            > 
                    <Trans>{'BANNER_HEARTLAND_SOCIAL_ENTERPRISE_CONTENT'}</Trans> 
            </Box>
        </>
    );
};

export default CarouselHome;