import React from 'react';
import { Box } from '@mui/material';
import { Trans } from 'gatsby-plugin-react-i18next';
import { StaticImage } from "gatsby-plugin-image";
import { Grid, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import skyImage from "../images/sky.png";

interface CarouselFounderProps {
    maxHeight: string;
    sx?: React.CSSProperties;
}

const CarouselFounder = (props: React.PropsWithChildren<CarouselFounderProps>) => {
    return (
        <Grid
            container 
            spacing={5}
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
                    <Trans>{'BANNER_TEAM_MEMBER'}</Trans>
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
            </Grid>
            <Grid item xs={3}>
                <StaticImage src="../images/aquina.png" alt="Aquins" />
            </Grid>
        </Grid>
    );
}

export default CarouselFounder;