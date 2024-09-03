import React from 'react';
import { MenuItem, Select, Box, Button, Grid, styled } from '@mui/material';

const Wrapper = styled(Grid)(({ theme }) => ({
    backgroundColor: "#efeec", 
    display: "flex",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
    padding: "8px",
    "& > *": {
        flex:1,
        height:"45px",
        margin: "8px",
    },
}));

const Index = () => {
    return (
        <Box py={3}>
            <Wrapper container alignItems="center">
                <Select variant='filled' defaultValue='Online' sx={{ mr: 5 }} disableUnderline>
                    <MenuItem value="Online">Online Course</MenuItem>
                    <MenuItem value="Offline">Offline Course</MenuItem>
                </Select>
                <Select variant='filled' defaultValue='Paid' sx={{ mr: 5 }} disableUnderline>
                    <MenuItem value="Paid">Paid Course</MenuItem>
                    <MenuItem value="Free">Free Course</MenuItem>
                </Select>
                <Button variant='contained' color='primary' disableElevation
                sx={{
                    "&:hover": {
                    backgroundColor: "secondary.light",
                    color: "white",
                    border: '1px solid secondary.contrastText',
                    }
                }}
                >
                    Search
                </Button>
            </Wrapper>
        </Box>
    );
}

export default Index;
