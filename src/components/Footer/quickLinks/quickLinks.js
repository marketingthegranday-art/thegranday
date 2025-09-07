"use client"

import styles from './quickLinks.module.css';

const QuickLinks = ({ footerStyles }) => {

    const cities = [
        "Chennai",
        "Bangalore",
        "Hyderabad",
        "Delhi",
        "Mumbai",
        "Coimbatore"
    ]

    const handleOnCityClick = (city) => {
        window.open(`/wedding-venues/${city?.toLowerCase()}`, "_blank")
    }

    return (
        <>
            <div className={footerStyles?.footerLinks}>
                <div className={footerStyles?.hdr}>Quick Links</div>
                {
                    cities?.map((city, idx) => {
                        return (
                            <div key={idx} className={styles.quickLinksCity} onClick={() => handleOnCityClick(city)}>
                                {city}
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default QuickLinks;