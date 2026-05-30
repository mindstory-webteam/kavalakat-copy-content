import FooterTop from '@/components/FooterTop'
import InnerPageHeader from '@/components/InnerPageHeader'
import Link from 'next/link'
import React from 'react'
import Footer1 from '@/components/Footer'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'

/* ── Reusable arrow SVG ── */
const ArrowSvg = () => (
    <svg width={18} height={19} viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0891088 0.0541992H18V3.40711L3.38614 18.054L0 14.7011L9.98019 4.81886L0.0891088 4.90709V0.0541992Z" />
        <path d="M18.0004 18.0543V6.76025L13.1885 11.5249V18.0543H18.0004Z" />
    </svg>
)

const ArrowSvgSm = () => (
    <svg width={13} height={13} viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0891088 0.0541992H18V3.40711L3.38614 18.054L0 14.7011L9.98019 4.81886L0.0891088 4.90709V0.0541992Z" fill="currentColor" />
        <path d="M18.0004 18.0543V6.76025L13.1885 11.5249V18.0543H18.0004Z" fill="currentColor" />
    </svg>
)

/* ── Product Card ── */
const ProductCard = ({
    href, src, alt, title, desc, delay
}: {
    href: string; src: string; alt: string; title: string; desc: string; delay: string
}) => (
    <div className="pg-card wow animate fadeInDown" data-wow-delay={delay} data-wow-duration="1500ms">
        <div className="pg-card-img">
            <Image width={400} height={280} src={src} alt={alt} />
            <Link href={href} className="pg-card-arrow">
                <ArrowSvg />
            </Link>
        </div>
        <div className="pg-card-body">
            <h4 className="pg-card-title">
                <Link href={href}>{title}</Link>
            </h4>
            <p className="pg-card-desc">{desc}</p>
            <Link href={href} className="pg-card-more">
                View Details
                <ArrowSvgSm />
            </Link>
        </div>
    </div>
)

