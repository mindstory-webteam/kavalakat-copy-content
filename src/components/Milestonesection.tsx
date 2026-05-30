"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const milestones: Milestone[] = [
  {
    year: "1976",
    title: "The Beginning",
    description:
      "Established \"Kavalakat Traders\" for cement trading at Puttenpeedika, Thrissur — the founding chapter of a legacy built on trust.",
    image: "/assets/new-images/projects/project-1.jpg",
    tags: ["Cement", "Thrissur"],
  },
  {
    year: "1985",
    title: "Expanding Reach",
    description:
      "Opened a cement trading shop at Kandassankadavu, Thrissur, deepening our presence in the region.",
    image: "/assets/new-images/projects/project-2.jpg",
    tags: ["Cement", "Retail"],
  },
  {
    year: "1989",
    title: "Into Steel",
    description:
      "Established \"Kavalakat Agencies\" to trade in Iron and Steel products, marking our entry into the steel sector.",
    image: "/assets/new-images/projects/project-3.jpg",
    tags: ["Steel", "Iron"],
  },
  {
    year: "1994",
    title: "Wholesale Steel Hub",
    description:
      "Mr. K F Jose opened a Wholesale and Retail outlet of \"Kavalakat Agencies\" in Thrissur Town, trading in TMT Bars, MS Angle, MS Flat, MS Channels, MS Square, MS Rounds and more.",
    image: "/assets/new-images/projects/project-1.jpg",
    tags: ["TMT Bars", "Wholesale"],
  },
  {
    year: "1998",
    title: "Into Palakkad",
    description:
      "Established \"Kavalakat Associates\" at Mannapullikkavu in Palakkad district to deal in cement, broadening our geographic footprint.",
    image: "/assets/new-images/projects/project-2.jpg",
    tags: ["Cement", "Palakkad"],
  },
  {
    year: "2010",
    title: "New Leadership",
    description:
      "Mr. K F Jose takes over as Chairman of Kavalakat Group, steering the company toward accelerated growth.",
    image: "/assets/new-images/projects/project-3.jpg",
    tags: ["Leadership", "Group"],
  },
  {
    year: "2011",
    title: "Ernakulam Branch",
    description:
      "Opened a branch of \"Kavalakat Traders\" at Angamaly in Ernakulam District, extending our network across central Kerala.",
    image: "/assets/new-images/projects/project-1.jpg",
    tags: ["Ernakulam", "Expansion"],
  },
  {
    year: "2012",
    title: "Pigment Blending Unit",
    description:
      "Commissioned a blending unit for pigments at Ozhalappathy in Palakkad District, producing pigments in lighter shades of black and grey.",
    image: "/assets/new-images/projects/project-2.jpg",
    tags: ["Pigments", "Manufacturing"],
  },
  {
    year: "2013",
    title: "De-Coiling Operations",
    description:
      "Started a de-coiling unit in Kuttanellur, Thrissur under \"Kavalakat Agencies\" along NH-47 Bye Pass. Now home to 3 de-coiling machines for Vizag TMT rebars.",
    image: "/assets/new-images/projects/project-3.jpg",
    tags: ["De-Coiling", "TMT"],
  },
  {
    year: "2017",
    title: "Dulux Paints Distributor",
    description:
      "Appointed as the Distributor of Akzo Nobel (Dulux) Paints in Thrissur and parts of Palakkad and Malappuram districts.",
    image: "/assets/new-images/projects/project-1.jpg",
    tags: ["Paints", "Dulux"],
  },
  {
    year: "2018",
    title: "Next Generation Joins",
    description:
      "Mr Francis Jose S/O K F Jose joins the family business, bringing fresh energy and vision to Kavalakat Group.",
    image: "/assets/new-images/projects/project-2.jpg",
    tags: ["Family", "Legacy"],
  },
  {
    year: "2018",
    title: "Kumily Branch & Chettinad",
    description:
      "Opened a branch of \"Kavalakat Traders\" at Kumily in Idukki District after being appointed as Distributor of Chettinad Anjani cement for Thrissur and Idukki.",
    image: "/assets/new-images/projects/project-3.jpg",
    tags: ["Idukki", "Cement"],
  },
  {
    year: "2019",
    title: "Kavalakat Metals — Logistics",
    description:
      "Established \"Kavalakat Metals\", a Logistics firm registered to better serve the steel and cement industry. Presently transporting JSW Cement, Penna Cement and Bharathi Cement.",
    image: "/assets/new-images/projects/project-1.jpg",
    tags: ["Logistics", "Transport"],
  },
  {
    year: "2020",
    title: "Kamachi TMT Distributor",
    description:
      "Appointed as the distributor of Kamachi TMT for Thrissur, Palakkad, Calicut and Malappuram Districts.",
    image: "/assets/new-images/projects/project-2.jpg",
    tags: ["Kamachi", "TMT"],
  },
  {
    year: "2021",
    title: "Coimbatore Expansion",
    description:
      "Opened a branch of \"Kavalakat Agencies\" at Coimbatore District in Tamil Nadu, stepping beyond Kerala's borders.",
    image: "/assets/new-images/projects/project-3.jpg",
    tags: ["Tamil Nadu", "Expansion"],
  },
  {
    year: "2021",
    title: "Palakkad Steel Yard",
    description:
      "Started a Steel Yard and De-coiling unit in Ozhalappathy, Palakkad under \"Kavalakat Agencies\" — wholesale trading of TMT, MS Angle, MS Flats, MS Square, MS Rounds, HR Plates and Polish Rods.",
    image: "/assets/new-images/projects/project-1.jpg",
    tags: ["Steel Yard", "Palakkad"],
  },
  {
    year: "2022",
    title: "Ultratech C&F Partner",
    description:
      "Appointed as the C&F of Ultratech Building Products Division in Thrissur, reinforcing our position as a premier channel partner.",
    image: "/assets/new-images/projects/project-2.jpg",
    tags: ["Ultratech", "C&F"],
  },
  {
    year: "2022",
    title: "Trivandrum Branch",
    description:
      "Opened a branch of \"Kavalakat Agencies\" in Trivandrum District, completing a full-state presence in Kerala.",
    image: "/assets/new-images/projects/project-3.jpg",
    tags: ["Trivandrum", "Kerala"],
  },
  {
    year: "2022",
    title: "KAVALAKAT TMT Brand",
    description:
      "Introduced our own brand of TMT steel bars — \"KAVALAKAT TMT\" — in the Kerala market, a proud milestone in our manufacturing journey.",
    image: "/assets/new-images/projects/project-1.jpg",
    tags: ["Own Brand", "TMT"],
  },
  {
    year: "2022",
    title: "Alite Enclaves — Hospitality",
    description:
      "Launched our Hospitality division, \"Alite Enclaves\", offering Independent Villas and Flats for Daily and Short Stay rentals — presently hosting about 31 units.",
    image: "/assets/new-images/projects/project-2.jpg",
    tags: ["Hospitality", "Villas"],
  },
  {
    year: "2023",
    title: "SHYAM STEEL — State Distributor",
    description:
      "Appointed as the Distributor of \"SHYAM STEEL INDUSTRIES\" for the entire state of Kerala.",
    image: "/assets/new-images/projects/project-3.jpg",
    tags: ["Shyam Steel", "Kerala"],
  },
  {
    year: "2024",
    title: "Birla Opus C&F Agent",
    description:
      "Appointed C&F Agent for \"Birla Opus\" Paint Division of Aditya Birla Group for Thrissur, Palakkad and Malappuram.",
    image: "/assets/new-images/projects/project-1.jpg",
    tags: ["Birla Opus", "Paints"],
  },
  {
    year: "2024",
    title: "SAIL SEQR TMT — Exclusive Distributor",
    description:
      "Appointed exclusive Authorized Distributor of Steel Authority of India Ltd for \"SAIL SEQR TMT Rebars\" covering areas from Thrissur to Trivandrum districts.",
    image: "/assets/new-images/projects/project-2.jpg",
    tags: ["SAIL", "Exclusive"],
  },
  {
    year: "2025",
    title: "Neyy Vedyam — Fine Dining",
    description:
      "Venturing into the F&B sector, we opened \"Neyy Vedyam\" — a 72-seater Fine Dine Pure Vegetarian restaurant in Thrissur, celebrating Kerala's culinary heritage.",
    image: "/assets/new-images/projects/project-3.jpg",
    tags: ["F&B", "Restaurant"],
  },
];

