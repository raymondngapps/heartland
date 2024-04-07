import React, { useState, useCallback, Children} from 'react';
import { Box, Container, Paper, Grid, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import CarouselService from "./CarouselService";
import CarouselHome from './CarouselHome';

interface CarouselProps {
    sx?: React.CSSProperties;
}

const MIN_WIDTH = '1280px';
const MIN_HEIGHT = '720px';

const Carousel = (props: React.PropsWithChildren<CarouselProps>) => {
    //const { t } = useTranslation();
    const [ currentPage, setCurrentPage ] = useState<number>(0);
    const [ slideDirection, setSlideDirection ] = useState<'left' | 'right'>('left');

    const carouselItems = [<CarouselHome/>, <CarouselService maxHeight={MIN_HEIGHT}/>];

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