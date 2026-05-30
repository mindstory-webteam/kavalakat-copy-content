"use client"
import FooterTop from '@/components/FooterTop'
import InnerPageHeader from '@/components/InnerPageHeader'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Footer1 from '@/components/Footer'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'
import CompanyCard from '@/components/CompanyCard'
import { useParams } from 'next/navigation'

/* ─────────────── DATA ─────────────── */
const brandData: Record<string, {
    title: string
    subtitle: string
    breadcrumbImage: string
    heroImage: string
    faqImage: string
    heroTitle: string
    heroDescription: string[]
    faqSectionTitle: string
    faqItems: { id: string; title: string; content: string }[]
    companySectionTitle: string
    companies: { logo: string; logoAlt: string; companyName: string; description: string }[]
    testimonials: { quote: string; text: string; author: string; role: string; img: string }[]
}> = {
    ultratech: {
        title: 'UltraTech Distribution',
        subtitle: "India's Largest Cement — Delivered Right to Your Site",
        breadcrumbImage: '/assets/new-images/bm/bm-3.jpeg',
        heroImage: '/assets/new-images/products/p-1.jpeg',
        faqImage: '/assets/new-images/about-page/cement/cement-prodect-page.png',
        heroTitle: 'Kavalakat — Authorized UltraTech Distributor in Kerala',
        heroDescription: [
            "Kavalakat is an authorized distributor of UltraTech Cement in Kerala, ensuring consistent and timely supply of India's largest selling cement brand for residential, commercial, and infrastructure projects across Thrissur, Ernakulam, and surrounding districts.",
            "With a consolidated capacity of over 102 MTPA and a pan-India presence, UltraTech is the preferred choice of engineers, contractors, and builders who demand nothing but the best in strength and durability.",
        ],
        faqSectionTitle: 'UltraTech Products',
        faqItems: [
            { id: 'ut1', title: 'Authorized Regional Distributor', content: 'We are an officially authorized UltraTech distributor in Kerala, ensuring customers receive genuine, quality-certified products with full manufacturer backing.' },
            { id: 'ut2', title: 'Wide Grade Availability', content: 'We stock all popular grades including OPC 43, OPC 53, PPC, and PSC, catering to foundations, columns, plastering, and specialized construction needs.' },
            { id: 'ut3', title: 'Bulk & Retail Supply', content: 'Whether you need a few bags for a residential project or bulk quantities for a commercial site, we manage supply efficiently with minimal lead time.' },
            { id: 'ut4', title: 'Reliable Logistics Network', content: 'Our established logistics setup ensures timely and undamaged delivery to construction sites across Thrissur, Ernakulam, and surrounding districts.' },
        ],
        companySectionTitle: 'UltraTech Products We Supply',
        companies: [
            { logo: '/assets/new-images/products/cement-parterns/download (1).png', logoAlt: 'UltraTech OPC 53', companyName: 'UltraTech OPC 53', description: 'Ideal for high-strength structural work including columns, beams, and foundations requiring superior compressive strength and consistent performance.' },
            { logo: '/assets/new-images/products/cement-parterns/download (1).png', logoAlt: 'UltraTech PPC', companyName: 'UltraTech PPC', description: 'Portland Pozzolana Cement for general construction — offers better workability, durability, and resistance to sulphate attack in varied site conditions.' },
            { logo: '/assets/new-images/products/cement-parterns/download (1).png', logoAlt: 'UltraTech PSC', companyName: 'UltraTech PSC', description: 'Portland Slag Cement ideal for marine and underground structures, offering excellent durability in aggressive environments with long-term strength.' },
        ],
        testimonials: [
            { quote: 'Outstanding Supply Chain!', text: 'Kavalakat ensures we never run out of UltraTech at our site. Their bulk delivery system is seamless and their team is always responsive.', author: 'Arun Menon', role: 'Site Engineer, Thrissur', img: '/assets/new-images/icon-person/5856.jpg' },
            { quote: 'Quality You Can Trust', text: "Every bag of UltraTech from Kavalakat is genuine and properly stored. We've been their client for 5 years and never had a quality issue.", author: 'Suresh Pillai', role: 'Contractor, Ernakulam', img: '/assets/new-images/icon-person/5856.jpg' },
            { quote: 'Best Pricing in Region', text: 'Competitive pricing combined with on-time delivery makes Kavalakat our go-to distributor for all UltraTech requirements.', author: 'Rajan Nair', role: 'Builder, Palakkad', img: '/assets/new-images/icon-person/5856.jpg' },
        ],
    },

    'jk-cement': {
        title: 'JK Cement Distribution',
        subtitle: 'Premium Cement Solutions for Every Construction Need',
        breadcrumbImage: '/assets/new-images/bm/bm-3.jpeg',
        heroImage: '/assets/new-images/products/p-1.jpeg',
        faqImage: '/assets/new-images/about-page/cement/cement-prodect-page.png',
        heroTitle: 'Kavalakat — Trusted JK Cement Partner in Kerala',
        heroDescription: [
            "Kavalakat distributes JK Cement across Kerala, bringing one of India's most trusted multi-product cement brands directly to builders and contractors in the region with reliable supply and competitive pricing.",
            "JK Cement's commitment to quality and innovation makes it a top choice for structural, finishing, and specialized construction applications at every scale.",
        ],
        faqSectionTitle: 'JK Cement Products',
        faqItems: [
            { id: 'jk1', title: 'Authorized JK Cement Partner', content: 'We are a certified JK Cement distribution partner, ensuring customers access genuine products with complete quality assurance and manufacturer support.' },
            { id: 'jk2', title: 'Multiple Product Grades', content: 'From OPC to specialty cements for white cement and wall putty applications, we stock the full JK Cement product range for any construction need.' },
            { id: 'jk3', title: 'Project-Scale Supply', content: 'We handle large project orders with dedicated scheduling to ensure uninterrupted material availability throughout construction phases.' },
            { id: 'jk4', title: 'Technical Support', content: 'Our team provides guidance on product selection, usage ratios, and application methods to ensure optimal construction outcomes every time.' },
        ],
        companySectionTitle: 'JK Cement Products We Supply',
        companies: [
            { logo: '/assets/new-images/products/cement-parterns/ACC.jfif', logoAlt: 'JK Super Cement OPC', companyName: 'JK Super Cement OPC', description: 'High-strength OPC for all structural applications, known for consistent quality and superior compressive performance across residential and commercial builds.' },
            { logo: '/assets/new-images/products/cement-parterns/ACC.jfif', logoAlt: 'JK Lakshmi PPC', companyName: 'JK Lakshmi PPC', description: 'A popular PPC grade offering excellent workability and long-term durability for general construction work and finishing applications.' },
            { logo: '/assets/new-images/products/cement-parterns/ACC.jfif', logoAlt: 'JK White Cement', companyName: 'JK White Cement', description: 'Premium white cement for decorative finishes, tiles, and aesthetic applications requiring bright, consistent color and smooth surface quality.' },
        ],
        testimonials: [
            { quote: 'Consistent & Reliable!', text: 'JK Cement through Kavalakat has been our primary material for two large housing projects. Quality is consistent and supply is always on time.', author: 'Manoj Kumar', role: 'Project Manager, Thrissur', img: '/assets/new-images/icon-person/5856.jpg' },
            { quote: 'Great Product Range', text: 'The variety of JK Cement grades available at Kavalakat helps us choose the right product for each phase of construction.', author: 'Priya Nambiar', role: 'Architect, Kochi', img: '/assets/new-images/icon-person/5856.jpg' },
            { quote: 'Excellent Service', text: 'Prompt delivery and courteous staff make Kavalakat our preferred distributor for all JK Cement procurement.', author: 'Biju Thomas', role: 'Contractor, Ernakulam', img: '/assets/new-images/icon-person/5856.jpg' },
        ],
    },

    'tata-steel': {
        title: 'Tata Steel Distribution',
        subtitle: 'World-Class Steel — Strength That Stands the Test of Time',
        breadcrumbImage: '/assets/new-images/bm/bm-3.jpeg',
        heroImage: '/assets/new-images/products/p-2.jpeg',
        faqImage: '/assets/new-images/about-page/cement/cement-prodect-page.png',
        heroTitle: 'Kavalakat — Certified Tata Steel Distributor in Kerala',
        heroDescription: [
            "Kavalakat is a trusted distributor of Tata Steel products in Kerala, offering high-quality structural steel to builders, contractors, and fabricators across the region with guaranteed product authenticity.",
            "Tata Steel's global manufacturing standards and commitment to sustainability make it the preferred steel brand for projects demanding performance, reliability, and longevity.",
        ],
        faqSectionTitle: 'Tata Steel Products',
        faqItems: [
            { id: 'ts1', title: 'Certified Tata Steel Distributor', content: 'We operate as an officially certified Tata Steel distributor, ensuring all products are authentic, quality-tested, and traceable to the source.' },
            { id: 'ts2', title: 'Full Range of Steel Products', content: 'We stock TMT bars, structural sections, plates, and coils — covering all requirements from housing to heavy civil construction projects.' },
            { id: 'ts3', title: 'Cut-to-Length & Custom Orders', content: 'We process custom cut-to-length orders to reduce on-site wastage, saving time and cost for project execution teams.' },
            { id: 'ts4', title: 'Earthquake-Resistant TMT', content: 'Tata Tiscon TMT bars feature superior ductility and bend-rebend properties, making structures resilient in seismic zones across India.' },
        ],
        companySectionTitle: 'Tata Steel Products We Supply',
        companies: [
            { logo: '/assets/new-images/products/cement-parterns/Bharathi.png', logoAlt: 'Tata Tiscon TMT', companyName: 'Tata Tiscon TMT', description: "India's most trusted TMT bar brand, offering superior strength, earthquake resistance, and excellent bonding properties for durable construction." },
            { logo: '/assets/new-images/products/cement-parterns/Bharathi.png', logoAlt: 'Tata Structura', companyName: 'Tata Structura', description: 'Pre-engineered hollow sections for modern construction, offering versatility, aesthetics, and structural efficiency for varied applications.' },
            { logo: '/assets/new-images/products/cement-parterns/Bharathi.png', logoAlt: 'Tata Steel Plates', companyName: 'Tata Steel Plates', description: 'High-strength steel plates for industrial applications, fabrication, and heavy-duty structural requirements with certified quality.' },
        ],
        testimonials: [
            { quote: 'Premium Steel Quality!', text: 'Tata Tiscon from Kavalakat has been the backbone of our structural work. Consistent quality and certified material every time.', author: 'Rajesh Varma', role: 'Structural Engineer, Thrissur', img: '/assets/new-images/icon-person/5856.jpg' },
            { quote: 'On-Time Delivery Always', text: "We depend on Kavalakat for all our Tata Steel needs. Their logistics team ensures material reaches our sites without delays.", author: 'Santhosh Kumar', role: 'Builder, Palakkad', img: '/assets/new-images/icon-person/5856.jpg' },
            { quote: 'Best TMT in Market', text: "Nothing compares to Tata Tiscon for earthquake-resistant construction. Kavalakat's pricing and service make the deal even better.", author: 'Anoop Krishnan', role: 'Contractor, Ernakulam', img: '/assets/new-images/icon-person/5856.jpg' },
        ],
    },

    'jsw-steel': {
        title: 'JSW Steel Distribution',
        subtitle: 'Advanced Steel Solutions Built for Modern Construction',
        breadcrumbImage: '/assets/new-images/bm/bm-3.jpeg',
        heroImage: '/assets/new-images/products/p-2.jpeg',
        faqImage: '/assets/new-images/about-page/cement/cement-prodect-page.png',
        heroTitle: 'Kavalakat — Authorized JSW Steel Partner in Kerala',
        heroDescription: [
            "Kavalakat distributes JSW Steel products across Kerala, connecting builders and project teams with one of India's most technologically advanced steel manufacturers with a strong track record.",
            "JSW Steel's state-of-the-art Nandyal plant and automated production systems deliver consistent quality that meets the demands of residential, commercial, and infrastructure projects.",
        ],
        faqSectionTitle: 'JSW Steel Products',
        faqItems: [
            { id: 'jsw1', title: 'Authorized JSW Steel Partner', content: 'Kavalakat is an authorized JSW Steel distributor, ensuring product authenticity, quality certification, and manufacturer warranty on all supplies.' },
            { id: 'jsw2', title: 'TMT, Coils & Sheets', content: 'We carry JSW Neosteel TMT bars, hot-rolled coils, cold-rolled sheets, and galvanized products for diverse construction and fabrication needs.' },
            { id: 'jsw3', title: 'Superior Corrosion Resistance', content: "JSW's advanced manufacturing processes produce steel with superior corrosion resistance and longer structural life, reducing maintenance costs." },
            { id: 'jsw4', title: 'Energy-Efficient Production', content: "JSW Steel's award-winning energy-saving processes mean you get premium quality steel produced with minimal environmental impact." },
        ],
        companySectionTitle: 'JSW Steel Products We Supply',
        companies: [
            { logo: '/assets/new-images/products/cement-parterns/Jws-logo.png', logoAlt: 'JSW Neosteel TMT', companyName: 'JSW Neosteel TMT', description: 'High-performance TMT bars with excellent tensile strength, ductility, and corrosion resistance for long-lasting structures of all types.' },
            { logo: '/assets/new-images/products/cement-parterns/Jws-logo.png', logoAlt: 'JSW Hot Rolled Coils', companyName: 'JSW Hot Rolled Coils', description: 'Wide range of HR coils for fabrication, industrial applications, and structural components requiring high formability and consistent quality.' },
            { logo: '/assets/new-images/products/cement-parterns/Jws-logo.png', logoAlt: 'JSW Galvanized Sheets', companyName: 'JSW Galvanized Sheets', description: 'Corrosion-resistant galvanized sheets ideal for roofing, cladding, and industrial construction applications with long service life.' },
        ],
        testimonials: [
            { quote: 'Exceptional Steel Quality!', text: 'JSW Neosteel has transformed the way we build. Superior strength and workability — Kavalakat ensures we always have it in stock.', author: 'Vivek Menon', role: 'Civil Engineer, Kochi', img: '/assets/new-images/icon-person/5856.jpg' },
            { quote: 'Reliable Distribution', text: "Kavalakat's distribution network for JSW Steel is impressive. We've never faced a shortage even during peak construction seasons.", author: 'George Mathew', role: 'Project Director, Thrissur', img: '/assets/new-images/icon-person/5856.jpg' },
            { quote: 'Great Value for Money', text: "JSW through Kavalakat offers the best price-to-quality ratio we've found in the market. Highly recommended for large projects.", author: 'Deepak Nair', role: 'Contractor, Malappuram', img: '/assets/new-images/icon-person/5856.jpg' },
        ],
    },

    'asian-paints': {
        title: 'Asian Paints Distribution',
        subtitle: 'Colours That Inspire — Finishes That Last',
        breadcrumbImage: '/assets/new-images/bm/bm-3.jpeg',
        heroImage: '/assets/new-images/products/p-3.jpeg',
        faqImage: '/assets/new-images/about-page/cement/cement-prodect-page.png',
        heroTitle: 'Kavalakat — Authorized Asian Paints Distributor in Kerala',
        heroDescription: [
            "Kavalakat distributes Asian Paints across Kerala, bringing Asia's leading decorative and industrial coatings brand to homes, offices, and construction projects throughout the region with expert service.",
            "From interior emulsions and exterior finishes to industrial coatings and waterproofing solutions, Asian Paints offers a comprehensive product range to meet every aesthetic and protection need.",
        ],
        faqSectionTitle: 'Asian Paints Products',
        faqItems: [
            { id: 'ap1', title: 'Authorized Asian Paints Dealer', content: 'We are an officially authorized Asian Paints distributor, ensuring customers receive genuine products with full brand warranty and technical support.' },
            { id: 'ap2', title: 'Complete Product Portfolio', content: 'We stock interior emulsions, exterior finishes, enamels, primers, wood coatings, waterproofing, and Asian Paints SmartCare products for all needs.' },
            { id: 'ap3', title: 'Color Consultation Service', content: 'Our trained team assists with color selection, finish recommendations, and product pairing to achieve the desired aesthetic for any space.' },
            { id: 'ap4', title: 'Bulk Project Supply', content: 'For large residential complexes, commercial buildings, and institutional projects, we offer competitive pricing and scheduled bulk delivery.' },
        ],
        companySectionTitle: 'Asian Paints Products We Supply',
        companies: [
            { logo: '/assets/new-images/products/cement-parterns/AMBUJA-CEMENT-1.jfif', logoAlt: 'Royale Interior Emulsion', companyName: 'Royale Interior Emulsion', description: 'Premium smooth finish emulsion offering rich colors, washability, and a luxurious look for interior walls and ceilings of every space.' },
            { logo: '/assets/new-images/products/cement-parterns/AMBUJA-CEMENT-1.jfif', logoAlt: 'Apex Exterior Emulsion', companyName: 'Apex Exterior Emulsion', description: 'Weather-resistant exterior finish that protects against rain, UV rays, and algae for long-lasting kerb appeal season after season.' },
            { logo: '/assets/new-images/products/cement-parterns/AMBUJA-CEMENT-1.jfif', logoAlt: 'SmartCare Waterproofing', companyName: 'SmartCare Waterproofing', description: 'Advanced waterproofing solutions for roofs, bathrooms, and basements, providing durable protection against water ingress and seepage.' },
        ],
        testimonials: [
            { quote: 'Beautiful Finish Every Time!', text: "We use Asian Paints Royale for all our premium residential projects. Kavalakat's supply is consistent and the colors are always true to swatch.", author: 'Meera Krishnan', role: 'Interior Designer, Kochi', img: '/assets/new-images/icon-person/5856.jpg' },
            { quote: 'Best Paint Distributor', text: "Kavalakat has one of the widest selections of Asian Paints products we've seen. Great pricing, helpful staff, and excellent stock availability.", author: 'Shaji Abraham', role: 'Painting Contractor, Thrissur', img: '/assets/new-images/icon-person/5856.jpg' },
            { quote: 'Durable & Weather-Proof', text: "The Apex exterior range from Asian Paints has held up perfectly through three monsoon seasons. Supplied by Kavalakat — quality guaranteed.", author: 'Pradeep Varghese', role: 'Builder, Ernakulam', img: '/assets/new-images/icon-person/5856.jpg' },
        ],
    },
}

