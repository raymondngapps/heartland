import React, { useState, useCallback, Children} from 'react';
import { Box, Container, Paper } from '@mui/material';
import { IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Trans } from 'gatsby-plugin-react-i18next';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';

interface CarouselProps {
    headers: string[];
    contents: string[];
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
                elevation={0}
                sx={{
                    overflow: 'hidden',
                }}
            >
                { 
                    Children.map<React.ReactNode, any>(props?.children, (child, index) =>
                        <Slide direction={slideDirection} in={currentPage === index} mountOnEnter unmountOnExit>
                            <Container 
                                maxWidth="xl"
                                sx={{ 
                                    display: currentPage === index ? "flex" : "none",
                                }}
                            >
                                <Box>
                                    {child}
                                </Box>
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
                                        <Trans>{props.headers[index]}</Trans> 
                                </Box>
                                <Box 
                                    sx={{
                                        position: 'absolute',
                                        color: 'white',
                                        alignSelf: 'flex-end',
                                        margin: '10px',
                                        paddingLeft: '10px',
                                        paddingRight: '10px',
                                        backgroundColor: 'rgba(0,0,0,.7)',
                                    }}
                                > 
                                        <Trans>{props.contents[index]}</Trans> 
                                </Box>
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