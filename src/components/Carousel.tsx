import React, { useState, useCallback, Children} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';

interface CarouselProps {
    sx?: React.CSSProperties;
}

const Carousel = (props: React.PropsWithChildren<CarouselProps>) => {
    const [ currentPage, setCurrentPage ] = useState<number>(0);
    const [ slideDirection, setSlideDirection ] = useState<'left' | 'right'>('left');

    const handleNextPage = useCallback(() => {
        setSlideDirection('left');
        setCurrentPage((prev) => (prev + 1) < Children.count(props.children) ? prev + 1 : prev);
    }, []);

    const handlePreviousPage = useCallback(() => {
        setSlideDirection('right');
        setCurrentPage((prev) => (prev - 1) > 0 ? prev - 1 : 0);
    }, []);

    return (
        <Stack 
            direction="row" 
            spacing={2} 
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
                sx={{
                    overflow: 'hidden',
                }}
            >
                { 
                    Children.map<React.ReactNode, any>(props?.children, (child, index) =>
                        <Slide direction={slideDirection} in={currentPage === index} mountOnEnter unmountOnExit>
                            <Box 
                                sx={{ 
                                    display: currentPage === index ? "flex" : "none" 
                                }}
                            >
                                {child}
                            </Box>
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