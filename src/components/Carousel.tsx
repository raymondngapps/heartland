import React, { useState, useCallback, Children} from 'react';
import { Box, Container, Paper, Grid, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import HighlightIcon from '@mui/icons-material/Highlight';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GroupsIcon from '@mui/icons-material/Groups';
import { Trans } from 'gatsby-plugin-react-i18next';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import { StaticImage } from "gatsby-plugin-image";

interface CarouselProps {
    sx?: React.CSSProperties;
}

const MIN_WIDTH = '1280px';
const MIN_HEIGHT = '720px';

const CarouselItem1 = () => {
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

const CarouselItem2 = () => {
    return (
        <Grid
            container 
            spacing={5}
            direction="row"
            sx={{
                maxHeight: MIN_HEIGHT,
                overflowY: 'scroll',
                backgroundColor: 'rgba(246, 236, 210, 1)',
            }}
        >
            <Grid item xs={12} alignItems="center" justifyContent="center">
                <StaticImage src="../images/assessments.png" alt="Assessments" />  
            </Grid>
            <Grid 
                item 
                xs={12} 
                sx={{
                    backgroundColor: 'rgba(246, 236, 210, 0.5)',
                }}
            >
                <Typography variant="h4">
                    <Trans>{'BANNER_GROUP_THERAPY'}</Trans><Divider/>
                </Typography>
                <Typography variant="body1">
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_1'}</Trans>
                </Typography>
                <Typography variant="body1">
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_2'}</Trans>
                </Typography>
                <Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <ContactPhoneIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText><Trans>{'BANNER_GROUP_THERAPY_CONTENT_3'}</Trans></ListItemText>
                        </ListItem>
                    </List>
                </Typography>
                <Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <GroupsIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText><Trans>{'BANNER_GROUP_THERAPY_CONTENT_4'}</Trans></ListItemText>
                        </ListItem>
                    </List>
                </Typography>
                <Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <AddTaskIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText><Trans>{'BANNER_GROUP_THERAPY_CONTENT_5'}</Trans></ListItemText>
                        </ListItem>
                    </List>
                </Typography>
                <Typography>
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_6'}</Trans> : 50 mins
                </Typography>
                <Typography>
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_7'}</Trans> : $1200 - $1600
                </Typography>
                <Typography>
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_8'}</Trans> : $900 -$1000
                </Typography>
                <Typography>
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_9'}</Trans> : $600-800
                </Typography>
                <Typography>
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_10'}</Trans> : $800 - $1200
                </Typography>
                <Typography>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                            <Avatar>
                                <HighlightIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText><Trans>{'BANNER_GROUP_THERAPY_CONTENT_11'}</Trans></ListItemText>
                        </ListItem>
                    </List>
                </Typography>                
                <Typography 
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_12'}</Trans>
                </Typography>
            </Grid>
            <Grid 
                item 
                xs={12}
                sx={{
                    backgroundColor: 'rgba(253, 211, 104, 0.6)',
                }}
            >
                <Typography variant="h4">
                    <Trans>{'BANNER_PROFESSIONAL_TRANING'}</Trans><Divider/>
                </Typography>
                <Typography variant="h6">
                    <Trans>{'BANNER_PROFESSIONAL_TRANING_CONTENT_1'}</Trans> : 
                </Typography>
                { 
                [
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_2',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_3',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_4',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_5',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_6',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_7',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_8'
                ].map((item, index) => 
                    <Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <ControlPointIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText><Trans>{item}</Trans></ListItemText>
                            </ListItem>
                        </List>
                    </Typography>                
                )}
                <Typography variant="h6">
                    <Trans>{'BANNER_PROFESSIONAL_TRANING_CONTENT_9'}</Trans> : 
                </Typography>
                { 
                [
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_10',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_11',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_12',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_13',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_14',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_15',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_16',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_17',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_18',
                    'BANNER_PROFESSIONAL_TRANING_CONTENT_19',
                ].map((item, index) => 
                    <Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar>
                                    <ControlPointIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText><Trans>{item}</Trans></ListItemText>
                            </ListItem>
                        </List>
                    </Typography>                
                )}
            </Grid>
        </Grid>
    );
};

const Carousel = (props: React.PropsWithChildren<CarouselProps>) => {
    //const { t } = useTranslation();
    const [ currentPage, setCurrentPage ] = useState<number>(0);
    const [ slideDirection, setSlideDirection ] = useState<'left' | 'right'>('left');

    const carouselItems = [<CarouselItem1/>, <CarouselItem2/>];

    const handleNextPage = useCallback(() => {
        setSlideDirection('left');
        setCurrentPage((prev) => (prev + 1) < carouselItems.length ? prev + 1 : prev);
    }, []);

    const handlePreviousPage = useCallback(() => {
        setSlideDirection('right');
        setCurrentPage((prev) => (prev - 1) > 0 ? prev - 1 : 0);
    }, []);

    return (
        <Stack 
            direction="row" 
            spacing={2} 
            marginTop={5}
            sx={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center', 
                alignContent: 'center', 
            }}
        >
            <IconButton 
                onClick={handlePreviousPage}
                disabled={currentPage === 0}
            >
                <NavigateBeforeIcon />
            </IconButton>
            <Paper 
                elevation={0}
                sx={{
                    overflow: 'hidden',
                    minWidth: MIN_WIDTH,
                    minHeight: MIN_HEIGHT,
                }}
            >
                { 
                    carouselItems.map((child, index) =>
                        <Slide direction={slideDirection} in={currentPage === index} mountOnEnter unmountOnExit>
                            <Container 
                                sx={{ 
                                    display: currentPage === index ? "flex" : "none"
                                }}
                            >
                                {child}
                            </Container>
                        </Slide>
                    )
                }
            </Paper>
            <IconButton
                    onClick={handleNextPage}
                    disabled={currentPage === Children.count(props.children) - 1}
            >
                <NavigateNextIcon />
            </IconButton>
        </Stack>
    );
};

export default Carousel;