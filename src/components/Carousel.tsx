import React, { useState, useCallback, Children} from 'react';
import { Box, Container, Paper, Grid, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import CarouselService from "./CarouselService";
import CarouselHome from './CarouselHome';
import CarouselFounder from './CarouselFounder';
import CarouselTraining from './CarouselTraining';
import CarouselResources from './CarouselResources';
import CarouselDrumbeat from './CarouselDrumbeat';
import CarouselBlog from './CarouselBlog';  

interface CarouselProps {
    sx?: React.CSSProperties;
}

const MIN_WIDTH = '1280px';
const MIN_HEIGHT = '720px';

const Carousel = (props: React.PropsWithChildren<CarouselProps>) => {
    //const { t } = useTranslation();
    const [ currentPage, setCurrentPage ] = useState<number>(0);
    const [ slideDirection, setSlideDirection ] = useState<'left' | 'right'>('left');

    const carouselItems = [
        <CarouselHome key="carousel-0" />, 
        <CarouselService key="carousel-1" maxHeight={MIN_HEIGHT}/>, 
        <CarouselFounder  key="carousel-2" maxHeight={MIN_HEIGHT}/>,
        <CarouselTraining  key="carousel-3" maxHeight={MIN_HEIGHT}/>,
        <CarouselResources  key="carousel-4" maxHeight={MIN_HEIGHT}/>,
        <CarouselDrumbeat  key="carousel-5" maxHeight={MIN_HEIGHT}/>,
        <CarouselBlog  key="carousel-6" maxHeight={MIN_HEIGHT}/>,
    ];

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
                        <Slide key={"slider-" + index} direction={slideDirection} in={currentPage === index} mountOnEnter unmountOnExit>
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
                    disabled={currentPage === carouselItems.length - 1}
            >
                <NavigateNextIcon />
            </IconButton>
        </Stack>
    );
};

export default Carousel;