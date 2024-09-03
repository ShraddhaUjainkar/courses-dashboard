import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const CourseDetailsModal = ({ open, handleClose, courseName, courseMode, courseType, courseDuration, courseTopics }) => {
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
                    Topics: {courseTopics.join(', ')}
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
