/* eslint-disable @next/next/no-img-element */
import React, { memo } from "react";

import Link from 'next/link';
import QuickLinks from "./quickLinks/quickLinks";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './footer.module.css';
import landingStyles from '../../styles/landing.module.css';

export const Footer = memo(function Footer(props) {

    const handleSocial = (type) => {

        switch (type) {
            case 'linkedin':
                window.open("https://www.linkedin.com/company/granday/", "_blank")
                break;
            case 'instagram':
                window.open("https://www.instagram.com/granday_events/", "_blank")
                break;
            default:
                break;
        }
    }

    return (
        <>
            {/* "@ts-expect-error */}
            <div className={`${styles.footerBg} ${props.className}`}>
                {/* "@ts-expect-error */}
                <div className={props?.wrap ? "listingwidth" : "pagewidth"}>
                    <div className={styles.footer}>

                        <div className={styles.footerHolder}>

                            <div className={styles.footerRight}>
                                <QuickLinks footerStyles={styles} />
                                <div className={styles.footerLinks}>
                                    <div className={styles.hdr}>Home</div>
                                    <div>
                                        <Link href={'/host-your-business'} data-testid="host">
                                            Host your business
                                        </Link>
                                    </div>
                                    {/* <div>
                                        <Link href='/about-us'>
                                            About
                                        </Link>
                                    </div> */}
                                    <div>
                                        <Link href={'/blog'}>
                                            Blog
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'/privacy-policy'}>
                                            Privacy policy
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={'/terms-and-condition'}>
                                            Terms and conditions
                                        </Link>
                                    </div>
                                </div>

                                <div className={styles.footerLocation}>
                                    <div className={styles.hdr}>Location</div>
                                    <div className={styles.footerAddr}>
                                        <div className={`${styles.footerAddrImg} ${styles.locationChennai}`}>
                                            <div ><img alt="" src={`/landing/chennai.svg`} /></div>
                                            <div>INDIA</div>
                                        </div>
                                        <div className={styles.footerAddrTxt}>
                                            <div>The Hive, <br /> VR Mall, </div><div>Anna Nagar, </div>
                                            <div> Chennai - 600040</div>
                                            <div>Tamil Nadu</div>
                                        </div>
                                    </div>
                                    <div className={styles.footerAddr}>
                                        <div className={`${styles.footerAddrImg} ${styles.city}`}>
                                            <div><img alt="" src={`/landing/USA.svg`} /></div>
                                            <div>USA</div>
                                        </div>
                                        <div className={styles.footerAddrTxt}><div>8, The Green Suite R,</div><div>Dover, 19901</div>
                                            <div>Delaware</div></div>
                                    </div>
                                    <div className={`${styles.hdr} ${styles.contactHdr}`}>Reach out</div>
                                    <div className={styles.contactEmail}>zunaith@thegranday.com</div>
                                    <div className={styles.contactMobile}>6374912336</div>
                                </div>
                            </div>

                            <div className={styles.footerLeft}>
                                <Link href={'/'}>
                                    <img alt="Granday" className={landingStyles.navLogoColored} src={`/landing/logo.svg`} />
                                </Link>
                                <div className={styles.footerAbt}>
                                    At Granday, we take pride in delivering seamless, fully integrated wedding planning with unmatched precision and care. From securing the perfect venue to curating thoughtful return gifts, we handle every detail from start to finish. With Granday, you&apos;re not just planning a ordinary wedding—we craft exclusive, unforgettable celebrations, driven by trust, transparency, and timeless elegance.
                                    <br />
                                    <br />
                                    Let&apos;s create a celebration you&apos;ll cherish forever!
                                </div>
                                <div>
                                    <LinkedInIcon style={{ color: 'grey', fontSize: 35, margin: '10px 2px', cursor: 'pointer' }}  onClick={() => handleSocial('linkedin')} />
                                    <InstagramIcon style={{ color: 'grey', fontSize: 35, margin: '10px 10px', cursor: 'pointer' }} onClick={() => handleSocial('instagram')} />
                                </div>
                            </div>

                        </div>

                        <div className={styles.footerCopyrgt}>Copyright @ {new Date().getFullYear()} thegranday.com.</div>
                        <div className={styles.footerCopyrgt}>All rights reserved</div>

                        <div className={styles.footerDisclaimer}>Disclaimer: Venues listed here are subject to availability and booking policies/processes of the respective venue owners.</div>

                    </div>
                </div>
            </div>
        </>
    )

});
