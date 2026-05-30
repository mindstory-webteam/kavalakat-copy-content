import FooterTop from '@/components/FooterTop'
import HomepageBlogSection from '@/components/HomepageBlogSection'
import InnerPageHeader from '@/components/InnerPageHeader'
import React from 'react'
import Footer1 from '@/components/Footer'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    image: '/assets/new-images/projects/project-1.jpg',
    logo: '/assets/new-images/clints/1 (1).jpg',
    name: 'Kochi Metro Rail Ltd',
    tag: 'Phase 1',
    category: 'Infrastructure',
    location: 'Kochi, Kerala',
    description:
      'Supplied certified TMT rebars, MS structural steel and cement for Phase 1 of the iconic Kochi Metro Rail corridor — one of Kerala\'s largest urban transit projects.',
  },
  {
    id: 2,
    image: '/assets/new-images/projects/project-2.jpg',
    logo: '/assets/new-images/clints/10.jpg',
    name: 'Kochi Metro Rail Ltd',
    tag: 'Phase 2 — Ongoing',
    category: 'Infrastructure',
    location: 'Kochi, Kerala',
    description:
      'Continuing our partnership as a key material supplier for Phase 2 of Kochi Metro, delivering SAIL SEQR TMT rebars and construction chemicals on schedule.',
  },
  {
    id: 3,
    image: '/assets/new-images/projects/project-3.jpg',
    logo: '/assets/new-images/clints/11.jpg',
    name: 'Power Grid Corporation of India',
    tag: 'Thrissur',
    category: 'Industrial',
    location: 'Thrissur, Kerala',
    description:
      'Provided structural steel, MS angles and channels for Power Grid Corporation\'s high-voltage transmission infrastructure works in Thrissur district.',
  },
  {
    id: 4,
    image: '/assets/new-images/projects/project-1.jpg',
    logo: '/assets/new-images/clints/12.jpg',
    name: 'Regional Cancer Centre',
    tag: 'Healthcare',
    category: 'Healthcare',
    location: 'Trivandrum, Kerala',
    description:
      'Supplied premium quality cement, steel and construction chemicals to the Regional Cancer Centre — a critical healthcare institution serving thousands across Kerala.',
  },
  {
    id: 5,
    image: '/assets/new-images/projects/project-2.jpg',
    logo: '/assets/new-images/clints/14.jpg',
    name: 'Steel Industries Kerala Ltd',
    tag: 'Govt of Kerala',
    category: 'Industrial',
    location: 'Kerala',
    description:
      'Long-standing material supply partnership with this Government of Kerala enterprise — delivering ISI-certified TMT bars and structural steel products.',
  },
  {
    id: 6,
    image: '/assets/new-images/projects/project-3.jpg',
    logo: '/assets/new-images/clints/15.jpg',
    name: 'Pathaharam Bridge',
    tag: 'Champakulam',
    category: 'Infrastructure',
    location: 'Alappuzha, Kerala',
    description:
      'Supplied MS structural steel and TMT rebars for the Pathaharam Bridge project at Champakulam, Alappuzha — a key backwater connectivity project.',
  },
  {
    id: 7,
    image: '/assets/new-images/projects/project-1.jpg',
    logo: '/assets/new-images/clints/16.jpg',
    name: 'Olympian Suresh Babu Stadium',
    tag: 'Sports',
    category: 'Sports',
    location: 'Kollam, Kerala',
    description:
      'Delivered high-grade TMT bars, cement and construction materials for the development of the Olympian Suresh Babu Stadium, honoring Kerala\'s athletic legacy.',
  },
  {
    id: 8,
    image: '/assets/new-images/projects/project-2.jpg',
    logo: '/assets/new-images/clints/17.jpg',
    name: 'Comtrust Charitable Eye Hospital',
    tag: 'Healthcare',
    category: 'Healthcare',
    location: 'Thalassery, Kannur',
    description:
      'Supplied complete construction material requirements including cement, steel and abrasives for this charitable eye hospital serving the Malabar region.',
  },
  {
    id: 9,
    image: '/assets/new-images/projects/project-3.jpg',
    logo: '/assets/new-images/clints/18.jpg',
    name: 'Ahalia Eye Hospital',
    tag: 'Healthcare',
    category: 'Healthcare',
    location: 'Palakkad, Kerala',
    description:
      'Provided structural steel, TMT rebars and Dulux paints for expansion works at Ahalia Eye Hospital — a premier medical institution in Palakkad.',
  },
  {
    id: 10,
    image: '/assets/new-images/projects/project-1.jpg',
    logo: '/assets/new-images/clints/19.jpg',
    name: 'Kerala Infrastructure Investment Fund Board',
    tag: 'KIIFB',
    category: 'Infrastructure',
    location: 'Kerala-wide',
    description:
      'Ongoing material supply for multiple KIIFB-funded infrastructure development projects spread across Kerala — roads, bridges and public facilities.',
  },
  {
    id: 11,
    image: '/assets/new-images/projects/project-2.jpg',
    logo: '/assets/new-images/clints/20.jpg',
    name: 'Public Works Division',
    tag: 'PWD',
    category: 'Government',
    location: 'Kerala-wide',
    description:
      'Trusted material supplier for Public Works Division projects across all districts of Kerala — delivering certified steel, cement and construction materials.',
  },
]

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '45+', label: 'Years of Excellence' },
  { number: '200+', label: 'Industry Partners' },
  { number: '15+', label: 'Skilled Professionals' },
]

