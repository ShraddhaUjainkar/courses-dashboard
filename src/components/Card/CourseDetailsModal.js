import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Grid } from '@mui/material';
import TopicsTypography from '../Atoms/Topics';

const CourseDetailsModal = ({ open, handleClose, courseName, courseMode, courseType, courseDuration, courseTopics, courseDesc }) => {
    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle>{courseName}</DialogTitle>
            <DialogContent>
                <Typography variant="subtitle1" gutterBottom>
                    Mode: {courseMode}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Type: {courseType}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Duration: {courseDuration}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Topics: 
                </Typography>
                <Grid item xs={12}>
                        {courseTopics.map((topic, index) => (
                            <TopicsTypography key={index} item>
                                {topic}                                    
                            </TopicsTypography>
                        ))}
                </Grid>  
                <Typography 
                    variant="body1" 
                >
                    Description: <span style={{ fontStyle: 'italic', lineHeight: 1.6, color:"textSecondary" }}>{courseDesc}</span> 
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CourseDetailsModal;
