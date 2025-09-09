"use client";
import { Box } from "@mui/material";
import styles from '../styles/landing.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import useLoader from '../hooks/useLoader';

import LandingCarousel from '../components/landingCarousel';
import LandingAccordion from '../components/landingAccordion';
import LandingVideo from '../components/landingVideo';
import LandingImageGrid from '../components/landingGrid';
import LandingReview from '../components/landingReview';
import LandingBlogs from '../components/landingBlogs';
import LandingFaq from '../components/landingFaq';
import LandingStatsCard from '../components/landingStatsCard';
import { Footer } from '../components/Footer/Footer';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

// Create a reusable scroll animation component
const ScrollAnimationSection = ({ children, variants = fadeInUp, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2, // Trigger when 20% of element is in view
  });

  const { status } = useSession();
  const loader = useLoader();

  useEffect(() => {
      if (status === 'loading') {
          loader.show();
      } else if (loader.isLoading) {
          loader.hide();
      }
  }, [loader,status]);

  useEffect(() => {
      if (inView) {
          controls.start("visible");
      }
  }, [controls, inView]);

  return (
      <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className={className}
      >
          {children}
      </motion.div>
  );
};

export default function HomePage() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <div className={styles.landingPage}>
      
                <motion.div className={styles.heroBg} initial="hidden" animate="visible" variants={fadeIn}>
                    <img src={'/landing/hero_bg.png'} alt='' className={styles.heroBgImg} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        className={`${styles.heroContent} ${styles.absolute}`}
                    >
                        <motion.div className={styles.heroTextContainer} variants={fadeInUp} initial="hidden" animate="visible">
                            <h1 className={styles.heroText}>Be a guest at your own wedding,</h1>
                            <h1 className={styles.heroText}>we&apos;ll take care of the rest.</h1 >
                        </motion.div>
                        <motion.div className={styles.heroSubtextContainer} variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                            <div className={styles.heroSubtext}>Crafting truly special wedding unions, <br /> because ordinary isn&apos;t worth celebrating.</div>
                        </motion.div>
                    </Box>
                </motion.div>

                <div className={`pagewidth ${styles.pagewidthSm}`}>
                    <ScrollAnimationSection className={styles.sectionContainer}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }} className={styles.sectionWrapper}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }} className={`${styles.title} ${styles.landingHeadings}`}>
                                <span>Here&apos;s what you</span>
                                <span>need to know about us!</span>
                            </Box>
                            <p className={`${styles.description} ${styles.landingSubHeadings}`}>
                                At Granday, we don&apos;t settle for mediocrity—every event we execute is crafted with perfection in mind, <br />
                                and we work exclusively with a select few.
                            </p>
                        </Box>
                    </ScrollAnimationSection>

                    <ScrollAnimationSection>
                        <LandingStatsCard />
                    </ScrollAnimationSection>

                    <ScrollAnimationSection>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex' }} className={styles.discoverContainer}>
                                <p className={`${styles.mainText} ${styles.landingHeadings}`}>Experts-Curated packages <br /> personalised to you,</p>
                                <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
                                    <p className={`${styles.subText} ${styles.landingSubHeadings}`}>
                                        The perfect package, <br />
                                        just as you imagined.
                                    </p>
                                </Box>
                            </Box>
                        </Box>
                    </ScrollAnimationSection>

                    <ScrollAnimationSection>
                        <LandingCarousel />
                    </ScrollAnimationSection>

                    <ScrollAnimationSection>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
                                <p className={`${styles.centerTitle} ${styles.landingHeadings}`}>The art of exceptional  <br /> events begins in the details.</p>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        marginTop: '1.3rem'
                                    }}
                                    className={`${styles.subText} ${styles.landingSubHeadings}`}
                                >
                                    The Granday Promise: Effortless Weddings, Thoughtful Details.
                                </Box>
                            </Box>
                        </Box>
                    </ScrollAnimationSection>

                    <ScrollAnimationSection>
                        <LandingAccordion />
                    </ScrollAnimationSection>

                    <ScrollAnimationSection>
                        <LandingVideo />
                    </ScrollAnimationSection>
                </div>

                <ScrollAnimationSection>
                    <LandingImageGrid />
                </ScrollAnimationSection>

                <ScrollAnimationSection>
                    <LandingReview />
                </ScrollAnimationSection>

                <div className={`pagewidth ${styles.pagewidthSm}`}>
                    <ScrollAnimationSection>
                        <LandingBlogs />
                    </ScrollAnimationSection>

                    <ScrollAnimationSection>
                        <LandingFaq />
                    </ScrollAnimationSection>
                </div>

                <div style={{ marginTop: "4rem" }}>
                    <Footer />
                </div>
      </div>
    </Box>
  );
}
