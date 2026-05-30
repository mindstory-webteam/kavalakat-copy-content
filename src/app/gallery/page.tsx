'use client'
import FooterTop from '@/components/FooterTop'
import InnerPageHeader from '@/components/InnerPageHeader'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer1 from '@/components/Footer'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 6;

    const allGalleryImages = [
        {
            id: 1,
            src: "/assets/new-images/gallery/gal1.jpg",
            delay: "200ms"
        },
        {
            id: 2,
            src: "/assets/new-images/gallery/gal10.jpg",
            delay: "400ms"
        },
        {
            id: 3,
            src: "/assets/new-images/gallery/gal111.jpg",
            delay: "600ms"
        },
        {
            id: 4,
            src: "/assets/new-images/gallery/gal12.jpg",
            delay: "800ms"
        },
        {
            id: 5,
            src: "/assets/new-images/gallery/gal13.jpg",
            delay: "800ms"
        },
        {
            id: 6,
            src: "/assets/new-images/gallery/gal14.jpg",
            delay: "600ms"
        },
        {
            id: 7,
            src: "/assets/new-images/gallery/gal15.jpg",
            delay: "400ms"
        },
        {
            id: 8,
            src: "/assets/new-images/gallery/gal16.jpg",
            delay: "200ms"
        },
        {
            id: 9,
            src: "/assets/new-images/gallery/gal17.jpg",
            delay: "200ms"
        },
        {
            id: 10,
            src: "/assets/new-images/gallery/gal18.jpg",
            delay: "200ms"
        },
        {
            id: 11,
            src: "/assets/new-images/gallery/gal2.jpg",
            delay: "400ms"
        },
        {
            id: 12,
            src: "/assets/new-images/gallery/gal3.jpg",
            delay: "600ms"
        },
        {
            id: 13,
            src: "/assets/new-images/gallery/gal4.jpg",
            delay: "800ms"
        },
        {
            id: 14,
            src: "/assets/new-images/gallery/gal5.jpg",
            delay: "800ms"
        },
        {
            id: 15,
            src: "/assets/new-images/gallery/gal6.jpg",
            delay: "600ms"
        },
        {
            id: 16,
            src: "/assets/new-images/gallery/gal7.jpg",
            delay: "400ms"
        },
        {
            id: 17,
            src: "/assets/new-images/gallery/gal8.jpg",
            delay: "200ms"
        },
        {
            id: 18,
            src: "/assets/new-images/gallery/gal9.jpg",
            delay: "200ms"
        }
    ];

    // Calculate total pages
    const totalPages = Math.ceil(allGalleryImages.length / imagesPerPage);

    // Get current images
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = allGalleryImages.slice(indexOfFirstImage, indexOfLastImage);

    // Generate pagination items
    const paginationItems = Array.from({ length: totalPages }, (_, index) => ({
        id: index + 1,
        label: (index + 1).toString().padStart(2, '0'),
        active: currentPage === index + 1
    }));

    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        // Scroll to top of gallery
        document.getElementById('scroll-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    // Handle previous page
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            document.getElementById('scroll-section')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Handle next page
    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            document.getElementById('scroll-section')?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <InnerPageHeader />
            <Breadcrumb title="Gallery" subtitle="Explore Our Collection of Industrial & Manufacturing Excellence." image='/assets/new-images/bm/bm-3.jpeg' />
            <div className="gallery-page pt-120 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row gy-5 mb-70">
                        {currentImages.map((image) => (
                            <div key={image.id} className="col-lg-4 col-md-6 wow animate fadeInDown" data-wow-delay={image.delay} data-wow-duration="1500ms">
                                <div className="gallery-item magnetic-item">
                                    <div className="gallery-img-wrap">
                                        <Link className="gallery-img" href={image.src}>
                                            <Image width={416} height={230} src={image.src} alt={`Gallery image ${image.id}`} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <div className="innerpage-pagination-area">
                                <ul className="paginations">
                                    <li className="page-item paginations-button">
                                        <a href="#" onClick={(e) => { e.preventDefault(); handlePrevious(); }} style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}>
                                            <svg width={14} height={12} viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.98 5.66372C13.9099 5.4729 13.7497 5.26524 13.5995 5.16983C13.4493 5.08003 13.0538 5.07442 8.23285 5.04636L3.02639 5.01829L4.91373 3.22795C6.14025 2.06619 6.83111 1.37026 6.88117 1.2524C7.05138 0.848309 6.89619 0.30391 6.55577 0.101865C6.36053 -0.0216073 5.98506 -0.0328321 5.81986 0.0681905C5.75978 0.107477 4.46318 1.31975 2.93128 2.76774C1.05896 4.54124 0.127801 5.46167 0.0727325 5.57953C-0.0774537 5.94433 0.00765182 6.34281 0.303018 6.6571C0.798632 7.17344 5.8549 11.8598 5.99007 11.9271C6.20534 12.0337 6.39057 12.0225 6.63587 11.8991C7.03136 11.697 7.20157 11.0909 6.9863 10.6812C6.93624 10.5858 6.03012 9.699 4.97381 8.71684C3.92251 7.72907 3.05643 6.90966 3.05643 6.88721C3.05143 6.85915 5.38932 6.84231 8.25287 6.84231L13.4493 6.84231L13.6145 6.71884C13.8648 6.52241 13.975 6.32036 13.995 6.0173C14.005 5.87137 14 5.70862 13.98 5.66372Z" />
                                            </svg>
                                        </a>
                                    </li>
                                    {paginationItems.map((item) => (
                                        <li key={item.id} className={`page-item ${item.active ? 'active' : ''}`}>
                                            <a href="#" onClick={(e) => { e.preventDefault(); handlePageChange(item.id); }}>
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                    <li className="page-item paginations-button">
                                        <a href="#" onClick={(e) => { e.preventDefault(); handleNext(); }} style={{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}>
                                            <svg width={14} height={12} viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.020025 6.33628C0.0901115 6.5271 0.25031 6.73476 0.400496 6.83017C0.550683 6.91997 0.946172 6.92558 5.76715 6.95364L10.9736 6.98171L9.08627 8.77205C7.85974 9.93381 7.16889 10.6297 7.11883 10.7476C6.94862 11.1517 7.10381 11.6961 7.44423 11.8981C7.63947 12.0216 8.01494 12.0328 8.18014 11.9318C8.24022 11.8925 9.53682 10.6803 11.0687 9.23226C12.941 7.45876 13.8722 6.53833 13.9273 6.42047C14.0775 6.05567 13.9923 5.65719 13.697 5.3429C13.2014 4.82656 8.1451 0.140237 8.00993 0.0728886C7.79466 -0.0337464 7.60943 -0.0225217 7.36413 0.100951C6.96864 0.302995 6.79843 0.909129 7.0137 1.31883C7.06376 1.41424 7.96988 2.301 9.02619 3.28316C10.0775 4.27093 10.9436 5.09034 10.9436 5.11279C10.9486 5.14085 8.61068 5.15769 5.74713 5.15769L0.550683 5.15769L0.385478 5.28116C0.135167 5.47759 0.0250308 5.67964 0.00500557 5.98271C-0.00500609 6.12863 -2.49531e-07 6.29139 0.020025 6.33628Z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterTop />
            <Footer1 />
        </>
    )
}

export default Page