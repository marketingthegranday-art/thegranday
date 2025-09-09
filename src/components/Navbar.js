'use client';

import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    IconButton,
    Slide,
} from '@mui/material';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

const Transition = React.forwardRef(function Transition(props, ref) {
    return (
        
        <Slide
            direction="down"
            ref={ref}
            {...props}
            easing={{
                enter: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                exit: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
        />
    );
});

export default function Navbar() {
    const pathname = usePathname();
    const [hasScrolled, setHasScrolled] = useState(false);
    const [scrollbarWidth, setScrollbarWidth] = useState(15);

    // Check if we're on home page for styling
    const isHomePage = pathname === '/';


    // Calculate scrollbar width and add scroll event listener
    useEffect(() => {
        // Calculate scrollbar width
        const calculateScrollbarWidth = () => {
            const outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.overflow = 'scroll';
            
            outer.style.msOverflowStyle = 'scrollbar';
            document.body.appendChild(outer);

            const inner = document.createElement('div');
            outer.appendChild(inner);

            const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
            outer.parentNode.removeChild(outer);

            return scrollbarWidth;
        };

        const handleScroll = () => {
            // Get scroll position from multiple sources to ensure we catch it
            const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

            setHasScrolled(scrollY > 10);
        };

        // Calculate scrollbar width on mount
        const sbWidth = calculateScrollbarWidth();
        setScrollbarWidth(sbWidth);

        if (isHomePage) {
            // Add scroll listeners to multiple elements to ensure we catch scroll events
            const elements = [window, document, document.documentElement, document.body];

            elements.forEach(element => {
                element.addEventListener('scroll', handleScroll, { passive: true });
            });

            // Also try listening for wheel events as a backup
            window.addEventListener('wheel', handleScroll, { passive: true });

            return () => {
                console.log('Removing scroll listeners');
                elements.forEach(element => {
                    element.removeEventListener('scroll', handleScroll);
                });
                window.removeEventListener('wheel', handleScroll);
            };
        }
    }, [isHomePage]);

    



    // Use transparent styling only when on home page AND hasn't scrolled
    const useTransparentStyling = isHomePage && !hasScrolled;

    

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    height: '90px',
                    paddingTop: '14px',
                    bgcolor: useTransparentStyling ? 'transparent' : '#fff',
                    borderBottom: useTransparentStyling ? 'none' : '1px solid #e0e0e0',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    boxShadow: useTransparentStyling ? 'none' : '0px 0px 1px 1px #cecece',
                    left: 0,
                    top: 0,
                    // Adjust width to account for scrollbar when navbar has background
                    width: `calc(100% - ${scrollbarWidth}px)`,
                    transition: 'width 0.3s ease'
                }}
            >
                <Toolbar sx={{
                    px: 0,
                    bgcolor: 'transparent',
                    minHeight: 'unset',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Box sx={{
                        maxWidth: '1280px',
                        width: '100%',
                        mx: 'auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        margin: { xs: "0 1rem", sm: "0", md: "0" },
                        marginTop: { xs: '.8rem', sm: '.4rem', md: '0' },
                    }}>
                        {/* Logo */}
                        <Box sx={{ position: 'relative', width: 120, height: 40 }}>
                            <Image
                                src={`landing/${useTransparentStyling ? 'logo-white' : 'logo'}.svg`}
                                alt="Logo"
                                fill
                                style={{ objectFit: 'contain', cursor: 'pointer' }}
                                priority
                                onClick={() => {
                                    router.push('/');
                                }}
                            />
                        </Box>

                        {/* Desktop Navigation - Center */}
                        <Box sx={{
                            display: { xs: 'none', '@media (min-width: 60rem)': { display: 'flex' } },
                            flex: 1,
                            justifyContent: 'center'
                        }}>
                            
                        </Box>

                        {/* Desktop Right Section */}
                        

                        {/* Mobile Hamburger */}
                        <Box sx={{ display: { xs: 'block', '@media (min-width: 60rem)': { display: 'none' } } }}>
                            <IconButton onClick={() => setOpenMobileDialog(true)}>
                                <MenuIcon sx={{ color: useTransparentStyling ? '#fff' : '#000' }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

        </>
    );
} 