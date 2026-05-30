"use client"
import FooterTop from '@/components/FooterTop'
import InnerPageHeader from '@/components/InnerPageHeader'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import Footer1 from '@/components/Footer'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from 'react'
import CompanyCard from '@/components/CompanyCard'

const ProductPage = () => {
   
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  
    const [activeAccordion1, setActiveAccordion1] = useState<string | null>(null)
    const [activeAccordion2, setActiveAccordion2] = useState<string | null>(null)
  
    // ✅ Correct ref type for setInterval
    const autoSlideRef = useRef<NodeJS.Timeout | null>(null)


    const testimonials = [
        {
            quote: "Excellent quality production!",
            text: "I ordered cement for my home build and the team made everything easy — clear pricing, friendly service, and delivery was right on schedule. Great overall experience.",
            author: "Raj Kumar",
            role: "Founder, Egenslab",
            img: "/assets/new-images/icon-person/5856.jpg"
        },
        {
            quote: "Best communication & deliver",
            text: "Bought bulk cement bags here for our contractor. Staff were patient answering questions and helped me choose the right grade. Timely delivery and quality product.",
            author: "David Thomas",
            role: "Founder, Triprex",
            img: "/assets/new-images/icon-person/5856.jpg"
        },
        {
            quote: "Outstanding material quality!",
            text: "Pleasant experience! The team at this supplier was professional and courteous. Cement quality was solid and consistent, just what we needed for our foundation work.",
            author: "Swaraj banu",
            role: "Founder, Axleo",
            img: "/assets/new-images/icon-person/5856.jpg"
        },
       
    ]


      const companies = [
    {
      logo: '/assets/new-images/products/cement-parterns/download (1).png',
      logoAlt: 'ULTRATECH Logo',
      companyName: 'ULTRATECH',
      description:
        'The company has a consolidated capacity* of 102.75 Million Tonnes Per Annum (MTPA) of grey cement. UltraTech Cement has 20 integrated plants, 1 clinkerisation plant, 26 grinding units and 7 bulk terminals. Its operations span across India, UAE, Bahrain, Bangladesh and Sri Lanka.',
    },
    {
      logo: '/assets/new-images/products/cement-parterns/ACC.jfif',
      logoAlt: 'ACC Logo',
      companyName: 'ACC',
      description:
        "As one of the foremost companies in the Indian cement and concrete industry, we at ACC are driven by the inherent need of providing products and solutions that will create the new economic,",
    },
   
    {
      logo: '/assets/new-images/products/cement-parterns/Bharathi.png',
      logoAlt: 'Bharathi Logo',
      companyName: 'Bharathi',
      description:
        "Vicat is a pioneer in cement manufacturing since its invention by Louis Vicat in 1817. Vicat Group, France is a global cement organisation with offices in 11 countries. It’s main business interests are Cement, Ready-Mixed Concrete, Concrete Product (Precast) and Aggregates.",
    },
   
    {
      logo: '/assets/new-images/products/cement-parterns/Dalmia.jfif',
      logoAlt: 'Dalmia Logo',
      companyName: 'Dalmia',
      description:
        "Apart from world-class cement manufacturing plants in India, what makes us unique as a cement manufacturer is our constant ability to innovate. On the key efficiency parameters, we rank right up there with the best of cement companies in the industry.",
    },{
      logo: '/assets/new-images/products/cement-parterns/Jws-logo.png',
      logoAlt: 'JSW Logo',
      companyName: 'JSW',
      description:
        "JSW Cement’s flagship plant in Nandyal uses world-class technology (including the advanced Combi Finish Mode Roller Press Circuit and automated loading system) to manufacture cement. It also won prestigious awards for its energy-saving processes.",
    },
    
    
    {
      logo: '/assets/new-images/products/cement-parterns/AMBUJA-CEMENT-1.jfif',
      logoAlt: 'AMBUJA CEMENT Logo',
      companyName: 'AMBUJA CEMENT',
      description:
        " Ambuja Cement is one of India’s most trusted cement brands, recognized for strength, durability, and sustainability. Backed by advanced technology and a strong nationwide presence, it delivers reliable solutions for all construction needs.",
    },
    {
      logo: '/assets/new-images/products/cement-parterns/CHETTINAD-CEMENT.png',
      logoAlt: 'CHETTINAD CEMENT Logo',
      companyName: 'CHETTINAD CEMENT',
      description:
        "Chettinad Cement is a leading cement manufacturer in South India, known for consistent quality and strong performance. With modern plants and a wide distribution network, it supports residential, commercial, and infrastructure projects.",
    },
   
    
  ];

    /* ---------------- AUTO SLIDER ---------------- */
   
     useEffect(() => {
       startAutoSlide()
       return () => stopAutoSlide()
     }, [])
   
     const startAutoSlide = () => {
       stopAutoSlide()
       autoSlideRef.current = setInterval(() => {
         setCurrentSlide((prev) => (prev + 1) % testimonials.length)
       }, 4000)
     }
   
     const stopAutoSlide = () => {
       if (autoSlideRef.current) {
         clearInterval(autoSlideRef.current)
       }
     }
   
     const nextSlide = () => {
       stopAutoSlide()
       setCurrentSlide((prev) => (prev + 1) % testimonials.length)
       startAutoSlide()
     }
   
     const prevSlide = () => {
       stopAutoSlide()
       setCurrentSlide(
         (prev) => (prev - 1 + testimonials.length) % testimonials.length
       )
       startAutoSlide()
     }
   
     /* ---------------- ACCORDION ---------------- */
   
     const toggleAccordion1 = (id: string) => {
       setActiveAccordion1(activeAccordion1 === id ? null : id)
     }
   
     const toggleAccordion2 = (id: string) => {
       setActiveAccordion2(activeAccordion2 === id ? null : id)
     }
   

    return (
        <>
            <InnerPageHeader />
          
            <Breadcrumb title="Product Cement" subtitle="Products Power Progress Explore Our Offer." image='/assets/new-images/bm/bm-3.jpeg' />
            
            <div className="product-details-top-area pt-120 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row gy-md-5 gy-4 align-items-lg-end">
                        <div className="col-lg-8 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="details-content">
                                <h2>Kavalakat Reliable Cement Supplier in Kerala</h2>
                                <p style={{textAlign:"justify"}}>We handle 11,000–13,000 MT of cement every month across trade and C&F operations. As C&F
agents for JSW Cement (Palakkad) and distributors for Chettinad Anjani Cement (Thrissur &
Idukki), we ensure uninterrupted cement supply across Kerala. We also deal in Ultratech Cement.




</p>
                                <p style={{textAlign:"justify"}}>We function as both C&F Agent and Distributor for Ultratech Building Products Division
(Construction Chemicals) in Thrissur.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="product-img">
                                <Image width={340} height={270} src="/assets/new-images/products/p-1.jpeg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1: Product Details FAQ */}
            <div className="product-dt-faq-section mb-120">
                <div className="container">
                    <div className="product-dt-faq-wrapper">
                        <div className="row g-0">
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="product-dt-faq-img">
                                    <Image 
                                        width={650} 
                                        height={650} 
                                        src="/assets/new-images/about-page/cement/cement-prodect-page.png" 
                                        alt="FAQ" 
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-content-area p-4">
                                    <h2 className="mb-4">Cement Products</h2>
                                    <div className="faq-wrap">
                                        <div className="accordion" id="accordionExample">
                                            {[
                                                {
                                                    id: 'collapseOne',
                                                    title: 'Top-Rated Dealer',
                                                    content: 'Recognized as a leading dealer in the region, we are known for consistent performance, strong market presence, and long-standing relationships with customers and suppliers.'
                                                },
                                                {
                                                    id: 'collapseTwo',
                                                    title: 'Customer-Focused Communication',
                                                    content: 'We maintain excellent cooperation and transparent communication with customers, ensuring smooth coordination, timely updates, and complete satisfaction at every stage.'
                                                },
                                                {
                                                    id: 'collapseThree',
                                                    title: 'Trust & Commitment in Service',
                                                    content: 'Our business is built on trust, reliability, and a strong commitment to service excellence, delivering dependable support and honest dealings in every transaction.'
                                                },
                                                {
                                                    id: 'collapseFour',
                                                    title: 'Best Quality Products',
                                                    content: 'Associated with top-rated and leading brands, we supply high-quality products that meet industry standards for strength, durability, and performance.'
                                                }
                                            ].map((item, index) => (
                                                <div className="accordion-item mb-3 animated-accordion" key={item.id}>
                                                    <h2 className="accordion-header">
                                                        <button 
                                                            className={`accordion-button ${activeAccordion1 === item.id ? '' : 'collapsed'}`}
                                                            type="button"
                                                            onClick={() => toggleAccordion1(item.id)}
                                                        >
                                                            {item.title}
                                                            
                                                        </button>
                                                    </h2>
                                                    <div 
                                                        className={`accordion-collapse ${activeAccordion1 === item.id ? 'show' : ''}`}
                                                        style={{
                                                            maxHeight: activeAccordion1 === item.id ? '500px' : '0',
                                                            overflow: 'hidden',
                                                            transition: 'max-height 0.4s ease-in-out'
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
                            <span>Contact With Us
                            </span>
                            <span>Contact With Us
                            </span>
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

            {/* Section 2: Why Choose Us */}
{/* <div className="home2-why-choose-us-section two mb-120">
  <div className="container">
    <div className="row g-4 align-items-center justify-content-between mb-60">
      <div className="col-xl-6 col-lg-8">
        <div className="section-title">
          <span>Product Features</span>
          <h2>Cold-Rolled Coil Products</h2>
        </div>
      </div>
    </div>

    <div className="row justify-content-xl-end">
      <div className="col-xl-11">
        <div className="faq-content">
          <div className="accordion" id="accordionTravel">

            {[
              {
                id: 'travelcollapseOne',
                num: '01',
                title: 'Solutions Expert',
                img: '/assets/img/home2/why-choose-img1.jpg',
                content:
                  'We provide expert solutions tailored to industry needs, ensuring efficiency, reliability, and high-performance materials for every application.'
              },
              {
                id: 'travelcollapseTwo',
                num: '02',
                title: 'Trusted Partner',
                img: '/assets/img/home2/why-choose-img2.jpg',
                content:
                  'As a trusted partner, we prioritize transparency, consistency, and long-term relationships built on quality and trust.'
              },
              {
                id: 'travelcollapseThree',
                num: '03',
                title: 'Driving Innovation',
                img: '/assets/img/home2/why-choose-img3.jpg',
                content:
                  'We continuously innovate through advanced processes and modern technology to deliver superior product performance.'
              },
              {
                id: 'travelcollapseFour',
                num: '04',
                title: 'Material Science Excellence',
                img: '/assets/img/home2/why-choose-img4.jpg',
                content:
                  'Our focus on material science enhances durability, strength, and sustainability across all product lines.'
              },
              {
                id: 'travelcollapseFive',
                num: '05',
                title: 'Quality as Standard',
                img: '/assets/img/home2/why-choose-img5.jpg',
                content:
                  'Every product meets strict quality standards, ensuring consistent performance and long-term reliability.'
              }
            ].map((item) => (
              <div className="accordion-item mb-3 animated-accordion" key={item.id}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      activeAccordion2 === item.id ? '' : 'collapsed'
                    }`}
                    type="button"
                    onClick={() => toggleAccordion2(item.id)}
                  >
                    <span className="accordion-number">{item.num}.</span>
                    {item.title}
                  </button>
                </h2>

                <div
                  className={`accordion-collapse ${
                    activeAccordion2 === item.id ? 'show' : ''
                  }`}
                  style={{
                    maxHeight: activeAccordion2 === item.id ? '600px' : '0',
                    opacity: activeAccordion2 === item.id ? 1 : 0,
                    transform:
                      activeAccordion2 === item.id
                        ? 'translateY(0)'
                        : 'translateY(-10px)',
                    overflow: 'hidden',
                    transition: 'all 0.45s ease'
                  }}
                >
                  <div className="accordion-body">
                    <div className="content-wrapper">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={283}
                        height={170}
                        className="feature-img"
                      />

                      <div className="text-content">
                        <p>{item.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
 {/* Steel Partners Section with Proper Heading Structure */}
<div className="steel-partners-section mb-120">
  <div className="container">
    {/* Section Header - Matching Screenshot Style */}
    <div className="row mb-50">
      <div className="col-12">
        <div className="section-title-wrapper">
         
          <h2 className="section-main-title">Trusted Cement Brands We Supply</h2>
        </div>
      </div>
    </div>
    
    {/* Cards Grid - Smaller Cards */}
    <div className="row g-4 justify-content-center">
      {companies.map((company, index) => (
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

    /* Section Title Wrapper */
    .section-title-wrapper {
      text-align: left;
      margin-bottom: 40px;
    }

    /* Section Subtitle - Blue uppercase text */
    .section-subtitle {
      color: #3c35ff;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.875rem;
      display: block;
      margin-bottom: 12px;
      font-family: var(--font-manrope);
      position: relative;
    }

    .section-subtitle::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 60px;
      height: 3px;
      background: #3c35ff;
    }

    /* Section Main Title - Large black text */
    .section-main-title {
      font-size: 3rem;
      font-weight: 800;
      color: #000000;
      margin: 0;
      line-height: 1.2;
      font-family: var(--font-manrope);
      letter-spacing: -0.5px;
    }

    /* Card Wrapper - Smaller size */
    .card-wrapper-small {
      height: 420px;
      width: 100%;
    }

    /* Responsive adjustments */
    @media (max-width: 992px) {
      .card-wrapper-small {
        height: 400px;
      }

      .section-main-title {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 768px) {
      .card-wrapper-small {
        height: 380px;
      }

      .steel-partners-section {
        padding: 60px 0;
      }

      .section-main-title {
        font-size: 2rem;
      }

      .section-subtitle {
        font-size: 0.8rem;
        letter-spacing: 1.5px;
      }

      .section-title-wrapper {
        text-align: center;
      }

      .section-subtitle::before {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    @media (max-width: 576px) {
      .card-wrapper-small {
        height: auto;
        min-height: 360px;
      }

      .section-main-title {
        font-size: 1.75rem;
      }

      .section-subtitle {
        font-size: 0.75rem;
      }
    }
  `}</style>
</div>


          {/* Section 3: Testimonials */}
            <div className="home1-testimonial-section ">
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
                                        <span className="d-block fw-bold mb-2">{testimonials[currentSlide].quote}</span>
                                        <p className="mb-4">{testimonials[currentSlide].text}</p>
                                        <div className="author-area d-flex align-items-center gap-3">
                                            <div className="author-img">
                                                <Image width={50} height={50} src={testimonials[currentSlide].img} alt={testimonials[currentSlide].author} className="rounded-circle" />
                                            </div>
                                            <div className="author-content">
                                                <h5 className="mb-0">{testimonials[currentSlide].author}</h5>
                                                <span className="small text-muted">{testimonials[currentSlide].role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Enhanced Navigation Buttons */}
                                <div className="slider-btn-grp d-flex gap-3 mt-4 justify-content-center">
                                    <button 
                                        className="slider-btn testimonial-slider-prev"
                                        onClick={prevSlide}
                                        aria-label="Previous testimonial"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    
                                    {/* Slide Indicators */}
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
                                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <style>
    {`
    /* Layout */
.content-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 24px;
}

.feature-img {
  border-radius: 10px;
  flex-shrink: 0;
}

/* Text animation */
.text-content {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.4s ease;
}

.accordion-collapse.show .text-content {
  opacity: 1;
  transform: translateX(0);
}

/* Image animation */
.animated-accordion .feature-img {
  transform: scale(0.95);
  transition: transform 0.4s ease;
}

.animated-accordion .accordion-collapse.show .feature-img {
  transform: scale(1);
}

/* Mobile */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
}


.testimonial-card {
  animation: fadeSlide 0.6s ease;
}

@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

`}
</style>

          
            <FooterTop />
            <Footer1 />
        </>
    )
}

export default ProductPage