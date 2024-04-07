import React from 'react';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import HighlightIcon from '@mui/icons-material/Highlight';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GroupsIcon from '@mui/icons-material/Groups';
import { Grid, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image";
import { Trans } from 'gatsby-plugin-react-i18next';

interface CarouselServiceProps {
    maxHeight: string;
    sx?: React.CSSProperties;
}

const CarouselService = (props: React.PropsWithChildren<CarouselServiceProps>) => {
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
            <Grid item xs={12}  padding={5}>
                <StaticImage src="../images/assessments.png" alt="Assessments" />  
            </Grid>
            <Grid 
                item 
                xs={12} 
                sx={{
                    backgroundColor: 'rgba(246, 236, 210, 0.5)',
                }}
            >
                <Typography variant="h4" padding={2}>
                    <Trans>{'BANNER_GROUP_THERAPY'}</Trans><Divider/>
                </Typography>
                <Typography variant="body1" padding={2}>
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_1'}</Trans>
                </Typography>
                <Typography variant="body1" padding={2}>
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
                <Typography padding={2}>
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_6'}</Trans> : 50 mins
                </Typography>
                <Typography padding={2}>
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_7'}</Trans> : $1200 - $1600
                </Typography>
                <Typography padding={2}>
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_8'}</Trans> : $900 -$1000
                </Typography>
                <Typography padding={2}>
                    <Trans>{'BANNER_GROUP_THERAPY_CONTENT_9'}</Trans> : $600-800
                </Typography>
                <Typography padding={2}>
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
                    padding={2}
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
                <Typography variant="h4" padding={2}>
                    <Trans>{'BANNER_PROFESSIONAL_TRANING'}</Trans><Divider/>
                </Typography>
                <Typography variant="h5" padding={2}>
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
                <Typography variant="h5" padding={2}>
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

export default CarouselService;