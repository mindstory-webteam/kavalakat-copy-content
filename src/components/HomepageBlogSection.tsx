"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const HomepageBlogSection: React.FC = () => {
    const settings: SwiperOptions = useMemo(() => ({
        slidesPerView: "auto",
        speed: 1500,
        spaceBetween: 24,
        autoplay: { delay: 2500, disableOnInteraction: false },
        navigation: { nextEl: ".blog-slider-next", prevEl: ".blog-slider-prev" },
        breakpoints: {
            280: { slidesPerView: 1 },
            386: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
            1400: { slidesPerView: 3 },
        },
    }), []);

    return (
        <>
            <div className="home1-blog-section mb-120">
                <div className="container">
                    <div className="row g-4 align-items-end justify-content-between mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-5">
                            <div className="section-title">
                                <h2>Expert Insights for Builders</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-lg-end">
                            <div className="slider-btn-grp">
                                <div className="slider-btn blog-slider-prev"><i className="bi bi-arrow-left" /></div>
                                <div className="slider-btn blog-slider-next"><i className="bi bi-arrow-right" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...settings} className="swiper home1-blog-slider">
                                <div className="swiper-wrapper">

                                    {/* ✅ NEW SLIDE 1 */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="blog-card">
                                            <div className="blog-img-wrap">
                                                <Link className="blog-img" href="/blog/cement-grade">
                                                    <img width={416} height={320} src="/assets/new-images/blog/cement-grade/b-1.png" alt="" />
                                                </Link>
                                                <div className="blog-meta">
                                                    <ul>
                                                        <li><Link className="blog-date" href="/blog/">10 August, 2025</Link></li>
                                                        <li><Link href="/blog/">Construction</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h5><Link href="/blog/cement-grade">How to Choose the Right Cement Grade for Your Construction Project.</Link></h5>
                                                <Link href="/blog/cement-grade" className="read-btn">
                                                    <span>Read More</span>
                                                    <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z" />
                                                            <path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* ✅ NEW SLIDE 2 */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="blog-card">
                                            <div className="blog-img-wrap">
                                                <Link className="blog-img" href="/blog/white-cement">
                                                    <img width={416} height={320} src="/assets/new-images/blog/white-cement/b-1.png" alt="" />
                                                </Link>
                                                <div className="blog-meta">
                                                    <ul>
                                                        <li><Link className="blog-date" href="/blog/">12 August, 2025</Link></li>
                                                        <li><Link href="/blog/">Renovation</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h5><Link href="/blog/white-cement">Benefits of Using White Cement &amp; Paint in Modern Construction.</Link></h5>
                                                <Link href="/blog/white-cement" className="read-btn">
                                                    <span>Read More</span>
                                                    <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z" />
                                                            <path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* ✅ NEW SLIDE 3 */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="blog-card">
                                            <div className="blog-img-wrap">
                                                <Link className="blog-img" href="/blog/construction-mistakes">
                                                    <img width={416} height={320} src="/assets/new-images/blog/construction-mistakes/b-1.png" alt="" />
                                                </Link>
                                                <div className="blog-meta">
                                                    <ul>
                                                        <li><Link className="blog-date" href="/blog/">10 May, 2025</Link></li>
                                                        <li><Link href="/blog/">Industry</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="blog-content">
                                                <h5><Link href="/blog/construction-mistakes">Common Mistakes to Avoid When Planning a Construction Project.</Link></h5>
                                                <Link href="/blog/construction-mistakes" className="read-btn">
                                                    <span>Read More</span>
                                                    <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z" />
                                                            <path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                   

                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageBlogSection