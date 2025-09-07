import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../styles/landing.module.css";

export default function LandingFaq() {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    const weddingFAQs = [
        {
            question: "How can I find the perfect wedding venue that fits my guest list and budget?",
            answer: "Our platform makes venue selection effortless by allowing you to filter by location, capacity, amenities, and price range. Whether you're hosting an intimate gathering or a grand celebration, we help you discover verified venues with transparent pricing and availability. Plus, our expert recommendations save you time by suggesting venues that perfectly match your preferences."
        },
        {
            question: "Do you offer end-to-end wedding planning services?",
            answer: "Yes, we offer comprehensive wedding planning services covering everything from venue booking, décor, catering, and entertainment to photography and guest management. Our expert planners ensure smooth coordination, leaving you free to enjoy every moment of your big day."
        },
        {
            question: "Can I customize the wedding décor as per my theme or preference?",
            answer: "Absolutely! Our décor specialists work with you to bring your vision to life. Whether it's a floral extravaganza, royal palace setup, or a contemporary chic theme, we provide tailored décor solutions. You can also explore ready-made décor packages for quick and affordable options."
        },
        {
            question: "What types of catering options are available?",
            answer: "We offer a variety of catering services with customizable menus, including multi-cuisine spreads, live counters, and personalized gourmet experiences. From traditional Indian feasts to global cuisines, our caterers ensure every bite is memorable."
        },
        {
            question: "Do you provide wedding photography and videography services?",
            answer: "Yes, we partner with top-rated photographers and videographers who specialize in candid, traditional, and cinematic styles. Our packages include pre-wedding shoots, wedding albums, drone coverage, and highlight reels to capture every precious moment."
        },
        {
            question: "How far in advance should I book my wedding venue?",
            answer: "We recommend booking your venue at least 6–12 months in advance, especially during peak wedding seasons. Early booking ensures better availability, discounted rates, and ample time for customization. Our platform lets you check real-time availability and secure your preferred venue instantly."
        },
        {
            question: "Do you offer destination wedding planning services?",
            answer: "Yes, we specialize in organizing destination weddings in popular locations across India and abroad. From beachside ceremonies to palace weddings, we handle travel arrangements, logistics, vendor coordination, and guest experiences, making your dream wedding a reality."
        },
        {
            question: "Can you help with guest management and accommodation?",
            answer: "Absolutely! We assist with guest list management, hotel bookings, and travel coordination. Our team ensures seamless check-ins, room allotments, and on-ground support, allowing your guests to enjoy the celebration comfortably."
        },
        {
            question: "Do you offer wedding packages with bundled services?",
            answer: "Yes, we offer pre-designed wedding packages that include venue, décor, catering, and entertainment services at discounted rates. Our bundled deals help you save costs while ensuring a hassle-free experience with a single-point coordination team."
        },
        {
            question: "Do you provide makeup artists and bridal styling services?",
            answer: "Yes! We collaborate with top-rated makeup artists and hairstylists who specialize in bridal and groom styling. Our makeup services include HD, airbrush, and traditional makeup, ensuring you look stunning throughout the celebration."
        },
        {
            question: "Can you help with last-minute wedding planning?",
            answer: "Absolutely! Our team is equipped to handle last-minute arrangements efficiently. With our network of pre-vetted vendors and ready-to-go packages, we can organize venue, décor, catering, and entertainment in record time—without compromising on quality."
        },
        {
            question: "Why Should You Hire a Wedding Planner Instead of Managing It Yourself?",
            answer: "Planning a wedding involves hundreds of details – from booking venues to managing vendors and handling last-minute hiccups. A wedding planner ensures seamless coordination, so you can enjoy your big day stress-free. With expert negotiation skills, we also help you save money by getting the best deals from trusted vendors."
        },
        {
            question: "What Are the Key Services Offered by Wedding Planners?",
            answer: "We offer end-to-end services, including:\n- Venue selection and booking\n- Vendor management (caterers, photographers, decorators)\n- Budget planning and expense tracking\n- Guest management and logistics\n- On-day coordination and execution"
        },
        {
            question: "How do I choose the right wedding package for my needs?",
            answer: "Choosing the right package depends on your guest count, preferences, and budget. Our platform offers clearly defined packages—ranging from basic coordination to full-service planning. You can filter by price, services included, and add-ons. Need help? Our consultants are just a call away to guide you through the selection process."
        }
    ];

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', md: 'center' },
                        width: '100%',
                        gap: 1
                    }}
                    className={styles.discoverContainer}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '32px', lg: '48px' },
                            color: '#000000',
                            textAlign: 'left',
                            lineHeight: 1.2,
                            width: { xs: '100%', md: '65%' },
                            fontWeight: { xs: 400, md: 600 }
                        }}
                        className={styles.landingHeadings}
                    >
                        Everything you need to know <br /> before saying 'I Do'
                    </Typography>
                    <Box
                        sx={{
                            fontSize: '20px',
                            color: '#000',
                            textAlign: { xs: 'justify', md: 'left' },
                            flex: 1,
                            display: 'flex',
                            justifyContent: { xs: 'flex-start', md: 'flex-end' },
                            alignItems: { xs: 'flex-start', md: 'center', lg: 'flex-end' }
                        }}
                        className={styles.landingSubHeadings}
                    >
                        Helping you, <br /> plan with confidence.
                    </Box>
                </Box>
            </Box>
            {weddingFAQs?.slice(0, 5).map(({ question, answer }, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    elevation={0}
                    sx={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        margin: '0',
                        padding: '0',
                        '&.MuiPaper-root': {
                            paddingBottom: '0px',
                        },
                        '&:before': {
                            backgroundColor: 'transparent',
                            display: 'none',
                        },
                        '&.Mui-expanded': {
                            margin: 0,
                        }
                    }}
                >
                    <AccordionSummary
                        sx={{
                            padding: '0',
                            borderBottom: 'none',
                            '&.Mui-expanded': {
                                padding: '0',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '24px',
                                fontWeight: '500',
                                color: '#000',
                                flexGrow: 1,
                                width: { xs: '70%', md: '100%' }
                            }}
                        >
                            {question}
                        </Typography>
                        <Box
                            sx={{
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                background: '#f2f4f7',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.4)',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: 'rgba(255, 255, 255, 0.4)',
                                },
                            }}
                        >
                            <ExpandMoreIcon
                                sx={{
                                    transform: expanded === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            padding: '0 0 10px',
                            borderBottom: 'none',
                        }}
                    >
                        <Typography
                            sx={{
                                paddingLeft: '2px',
                                fontSize: '18px',
                                lineHeight: 1.2,
                                width: '95%',
                                fontWeight: 400
                            }}
                        >
                            {answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}
