import React, { useState } from 'react';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid, FilledInput, Select, MenuItem, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Upload';
import ClearIcon from '@mui/icons-material/Clear';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../../firebase/config'; 
import TopicsTypography from '../Atoms/Topics';
const initialCourseDetails = {
    courseName: "",
    courseDesc: "",
    courseInfo: "",
    courseTopics: [],
    courseDuration: "",
    courseType: "Paid", 
    courseMode: "Online" 
};

const Modal = ({ isOpen, onClose }) => {
    const [coursesDetails, setCoursesDetails] = useState(initialCourseDetails);

    const [newTopic, setNewTopic] = useState("");


    const handleAddTopic = () => {
        if (coursesDetails.courseTopics.length < 5) {
            if (newTopic.trim() && !coursesDetails.courseTopics.includes(newTopic.trim())) {
                setCoursesDetails(prevState => ({
                    ...prevState,
                    courseTopics: [...prevState.courseTopics, newTopic.trim()]
                }));
                setNewTopic("");
            }
        } else {
            alert("You can only add up to 5 topics.");
        }
    };
    
    const handleDeleteTopic = (topicToDelete) => {
        setCoursesDetails(prevState => ({
            ...prevState,
            courseTopics: prevState.courseTopics.filter(topic => topic !== topicToDelete)
        }));
    };
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCoursesDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePostCourse = async () => {
        try {
            const docRef = await addDoc(collection(firestore, 'courses'), {
                ...coursesDetails
            });
            console.log("Document written with ID: ", docRef.id);
            resetForm();
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const resetForm = () => {
        setCoursesDetails(initialCourseDetails);
        setNewTopic("");
        onClose();
    };

    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth>
            <DialogTitle my={2}>Add a New Course</DialogTitle>
            <DialogContent sx={{ overflowX: 'hidden', p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput
                            placeholder='Course Name *'
                            disableUnderline
                            fullWidth
                            name="courseName"
                            value={coursesDetails.courseName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            placeholder='Course Platform *'
                            disableUnderline
                            fullWidth
                            name="coursePlatform"
                            value={coursesDetails.coursePlatform || ""}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            placeholder='Course Link *'
                            disableUnderline
                            fullWidth
                            name="courseLink"
                            value={coursesDetails.courseLink || ""}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            placeholder='Contact information *'
                            disableUnderline
                            fullWidth
                            name="courseInfo"
                            value={coursesDetails.courseInfo}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            variant='filled'
                            value={coursesDetails.courseMode}
                            onChange={handleInputChange}
                            disableUnderline
                            fullWidth
                            name="courseMode"
                        >
                            <MenuItem value="Online">Online Course</MenuItem>
                            <MenuItem value="Offline">Offline Course</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            variant='filled'
                            value={coursesDetails.courseType}
                            onChange={handleInputChange}
                            disableUnderline
                            fullWidth
                            name="courseType"
                        >
                            <MenuItem value="Paid">Paid Course</MenuItem>
                            <MenuItem value="Free">Free Course</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12}>
                        <FilledInput
                            placeholder='Course Description *'
                            disableUnderline
                            fullWidth
                            multiline
                            rows={5}
                            name="courseDesc"
                            value={coursesDetails.courseDesc}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid container spacing={2} alignItems="center" p={2} >
                        <Grid item xs={9}>
                            <FilledInput
                                placeholder='Add a Topic'
                                disableUnderline
                                fullWidth
                                value={newTopic}
                                onChange={(e) => setNewTopic(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                onClick={handleAddTopic}
                                sx={{
                                    backgroundColor: theme => theme.palette.secondary.main,
                                    color: "white",
                                    marginLeft: '10px', 
                                    width: '100%', 
                                    "&:hover": {
                                        backgroundColor: theme => theme.palette.primary.main,
                                        color: theme => theme.palette.primary.contrastText,
                                        border: `2px solid ${theme => theme.palette.primary.contrastText}`,
                                    }
                                }}
                            >
                                Add Topic
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {coursesDetails.courseTopics.map((topic, index) => (
                            <TopicsTypography key={index} item 
                            // "&:hover": {
                            //         backgroundColor: theme.palette.secondary.main,
                            //         color: '#fff',
                            //     }
                                >
                                {topic}                                    
                                <IconButton
                                    onClick={() => handleDeleteTopic(topic)}
                                    sx={{ marginLeft: 0.5, padding: '1px' }} 
                                >
                                    <ClearIcon fontSize="small" color="error" /> 
                                </IconButton>
                            </TopicsTypography>
                        ))}
                    </Grid>                     
                </Grid>
            </DialogContent>
            <DialogActions>
                <Box width="100%" display="flex" justifyContent='space-between' alignItems='center'>
                    <Typography color='red'>* Required Fields</Typography>
                    <Box>
                        <Button
                            onClick={resetForm}
                            startIcon={<CloseIcon />}
                            mx={1}
                            sx={{
                                backgroundColor: theme => theme.palette.secondary.main,
                                color: "white",
                                margin: '5px',
                                "&:hover": {
                                    backgroundColor: theme => theme.palette.primary.main,
                                    color: theme => theme.palette.primary.contrastText,
                                    border: `2px solid ${theme => theme.palette.primary.contrastText}`,
                                }
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handlePostCourse}
                            startIcon={<SaveIcon />}
                            sx={{
                                backgroundColor: theme => theme.palette.secondary.main,
                                color: "white",
                                margin: '5px',
                                "&:hover": {
                                    backgroundColor: theme => theme.palette.primary.main,
                                    color: theme => theme.palette.primary.contrastText,
                                    border: `2px solid ${theme => theme.palette.primary.contrastText}`,
                                }
                            }}
                        >
                            Post Course
                        </Button>
                    </Box>
                </Box>
            </DialogActions>
        </Dialog>
    );
}

export default Modal;
