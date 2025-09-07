import React from "react";
import { CardMedia, Box } from "@mui/material";
import styles from "../styles/landing.module.css";

const LandingImageGrid = () => {
  const imgBase = "/landing";

  return (
    <>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          padding: '0 1rem',
          marginBottom: '5rem',
          textAlign: 'center'
        }}
      >
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column !important', 
            justifyContent: 'center', 
            alignItems: 'center',
            margin: 0 
          }}
          className={styles.discoverContainer}
        >
          <p className={`${styles.centerTitle} ${styles.landingHeadings}`}>Real Weddings, Real Stories, Real Magic</p>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              textAlign: 'center', 
              marginTop: '1.2rem', 
              fontSize: '20px' 
            }}
            className={`${styles.subText} ${styles.landingSubHeadings}`}
          >
            A collection of love stories brought to life, one wedding at a time.
          </Box>
        </Box>
      </Box>
      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: { xs: '300px 100px 200px 80px', sm: '500px 500px 500px 350px' },
          gap: '10px',
          width: '100%',
          margin: 'auto',
          boxSizing: 'border-box',
          padding: '0 1rem',
        }}
      >
        {/* Row 1 */}
        <CardMedia 
          component="img" 
          image={`${imgBase}/10.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 6', md: 'span 5', lg: 'span 6' },
            gridRow: { xs: 'span 2', md: 'auto' },
          }}
        />
        <CardMedia 
          component="img" 
          image={`${imgBase}/8.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 6', md: 'span 2' },
            gridRow: { xs: 'span 1', md: 'auto' },
          }}
        />
        <CardMedia 
          component="img" 
          image={'/landing/portfolio 3.jpg'}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 4', md: 'span 5', lg: 'span 4' },
            display: { xs: 'none', md: 'block' },
          }}
        />

        {/* Row 2 */}
        <CardMedia 
          component="img" 
          image={`${imgBase}/18.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 6', md: 'span 3' },
            gridRow: { xs: 'span 3', md: 'auto' },
          }}
        />
        <CardMedia 
          component="img" 
          image={`${imgBase}/22.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 6', md: 'span 6' },
            gridRow: { xs: 'span 3', md: 'auto' },
          }}
        />
        <CardMedia 
          component="img" 
          image={`${imgBase}/12.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 3', md: 'span 3' },
            display: { xs: 'none', md: 'block' },
          }}
        />

        {/* Row 3 */}
        <CardMedia 
          component="img" 
          image={`${imgBase}/16.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 6', md: 'span 5', lg: 'span 6' },
          }}
        />
        <CardMedia 
          component="img" 
          image={`${imgBase}/19.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 2', md: 'span 2' },
            display: { xs: 'none', md: 'block' },
          }}
        />
        <CardMedia 
          component="img" 
          image={`${imgBase}/11.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 4', md: 'span 5', lg: 'span 4' },
            display: { xs: 'none', md: 'block' },
          }}
        />

        {/* Row 4 (Masked) */}
        <CardMedia 
          component="img" 
          image={`${imgBase}/15.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 6', md: 'span 3' },
            position: 'relative',
            WebkitMask: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 200%, rgb(0, 0, 0) 200%, rgba(0, 0, 0, 0) 400%)',
          }}
        />
        <CardMedia 
          component="img" 
          image={`${imgBase}/9.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: 'span 6',
            position: 'relative',
            WebkitMask: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 200%, rgb(0, 0, 0) 200%, rgba(0, 0, 0, 0) 400%)',
          }}
        />
        <CardMedia 
          component="img" 
          image={`${imgBase}/3.jpg`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
            gridColumn: { xs: 'span 0', md: 'span 3' },
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            WebkitMask: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 200%, rgb(0, 0, 0) 200%, rgba(0, 0, 0, 0) 400%)',
          }}
        />
      </Box>
    </>
  );
};

export default LandingImageGrid;