const ProductPage = () => {
    return (
        <>
            <InnerPageHeader />
            <Breadcrumb
                title="Our Portfolio"
                subtitle="Products Power Progress — Explore Our Offerings."
                image='/assets/new-images/bm/bm-2.jpeg'
            />

            <div className="pg-page pt-120 mb-120" id="scroll-section">
                <div className="container">

                    {/* ══════════ TRADING ══════════ */}
                    <div className="pg-division">
                        <div className="pg-division-top">
                            <span className="pg-div-eyebrow">01 — Trading</span>
                            <div className="pg-div-head-row">
                                <h2 className="pg-div-title">Building Materials<br />&amp; Products</h2>
                                <Link href="/contact" className="pg-div-cta">
                                    CONTACT US NOW <ArrowSvgSm />
                                </Link>
                            </div>
                            <div className="pg-div-rule" />
                        </div>

                        {/* 2 rows × 3 cards */}
                        <div className="pg-grid pg-grid-3">
                            <ProductCard
                                href="/product/cement"
                                src="/assets/new-images/products/p-1.jpeg"
                                alt="Cement"
                                title="Cement"
                                desc="Supplied from trusted brands with efficient handling and timely dispatch to support strong, consistent construction timelines."
                                delay="100ms"
                            />
                            <ProductCard
                                href="/product/steel"
                                src="/assets/new-images/products/p-2.jpeg"
                                alt="Steel"
                                title="Steel"
                                desc="High-quality, certified steel processed and delivered through streamlined operations for structural reliability and project efficiency."
                                delay="200ms"
                            />
                            <ProductCard
                                href="/product/white-cement-paint"
                                src="/assets/new-images/products/p-3.jpeg"
                                alt="White Cement & Paint"
                                title="White Cement & Paint"
                                desc="Carefully stored and managed to maintain quality, ensuring smooth supply for finishing and aesthetic construction needs."
                                delay="300ms"
                            />
                            <ProductCard
                                href="/product/sheet-pipe"
                                src="/assets/new-images/products/p-4.jpeg"
                                alt="Sheet & Pipe"
                                title="Sheet & Pipe"
                                desc="Handled with precision and organized dispatch systems to ensure damage-free delivery and site-ready usage across projects."
                                delay="400ms"
                            />
                            <ProductCard
                                href="/product/abrasives-construction-chemicals"
                                src="/assets/new-images/products/p-5.jpeg"
                                alt="Construction Chemicals"
                                title="Construction Chemicals"
                                desc="Specialty products managed through controlled workflows to ensure safety, accuracy, and performance consistency on site."
                                delay="500ms"
                            />
                            <ProductCard
                                href="/product/hardware-tools"
                                src="/assets/new-images/products/p-6.jpeg"
                                alt="Hardware & Tools"
                                title="Hardware & Tools"
                                desc="A comprehensive range of hardware and tools sourced from reliable manufacturers, ensuring quality and availability for every project scale."
                                delay="600ms"
                            />
                        </div>
                    </div>

                    {/* ══════════ DISTRIBUTION ══════════ */}
                    <div className="pg-division">
                        <div className="pg-division-top">
                            <span className="pg-div-eyebrow">02 — Distribution</span>
                            <div className="pg-div-head-row">
                                <h2 className="pg-div-title">Our Brand<br />Partners</h2>
                                <Link href="/contact" className="pg-div-cta">
                                    CONTACT US NOW <ArrowSvgSm />
                                </Link>
                            </div>
                            <div className="pg-div-rule" />
                        </div>

                        {/* 2 rows × 3 cards */}
                        <div className="pg-grid pg-grid-3">
                            <ProductCard
                                href="/distribution/ultratech"
                                src="/assets/new-images/products/p-6.jpeg"
                                alt="UltraTech"
                                title="UltraTech"
                                desc="Authorized distribution partner for UltraTech cement — India's largest cement brand, ensuring reliable supply across Thrissur."
                                delay="100ms"
                            />
                            <ProductCard
                                href="/distribution/jk-cement"
                                src="/assets/new-images/products/p-1.jpeg"
                                alt="JK Cement"
                                title="JK Cement"
                                desc="Official distribution partner for JK Cement, delivering consistent quality and on-time supply to construction projects."
                                delay="200ms"
                            />
                            <ProductCard
                                href="/distribution/tata-steel"
                                src="/assets/new-images/products/p-2.jpeg"
                                alt="Tata Steel"
                                title="Tata Steel"
                                desc="Trusted distributor of Tata Steel products — providing certified TMT bars and structural steel for quality construction."
                                delay="300ms"
                            />
                            <ProductCard
                                href="/distribution/jsw-steel"
                                src="/assets/new-images/products/p-3.jpeg"
                                alt="JSW Steel"
                                title="JSW Steel"
                                desc="Authorized distributor for JSW Steel — one of India's leading manufacturers, supplying premium-grade structural materials."
                                delay="400ms"
                            />
                            <ProductCard
                                href="/distribution/asian-paints"
                                src="/assets/new-images/products/p-4.jpeg"
                                alt="Asian Paints"
                                title="Asian Paints"
                                desc="Official distribution partner for Asian Paints, offering a complete range of interior, exterior, and specialty coating solutions."
                                delay="500ms"
                            />
                            <ProductCard
                                href="/distribution/berger-paints"
                                src="/assets/new-images/products/p-5.jpeg"
                                alt="Berger Paints"
                                title="Berger Paints"
                                desc="Authorized distributor for Berger Paints, delivering a wide spectrum of decorative and protective coatings for residential and commercial use."
                                delay="600ms"
                            />
                        </div>
                    </div>

                    {/* ══════════ SERVICES ══════════ */}
                    <div className="pg-division">
                        <div className="pg-division-top">
                            <span className="pg-div-eyebrow">03 — Services</span>
                            <div className="pg-div-head-row">
                                <h2 className="pg-div-title">Hospitality &amp;<br />Group Ventures</h2>
                                <Link href="/contact" className="pg-div-cta">
                                    CONTACT US NOW <ArrowSvgSm />
                                </Link>
                            </div>
                            <div className="pg-div-rule" />
                        </div>

                        <div className="pg-grid pg-grid-3">
                            <ProductCard
                                href="/services/kavalakat-group"
                                src="/assets/new-images/products/p-6.jpeg"
                                alt="Kavalakat Group"
                                title="Kavalakat Group"
                                desc="Integrated logistics support with planned routing and on-time delivery, ensuring uninterrupted material flow to project sites."
                                delay="100ms"
                            />
                            <ProductCard
                                href="/services/alite-enclaves"
                                src="/assets/new-images/products/product-img.png"
                                alt="Alite Enclaves"
                                title="Alite Enclaves"
                                desc="Premium service apartments, villas, and rooms in the heart of Thrissur — ideal for families, business travelers, and long-stay guests."
                                delay="200ms"
                            />
                            <ProductCard
                                href="/services/neyy-vedyam"
                                src="/assets/new-images/products/product-img-2.png"
                                alt="Neyy Vedyam"
                                title="Neyy Vedyam"
                                desc="A premium 72-seater vegetarian restaurant in Thrissur, offering authentic Kerala cuisine across two elegantly designed floors."
                                delay="300ms"
                            />
                        </div>
                    </div>

                </div>
            </div>

           <style>{`
    .pg-page { background: #fff; }

    .pg-division {
        padding: 0 0 100px;
        border-bottom: 1px solid #ebebeb;
        margin-bottom: 80px;
    }
    .pg-division:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .pg-division-top {
        padding: 56px 0 0;
        margin-bottom: 48px;
    }

    .pg-div-eyebrow {
        display: block;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #aaa;
        margin-bottom: 14px;
    }

    .pg-div-head-row {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 32px;
    }

    .pg-div-title {
        font-size: clamp(2.2rem, 4.5vw, 3.6rem);
        font-weight: 800;
        color: #0a0a0a;
        line-height: 1.1;
        margin: 0;
        letter-spacing: -1.5px;
    }

    .pg-div-cta {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        color: #999;
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-color: #ccc;
        flex-shrink: 0;
        padding-bottom: 4px;
        transition: color 0.2s, text-decoration-color 0.2s;
    }
    .pg-div-cta:hover { color: #000; text-decoration-color: #000; }
    .pg-div-cta svg { transition: color 0.2s; }
    .pg-div-cta:hover svg { color: #000; }

    .pg-div-rule {
        width: 100%;
        height: 1px;
        background: #e0e0e0;
    }

    /* ── Grid ── */
    .pg-grid {
        display: grid;
        gap: 24px;
    }
    .pg-grid-3 {
        grid-template-columns: repeat(3, 1fr);
    }

    /* ── Card ── */
    .pg-card {
        border: 1px solid #ebebeb;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        background: #fff;
        transition: background 0.3s ease, box-shadow 0.3s ease;
        position: relative;
        overflow: hidden;
    }
    .pg-card:hover {
        background: #fafafa;
        box-shadow: 0 4px 24px rgba(0,0,0,0.07);
    }

    .pg-card-img {
        position: relative;
        width: 100%;
        overflow: hidden;
        aspect-ratio: 4/3;
        background: #f4f4f4;
    }
    .pg-card-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.5s ease;
    }
    .pg-card:hover .pg-card-img img { transform: scale(1.05); }

    .pg-card-arrow {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40px;
        height: 40px;
        background: #000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transform: translate(4px, 4px);
        transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .pg-card-arrow svg { fill: #fff; }
    .pg-card:hover .pg-card-arrow { opacity: 1; transform: translate(0, 0); }

    .pg-card-body {
        padding: 24px 26px 28px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        flex: 1;
    }

    .pg-card-title {
        font-size: 0.95rem;
        font-weight: 700;
        margin: 0;
        line-height: 1.3;
    }
    .pg-card-title a { color: #0a0a0a; text-decoration: none; transition: color 0.2s; }
    .pg-card-title a:hover { color: #444; }

    .pg-card-desc {
        font-size: 0.8rem;
        color: #777;
        line-height: 1.7;
        margin: 0;
        flex: 1;
    }

    .pg-card-more {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        color: #000;
        text-decoration: none;
        margin-top: 4px;
        transition: gap 0.2s;
    }
    .pg-card-more:hover { gap: 10px; }
    .pg-card-more svg { flex-shrink: 0; }

    /* ── Responsive ── */
    @media (max-width: 768px) {
        .pg-grid-3 { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .pg-div-head-row { flex-direction: column; align-items: flex-start; gap: 16px; }
        .pg-div-title { font-size: 2rem; letter-spacing: -0.5px; }
        .pg-division { padding-bottom: 60px; margin-bottom: 40px; }
        .pg-division-top { padding-top: 40px; margin-bottom: 32px; }
    }

    @media (max-width: 480px) {
        .pg-grid-3 { grid-template-columns: 1fr; gap: 12px; }
    }
`}</style>

            <FooterTop />
            <Footer1 />
        </>
    )
}

export default ProductPage