/* ─────────────── COMPONENT ─────────────── */
const DistributionDetailPage = () => {
    const params = useParams()
    const slug = params?.slug as string
    const brand = brandData[slug]

    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null)
    const autoSlideRef = useRef<NodeJS.Timeout | null>(null)

    const testimonials = brand?.testimonials ?? []

    useEffect(() => {
        startAutoSlide()
        return () => stopAutoSlide()
    }, [slug])

    const startAutoSlide = () => {
        stopAutoSlide()
        autoSlideRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length)
        }, 4000)
    }

    const stopAutoSlide = () => {
        if (autoSlideRef.current) clearInterval(autoSlideRef.current)
    }

    const nextSlide = () => {
        stopAutoSlide()
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
        startAutoSlide()
    }

    const prevSlide = () => {
        stopAutoSlide()
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        startAutoSlide()
    }

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? null : id)
    }

    /* ── Not Found ── */
    if (!brand) {
        return (
            <>
                <InnerPageHeader />
                <div className="container pt-120 mb-120 text-center">
                    <h2>Brand Not Found</h2>
                    <p>The distribution brand you are looking for does not exist.</p>
                    <Link href="/distribution" className="primary-btn1 black-bg mt-4 d-inline-flex">
                        <span>Back to Distribution</span>
                        <span>Back to Distribution</span>
                    </Link>
                </div>
                <FooterTop />
                <Footer1 />
            </>
        )
    }

    return (
        <>
            <InnerPageHeader />

            <Breadcrumb
                title={brand.title}
                subtitle={brand.subtitle}
                image={brand.breadcrumbImage}
            />

            {/* ── Section 1: Hero ── */}
            <div className="product-details-top-area pt-120 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row gy-md-5 gy-4 align-items-lg-end">
                        <div className="col-lg-8 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="details-content">
                                <h2>{brand.heroTitle}</h2>
                                {brand.heroDescription.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="product-img">
                                <Image width={340} height={270} src={brand.heroImage} alt={brand.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Section 2: FAQ / Features — identical to cement page ── */}
            <div className="product-dt-faq-section mb-120">
                <div className="container">
                    <div className="product-dt-faq-wrapper">
                        <div className="row g-0">
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="product-dt-faq-img">
                                    <Image
                                        width={650}
                                        height={650}
                                        src={brand.faqImage}
                                        alt="FAQ"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-content-area p-4">
                                    <h2 className="mb-4">{brand.faqSectionTitle}</h2>
                                    <div className="faq-wrap">
                                        <div className="accordion" id="accordionExample">
                                            {brand.faqItems.map((item) => (
                                                <div className="accordion-item mb-3 animated-accordion" key={item.id}>
                                                    <h2 className="accordion-header">
                                                        <button
                                                            className={`accordion-button ${activeAccordion === item.id ? '' : 'collapsed'}`}
                                                            type="button"
                                                            onClick={() => toggleAccordion(item.id)}
                                                        >
                                                            {item.title}
                                                        </button>
                                                    </h2>
                                                    <div
                                                        className={`accordion-collapse ${activeAccordion === item.id ? 'show' : ''}`}
                                                        style={{
                                                            maxHeight: activeAccordion === item.id ? '500px' : '0',
                                                            overflow: 'hidden',
                                                            transition: 'max-height 0.4s ease-in-out',
                                                        }}
                                                    >
                                                        <div className="accordion-body">
                                                            {item.content}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link className="primary-btn1 black-bg" href="/contact">
                            <span>Contact With Us</span>
                            <span>Contact With Us</span>
                            <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                    <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Section 3: Company Cards — identical to cement page ── */}
            <div className="steel-partners-section mb-120">
                <div className="container">
                    <div className="row mb-50">
                        <div className="col-12">
                            <div className="section-title-wrapper">
                                <h2 className="section-main-title">{brand.companySectionTitle}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {brand.companies.map((company, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="card-wrapper-small">
                                    <CompanyCard
                                        logo={company.logo}
                                        logoAlt={company.logoAlt}
                                        companyName={company.companyName}
                                        description={company.description}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                    .steel-partners-section {
                        background: #ffffff;
                        padding: 80px 0;
                        position: relative;
                    }
                    .section-title-wrapper {
                        text-align: left;
                        margin-bottom: 40px;
                    }
                    .section-main-title {
                        font-size: 3rem;
                        font-weight: 800;
                        color: #000000;
                        margin: 0;
                        line-height: 1.2;
                        font-family: var(--font-manrope);
                        letter-spacing: -0.5px;
                    }
                    .card-wrapper-small {
                        height: 420px;
                        width: 100%;
                    }
                    @media (max-width: 992px) {
                        .card-wrapper-small { height: 400px; }
                        .section-main-title { font-size: 2.5rem; }
                    }
                    @media (max-width: 768px) {
                        .card-wrapper-small { height: 380px; }
                        .steel-partners-section { padding: 60px 0; }
                        .section-main-title { font-size: 2rem; }
                        .section-title-wrapper { text-align: center; }
                    }
                    @media (max-width: 576px) {
                        .card-wrapper-small { height: auto; min-height: 360px; }
                        .section-main-title { font-size: 1.75rem; }
                    }
                `}</style>
            </div>

            {/* ── Section 4: Testimonials — identical to cement page ── */}
            <div className="home1-testimonial-section">
                <div className="container-fluid">
                    <div className="row gy-5">
                        <div className="col-xl-4">
                            <div className="testimonial-title-area">
                                <div className="section-title">
                                    <span>Our Client Testimonial</span>
                                    <h2>Trusted by Our Partners.</h2>
                                </div>
                                <ul className="rating-list mt-4">
                                    <li className="mb-3">
                                        <a href="https://clutch.co/" className="single-rating d-flex align-items-center gap-3 p-3 border rounded">
                                            <div className="review">
                                                <span className="d-block small">Review On</span>
                                                <Image width={60} height={20} src="/assets/img/home1/icon/clutch-logo.svg" alt="Clutch" />
                                            </div>
                                            <div className="rating">
                                                <ul className="star d-flex gap-1">
                                                    <li><i className="bi bi-star-fill text-warning" /></li>
                                                    <li><i className="bi bi-star-fill text-warning" /></li>
                                                    <li><i className="bi bi-star-fill text-warning" /></li>
                                                    <li><i className="bi bi-star-fill text-warning" /></li>
                                                    <li><i className="bi bi-star-half text-warning" /></li>
                                                </ul>
                                                <span className="small">(50 reviews)</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="https://www.google.com/" className="single-rating google d-flex align-items-center gap-3 p-3 border rounded">
                                            <div className="review">
                                                <span className="d-block small">Review On</span>
                                                <Image width={60} height={20} src="/assets/img/home1/icon/google-logo.svg" alt="Google" />
                                            </div>
                                            <div className="rating">
                                                <ul className="star d-flex gap-1">
                                                    <li><i className="bi bi-star-fill text-warning" /></li>
                                                    <li><i className="bi bi-star-fill text-warning" /></li>
                                                    <li><i className="bi bi-star-fill text-warning" /></li>
                                                    <li><i className="bi bi-star-fill text-warning" /></li>
                                                    <li><i className="bi bi-star-half text-warning" /></li>
                                                </ul>
                                                <span className="small">(50 reviews)</span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="position-relative">
                                <div className="testimonial-slider">
                                    <div className="testimonial-card bg-white p-4 rounded shadow-sm fade-in">
                                        <svg className="quote mb-3" width={46} height={42} viewBox="0 0 46 42" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M19.3074 22.4375C19.0109 24.7824 18.4898 27.0555 17.9059 28.5469C15.8664 33.7848 11.2574 38.277 5.21094 40.9184C4.07891 41.4125 3.00977 41.2418 2.37188 40.4691C2.22813 40.2895 1.64415 39.1754 1.07813 38.0074L1.07111 37.9928C0.0628121 35.8959 0.0449269 35.8587 0.0449268 35.2402C0.0539122 34.0902 0.413287 33.668 2.06641 32.8773C5.27383 31.332 7.16055 29.5801 8.40039 26.9746C8.98438 25.7438 9.28086 24.8543 9.55938 23.4707C9.73907 22.5723 9.97266 20.5867 9.97266 19.9129C9.97266 19.7422 9.87383 19.7422 6.21719 19.7422L2.46172 19.7422L1.99454 19.5086C1.73399 19.3828 1.40157 19.1313 1.25782 18.9516C1.18695 18.8658 1.12525 18.7941 1.07158 18.7167C0.703361 18.1862 0.713199 17.3932 0.736722 10.0301L0.73675 10.0223C0.763674 2.37538 0.763737 2.3573 0.952347 1.99805C1.22188 1.50391 1.58125 1.15352 2.06641 0.928908C2.47071 0.740236 2.5336 0.740236 10.2871 0.740235L18.1035 0.740235L18.4719 0.937891C18.948 1.18945 19.3344 1.57578 19.55 2.01602C19.7117 2.33945 19.7207 2.68086 19.7207 10.2188C19.7207 18.3945 19.6848 19.4996 19.3074 22.4375Z" fill="currentColor" />
                                        </svg>
                                        <span className="d-block fw-bold mb-2">{testimonials[currentSlide]?.quote}</span>
                                        <p className="mb-4">{testimonials[currentSlide]?.text}</p>
                                        <div className="author-area d-flex align-items-center gap-3">
                                            <div className="author-img">
                                                <Image width={50} height={50} src={testimonials[currentSlide]?.img} alt={testimonials[currentSlide]?.author ?? ''} className="rounded-circle" />
                                            </div>
                                            <div className="author-content">
                                                <h5 className="mb-0">{testimonials[currentSlide]?.author}</h5>
                                                <span className="small text-muted">{testimonials[currentSlide]?.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="slider-btn-grp d-flex gap-3 mt-4 justify-content-center">
                                    <button
                                        className="slider-btn testimonial-slider-prev"
                                        onClick={prevSlide}
                                        aria-label="Previous testimonial"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <div className="d-flex align-items-center gap-2">
                                        {testimonials.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`slide-indicator ${currentSlide === index ? 'active' : ''}`}
                                                onClick={() => {
                                                    stopAutoSlide()
                                                    setCurrentSlide(index)
                                                    startAutoSlide()
                                                }}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    <button
                                        className="slider-btn testimonial-slider-next"
                                        onClick={nextSlide}
                                        aria-label="Next testimonial"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .content-wrapper { display: flex; align-items: flex-start; gap: 24px; }
                .feature-img { border-radius: 10px; flex-shrink: 0; }
                .text-content { opacity: 0; transform: translateX(30px); transition: all 0.4s ease; }
                .accordion-collapse.show .text-content { opacity: 1; transform: translateX(0); }
                .animated-accordion .feature-img { transform: scale(0.95); transition: transform 0.4s ease; }
                .animated-accordion .accordion-collapse.show .feature-img { transform: scale(1); }
                @media (max-width: 768px) { .content-wrapper { flex-direction: column; } }
                .testimonial-card { animation: fadeSlide 0.6s ease; }
                @keyframes fadeSlide {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <FooterTop />
            <Footer1 />
        </>
    )
}

export default DistributionDetailPage