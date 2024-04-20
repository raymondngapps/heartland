import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Grid, Typography, IconButton } from '@mui/material';
import { Trans } from 'gatsby-plugin-react-i18next';
import legs from '../images/legs.png';
import seaview from '../images/seaview.png'
import workdesk from '../images/workdesk.png';

import dcc_pdf from '../files/Description Case Conceptualization.pdf' 
import dcc_case from '../files/CaseConceptualizationBlankForm.pdf'
import backToEarthCards from '../files/BackToEarthCards.pdf'
import backToEarthCardsSmaller from '../files/BackToEarthCardsSmaller.pdf'
import backToEarthChinese from '../files/BackToEarchChinese.pdf'

interface CarouselResourcesProps {
    maxHeight: string;
    sx?: React.CSSProperties;
}

const CarouselResources =  (props: React.PropsWithChildren<CarouselResourcesProps>) => {

    return (
        <Grid
            container 
            direction="row"
            sx={{
                maxHeight: props.maxHeight,
                overflowY: 'scroll',
                backgroundColor: 'rgba(246, 236, 210, 1)',
            }}
        >
            <Grid item xs={12} sx={{
                minHeight: '750px',
                backgroundImage: `linear-gradient(rgba(0,0,0, 0.6), rgba(0,190,209, 0.6)),url(${legs})`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid container>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6} sx={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        textAlign: 'center',
                        color: 'white',
                    }}>
                        <Typography variant="h3">
                            <Trans>BANNER_RESOURCES_CBT_1</Trans>
                        </Typography>
                        <Typography variant="h3">&nbsp;</Typography>
                        <Typography>
                            <Trans>BANNER_RESOURCES_CBT_2</Trans>
                        </Typography>
                        <Typography variant="h3">&nbsp;</Typography>
                        <Typography>
                            <IconButton sx={{ color: 'white' }} href={dcc_pdf} target='_blank'>
                                <FileDownloadIcon /><Trans>DOWNLOAD</Trans>
                            </IconButton>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{
                minHeight: '750px',
                backgroundImage: `linear-gradient(rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)),url(${workdesk})`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid container>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={6} sx={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        textAlign: 'center',
                        color: 'white',
                    }}>
                        <Typography variant="h3">
                            <Trans>BANNER_RESOURCES_CBT_3</Trans>
                        </Typography>
                        <Typography variant="h3">&nbsp;</Typography>
                        <Typography>
                            <Trans>BANNER_RESOURCES_CBT_4</Trans>
                        </Typography>
                        <Typography variant="h3">&nbsp;</Typography>
                        <Typography>
                            <IconButton sx={{ color: 'white' }} href={dcc_case} target='_blank'>
                                <FileDownloadIcon /><Trans>DOWNLOAD</Trans>
                            </IconButton>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{
                minHeight: '750px',
                backgroundImage: `linear-gradient(rgba(0,0,0, 0.4), rgba(0,0,0, 0.4)),url(${seaview})`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid container>
                    <Grid item xs={6} sx={{
                        backgroundColor: 'rgba(30,30,30,0.5)',
                        textAlign: 'center',
                        color: 'white',
                    }}>
                        <Typography variant="h3">
                            <Trans>BANNER_RESOURCES_CBT_3</Trans>
                        </Typography>
                        <Typography variant="h3">&nbsp;</Typography>
                        <Typography>
                            <Trans>BANNER_RESOURCES_CBT_4</Trans>
                        </Typography>
                        <Typography variant="h3">&nbsp;</Typography>
                        <Typography>
                            <IconButton sx={{ color: 'white' }} href={backToEarthCards} target='_blank'>
                                <FileDownloadIcon /><Trans>BANNER_RESOURCES_CBT_5</Trans>
                            </IconButton>
                        </Typography>
                        <Typography>
                            <IconButton sx={{ color: 'white' }} href={backToEarthCardsSmaller} target='_blank'>
                                <FileDownloadIcon /><Trans>BANNER_RESOURCES_CBT_6</Trans>
                            </IconButton>
                        </Typography>
                        <Typography>
                            <IconButton sx={{ color: 'white' }} href={backToEarthChinese} target='_blank'>
                                <FileDownloadIcon /><Trans>BANNER_RESOURCES_CBT_7</Trans>
                            </IconButton>
                        </Typography>
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CarouselResources;