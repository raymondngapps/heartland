import React from 'react';
import cloudLadder from '../images/cloud_ladder.png';
import paintbrush from '../images/paintbrush.png';
import shock from '../images/shock.png';
import { StaticImage } from "gatsby-plugin-image";
import { Grid, Typography, IconButton } from '@mui/material';
import { Info, Mail } from '@mui/icons-material';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import ScrollDialog from './ScrollDialog';

interface CarouselTrainingProps {
    maxHeight: string;
    sx?: React.CSSProperties;
}

const CarouselTraining = (props: React.PropsWithChildren<CarouselTrainingProps>) => {
    const [click, setClick] = React.useState(false);
    const [click1, setClick1] = React.useState(false);
    const {t} = useTranslation();

    return (
        <Grid
            container 
            direction="row"
            sx={{
                maxHeight: props.maxHeight,
                overflowY: 'scroll',
            }}
        >
            <Grid item xs={12} sx={{
                minHeight: '750px',
                backgroundImage: `linear-gradient(rgba(124,190,209, 0.6), rgba(124,190,209, 0.6)),url(${cloudLadder})`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{
                            textAlign: 'center',
                            bottom: '0',
                        }}>
                            <Trans>BANNER_TRANING_SEX_EDUCATION</Trans>
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        { 
                        // Empty 
                        }
                    </Grid>
                    <Grid item xs={7}>
                        <Typography  sx={{
                            marginTop: '30px',
                            marginRight: '30px',
                            fontSize: '1.5em',
                            textAlign: 'end',
                            bottom: '0',   
                        }}>
                            <Trans>BANNER_TRANING_SEX_EDUCATION_1</Trans>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{
                minHeight: '750px',
                backgroundImage: `linear-gradient(rgba(124,190,209, 0.2), rgba(124,190,209, 0.6)),url(${paintbrush})`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{
                            textAlign: 'center',
                            color: 'white',
                            bottom: '0',
                        }}>
                            <Trans>BANNER_TRANING_UNDERSTAND_DEATH</Trans>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography  
                            sx={{
                                margin: '100px',
                                color: 'darkblue',
                                fontSize: '1.5em',
                                textAlign: 'justify'
                            }}
                        >
                            <Trans>BANNER_TRANING_UNDERSTAND_DEATH_1</Trans>
                        </Typography>
                        <Typography  
                            sx={{
                                margin: '100px',
                                color: 'darkblue',
                                fontSize: '1.5em',
                                textAlign: 'justify'
                            }}
                        >
                            <ScrollDialog 
                                status={click} 
                                setStatus={setClick} 
                                title={t("DETAILS")}
                                content={
                                    [<StaticImage src="../images/course_death1.png" alt="Death" />
                                    ,<StaticImage src="../images/course_death2.png" alt="Death" />]
                                }
                            />
                            <IconButton onClick={() => setClick(true)}>
                                <Info /><Trans>DETAILS</Trans>
                            </IconButton>
                            <IconButton href="mailto:admin@heartland.com.hk">
                                <Mail /><Trans>EMAIL</Trans>
                            </IconButton>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{
                minHeight: '750px',
                backgroundImage: `linear-gradient(rgba(124,190,209, 0.7), rgba(124,190,209, 0.6)),url(${shock})`,
                backgroundSize: 'cover',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h3" sx={{
                            textAlign: 'center',
                            color: 'white',
                            bottom: '0',
                        }}>
                            <Trans>BANNER_TRANING_TIP</Trans>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography  
                            sx={{
                                margin: '100px',
                                color: 'white',
                                fontSize: '1.5em',
                                textAlign: 'justify'
                            }}
                        >
                            <Trans>BANNER_TRANING_TIP_1</Trans>
                        </Typography>
                        <Typography  
                            sx={{
                                margin: '100px',
                                color: 'darkblue',
                                fontSize: '1.5em',
                                textAlign: 'justify'
                            }}
                        >
                            <ScrollDialog 
                                status={click1} 
                                setStatus={setClick1} 
                                title={t("BANNER_TRANING_TIP")}
                                content={
                                    [
                                        <p><Trans>BANNER_TRANING_TIP_2</Trans></p>,
                                        <br/>,
                                        <p><Trans>BANNER_TRANING_TIP_3</Trans></p>,
                                        <br/>,
                                        <p><Trans>BANNER_TRANING_TIP_4</Trans></p>,
                                        <br/>,
                                        <StaticImage src="../images/course_tip1.png" alt="Tip1" />,
                                        <br/>,
                                        <br/>,
                                        <p><Trans>BANNER_TRANING_TIP_5</Trans></p>,
                                        <StaticImage src="../images/course_tip2.png" alt="Death" />
                                    ]
                                }
                            />
                            <IconButton onClick={() => setClick1(true)}>
                                <Info /><Trans>DETAILS</Trans>
                            </IconButton>
                            <IconButton href="mailto:admin@heartland.com.hk">
                                <Mail /><Trans>EMAIL</Trans>
                            </IconButton>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CarouselTraining;