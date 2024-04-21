import React from 'react';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Grid, Card, Typography, CardMedia, Box, CardContent, IconButton } from '@mui/material';
import ScrollBlogDialog from './ScrollBlogDialog';
import sunset from '../images/sunset.png';  

interface CarouselBlogProps {
    maxHeight: string;
    sx?: React.CSSProperties;
}

const CarouselBlog = (props: React.PropsWithChildren<CarouselBlogProps>) => {
    const {t} = useTranslation();
    const [click1, setClick1] = React.useState(false);

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
            <ScrollBlogDialog 
                status={click1} 
                setStatus={setClick1} 
                title={t("BLOG_1_TITLE")}
                content={[
                    "BLOG_1_CONTENT_1",
                    "BLOG_1_CONTENT_2"
                ]}
            />
            <Grid item xs={12}>
                <Card sx={{ display: 'flex', border: 1, borderColor: 'grey.500' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 400 }}
                        image={sunset}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto', margin: 1}} onClick={() => setClick1(true)}>
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