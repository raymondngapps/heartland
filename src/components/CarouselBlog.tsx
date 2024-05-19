import React from 'react';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Grid, Card, Typography, CardMedia, Box, CardContent, IconButton } from '@mui/material';
import ScrollBlogDialog from './ScrollBlogDialog';
import sunset from '../images/sunset.png';  
import godess from '../images/godess.png';  
import godess1 from '../images/godess1.png';  

interface CarouselBlogProps {
    maxHeight: string;
    sx?: React.CSSProperties;
}

const CarouselBlog = (props: React.PropsWithChildren<CarouselBlogProps>) => {
    const {t} = useTranslation();
    const [click, setClick] = React.useState(0);

    return (
        <Grid
            container 
            spacing={5}
            margin={1}
            direction="row"
            sx={{
                maxHeight: props.maxHeight,
                overflowY: 'scroll',
            }}
        >
            <Grid item xs={12}>
                <Card sx={{ display: 'flex', border: 1, borderColor: 'grey.500' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 400 }}
                        image={sunset}
                        alt="Sunset"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <ScrollBlogDialog 
                            status={click === 1} 
                            setStatus={setClick} 
                            image={sunset}
                            title={t("BLOG_1_TITLE")}
                            content={[
                                "BLOG_1_CONTENT_1", "BLOG_1_CONTENT_2", "BLOG_1_CONTENT_3", "BLOG_1_CONTENT_4",
                                "BLOG_1_CONTENT_5", "BLOG_1_CONTENT_6", "BLOG_1_CONTENT_7", "BLOG_1_CONTENT_8", 
                                "BLOG_1_CONTENT_9", "BLOG_1_CONTENT_10", "BLOG_1_CONTENT_11", "BLOG_1_CONTENT_12", 
                                "BLOG_1_CONTENT_13", "BLOG_1_CONTENT_14"
                            ]}
                        />
                        <CardContent sx={{ flex: '1 0 auto', margin: 1}} onClick={() => setClick(1)}>
                            <Typography component="div" variant="h5">
                                <Trans>BLOG_1_TITLE</Trans>
                            </Typography>
                            <Typography color="text.secondary">
                                <Trans>BLOG_1_CONTENT_1</Trans> ...
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card sx={{ display: 'flex', border: 1, borderColor: 'grey.500' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 200 }}
                        image={godess1}
                        alt="Sunset"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <ScrollBlogDialog 
                                status={click === 2} 
                                setStatus={setClick} 
                                image={godess}
                                title={t("BLOG_2_TITLE")}
                                content={[
                                    "BLOG_2_CONTENT_1","BLOG_2_CONTENT_2", "BLOG_2_CONTENT_3","BLOG_2_CONTENT_4",
                                    "BLOG_2_CONTENT_5","BLOG_2_CONTENT_6", "BLOG_2_CONTENT_7"
                                ]}
                            />                        
                        <CardContent sx={{ flex: '1 0 auto', margin: 1}} onClick={() => setClick(2)}>
                            <Typography component="div" variant="h5">
                                <Trans>BLOG_2_TITLE</Trans>
                            </Typography>
                            <Typography color="text.secondary">
                                <Trans>BLOG_2_CONTENT_1</Trans> ...
                            </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        </Box>
                    </Box>
                </Card>                
            </Grid>
            <Grid item xs={12}>
                <Card sx={{ display: 'flex', border: 1, borderColor: 'grey.500' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 400 }}
                        image={sunset}
                        alt="Sunset"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', margin: 1}} onClick={() => setClick(3)}>
                            <Typography component="div" variant="h5">
                                <Trans>BLOG_1_TITLE</Trans>
                            </Typography>
                            <Typography color="text.secondary">
                                <Trans>BLOG_1_CONTENT_1</Trans> ...
                            </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        </Box>
                    </Box>
                </Card>                
            </Grid>
            <Grid item xs={12}>
                <Card sx={{ display: 'flex', border: 1, borderColor: 'grey.500' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 400 }}
                        image={sunset}
                        alt="Sunset"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', margin: 1}} onClick={() => setClick(4)}>
                            <Typography component="div" variant="h5">
                                <Trans>BLOG_1_TITLE</Trans>
                            </Typography>
                            <Typography color="text.secondary">
                                <Trans>BLOG_1_CONTENT_1</Trans> ...
                            </Typography>

                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        </Box>
                    </Box>
                </Card>                
            </Grid>
            <Grid item xs={12}>
                <Card sx={{ display: 'flex', border: 1, borderColor: 'grey.500' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 400 }}
                        image={sunset}
                        alt="Sunset"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', margin: 1}} onClick={() => setClick(5)}>
                            <Typography component="div" variant="h5">
                                <Trans>BLOG_1_TITLE</Trans>
                            </Typography>
                            <Typography color="text.secondary">
                                <Trans>BLOG_1_CONTENT_1</Trans> ...
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        </Box>
                    </Box>
                </Card>                
            </Grid>
        </Grid>
    );

}

export default CarouselBlog;