const page = () => {
  return (
    <>
      <InnerPageHeader />
      <Breadcrumb
        title="Our Projects"
        subtitle="Building Kerala's Future — Trusted by Government, Healthcare & Infrastructure Leaders."
        image="/assets/new-images/bm/bm-2.jpeg"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .psc-page {
          --font-manrope:     "Manrope", sans-serif;
          --font-dmsans:      "DM Sans", sans-serif;
          --white-color:      #ffffff;
          --dark-title-color: #1C1A1E;
          --title-color2:     #0160b2;
          --text-color:       #00000099;
          --primary-color1:   #0160b2;
          --borders-color:    #eee;
          --bg-light:         #f8f9fc;
        }

        /* ── Stats band ── */
        .psc-stats {
          background: var(--primary-color1);
          padding: 50px 0;
        }
        .psc-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .psc-stat {
          text-align: center;
          padding: 0 24px;
          position: relative;
        }
        .psc-stat + .psc-stat::before {
          content: '';
          position: absolute;
          left: 0; top: 18%; bottom: 18%;
          width: 1px;
          background: rgba(255,255,255,0.2);
        }
        .psc-stat-num {
          font-family: var(--font-manrope);
          font-size: clamp(32px, 3.8vw, 50px);
          font-weight: 800;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }
        .psc-stat-lbl {
          font-family: var(--font-dmsans);
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        @media (max-width: 640px) {
          .psc-stats-grid { grid-template-columns: repeat(2,1fr); gap: 36px 0; }
          .psc-stat:nth-child(odd)::before { display: none; }
        }

        /* ── Section ── */
        .psc-section {
          font-family: var(--font-dmsans);
          background: var(--bg-light);
          padding: 100px 0 120px;
        }

        /* ── Header ── */
        .psc-hdr {
          text-align: center;
          margin-bottom: 64px;
        }
        .psc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-manrope);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--primary-color1);
          margin-bottom: 14px;
        }
        .psc-eyebrow::before,
        .psc-eyebrow::after {
          content: '';
          width: 26px; height: 1.5px;
          background: var(--primary-color1);
          flex-shrink: 0;
        }
        .psc-hdr h2 {
          font-family: var(--font-manrope);
          font-size: clamp(30px, 4vw, 50px);
          font-weight: 800;
          color: var(--dark-title-color);
          line-height: 1.1;
          margin: 0 0 16px;
          letter-spacing: -0.025em;
        }
        .psc-hdr h2 span { color: var(--title-color2); }
        .psc-hdr p {
          font-size: 15px;
          color: var(--text-color);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.76;
        }

        /* ── Grid ── */
        .psc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        /* Regular cards */
        .psc-card {
          background: #fff;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(1,96,178,0.1), 0 1px 4px rgba(0,0,0,0.04);
          transition: transform 0.38s cubic-bezier(0.16,1,0.3,1), box-shadow 0.38s;
          display: flex;
          flex-direction: column;
        }
        .psc-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(1,96,178,0.18), 0 4px 12px rgba(0,0,0,0.07);
        }

        /* Image wrapper */
        .psc-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 10;
        }
        .psc-img-wrap img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }
        .psc-card:hover .psc-img-wrap img { transform: scale(1.06); }
        .psc-img-wrap::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(1,96,178,0.58) 0%, transparent 55%);
          opacity: 0.5;
          transition: opacity 0.38s;
        }
        .psc-card:hover .psc-img-wrap::after { opacity: 0.78; }

        /* Tag badge */
        .psc-badge {
          position: absolute;
          top: 14px; left: 14px;
          z-index: 2;
          font-family: var(--font-manrope);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #fff;
          background: var(--primary-color1);
          padding: 5px 13px;
          border-radius: 100px;
          box-shadow: 0 3px 12px rgba(1,96,178,0.4);
        }

        /* Arrow button (hover reveal) */
        .psc-arr {
          position: absolute;
          bottom: 14px; right: 14px;
          z-index: 2;
          width: 38px; height: 38px;
          background: #fff;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          opacity: 0;
          transform: translateY(8px) scale(0.85);
          transition: opacity 0.28s, transform 0.28s;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }
        .psc-card:hover .psc-arr { opacity: 1; transform: translateY(0) scale(1); }
        .psc-arr svg { fill: var(--primary-color1); }

        /* Card body */
        .psc-body {
          padding: 20px 22px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* client row */
        .psc-client {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--borders-color);
        }
        .psc-logo {
          width: 42px; height: 42px;
          border-radius: 9px;
          border: 1px solid var(--borders-color);
          background: #f5f5f5;
          flex-shrink: 0;
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .psc-logo img { width: 100%; height: 100%; object-fit: contain; }

        .psc-client-info h5 {
          font-family: var(--font-manrope);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--dark-title-color);
          margin: 0 0 2px;
          line-height: 1.3;
        }
        .psc-client-info span {
          font-size: 12px;
          color: var(--text-color);
          display: flex; align-items: center; gap: 4px;
        }

        /* description */
        .psc-body p {
          font-size: 14px;
          line-height: 1.72;
          color: var(--text-color);
          margin: 0 0 16px;
          flex: 1;
        }

        /* view link */
        .psc-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-manrope);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary-color1);
          text-decoration: none;
          transition: gap 0.2s;
        }
        .psc-link:hover { gap: 11px; }
        .psc-link svg { fill: var(--primary-color1); transition: transform 0.2s; }
        .psc-link:hover svg { transform: translate(2px,-2px); }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .psc-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 640px) {
          .psc-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 580px) {
          .psc-section { padding: 70px 0 80px; }
          .psc-hdr { margin-bottom: 50px; }
        }
      `}</style>

      {/* ── Stats Band ── */}
      <div className="psc-stats psc-page">
        <div className="container">
          <div className="psc-stats-grid">
            {stats.map((s, i) => (
              <div className="psc-stat" key={i}>
                <div className="psc-stat-num">{s.number}</div>
                <div className="psc-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Projects Section ── */}
      <section className="psc-section psc-page" id="scroll-section">
        <div className="container">

          {/* Header */}
          <div className="psc-hdr wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            
            <h2>Projects That Define Us</h2>
            <p>
              From metro rail corridors to government hospitals — Kavalakat has
              been the trusted material supply partner for Kerala's most
              significant infrastructure developments.
            </p>
          </div>

          {/* Grid — all cards uniform */}
          <div className="psc-grid">
            {projects.map((p, i) => (
              <div
                className="psc-card wow animate fadeInUp"
                data-wow-delay={`${200 + (i % 3) * 100}ms`}
                data-wow-duration="1500ms"
                key={p.id}
              >
                <div className="psc-img-wrap">
                  <Image width={600} height={380} src={p.image} alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className="psc-badge">{p.tag}</span>
                  <div className="psc-arr">
                    <svg width={13} height={13} viewBox="0 0 35 35">
                      <path d="M0.173267 0H34.9999V6.51953L6.58414 34.9996L0 28.4801L19.4059 9.2646L0.173267 9.43616V0Z"/>
                      <path d="M34.999 34.9996V13.0391L25.6426 22.3037V34.9996H34.999Z"/>
                    </svg>
                  </div>
                </div>
                <div className="psc-body">
                  <div className="psc-client">
                    <div className="psc-logo">
                      <Image width={42} height={42} src={p.logo} alt={p.name}/>
                    </div>
                    <div className="psc-client-info">
                      <h5>{p.name}</h5>
                      <span>
                        <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {p.location}
                      </span>
                    </div>
                  </div>
                  <p>{p.description}</p>
                  <Link href="/contact" className="psc-link">
                    Get In Touch
                    <svg width={12} height={12} viewBox="0 0 35 35">
                      <path d="M0.173267 0H34.9999V6.51953L6.58414 34.9996L0 28.4801L19.4059 9.2646L0.173267 9.43616V0Z"/>
                      <path d="M34.999 34.9996V13.0391L25.6426 22.3037V34.9996H34.999Z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <HomepageBlogSection />
      <FooterTop />
      <Footer1 />
    </>
  )
}

export default page