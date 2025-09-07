"use client";

import React, { useState, useEffect } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import styles from '../styles/landingCarousel.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import Flex from '@react-css/flex';
const LandingCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    let properties = [
        {
            id: 1,
            name: "Core",
            price: "1 Lac",
            description: "Select only the services you need, and we'll execute them to perfection.",
            images: [
               "/landing/" + "package 1.jpg",
               "/landing/" + "package 1-1.jpg",
               "/landing/" + "package1-2.jpg",
            ]
        },
        {
            id: 2,
            name: "Complete",
            price: "12 Lac",
            description: "A fully integrated, end-to-end wedding planning service flawlessly planned from start to finish.",
            images: [
                "/landing/" + "Package 2v2.jpg",
                "/landing/" + "Package 2-1v2.jpg",
                "/landing/" + "Package 2-2v2.jpg",
            ]
        },
        {
            id: 3,
            name: "Custom",
            price: "On-request",
            description: "A highly personalized, bespoke wedding experience as unique as your love story.",
            images: [
                 "/landing/" + "Package 3.jpg",
                 "/landing/" + "Package 3-1.jpg",
                 "/landing/" + "Package 3-2.jpg",
            ]
        },
    ];

    properties = [...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties, ...properties]

    return (
        <div className={styles.carouselContainer}>
            <Swiper
                initialSlide={31}
                modules={[Navigation, EffectCoverflow, Autoplay]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={20} // Adds spacing between slides
                slidesPerView="auto"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100, // Controls the 3D depth
                    // modifier: 61, // Adjusts the spread of slides
                    slideShadows: false,
                }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                speed={900} // Adjust for smoother transition
                cssMode={false}
                loop
                loopAdditionalSlides={2}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                }}
                className={styles.swiper}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {properties.map((property, index) => (
                    <SwiperSlide key={`${property.id}-${index}`} className={styles.swiperSlide}>
                        <PropertyCard property={property} isActive={index === activeIndex} />
                    </SwiperSlide>
                ))}
                <div className={`swiper-button-prev ${styles.swiperButtonPrev}`} />
                <div className={`swiper-button-next ${styles.swiperButtonNext}`} />
            </Swiper>
        </div>
    );
};

const PropertyCard = ({ property, isActive }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (isActive) {

            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
                );
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [isActive, property.images.length]);

    return (
        <div className={styles.propertyCard + " " + (isActive ? styles.swiperSlideActive : '')}>
            <div className={styles.imageContainer}>
                {property.images.map((image, index) => (
                    <div
                        key={`${property.id}-image-${index}`}
                        className={`${styles.imageWrapper} ${currentImageIndex === index ? styles.active : ''}`}
                    >
                        <img
                            src={image}
                            alt={`${property.name} - Image ${index + 1}`}
                            className={styles.propertyCardImage}
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.header}>
                    <p className={styles.propertyName}>{property.name}</p>
                    <div className={styles.propertyPrice}>{property.price === "On-request" ? property.price : (
                        <>
                            <p>
                                {property.price}
                            </p>
                            <p className={styles.onwardsText}>
                                onwards
                            </p>
                        </>
                    )}</div>
                </div>

                <Flex justifySpaceBetween alignItemsStart>
                    <p className={styles.propertyDescription}>{property.description}</p>
                </Flex>
            </div>
        </div>
    );
};

export default LandingCarousel;