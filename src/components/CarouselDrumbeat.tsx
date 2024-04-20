import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import { Trans } from 'gatsby-plugin-react-i18next';
import InfoIcon from '@mui/icons-material/Info';
import { StaticImage } from "gatsby-plugin-image";

interface CarouselDrumbeatProps {
    maxHeight: string;
    sx?: React.CSSProperties;
}

const CarouselResources =  (props: React.PropsWithChildren<CarouselDrumbeatProps>) => {

    return(
        <Grid
            container 
            direction="row"
            sx={{
                maxHeight: props.maxHeight,
                overflowY: 'scroll',
            }}
        >
            <Grid item xs={12}>
                <Typography variant="h3">
                    <Trans>BANNER_DRUMBEAT_1</Trans>
                </Typography>
                <Typography>
                    <Trans>BANNER_DRUMBEAT_2</Trans>
                    <IconButton href='#' target='_blank'>
                        <InfoIcon />
                    </IconButton>
                </Typography>
                <Typography>
                    <StaticImage src="../images/drumbeat.png" alt="Tdrumbeatree"/>
                </Typography>
                <Typography>
                    <Trans>BANNER_DRUMBEAT_3</Trans>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3">&nbsp;</Typography>
                <Typography>
                    <iframe 
                        width="50%" 
                        height="400" 
                        src="https://www.youtube.com/embed/8JJSZt2HMx4" 
                        title="Holyoake&#39;s Award Winning DRUMBEAT® Program" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3">&nbsp;</Typography>
                <Typography>
                    <iframe 
                        width="50%" 
                        height="400" 
                        src="https://www.youtube.com/embed/0S6dPB5q1Hs" 
                        title="DRUMBEAT® USA: building relationships Polk County, FL" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3">&nbsp;</Typography>
                <Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <Trans>BANNER_DRUMBEAT_4</Trans>
                        </Grid>
                        <Grid item xs={6}>
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/NKiYVpPnXcU" 
                                title="社區輪椅褓母隊 之「鼓動『深』情工作坊」: Holyoake's DRUMBEAT®" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen>
                
                            </iframe>
                        </Grid>
                    </Grid>
                </Typography>
            </Grid>
        </Grid>
    );
}

export default CarouselResources;