import FooterTop from '@/components/FooterTop'
import InnerPageHeader from '@/components/InnerPageHeader'
import Link from 'next/link'
import React from 'react'
import Footer1 from '@/components/Footer'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'

const distributionBrands = [
    {
        slug: 'ultratech',
        name: 'UltraTech',
        image: '/assets/new-images/products/cement-parterns/download (1).png',
        description: 'India\'s largest cement company with 102.75 MTPA capacity, delivering world-class building materials across the nation.',
    },
    {
        slug: 'jk-cement',
        name: 'JK Cement',
        image: '/assets/new-images/products/cement-parterns/ACC.jfif',
        description: 'A leading multi-product cement manufacturer committed to quality, innovation, and sustainable construction solutions.',
    },
    {
        slug: 'tata-steel',
        name: 'Tata Steel',
        image: '/assets/new-images/products/cement-parterns/Bharathi.png',
        description: 'One of the world\'s most geographically diversified steel producers, delivering high-strength structural materials.',
    },
    {
        slug: 'jsw-steel',
        name: 'JSW Steel',
        image: '/assets/new-images/products/cement-parterns/Jws-logo.png',
        description: 'India\'s leading integrated steel manufacturer with world-class technology and energy-saving processes.',
    },
    {
        slug: 'asian-paints',
        name: 'Asian Paints',
        image: '/assets/new-images/products/cement-parterns/AMBUJA-CEMENT-1.jfif',
        description: 'Asia\'s leading paints company offering a wide range of decorative and industrial coatings for every need.',
    },
]

const DistributionPage = () => {
    return (
        <>
            <InnerPageHeader />
            <Breadcrumb
                title="Distribution"
                subtitle="Our Trusted Brand Partners Across Kerala"
                image='/assets/new-images/bm/bm-2.jpeg'
            />

            <div className="product-page pt-120 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row mb-60">
                        <div className="col-lg-8">
                            <div className="section-title">
                                <span>Our Distribution Network</span>
                                <h2>Brands We Proudly Distribute</h2>
                            </div>
                            <p className="mt-3" style={{ color: '#555', lineHeight: '1.8' }}>
                                Kavalakat has built strong distribution partnerships with some of India's most trusted construction material brands. We ensure timely supply, quality assurance, and consistent availability across Kerala and beyond.
                            </p>
                        </div>
                    </div>

                    <div className="product-card-wrap mb-70">
                        <div className="row g-0">
                            {distributionBrands.map((brand, index) => (
                                <div
                                    key={brand.slug}
                                    className="col-lg-4 col-md-6 wow animate fadeInDown"
                                    data-wow-delay={`${200 + index * 200}ms`}
                                    data-wow-duration="1500ms"
                                >
                                    <div className="product-card">
                                        <div className="product-img">
                                            <Image
                                                width={340}
                                                height={270}
                                                src={brand.image}
                                                alt={brand.name}
                                                style={{ objectFit: 'contain', background: '#f5f5f5', padding: '20px' }}
                                            />
                                            <Link href={`/distribution/${brand.slug}`} className="arrow">
                                                <svg width={18} height={19} viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.0891088 0.0541992H18V3.40711L3.38614 18.054L0 14.7011L9.98019 4.81886L0.0891088 4.90709V0.0541992Z" />
                                                    <path d="M18.0004 18.0543V6.76025L13.1885 11.5249V18.0543H18.0004Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="product-content">
                                            <h4><Link href={`/distribution/${brand.slug}`}>{brand.name}</Link></h4>
                                            <p>{brand.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <FooterTop />
            <Footer1 />
        </>
    )
}

export default DistributionPage