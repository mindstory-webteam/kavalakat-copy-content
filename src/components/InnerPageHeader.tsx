// src/components/InnerPageHeader.tsx
"use client";
import React, { useReducer, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// ─── State ────────────────────────────────────────────────────────────────────

interface State {
  activeMenu: string;
  isSidebarOpen: boolean;
  isRightSidebar: boolean;
  scrollY: number;
}

type Action =
  | { type: "TOGGLE_MENU"; menu: string }
  | { type: "TOGGLE_SIDEBAR" }
  | { type: "setScrollY"; payload: number }
  | { type: "TOGGLE_RIGHTSIDEBAR" };

const initialState: State = {
  activeMenu: "",
  isSidebarOpen: false,
  isRightSidebar: false,
  scrollY: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, activeMenu: state.activeMenu === action.menu ? "" : action.menu };
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen, activeMenu: "" };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_RIGHTSIDEBAR":
      return { ...state, isRightSidebar: !state.isRightSidebar };
    default:
      return state;
  }
}

// ─── Static Nav Data (from your folder structure) ────────────────────────────

const PORTFOLIO_ITEMS = {
  trading: [
    { name: "Cement",                  href: "/product/cement" },
    { name: "Construction Chemicals",  href: "/product/construction-chemicals" },
    { name: "Roofing Solutions",       href: "/product/roofing-solutions" },
    { name: "Steel",                   href: "/product/steel" },
    { name: "White Cement & Paint",    href: "/product/white-cement-paint" },
  ],
  distribution: [
    // add your distribution items here if any
  ],
  services: [
    { name: "Alite Enclaves",   href: "/services/alite-enclaves" },
    { name: "Kavalakat Group",  href: "/services/kavalakat-group" },
    { name: "Neyy Vedyam",      href: "/services/neyy-vedyam" },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────

const InnerPageHeader: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    dispatch({ type: "setScrollY", payload: window.scrollY });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu         = (menu: string) => dispatch({ type: "TOGGLE_MENU", menu });
  const toggleRightSidebar = () => dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
  const toggleSidebar      = () => dispatch({ type: "TOGGLE_SIDEBAR" });

  const isAboutActive     = ["/about", "/our-strengths", "/gallery", "/milestone", "/projects"].some(p => pathname.startsWith(p));
  const isPortfolioActive = ["/product", "/distribution", "/services"].some(p => pathname.startsWith(p));
  const isBlogActive      = pathname.startsWith("/blog");
  const isContactActive   = ["/contact", "/career"].some(p => pathname.startsWith(p));

  const chevronSvg = (
    <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" style={{ fill: "#ffffff" }}>
      <path d="M10 0.0495054L10 10.0001L8.13725 10.0001L-8.22301e-08 1.8812L1.86275 -3.55691e-07L7.35294 5.5446L7.30392 0.0495053L10 0.0495054Z" />
      <path d="M-9.6438e-05 10.0002L6.27441 10.0002L3.62736 7.32687L-9.63211e-05 7.32687L-9.6438e-05 10.0002Z" />
    </svg>
  );

  const phoneSvg = (
    <svg width={22} height={22} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.4233 16.9723L16.9701 14.0025C16.4049 13.6286 15.6474 13.7516 15.2296 14.2851L13.9324 15.953C13.8518 16.0593 13.7355 16.133 13.6049 16.1605C13.4743 16.1879 13.3382 16.1674 13.2215 16.1026L12.9748 15.9666C12.1568 15.5207 11.139 14.9656 9.08843 12.9143C7.03782 10.863 6.48163 9.84441 6.03578 9.02794L5.90048 8.78119C5.8348 8.66457 5.81347 8.52814 5.84042 8.39704C5.86736 8.26593 5.94077 8.14897 6.04712 8.06771L7.71384 6.77093C8.24713 6.35309 8.37031 5.59578 7.9969 5.03048L5.02713 0.577286C4.64443 0.00163523 3.87664 -0.171172 3.28419 0.184969L1.42202 1.30357C0.836918 1.64754 0.407665 2.20464 0.224235 2.85811C-0.446327 5.30138 0.0581298 9.51809 6.26973 15.7304C11.2109 20.6712 14.8894 21.9999 17.4178 21.9999C17.9997 22.0024 18.5792 21.9267 19.141 21.7748C19.7946 21.5916 20.3517 21.1623 20.6955 20.5771L21.8152 18.716C22.1719 18.1234 21.9992 17.3552 21.4233 16.9723Z" />
    </svg>
  );

  return (
    <>
      <style>{`
        header.style-1.inner-page{background-color:#0057C8!important;border-bottom:1px solid rgba(255,255,255,.15)!important}
        header.style-1.inner-page.sticky{background-color:#0057C8!important;box-shadow:0 4px 24px rgba(0,0,0,.18)!important}
        header.style-1.inner-page .main-menu>ul>li>a{color:#fff!important}
        header.style-1.inner-page .main-menu>ul>li>a svg{fill:#fff!important}
        header.style-1.inner-page .main-menu>ul>li:hover>a,header.style-1.inner-page .main-menu>ul>li.active>a{background-color:#fff!important;color:#0057C8!important}
        header.style-1.inner-page .main-menu>ul>li:hover>a svg,header.style-1.inner-page .main-menu>ul>li.active>a svg{fill:#0057C8!important}
        header.style-1.inner-page .nav-right .right-sidebar-button{background-color:rgba(255,255,255,.15)!important;border:1px solid rgba(255,255,255,.3)!important}
        header.style-1.inner-page .nav-right .right-sidebar-button svg{fill:#fff!important}
        header.style-1.inner-page .nav-right .right-sidebar-button span{color:#fff!important}
        header.style-1.inner-page .nav-right .right-sidebar-button:hover{background-color:#fff!important}
        header.style-1.inner-page .nav-right .right-sidebar-button:hover svg{fill:#0057C8!important}
        header.style-1.inner-page .nav-right .right-sidebar-button:hover span{color:#0057C8!important}
        header.style-1.inner-page .nav-right .mobile-menu-btn svg{fill:#fff!important}
        header.style-1.inner-page .main-menu>ul>li .bi{color:#fff!important}
        header.style-1.inner-page .main-menu>ul>li ul.sub-menu.product-mega-submenu .column-title{border-bottom-color:#0057C8!important}
      `}</style>

      {/* ── Right Sidebar ── */}
      <div className={`right-sidebar-menu ${state.isRightSidebar ? "show-right-menu" : ""}`}>
        <div className="right-sidebar-menu-wrap">
          <div className="sidebar-logo-area d-flex justify-content-between align-items-center">
            <div className="sidebar-logo-wrap">
              <Link href="/"><img width={157} height={34} alt="Kavalakat" src="/assets/new-images/logo/KavalakkatLogo-white.png" /></Link>
            </div>
            <div className="right-sidebar-close-btn" onClick={toggleRightSidebar}>
              <i className="bi bi-x" />
            </div>
          </div>
          <div className="sidebar-content-wrap">
            <div className="title-area">
              <span>Get In Touch With Us</span>
              <h2>Connect with Kavalakat</h2>
              <p>Ready to take the first step towards unlocking opportunity, realizing goals, and embracing innovation?</p>
            </div>
            <Link href="/contact" className="all-location-btn">View All Factory Location</Link>
          </div>
          <div className="sidebar-bottom-area">
            <p>Copyright 2025 <Link href="/">Kavalakat</Link> | Powered By <a href="https://mindstory.in/">MindStory</a></p>
          </div>
        </div>
      </div>

      {/* ── Header ── */}
      <header className={`header-area style-1 inner-page ${state.scrollY > 20 ? "sticky" : ""}`}>
        <div className="container-fluid d-flex flex-nowrap align-items-center justify-content-between">

          {/* Logo */}
          <div className="company-logo">
            <Link href="/">
              <img width={157} height={34} alt="Kavalakat" className="img-fluid" src="/assets/new-images/logo/KavalakkatLogo-white.png" />
            </Link>
          </div>

          {/* Nav */}
          <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
            <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
              <Link href="/" className="mobile-logo-wrap">
                <img width={157} height={34} alt="Kavalakat" className="img-fluid" src="/assets/new-images/logo/KavalakkatLogo-white.png" />
              </Link>
              <div className="menu-close-btn" onClick={toggleSidebar}><i className="bi bi-x" /></div>
            </div>

            <ul className="menu-list">

              <li className={pathname === "/" ? "active" : ""}><Link href="/">Home</Link></li>

              {/* About */}
              <li className={`menu-item-has-children ${isAboutActive ? "active" : ""}`}>
                <Link href="#" className="drop-down">About {chevronSvg}</Link>
                <i onClick={() => toggleMenu("about")} className={`bi bi-${state.activeMenu === "about" ? "dash" : "plus"} dropdown-icon`} />
                <ul className={`sub-menu ${state.activeMenu === "about" ? "d-block" : ""}`}>
                  <li className={pathname === "/about"         ? "active" : ""}><Link href="/about"><span>About</span></Link></li>
                  <li className={pathname === "/our-strengths" ? "active" : ""}><Link href="/our-strengths"><span>Our Strengths</span></Link></li>
                  <li className={pathname === "/milestone"     ? "active" : ""}><Link href="/milestone"><span>Milestones</span></Link></li>
                  <li className={pathname === "/projects"      ? "active" : ""}><Link href="/projects"><span>Projects</span></Link></li>
                  <li className={pathname === "/gallery"       ? "active" : ""}><Link href="/gallery"><span>Gallery</span></Link></li>
                </ul>
              </li>

              {/* Portfolio — static mega menu */}
              <li className={`menu-item-has-children ${isPortfolioActive ? "active" : ""}`}>
                <Link href="/product" className="drop-down">Portfolio {chevronSvg}</Link>
                <i onClick={() => toggleMenu("portfolio")} className={`bi bi-${state.activeMenu === "portfolio" ? "dash" : "plus"} dropdown-icon`} />
                <ul className={`sub-menu product-mega-submenu ${state.activeMenu === "portfolio" ? "d-block" : ""}`}>

                  <li className="product-column">
                    <div className="column-title">TRADING</div>
                    <ul className="column-items">
                      {PORTFOLIO_ITEMS.trading.map((n) => (
                        <li key={n.href} className={pathname === n.href ? "active" : ""}>
                          <Link href={n.href}><span>{n.name}</span></Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="product-column">
                    <div className="column-title">SERVICES</div>
                    <ul className="column-items">
                      {PORTFOLIO_ITEMS.services.map((n) => (
                        <li key={n.href} className={pathname === n.href ? "active" : ""}>
                          <Link href={n.href}><span>{n.name}</span></Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                </ul>
              </li>

              {/* Blog */}
              <li className={`menu-item-has-children ${isBlogActive ? "active" : ""}`}>
                <Link href="/blog" className="drop-down">Blog {chevronSvg}</Link>
                <i onClick={() => toggleMenu("blog")} className={`bi bi-${state.activeMenu === "blog" ? "dash" : "plus"} dropdown-icon`} />
                <ul className={`sub-menu ${state.activeMenu === "blog" ? "d-block" : ""}`}>
                  <li className={pathname === "/blog" ? "active" : ""}><Link href="/blog"><span>All Posts</span></Link></li>
                </ul>
              </li>

              {/* Contact */}
              <li className={`menu-item-has-children ${isContactActive ? "active" : ""}`}>
                <Link href="/contact" className="drop-down">Contact {chevronSvg}</Link>
                <i onClick={() => toggleMenu("contact")} className={`bi bi-${state.activeMenu === "contact" ? "dash" : "plus"} dropdown-icon`} />
                <ul className={`sub-menu ${state.activeMenu === "contact" ? "d-block" : ""}`}>
                  <li className={pathname === "/contact" ? "active" : ""}><Link href="/contact"><span>Contact</span></Link></li>
                  <li className={pathname === "/career"  ? "active" : ""}><Link href="/career"><span>Careers</span></Link></li>
                </ul>
              </li>

            </ul>
          </div>

          {/* Right controls */}
          <div className="nav-right">
            <div className="right-sidebar-button" onClick={toggleRightSidebar}>
              <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                <rect width="11.2" height="1.4" rx=".699998" />
                <rect x="2.80078" y="5.6" width="11.2" height="2.79999" rx="1.4" />
                <rect y="12.6" width="11.2" height="1.4" rx=".699998" />
              </svg>
              <span>GET IN TOUCH</span>
            </div>
            <div className="sidebar-button mobile-menu-btn" onClick={toggleSidebar}>
              <svg width={20} height={20} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.29608 0.0658336C0.609639 0.31147 0.139209 0.899069 0.0432028 1.63598C-0.0144009 2.09353 -0.0144009 5.4939 0.0432028 5.95146C0.129608 6.59686 0.489632 7.11703 1.07047 7.42046L1.36329 7.57458H3.83545H6.30761L6.59563 7.42046C6.96525 7.2278 7.25807 6.93401 7.45008 6.56314L7.60369 6.27416V3.79372V1.31328L7.45008 1.02429C7.25807 0.653433 6.96525 0.359633 6.59563 0.166978L6.30761 0.0128531L3.90745 0.00322056C1.83372 -0.00641251 1.4785 0.00322056 1.29608 0.0658336Z" />
                <path d="M11.6647 0.0658336C10.9783 0.31147 10.5079 0.899069 10.4119 1.63598C10.3879 1.82863 10.3687 2.80154 10.3687 3.79372C10.3687 4.7859 10.3879 5.75881 10.4119 5.95146C10.4983 6.59686 10.8583 7.11703 11.4391 7.42046L11.7319 7.57458H14.2041H16.6763L16.9643 7.42046C17.3339 7.2278 17.6267 6.93401 17.8187 6.56314L17.9723 6.27416V3.79372V1.31328L17.8187 1.02429C17.6267 0.653433 17.3339 0.359633 16.9643 0.166978L16.6763 0.0128531L14.2761 0.00322056C12.2024 -0.00641251 11.8471 0.00322056 11.6647 0.0658336Z" />
                <path d="M1.29608 10.4693C0.609639 10.7149 0.139209 11.3025 0.0432028 12.0394C-0.0144009 12.497 -0.0144009 15.8973 0.0432028 16.3549C0.129608 17.0003 0.489632 17.5205 1.07047 17.8239L1.36329 17.978H3.83545H6.30761L6.59563 17.8239C6.96525 17.6312 7.25807 17.3374 7.45008 16.9666L7.60369 16.6776V14.1972V11.7167L7.45008 11.4277C7.25807 11.0569 6.96525 10.7631 6.59563 10.5704L6.30761 10.4163L3.90745 10.4067C1.83372 10.397 1.4785 10.4067 1.29608 10.4693Z" />
                <path d="M13.2441 10.4934C11.8856 10.8498 10.8583 11.8853 10.5079 13.2531C10.3735 13.7781 10.3735 14.6162 10.5079 15.1412C10.8343 16.4127 11.732 17.3808 12.9945 17.8239C13.3593 17.9491 13.4937 17.9732 14.0601 17.9925C14.617 18.0117 14.7754 17.9973 15.1162 17.9106C16.5179 17.5542 17.5452 16.5283 17.9052 15.1219C18.0348 14.6162 18.03 13.7685 17.9004 13.2531C17.55 11.8757 16.5179 10.8401 15.145 10.4885C14.6314 10.3585 13.7529 10.3585 13.2441 10.4934Z" />
              </svg>
            </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default InnerPageHeader;