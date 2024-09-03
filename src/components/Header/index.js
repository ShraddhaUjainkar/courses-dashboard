import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const Index = ({ onAddCourseClick }) => {
  const theme = useTheme();

  return (
    <Box py={5} px={10} bgcolor={theme.palette.secondary.main} color="white">
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item xs={10} display="flex" alignItems="center">
          <LocalLibraryIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography variant="h4">
          CourseNet
          </Typography>
        </Grid>
        <Grid item>
        <Button 
          variant='contained' 
          disableElevation
          onClick={onAddCourseClick}
          sx={{
            backgroundColor: "primary", 
            color: "secondary", 
            border: '1px solid #fff',
            "&:hover": {
              backgroundColor: "white",
              color: "primary",
              border: '1px solid secondary.contrastText',
            }
          }}
        >
          Add Course
        </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Index;
