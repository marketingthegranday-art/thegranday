"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import Marquee from "react-fast-marquee";
import styles from '../styles/landingReview.module.css';

const testimonials = [
    {
        text: "It was a wonderful experience working with Granday Events for my wife's baby shower. Mr. Mohamed managed everything from the start, patiently listening to all our queries, suggestions, and requests for modifications. He was always available and ensured that everything went according to plan. Although there were a few discrepancies in the food department, they were unrelated to Granday Events. I highly recommend their team for all your event needs!",
        name: "Vijay & Shruthi",
        image:  "/landing/" + "review 1.jpg"
    },
    {
        text: "My daughter wedding reception I have contacted this group. they did a excellent,superb deco within my budget.but they did very professional. we all liked it.",
        name: "Haresh & Shreya",
        image:  "/landing/" + "Review 2.jpg"
    },
    {
        text: "I have hired granday for my wedding in chennai. They made sure my day was grand and special. They have made sure they meet all the requirements kept in front of them. They also made sure last minute request can be accommodated the best. Just make sure that whatever you are asking for is well documented.",
        name: "Lokesh & Vandana",
        image:  "/landing/" + "review 3.jpg"
    },
    {
        text: "I had my wedding and haldi preps done by Granday. They are very affordable and listens to customer requirements. They show you all possible options and asks us to choose. I like the approach of multiple filtering at their end and then take it to us. They don't randomly choose vendors. I like the quality of work they do. Overall had a great experience with them Mr. Zunaid who was our SPOC was humble, understanding on our requirements and delivered us exactly what we wanted.",
        name: "Mahadir & Amrin",
        image:  "/landing/" + "review 4.jpg"
    }
];

const LandingReview = () => {
    const [activeImage, setActiveImage] = useState(testimonials[0].image);

    return (
        <>
            <div className={styles.reviewWrapper}>
                <div className={`pagewidth ${styles.pagewidthSm}`}>
                    <div className={styles.reviewContainer}>
                        <div className={styles.reviewContent}>
                            {/* Swiper for testimonials */}
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                autoplay={{ delay: 6000, disableOnInteraction: false }}
                                loop
                                onSlideChange={(swiper) => setActiveImage(testimonials[swiper.realIndex].image)}
                                className={styles.swiperContainer}
                                navigation={{
                                    nextEl: `.${styles.swiperButtonNext}`,
                                    prevEl: `.${styles.swiperButtonPrev}`,
                                    clickable: true,
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index} className={styles.reviewSlider}>
                                        <div className={styles.testimonial}>
                                            <p className={styles.testimonialText}>{testimonial.text}</p>
                                            <div className={styles.ratingWrapper}>
                                                {/* <div className="testimonial-rating">{testimonial.rating}</div> */}
                                                <p className={styles.testimonialName}>{testimonial.name}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className={`${styles.swiperButtonPrev} swiper-button-prev`}></div>
                                <div className={`${styles.swiperButtonNext} swiper-button-next`}></div>
                            </Swiper>
                        </div>
                        {/* Right section with dynamic image */}
                        <div className={styles.reviewImageContainer}>
                            <img src={activeImage} alt="Testimonial" className={styles.reviewImage} />
                        </div>
                    </div>
                    <div className={styles.reviewFooter}>
                        <p className={styles.reviewText}>
                            Partnered with the best in the industry
                        </p>
                        <Marquee className={styles.reviewMarquee}>
                            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((idx, index) => (
                                <img
                                    key={`original-${idx}-${index}`}
                                    src={ `/landing/s${idx}.webp`}
                                    alt="logo"
                                    className={styles.marqueeLogo}
                                />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingReview;