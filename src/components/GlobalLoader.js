'use client';
import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { keyframes } from '@mui/system';
import Image from 'next/image';

// Keyframe animations for enhanced UX
const pulseAnimation = keyframes`
  0% { opacity: 0.4; transform: scale(0.95); }
  50% { opacity: 1; transform: scale(1.05); }
  100% { opacity: 0.4; transform: scale(0.95); }
`;

const slideUp = keyframes`
  0% { opacity: 0; transform: translateY(0px); }
  100% { opacity: 1; transform: translateY(1px); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const GlobalLoader = ({
    message = "Real Weddings, Real Stories, Real Magic...",
    size = "medium",
    showBrand = true,
    isVisible = true
}) => {
    const getSizeProps = () => {
        switch (size) {
            case "small":
                return { circularSize: 32, fontSize: '14px', spacing: 1.5 };
            case "large":
                return { circularSize: 60, fontSize: '18px', spacing: 3 };
            default:
                return { circularSize: 48, fontSize: '16px', spacing: 2 };
        }
    };

    const { circularSize, fontSize, spacing } = getSizeProps();

    if (!isVisible) return null;

    const LoaderContent = () => (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: spacing,
                animation: `${slideUp} 0.5s ease-out`,
            }}
        >
            {/* Brand Logo Animation */}
            {showBrand && (
                <Box
                    sx={{
                        position: 'relative',
                        mb: 2,
                        width: 120,
                        height: 40,
                    }}
                >
                    <Image
                        src={'/landing/logo.svg'}
                        alt="Logo"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </Box>
            )}

            {/* Enhanced Circular Progress */}
            <Box sx={{ position: 'relative' }}>
                {/* Background circle */}
                <CircularProgress
                    size={circularSize + 8}
                    thickness={2}
                    sx={{
                        color: 'rgba(209, 19, 125, 0.1)',
                        position: 'absolute',
                        top: -4,
                        left: -4,
                    }}
                    variant="determinate"
                    value={100}
                />

                {/* Main progress circle */}
                <CircularProgress
                    size={circularSize}
                    thickness={3}
                    sx={{
                        color: '#d1137d',
                        filter: 'drop-shadow(0 0 8px rgba(209, 19, 125, 0.3))',
                        animation: `${rotate} 1.5s linear infinite`,
                    }}
                />

                {/* Center dot */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 6,
                        height: 6,
                        backgroundColor: '#d1137d',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        animation: `${pulseAnimation} 1s ease-in-out infinite`,
                    }}
                />
            </Box>

            {/* Loading Message */}
            <Typography
                variant="body2"
                sx={{
                    color: '#666',
                    fontSize: fontSize,
                    fontFamily: 'var(--font-gilroy-medium)',
                    textAlign: 'center',
                    position: 'relative',
                    background: 'linear-gradient(90deg, #666 0%, #d1137d 50%, #666 100%)',
                    backgroundSize: '200% 100%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: `${shimmer} 2s ease-in-out infinite`,
                }}
            >
                {message}
            </Typography>

            {/* Progress Dots */}
            <Box
                sx={{
                    display: 'flex',
                    gap: 0.5,
                    mt: 1,
                }}
            >
                {[0, 1, 2].map((index) => (
                    <Box
                        key={index}
                        sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: '#d1137d',
                            animation: `${pulseAnimation} 1s ease-in-out infinite`,
                            animationDelay: `${index * 0.2}s`,
                        }}
                    />
                ))}
            </Box>
        </Box>
    );

    // Always render as fullscreen overlay
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                transition: 'all 0.3s ease-in-out',
                animation: `${slideUp} 0.3s ease-out`,
            }}
        >
            <LoaderContent />
        </Box>
    );
};

export default GlobalLoader; 