const MilestoneSection: React.FC = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mil-in");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const rows = wrapRef.current?.querySelectorAll(".mil-row");
    rows?.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

        /* ── CSS variables (from your root) ── */
        .mil-section {
          --font-manrope: "Manrope", sans-serif;
          --font-dmsans:  "DM Sans",  sans-serif;
          --white-color:       #ffffff;
          --dark-title-color:  #1C1A1E;
          --title-color2:      #0160b2;
          --text-color:        #00000099;
          --primary-color1:    #0160b2;
          --borders-color:     #eee;
        }

        /* ── Section ── */
        .mil-section {
          background: #f8f9fc;
          padding: 100px 0 120px;
          overflow: hidden;
          position: relative;
          font-family: var(--font-dmsans);
        }
        .mil-section::after {
          content: '';
          position: absolute;
          top: -120px; right: -120px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(1,96,178,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Header ── */
        .mil-hdr {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
          z-index: 1;
        }
        .mil-hdr h2 {
          font-family: var(--font-manrope);
          font-size: clamp(32px, 4.5vw, 54px);
          font-weight: 800;
          color: var(--dark-title-color);
          line-height: 1.1;
          margin: 0 0 18px;
          letter-spacing: -0.025em;
        }
        .mil-hdr h2 span {
          color: var(--title-color2);
          position: relative;
        }
        .mil-hdr h2 span::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0; right: 0;
          height: 3px;
          background: var(--primary-color1);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          animation: mil-underline 0.7s cubic-bezier(0.16,1,0.3,1) 0.9s forwards;
        }
        @keyframes mil-underline { to { transform: scaleX(1); } }

        .mil-hdr p {
          font-size: 15px;
          color: var(--text-color);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.78;
        }

        /* ── Spine container ── */
        .mil-wrap {
          position: relative;
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .mil-line {
          position: absolute;
          left: 50%;
          top: 30px; bottom: 30px;
          width: 2px;
          transform: translateX(-50%);
          background: linear-gradient(
            to bottom,
            transparent,
            #d0dff0 5%,
            #d0dff0 95%,
            transparent
          );
        }

        /* ── Row ── */
        .mil-row {
          display: grid;
          grid-template-columns: 1fr 88px 1fr;
          align-items: center;
          margin-bottom: 88px;
          position: relative;
        }
        .mil-row:last-child { margin-bottom: 0; }

        .mil-row:nth-child(odd)  .mil-card-col { grid-column: 1; grid-row: 1; }
        .mil-row:nth-child(odd)  .mil-body-col { grid-column: 3; grid-row: 1; }
        .mil-row:nth-child(even) .mil-card-col { grid-column: 3; grid-row: 1; }
        .mil-row:nth-child(even) .mil-body-col { grid-column: 1; grid-row: 1; }
        .mil-node-col { grid-column: 2; grid-row: 1; }

        /* ── Centre node ── */
        .mil-node-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 3;
        }
        .mil-node {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: var(--white-color);
          border: 2px solid #d0dff0;
          display: flex; align-items: center; justify-content: center;
          position: relative;
          transition: border-color 0.45s, box-shadow 0.45s, transform 0.45s;
          z-index: 2;
        }
        .mil-node::before {
          content: '';
          position: absolute;
          inset: 7px;
          border-radius: 50%;
          background: var(--primary-color1);
          transform: scale(0);
          transition: transform 0.45s cubic-bezier(0.34,1.56,0.64,1);
        }
        .mil-row.mil-in .mil-node {
          border-color: var(--primary-color1);
          box-shadow: 0 0 0 8px rgba(1,96,178,0.1), 0 4px 20px rgba(1,96,178,0.2);
          transform: scale(1.1);
        }
        .mil-row.mil-in .mil-node::before { transform: scale(1); }

        .mil-node-num {
          font-family: var(--font-manrope);
          font-size: 12px;
          font-weight: 800;
          color: var(--white-color);
          position: absolute;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s ease 0.35s;
        }
        .mil-row.mil-in .mil-node-num { opacity: 1; }

        /* year pill */
        .mil-year {
          margin-top: 10px;
          font-family: var(--font-manrope);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--white-color);
          background: var(--primary-color1);
          padding: 4px 12px;
          border-radius: 20px;
          white-space: nowrap;
          box-shadow: 0 4px 14px rgba(1,96,178,0.3);
          opacity: 0;
          transform: translateY(8px) scale(0.9);
          transition: opacity 0.4s ease 0.4s, transform 0.4s ease 0.4s;
        }
        .mil-row.mil-in .mil-year { opacity: 1; transform: translateY(0) scale(1); }

        /* dashed connector */
        .mil-dash {
          position: absolute;
          top: 26px; height: 1px;
          background: repeating-linear-gradient(
            90deg,
            var(--primary-color1) 0, var(--primary-color1) 4px,
            transparent 4px, transparent 10px
          );
          width: 0;
          transition: width 0.65s cubic-bezier(0.4,0,0.2,1) 0.3s;
          z-index: 1;
        }
        .mil-row:nth-child(odd)  .mil-dash { left:  calc(50% + 44px); }
        .mil-row:nth-child(even) .mil-dash { right: calc(50% + 44px); }
        .mil-row.mil-in .mil-dash { width: calc(50% - 80px); }

        /* ── Image card ── */
        .mil-card-col { position: relative; }
        .mil-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(1,96,178,0.1), 0 2px 8px rgba(0,0,0,0.06);
          background: var(--white-color);
          transition: box-shadow 0.4s, transform 0.4s;
        }
        .mil-row:nth-child(odd)  .mil-card { margin-right: 30px; }
        .mil-row:nth-child(even) .mil-card { margin-left:  30px; }
        .mil-card:hover {
          box-shadow: 0 16px 56px rgba(1,96,178,0.18), 0 4px 12px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }
        .mil-card img {
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }
        .mil-card:hover img { transform: scale(1.04); }
        .mil-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(1,96,178,0.5) 0%, transparent 55%);
          z-index: 1;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .mil-card:hover::before { opacity: 1; }

        /* year stamp on image */
        .mil-stamp {
          position: absolute;
          top: 16px; z-index: 2;
          font-family: var(--font-manrope);
          font-size: 18px; font-weight: 800;
          letter-spacing: 0.04em;
          color: var(--white-color);
          background: var(--primary-color1);
          padding: 6px 14px;
          border-radius: 6px;
          box-shadow: 0 4px 14px rgba(1,96,178,0.4);
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.4s ease 0.55s, transform 0.4s ease 0.55s;
        }
        .mil-row:nth-child(odd)  .mil-stamp { left:  16px; }
        .mil-row:nth-child(even) .mil-stamp { right: 16px; }
        .mil-row.mil-in .mil-stamp { opacity: 1; transform: translateY(0); }

        /* bottom sweep bar */
        .mil-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: var(--primary-color1);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.55s ease 0.4s;
          z-index: 3;
        }
        .mil-row.mil-in .mil-card::after { transform: scaleX(1); }

        /* ── Text body ── */
        .mil-body-col { padding: 0 16px; }
        .mil-row:nth-child(even) .mil-body-col { text-align: right; }

        .mil-body-col h3 {
          font-family: var(--font-manrope);
          font-size: clamp(19px, 2vw, 26px);
          font-weight: 800;
          color: var(--dark-title-color);
          line-height: 1.22;
          margin: 0 0 12px;
          letter-spacing: -0.018em;
        }
        .mil-body-col p {
          font-family: var(--font-dmsans);
          font-size: 14.5px;
          line-height: 1.78;
          color: var(--text-color);
          margin: 0 0 18px;
        }

        /* chips */
        .mil-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .mil-row:nth-child(even) .mil-chips { justify-content: flex-end; }
        .mil-chip {
          font-family: var(--font-manrope);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--primary-color1);
          background: rgba(1,96,178,0.07);
          border: 1px solid rgba(1,96,178,0.18);
          padding: 4px 12px;
          border-radius: 20px;
          transition: background 0.22s, color 0.22s, border-color 0.22s;
          cursor: default;
        }
        .mil-chip:hover {
          background: var(--primary-color1);
          color: var(--white-color);
          border-color: var(--primary-color1);
        }

        /* ══════════════════
           SCROLL ANIMATIONS
        ══════════════════ */
        .mil-row:nth-child(odd) .mil-card-col {
          opacity: 0; transform: translateX(-72px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .mil-row:nth-child(odd) .mil-body-col {
          opacity: 0; transform: translateX(52px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1) 0.16s, transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.16s;
        }
        .mil-row:nth-child(even) .mil-card-col {
          opacity: 0; transform: translateX(72px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .mil-row:nth-child(even) .mil-body-col {
          opacity: 0; transform: translateX(-52px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1) 0.16s, transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.16s;
        }
        .mil-node-col {
          opacity: 0; transform: translateY(16px);
          transition: opacity 0.5s ease 0.08s, transform 0.5s ease 0.08s;
        }
        .mil-row.mil-in .mil-card-col,
        .mil-row.mil-in .mil-body-col { opacity: 1; transform: translateX(0); }
        .mil-row.mil-in .mil-node-col  { opacity: 1; transform: translateY(0); }

        /* ── Footer ── */
        .mil-footer {
          text-align: center;
          margin-top: 80px;
          padding-top: 52px;
          border-top: 1px solid var(--borders-color);
        }
        .mil-footer p {
          font-family: var(--font-dmsans);
          font-size: 15px;
          color: var(--text-color);
          margin: 0;
        }
        .mil-footer a {
          font-weight: 600;
          color: var(--primary-color1);
          text-decoration: none;
          border-bottom: 1.5px solid rgba(1,96,178,0.3);
          padding-bottom: 1px;
          transition: border-color 0.2s, color 0.2s;
        }
        .mil-footer a:hover { color: #0146a0; border-color: var(--primary-color1); }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .mil-row {
            grid-template-columns: 1fr;
            margin-bottom: 60px;
          }
          .mil-line, .mil-dash { display: none; }

          .mil-row .mil-node-col,
          .mil-row:nth-child(even) .mil-node-col {
            grid-column: 1 !important; grid-row: 1;
            flex-direction: row;
            justify-content: flex-start;
            gap: 14px;
            margin-bottom: 14px;
          }
          .mil-year { opacity: 1 !important; transform: none !important; margin-top: 0; }
          .mil-row .mil-card-col,
          .mil-row:nth-child(even) .mil-card-col { grid-column: 1 !important; grid-row: 2; }
          .mil-row .mil-body-col,
          .mil-row:nth-child(even) .mil-body-col {
            grid-column: 1 !important; grid-row: 3;
            text-align: left !important; padding: 0;
          }
          .mil-row:nth-child(odd) .mil-card  { margin-right: 0; }
          .mil-row:nth-child(even) .mil-card { margin-left: 0; }
          .mil-row:nth-child(even) .mil-chips { justify-content: flex-start; }

          .mil-row:nth-child(odd) .mil-card-col,
          .mil-row:nth-child(even) .mil-card-col { transform: translateY(36px) !important; }
          .mil-row:nth-child(odd) .mil-body-col,
          .mil-row:nth-child(even) .mil-body-col { transform: translateY(24px) !important; }
          .mil-row.mil-in .mil-card-col,
          .mil-row.mil-in .mil-body-col { transform: translateY(0) !important; }
        }

        @media (max-width: 580px) {
          .mil-section { padding: 70px 0 80px; }
          .mil-hdr { margin-bottom: 52px; }
          .mil-wrap { padding: 0 16px; }
        }
      `}</style>

      <div className="mil-section">
        <div className="container">
          <div
            className="mil-hdr wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <h2>
              Efficient Production Workflow
            </h2>
            <p>
              Our step-by-step process ensures every order is handled with
              precision, quality, and on-time delivery from yard to site.
            </p>
          </div>
        </div>

        <div className="mil-wrap" ref={wrapRef}>
          <div className="mil-line" />

          {milestones.map((m, i) => (
            <div className="mil-row" key={i}>

              {/* Centre node */}
              <div className="mil-node-col">
                <div className="mil-node">
                  <span className="mil-node-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="mil-year">{m.year}</div>
              </div>

              {/* Dashed connector */}
              <div className="mil-dash" />

              {/* Image */}
              <div className="mil-card-col">
                <div className="mil-card">
                  <img src={m.image} alt={m.title} />
                  <div className="mil-stamp">{m.year}</div>
                </div>
              </div>

              {/* Text */}
              <div className="mil-body-col">
                <h3>{m.title}</h3>
                <p>{m.description}</p>
                <div className="mil-chips">
                  {m.tags.map((tag, j) => (
                    <span className="mil-chip" key={j}>{tag}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}

          {/* <div className="mil-footer">
            <p>
              Any Doubt Question &amp;{" "}
              <Link href="/contact">Contact</Link> With Us Any Time!
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MilestoneSection;