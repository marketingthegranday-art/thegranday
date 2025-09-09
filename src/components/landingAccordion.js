import React, { useState } from "react";
import { 
    Accordion, 
    AccordionSummary, 
    AccordionDetails, 
    Typography,
    Box
} from "@mui/material";
import styles from "../styles/landingAccordion.module.css";

export default function LandingAccordion() {
    const [expanded, setExpanded] = useState(0); // Track open panel
    const [visible, setVisible] = useState(!false);

    const handleChange = (panel) => () => {
        setVisible(false); // Hide the image first
        setTimeout(() => {
            setExpanded(panel); // Change the image source after a short delay
            setVisible(true);  // Fade it back in
        }, 100); // Short delay to allow transition
    };

    const imgs = [
         "/landing/" + "Caruosel 1.jpg",
         "/landing/" + "caruosel 2.jpg",
        "/landing/" + "carusoel 3.jpg",
        "/landing/" + "caruosel 4.jpg",
        "/landing/" + "Caruosel 5.jpg"
    ]

    const getContentByLabel = (label) => {
        switch (label) {
            case "Stress-Free Choices":
                return "Providing choices that make sense to you only after learning your requirements.";
            case "Fiscal Discipline":
                return "Respecting your budget, along with making sure we are not penny-wise, pound foolish.";
            case "Punctual Vendors":
                return "Trained professionals who respect your time with prompt handovers.";
            case "Flawless Execution":
                return "Systematic plans, well-rehearsed vendor coordination, and thought-through, well-informed back plans are presented well in advance.";
            case "Transparent Communication":
                return "Keeping you informed at every step with clear updates, so you're always in the loop.";
            default:
                return "Systematic plans, well-rehearsed vendor coordination, and thought-through, well-informed back plans are presented well in advance.";
        }
    }

    return (
        <div className={styles.root}>
            <Box sx={{ 
                display: 'flex',
                margin: '5rem 0',
                gap: '70px',
                flexDirection: { xs: 'column', xl: 'row' }
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    {[
                        "Stress-Free Choices",
                        "Fiscal Discipline",
                        "Punctual Vendors",
                        "Flawless Execution",
                        "Transparent Communication",
                    ].map((label, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === index}
                            onChange={handleChange(index)}
                            className={styles.panel}
                            elevation={0}
                            sx={{
                                backgroundColor: 'transparent',
                                borderBottom: '1px solid #cecece',
                                margin: 0,
                                padding: '0.4rem 0',
                                '&.MuiPaper-root': {
                                    paddingBottom: '0px',
                                },
                                '&:before': {
                                    display: 'none',
                                },
                                '&.Mui-expanded': {
                                    margin: 0,
                                    padding: '0',
                                },
                                '& .MuiAccordionSummary-root': {
                                    padding: '0',
                                    marginTop: '0.4rem',
                                    '&.Mui-expanded': {
                                        padding: '0',
                                    },
                                },
                                '& .MuiAccordionDetails-root': {
                                    padding: { xs: '4px 2px 16px', lg: '4px 2px 16px' },
                                    paddingLeft: { xs: '2px' },
                                    paddingBottom: { xs: '1rem' },
                                }
                            }}
                        >
                            <AccordionSummary>
                                <Typography 
                                    className={styles.heading}
                                    sx={{
                                        fontSize: { xs: '24px', lg: '28px' },
                                        fontWeight: { xs: '500', lg: '400' },
                                    }}
                                >
                                    {label}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '16px', lg: '18px' },
                                        fontWeight: '500',
                                        color: 'rgba(0, 0, 0, 0.56)',
                                        textAlign: 'justify',
                                    }}
                                >
                                    {getContentByLabel(label)}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
                <img
                    src={imgs[expanded]}
                    alt=''
                    className={`${styles.accImg} ${visible ? styles.accImgVisible : ""}`}
                />
            </Box>
        </div>
    );
}
