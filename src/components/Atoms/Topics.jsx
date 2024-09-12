import React from 'react';
import { styled, Grid } from '@mui/material';

const StyledTopicsTypography = styled(Grid)(({ theme }) => ({
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(0.95),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.secondary.main,
    display: 'inline-block',
    fontSize: '13.5px',
    fontWeight: 600,
    margin: '5px',
    cursor: 'pointer',
}));

const TopicsTypography = ({ children }) => {
    return (
        <StyledTopicsTypography item>
            {children}
        </StyledTopicsTypography>
    );
};

export default TopicsTypography;
