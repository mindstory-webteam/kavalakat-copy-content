"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const HomeContactSection = () => {
    const [openAccordion, setOpenAccordion] = useState('collapseOne')

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? '' : id)
    }

    return (
        <div className="home5-contact-section mb-120">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-5">
                        <div className="section-title four mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            
                            <h2>Get In Touch With Us.</h2>
                        </div>
                        <div className="faq-wrap two">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button 
                                            className={`accordion-button ${openAccordion !== 'collapseOne' ? 'collapsed' : ''}`}
                                            type="button" 
                                            onClick={() => toggleAccordion('collapseOne')}
                                            aria-expanded={openAccordion === 'collapseOne'}
                                            aria-controls="collapseOne"
                                        >
                                            01. What construction materials does Kavalakat supply?
                                        </button>
                                    </h2>
                                    <div 
                                        id="collapseOne" 
                                        className={`accordion-collapse collapse ${openAccordion === 'collapseOne' ? 'show' : ''}`}
                                        aria-labelledby="headingOne"
                                    >
                                        <div className="accordion-body">
We supply TMT steel bars, MS structurals, cement (Ultratech, JSW, Chettinad Anjani), paints (Dulux)
, white cement (Birla White), construction chemicals and more.

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button 
                                            className={`accordion-button ${openAccordion !== 'collapseTwo' ? 'collapsed' : ''}`}
                                            type="button" 
                                            onClick={() => toggleAccordion('collapseTwo')}
                                            aria-expanded={openAccordion === 'collapseTwo'}
                                            aria-controls="collapseTwo"
                                        >
                                            2. Which districts does Kavalakat serve?
                                        </button>
                                    </h2>
                                    <div 
                                        id="collapseTwo" 
                                        className={`accordion-collapse collapse ${openAccordion === 'collapseTwo' ? 'show' : ''}`}
                                        aria-labelledby="headingTwo"
                                    >
                                        <div className="accordion-body">
We operate across all districts of Kerala from our branches in Thrissur, Palakkad, Ernakulam
, Idukki, and Trivandrum ,kannur plus Coimbatore in Tamil Nadu, with capability to serve across south india
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button 
                                            className={`accordion-button ${openAccordion !== 'collapseThree' ? 'collapsed' : ''}`}
                                            type="button" 
                                            onClick={() => toggleAccordion('collapseThree')}
                                            aria-expanded={openAccordion === 'collapseThree'}
                                            aria-controls="collapseThree"
                                        >
                                            3. Are you an authorized dealer for SAIL TMT?
                                        </button>
                                    </h2>
                                    <div 
                                        id="collapseThree" 
                                        className={`accordion-collapse collapse ${openAccordion === 'collapseThree' ? 'show' : ''}`}
                                        aria-labelledby="headingThree"
                                    >
                                        <div className="accordion-body">
Yes. We are the exclusive authorized distributor of SAIL SEQR TMT Rebars for the Thrissur-to-
Trivandrum corridor, appointed directly by Steel Authority of India Ltd.

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button 
                                            className={`accordion-button ${openAccordion !== 'collapseFour' ? 'collapsed' : ''}`}
                                            type="button" 
                                            onClick={() => toggleAccordion('collapseFour')}
                                            aria-expanded={openAccordion === 'collapseFour'}
                                            aria-controls="collapseFour"
                                        >
                                           4. How much steel does Kavalakat handle monthly?
                                        </button>
                                    </h2>
                                    <div 
                                        id="collapseFour" 
                                        className={`accordion-collapse collapse ${openAccordion === 'collapseFour' ? 'show' : ''}`}
                                        aria-labelledby="headingFour"
                                    >
                                        <div className="accordion-body">
We handle over 10000+  MT of steel per month  including ~5,000–5,500 MT of Vizag TMT, 
(1500 + Sail)
~2000 MT of Shyam Steel, and ~2,000 – 2,500 MT of MS Structurals.

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button 
                                            className={`accordion-button ${openAccordion !== 'collapseFive' ? 'collapsed' : ''}`}
                                            type="button" 
                                            onClick={() => toggleAccordion('collapseFive')}
                                            aria-expanded={openAccordion === 'collapseFive'}
                                            aria-controls="collapseFive"
                                        >
                                            5. How do I place an order?
                                        </button>
                                    </h2>
                                    <div 
                                        id="collapseFive" 
                                        className={`accordion-collapse collapse ${openAccordion === 'collapseFive' ? 'show' : ''}`}
                                        aria-labelledby="headingFive"
                                    >
                                        <div className="accordion-body">
Call us at 0487 244 0380 or email info@kavalakat.com. You can also visit our nearest branch
for product consultation and pricing.

                                     </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex align-items-lg-end wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="contact-form-wrap three">
                            <form>
                                <div className="row g-4">
                                    <div className="col-md-12">
                                        <div className="form-inner">
                                            <label>Full Name *</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-inner">
                                            <label>Email *</label>
                                            <input type="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-inner">
                                            <label>Phone *</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner">
                                            <label>Subject</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner">
                                            <label>Message *</label>
                                            <textarea defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-inner2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="contactCheck" />
                                                <label className="form-check-label" htmlFor="contactCheck">
                                                    I have read &amp; accepted Terms &amp; Conditions.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               <div className="about-btn">
                                <Link className="primary-btn3" href="/about">
                                    <span>About Us More
                                    </span>
                                    <span>About Us More
                                    </span>
                                    <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                            <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContactSection