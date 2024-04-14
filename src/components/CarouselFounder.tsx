import React from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image";
import { Grid, Typography, IconButton, Divider } from '@mui/material';
import skyImage from '../images/sky.png';
import { LinkedIn, Facebook } from '@mui/icons-material';

interface CarouselFounderProps {
    maxHeight: string;
    sx?: React.CSSProperties;
}

const CarouselFounder = (props: React.PropsWithChildren<CarouselFounderProps>) => {
    return (
        <Grid
            container 
            spacing={5}
            margin={1}
            direction="row"
            sx={{
                maxHeight: props.maxHeight,
                overflowY: 'scroll',
                backgroundImage: `linear-gradient(rgba(124,190,209, 0.7), rgba(124,190,209, 0.7)),url(${skyImage})`,
                backgroundSize: 'cover',
            }}
        >
            <Grid item xs={12}>
                <Typography variant="h3">
                    <Trans>{'BANNER_TEAM_MEMBER_FOUNDER'}</Trans>
                </Typography>
            </Grid>
            <Grid item xs={9}>
                <Typography padding={2}>
                    <Trans>{'BANNER_TEAM_MEMBER_CONTENT_1'}</Trans>
                </Typography>
                <Typography padding={2}>
                    <Trans>{'BANNER_TEAM_MEMBER_CONTENT_2'}</Trans>
                </Typography>
                <Typography padding={2}>
                    <Trans>{'BANNER_TEAM_MEMBER_CONTENT_3'}</Trans>
                </Typography>
                <Typography padding={2}>
                    <IconButton href="https://www.linkedin.com/in/aquina-wong-518ba021" target="_blank">
                        <LinkedIn />
                    </IconButton>
                    <IconButton href="https://www.facebook.com/profile.php?id=100070595961625" target="_blank">
                        <Facebook />
                    </IconButton>
                </Typography>
            </Grid>
            <Grid item xs={3}>
                <StaticImage src="../images/aquina.png" alt="Aquina" />
            </Grid>
            <Grid item xs={12}>
               <Typography variant="h4">
                    <Trans>{'BANNER_TEAM_MEMBER_TEAMMEMBERS'}</Trans>
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <StaticImage src="../images/discuss.png" alt="Discuss" />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography sx={{fontStyle: 'italic'}} variant="h6" padding={2}>
                            <Trans>{'BANNER_TEAM_MEMBER_TEAMMEMBERS_1'}</Trans>
                        </Typography>
                        <Typography padding={2}>
                            <Trans>{'BANNER_TEAM_MEMBER_TEAMMEMBERS_2'}</Trans>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={3}>
                        <StaticImage src="../images/sextherapy.png" alt="SexTherapy" />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography sx={{fontStyle: 'italic'}} variant="h6" padding={2}>
                            <Trans>{'BANNER_TEAM_MEMBER_TEAMMEMBERS_3'}</Trans>
                        </Typography>
                        <Typography padding={2}>
                            <Trans>{'BANNER_TEAM_MEMBER_TEAMMEMBERS_4'}</Trans>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={3}>
                        <StaticImage src="../images/playtherapy.png" alt="SexTherapy" />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography sx={{fontStyle: 'italic'}} variant="h6" padding={2}>
                            <Trans>{'BANNER_TEAM_MEMBER_TEAMMEMBERS_5'}</Trans>
                        </Typography>
                        <Typography padding={2}>
                            <Trans>{'BANNER_TEAM_MEMBER_TEAMMEMBERS_6'}</Trans>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CarouselFounder;