'use client';
import { Box } from '@mui/material';

export default function PageContainer({
    children,
    fullHeight = true,
    className = '',
    sx = {},
    ...props
}) {
    const baseClassName = fullHeight ? 'page-container' : '';

    return (
        <Box
            className={`${baseClassName} ${className}`.trim()}
            sx={{
                ...sx
            }}
            {...props}
        >
            {children}
        </Box>
    );
} 