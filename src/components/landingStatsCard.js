import { Box } from "@mui/material";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import styles from '../styles/landing.module.css';

const LandingStatsCard = () => {
    const [cardSwitchIdx, setCardSwitchIdx] = useState(0);

    const [stat, setStats] = useState({
        "enq": "4000+",
        "con": "150+",
        "pip": "50+",
    })

    const calcStat = useCallback(() => {
        try {
            const baseDate = moment("2024-03-01");
            const now = moment();

            // Ensure now is not before the base date
            const quartersPassed = now.isAfter(baseDate)
                ? Math.floor(now.diff(baseDate, 'months') / 3)
                : 0;

            return {
                "enq": `${4000 + (quartersPassed * 100)}+`,
                "con": `${150 + (quartersPassed * 20)}+`,
                "pip": `${50 + (quartersPassed * 5)}+`,
            };
        } catch (error) {
            return {
                "enq": "4400+",
                "con": "230+",
                "pip": "70+",
            };
        }
    }, []);

    useEffect(() => {
        setStats(calcStat());
    }, [calcStat])

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }} className={styles.statSection}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }} className={styles.statBtnsSm}>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            width: '140px',
                            height: '40px',
                            borderRadius: '25px',
                            color: 'black',
                            border: '2px solid #f2f4f7',        
                            fontSize: '.875rem',
                            lineHeight: '24.08px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'background 0.3s ease-in-out',
                            backgroundColor: cardSwitchIdx === 0 ? '#f2f4f7' : 'transparent'
                        }} 
                        className={`${styles.cardSwitchBtn} ${cardSwitchIdx === 0 ? styles.cardSwitchBtnFilled : ''}`} 
                        onClick={() => setCardSwitchIdx(0)}
                    >
                        Happening&apos;25
                    </Box>
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            width: '140px',
                            height: '40px',
                            borderRadius: '25px',
                            color: 'black',
                            border: '2px solid #f2f4f7',        
                            fontSize: '.875rem',
                            lineHeight: '24.08px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'background 0.3s ease-in-out',
                            backgroundColor: cardSwitchIdx === 1 ? '#f2f4f7' : 'transparent'
                        }} 
                        className={`${styles.cardSwitchBtn} ${cardSwitchIdx === 1 ? styles.cardSwitchBtnFilled : ''}`} 
                        onClick={() => setCardSwitchIdx(1)}
                    >
                        Happened&apos;24
                    </Box>
                </Box>
                <div className={styles.landingStatCard}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }} className={styles.statBtnsXl}>
                        <Box 
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                width: { xs: '140px', lg: '170px' },
                                height: { xs: '40px', lg: '46px' },
                                borderRadius: '25px',
                                color: 'black',
                                border: '2px solid #f2f4f7',
                                fontSize: { xs: '.875rem', lg: '16px' },
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'background 0.3s ease-in-out',
                                backgroundColor: cardSwitchIdx === 0 ? '#f2f4f7' : 'transparent'
                            }} 
                            className={`${styles.cardSwitchBtn} ${cardSwitchIdx === 0 ? styles.cardSwitchBtnFilled : ''}`} 
                            onClick={() => setCardSwitchIdx(0)}
                        >
                            Happening&apos;25
                        </Box>
                        <Box 
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                alignItems: 'center',
                                width: { xs: '140px', lg: '170px' },
                                height: { xs: '40px', lg: '46px' },
                                borderRadius: '25px',
                                color: 'black',
                                border: '2px solid #f2f4f7',
                                fontSize: { xs: '.875rem', lg: '16px' },
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'background 0.3s ease-in-out',
                                backgroundColor: cardSwitchIdx === 1 ? '#f2f4f7' : 'transparent'
                            }} 
                            className={`${styles.cardSwitchBtn} ${cardSwitchIdx === 1 ? styles.cardSwitchBtnFilled : ''}`} 
                            onClick={() => setCardSwitchIdx(1)}
                        >
                            Happened&apos;24
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex' }} className={styles.statCardContainer}>
                        <div className={styles.statWrapper}>
                            <span className={styles.statValue}>
                                {cardSwitchIdx === 0 ? stat.enq : '115+'}
                            </span>
                            <span className={styles.statLabel}>
                                {cardSwitchIdx === 0 ? 'Enquiries Received' : 'Executed Weddings'}
                            </span>
                        </div>
                        <div className={`${styles.statWrapper} ${styles.statSplitter}`}>
                            <span className={styles.statValue}>
                                {cardSwitchIdx === 0 ? stat.con : '99%'}
                            </span>
                            <span className={styles.statLabel}>
                                {cardSwitchIdx === 0 ? 'Ongoing Consultations' : 'Happiness Score'}
                            </span>
                        </div>
                        <div className={styles.statWrapper}>
                            <span className={styles.statValue}>
                                {cardSwitchIdx === 0 ? stat.pip : '50+'}
                            </span>
                            <span className={styles.statLabel}>
                                {cardSwitchIdx === 0 ? 'Weddings in Pipeline' : 'Beach Weddings'}
                            </span>
                        </div>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }} className={styles.statBottomXl} style={{ padding: "24px 56px" }}>
                        <div className={styles.statFooterText}>
                            Lehanga, ladoos and more
                        </div>
                        <div className={styles.statFooterSubtext}>
                            Reflecting on the love we celebrated in 2024 and the new stories we&apos;re creating in 2025
                        </div>
                    </Box>
                </div>
                <Box sx={{ display: 'flex', flexDirection: 'column' }} className={styles.statBottomSm}>
                    <div className={styles.statFooterText}>
                        Lehanga, ladoos and more
                    </div>
                    <div className={styles.statFooterSubtext}>
                        Reflecting on the love we celebrated in 2024 and the new stories we&apos;re creating in 2025
                    </div>
                </Box>
            </Box>
        </>
    );
}

export default LandingStatsCard;