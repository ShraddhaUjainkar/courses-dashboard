import { Box, Button, Grid, Typography, styled } from '@mui/material';
import React from 'react';
import CourseDetailsModal from './CourseDetailsModal';

const DescTypography = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.95),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.primary.contrastText,
    display: 'inline-block',
    fontSize: '13.5px',
    fontWeight: 600
}));

const TopicsTypography = styled(Grid)(({ theme }) => ({
    backgroundColor: 'grey',
    padding: theme.spacing(0.95),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.secondary.contrastText,
    display: 'inline-block',
    fontSize: '13.5px',
    fontWeight: 600,
    margin: '5px'
}));

const Index = (props) => {
    const { courseName, courseTopics, courseDuration, courseType, courseMode } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={{ 
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
            borderRadius: '5px', 
            p: 2, 
            m: 2,
            bgcolor: 'background.paper' ,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
            '&:hover': { 
                transform: 'translateY(-2px)', 
                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',

                borderLeft: theme => `6px solid ${theme.palette.secondary.main}`  
        }}}>      
            <Grid container alignItems='center' px={2}>
                <Grid item xs>
                    <Typography variant='h5' mb={1}>{courseName}</Typography>
                    <DescTypography variant='subtitle1' mx={1}>
                        {courseMode} 
                    </DescTypography>
                    <DescTypography variant='subtitle1'>
                        {courseType}
                    </DescTypography>
                </Grid>
                <Grid item container xs>
                {courseTopics.slice(0, 2).map(topic => (
                <TopicsTypography key={topic} item>
                    {topic}
                </TopicsTypography>
                ))}

                </Grid>
                <Grid item container direction="column" alignItems='flex-end' xs>
                    <Grid item xs>
                        <Typography variant='caption'>{courseDuration}</Typography>
                        <Box my={2}>
                            <Button variant='outlined' onClick={handleClickOpen}>
                            View Details
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <CourseDetailsModal 
                open={open} 
                handleClose={handleClose} 
                courseName={courseName} 
                courseMode={courseMode} 
                courseType={courseType} 
                courseDuration={courseDuration} 
                courseTopics={courseTopics} 
            />
        </Box>
    );
}

export default Index;
