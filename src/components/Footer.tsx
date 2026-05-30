import Link from 'next/link'
import React from 'react'

/* ── Reusable small arrow SVG (matches header style) ── */
const LinkArrow = () => (
    <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0445549 0H9.00008V1.67647L1.69308 9L0 7.32353L4.99014 2.38235L0.0445549 2.42647V0Z" />
        <path d="M9.0002 8.9996V3.35254L6.59424 5.73489V8.9996H9.0002Z" />
    </svg>
)

const Footer = () => {
    return (
        <footer className="footer-section style-3">
            <div className="footer-wrapper">
                <div className="container">
                    <div className="footer-top-area">
                        <div className="row g-4 align-items-center">
                            <div className="col-md-3">
                                <Link href="/oil-gas" className="footer-logo">
                                    <img width={160} height={50} src="/assets/new-images/logo/KavalakkatLogo-theme.png" alt="" />
                                </Link>
                            </div>
                            <div className="col-md-5 d-flex justify-content-md-center">
                                <p>Welcome to Kavalakat where innovation meet our passion in a journey that started dream.</p>
                            </div>
                            <div className="col-md-4 d-flex justify-content-md-end" />
                        </div>
                    </div>

                    <div className="footer-menu-and-address-wrap">
                        <div className="row align-items-start">

                            {/* ── Address + Location ── */}
                            <div className="col-lg-3">
                                <div className="footer-widget">
                                    <div className="address-area">
                                        <ul className="address-list">
                                            <li className="single-address">
                                                <span>Thrissur</span>
                                                <a href="https://www.google.com/maps">H.O. IX/413/4, T.B. Road, S. T. Nagar, Thrissur, Kerala - 680 001</a>
                                            </li>
                                        </ul>
                                        <Link href="/contact" className="location-btn">View All Factory Location</Link>
                                    </div>
                                </div>
                            </div>

                            {/* ── Nav columns ── */}
                            <div className="col-lg-9 mt-5">
                                <div className="footer-menu">
                                    <div className="row gy-5">

                                        {/* ── About ── */}
                                        <div className="col-md-3 col-sm-6 d-flex justify-content-lg-center">
                                            <div className="footer-widget">
                                                <div className="widget-title"><h5>About</h5></div>
                                                <ul className="footer-nav-list">
                                                    {[
                                                        // { href: '/about', label: 'About Us' },
                                                        // { href: '/our-process', label: 'Our Strengths' },
                                                        // { href: '/milestone', label: 'Milestones' },
                                                        { href: '/projects', label: 'Projects' },
                                                        { href: '/gallery', label: 'Gallery' },
                                                        { href: '/blog', label: 'Blog' },
                                                        { href: '/contact', label: 'Contact' },
                                                        { href: '/career', label: "Career's" },
                                                    ].map(({ href, label }) => (
                                                        <li key={href}>
                                                            <Link href={href} className="footer-nav-link">
                                                                <span className="footer-nav-arrow"><LinkArrow /></span>
                                                                <span className="footer-nav-text">{label}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* ── Products / Trading ── */}
                                        <div className="col-md-3 col-sm-6 d-flex justify-content-lg-center">
                                            <div className="footer-widget">
                                                <div className="widget-title"><h5>Trading</h5></div>
                                                <ul className="footer-nav-list">
                                                    {[
                                                        { href: '/product/cement', label: 'Cement' },
                                                        { href: '/product/steel', label: 'Steels' },
                                                        { href: '/product/roofing-solutions', label: 'Roofing Solutions' },
                                                        { href: '/product/white-cement-paint', label: 'White Cement Paint' },
                                                        { href: '/product/construction-chemicals', label: 'Construction Chemicals' },
                                                    ].map(({ href, label }) => (
                                                        <li key={href}>
                                                            <Link href={href} className="footer-nav-link">
                                                                <span className="footer-nav-arrow"><LinkArrow /></span>
                                                                <span className="footer-nav-text">{label}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* ── Distribution ── */}
                                        <div className="col-md-3 col-sm-6 d-flex justify-content-lg-center">
                                            <div className="footer-widget">
                                                <div className="widget-title"><h5>Distribution</h5></div>
                                                <ul className="footer-nav-list">
                                                    {[
                                                        { href: '/distribution/ultratech', label: 'UltraTech' },
                                                        { href: '/distribution/jk-cement', label: 'JK Cement' },
                                                        { href: '/distribution/tata-steel', label: 'Tata Steel' },
                                                        { href: '/distribution/jsw-steel', label: 'JSW Steel' },
                                                        { href: '/distribution/asian-paints', label: 'Asian Paints' },
                                                    ].map(({ href, label }) => (
                                                        <li key={href}>
                                                            <Link href={href} className="footer-nav-link">
                                                                <span className="footer-nav-arrow"><LinkArrow /></span>
                                                                <span className="footer-nav-text">{label}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* ── Services ── */}
                                        <div className="col-md-3 col-sm-6 d-flex justify-content-lg-center">
                                            <div className="footer-widget">
                                                <div className="widget-title"><h5>Services</h5></div>
                                                <ul className="footer-nav-list">
                                                    {[
                                                        { href: '/services/kavalakat-group', label: 'Kavalakat Group' },
                                                        { href: '/services/alite-enclaves', label: 'Alite Enclaves' },
                                                        { href: '/services/neyy-vedyam', label: 'Neey Vedhyam' },
                                                    ].map(({ href, label }) => (
                                                        <li key={href}>
                                                            <Link href={href} className="footer-nav-link">
                                                                <span className="footer-nav-arrow"><LinkArrow /></span>
                                                                <span className="footer-nav-text">{label}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* ── Blog ── */}
                                                {/* <div className="widget-title" style={{ marginTop: '24px' }}><h5>Blog</h5></div> */}
                                                {/* <ul className="footer-nav-list">
                                                    {[
                                                        { href: '/blog/cement-grade', label: 'Cement Grade' },
                                                        { href: '/blog/construction-mistakes', label: 'Construction Mistakes' },
                                                        { href: '/blog/white-cement', label: 'White Cement' },
                                                    ].map(({ href, label }) => (
                                                        <li key={href}>
                                                            <Link href={href} className="footer-nav-link">
                                                                <span className="footer-nav-arrow"><LinkArrow /></span>
                                                                <span className="footer-nav-text">{label}</span>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul> */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-wrap">
                <div className="container">
                    <div className="footer-bottom">
                        <div className="copyright-area">
                            <p>Copyright 2025 <Link href="/">Kavalakat</Link> | Design By <a href="https://mindstory.in/" style={{ color: 'orange' }}>Mindstory</a></p>
                        </div>
                        <ul className="social-area">
                            <li><a href="https://www.linkedin.com/"><i className="bi bi-linkedin" />LinkedIn</a></li>
                            <li><a href="https://www.facebook.com/"><i className="bi bi-facebook" />Facebook</a></li>
                            <li><a href="https://www.instagram.com/"><i className="bi bi-instagram" />Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
                /* ════════════════════════════════════
                   FOOTER NAV LIST — header-style links
                ════════════════════════════════════ */

                .footer-nav-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .footer-nav-list li {
                    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
                }

                .footer-nav-list li:first-child {
                    border-top: 1px solid rgba(255, 255, 255, 0.07);
                }

                .footer-nav-link {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 9px 0;
                    text-decoration: none;
                    color: inherit;
                    transition: gap 0.22s ease, color 0.22s ease;
                    position: relative;
                }

                .footer-nav-link:hover {
                    gap: 14px;
                    color: #0160b2;
                }

                /* Arrow icon container — hidden by default, slides in on hover */
                .footer-nav-arrow {
                    display: inline-flex;
                    align-items: center;
                    flex-shrink: 0;
                    opacity: 0;
                    transform: translateX(-4px);
                    transition: opacity 0.22s ease, transform 0.22s ease;
                }

                .footer-nav-link:hover .footer-nav-arrow {
                    opacity: 1;
                    transform: translateX(0);
                }

                /* Arrow SVG inherits current color */
                .footer-nav-arrow svg path {
                    fill: currentColor;
                }

                .footer-nav-text {
                    font-size: 0.875rem;
                    font-weight: 500;
                    line-height: 1.4;
                    transition: transform 0.22s ease;
                }

                .footer-nav-link:hover .footer-nav-text {
                    transform: translateX(2px);
                }
            `}</style>
        </footer>
    )
}

export default Footer