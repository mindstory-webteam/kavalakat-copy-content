"use client";
import Link from "next/link";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const projects = [
  {
    id: 1,
    image: '/assets/new-images/projects/project-1.jpg',
    name: 'Kochi Metro Rail Ltd',
    tag: 'Phase 1',
    category: 'Infrastructure',
    location: 'Kochi, Kerala',
  },
  {
    id: 2,
    image: '/assets/new-images/projects/project-2.jpg',
    name: 'Kochi Metro Rail Ltd',
    tag: 'Phase 2 — Ongoing',
    category: 'Infrastructure',
    location: 'Kochi, Kerala',
  },
  {
    id: 3,
    image: '/assets/new-images/projects/project-3.jpg',
    name: 'Power Grid Corporation of India',
    tag: 'Thrissur',
    category: 'Industrial',
    location: 'Thrissur, Kerala',
  },
  {
    id: 4,
    image: '/assets/new-images/projects/project-1.jpg',
    name: 'Regional Cancer Centre',
    tag: 'Healthcare',
    category: 'Healthcare',
    location: 'Trivandrum, Kerala',
  },
  {
    id: 5,
    image: '/assets/new-images/projects/project-2.jpg',
    name: 'Steel Industries Kerala Ltd',
    tag: 'Govt of Kerala',
    category: 'Industrial',
    location: 'Kerala',
  },
  {
    id: 6,
    image: '/assets/new-images/projects/project-3.jpg',
    name: 'Pathaharam Bridge',
    tag: 'Champakulam',
    category: 'Infrastructure',
    location: 'Alappuzha, Kerala',
  },
  {
    id: 7,
    image: '/assets/new-images/projects/project-1.jpg',
    name: 'Olympian Suresh Babu Stadium',
    tag: 'Sports',
    category: 'Sports',
    location: 'Kollam, Kerala',
  },
  {
    id: 8,
    image: '/assets/new-images/projects/project-2.jpg',
    name: 'Comtrust Charitable Eye Hospital',
    tag: 'Healthcare',
    category: 'Healthcare',
    location: 'Thalassery, Kannur',
  },
  {
    id: 9,
    image: '/assets/new-images/projects/project-3.jpg',
    name: 'Ahalia Eye Hospital',
    tag: 'Healthcare',
    category: 'Healthcare',
    location: 'Palakkad, Kerala',
  },
  {
    id: 10,
    image: '/assets/new-images/projects/project-1.jpg',
    name: 'Kerala Infrastructure Investment Fund Board',
    tag: 'KIIFB',
    category: 'Infrastructure',
    location: 'Kerala-wide',
  },
  {
    id: 11,
    image: '/assets/new-images/projects/project-2.jpg',
    name: 'Public Works Division',
    tag: 'PWD',
    category: 'Government',
    location: 'Kerala-wide',
  },
];

const HomePageProjectSection: React.FC = () => {
  const settings: SwiperOptions = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 0,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".project-slider-next",
        prevEl: ".project-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);

  return (
    <>
      <div className="home1-project-section">
        <div className="container">
          <div className="row justify-content-center mb-50">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div
                className="section-title white text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <h2>Our Manufacturing Projects</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="project-slider-area mb-50">
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper home1-project-slider">
                <div className="swiper-wrapper">
                  {projects.map((project) => (
                    <SwiperSlide className="swiper-slide" key={project.id}>
                      <div className="project-card-wrap">
                        <div className="project-card">
                          <div className="project-img">
                            <img
                              width={430}
                              height={450}
                              src={project.image}
                              alt={project.name}
                            />
                          </div>
                          <div className="project-content-wrap">
                            <div className="project-content">
                              <span>{project.location}</span>
                              <h3>
                                <Link href="/project">{project.name}</Link>
                              </h3>
                              <ul>
                                <li>
                                  <Link href="/project">{project.category}</Link>
                                </li>
                                <li>
                                  <Link href="/project">{project.tag}</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center bounce_up">
            <Link className="primary-btn1 white-bg" href="/projects">
              <span>View All Projects</span>
              <span>View All Projects</span>
              <svg
                className="arrow"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                  <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageProjectSection;