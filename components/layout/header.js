"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";
import GoogleTranslate from "@/components/GoogleTranslate";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  // Custom style for better spacing and hover transition
  const navLinkStyle = {
    transition: "all 0.3s ease",
    fontWeight: "500"
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg py-3" style={{ backgroundColor: "black" }}>
      <div className="container-fluid px-lg-5">
      <GoogleTranslate />
        
        {/* Brand & Toggler Group */}
        <div className="d-flex align-items-center">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="/images/menu.png" alt="Menu" width="30px"/>
          </button>
          <Link className="navbar-brand" href="/">
            <img src="/images/llogo.png" height="70px" alt="Logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-4">
            <li className="nav-item px-4">
              <Link
                className={`nav-link text-white ${isActive('/') ? 'active border-bottom' : ''}`}
                href="/"
                style={navLinkStyle}
              >
                Home
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link
                className={`nav-link text-white ${isActive('/castbasalt') ? 'active border-bottom' : ''}`}
                href="/castbasalt"
                style={navLinkStyle}
              >
                Cast Basalt
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link
                className={`nav-link text-white ${isActive('/fusedaluminaabrasive') ? 'active border-bottom' : ''}`}
                href="/fusedaluminaabrasive"
                style={navLinkStyle}
              >
                Fused Alumina
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link
                className={`nav-link text-white ${isActive('/aluminaceramic') ? 'active border-bottom' : ''}`}
                href="/aluminaceramic"
                style={navLinkStyle}
              >
                Alumina Ceramic
              </Link>
            </li>

            <li className="nav-item dropdown px-2">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={navLinkStyle}
              >
                Other Products
              </a>
              <ul className="dropdown-menu shadow">
                <li><Link className="dropdown-item" href="/researchdevelopmentdepartment">R & D Department</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/chemicallybondedcompoundseries">Chemically Bonded</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/wearsealdiamondputty">Wear Seal Putty</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/basalticmineralfertilizer">BMW Fertilizer</Link></li>
              </ul>
            </li>

            <li className="nav-item px-2">
              <Link
                className={`nav-link text-white ${isActive('/blogs') ? 'active border-bottom' : ''}`}
                href="/blogs"
                style={navLinkStyle}
              >
                Blogs
              </Link>
            </li>
            {/* 🔥 MOBILE ONLY CONTACT LINK */}
<li className="nav-item px-2 d-lg-none">
  <Link
    className={`nav-link text-white ${isActive('/contactus') ? 'active border-bottom' : ''}`}
    href="/contactus"
    style={navLinkStyle}
  >
    Contact Us
  </Link>
</li>
          </ul>
        </div>

        {/* CTA Button */}
        <div className="d-none d-lg-block ms-lg-4">
          <Link
            className="btn px-4 py-2 fw-bold text-white shadow-sm"
            href="/contactus"
            style={{ backgroundColor: "#e60000", borderRadius: "5px" }}
          >
            Get a Quote <i className="fa-solid fa-arrow-right ms-2 fs-4"></i>
          </Link>
        </div>
      </div>
    </nav>
    <style jsx>{`
.navbar .nav-link.active {
  color: red !important;
  border-bottom: 2px solid red;
}

/* Tablet & mobile (menu is collapsed below lg = 992px):
   language selector + brand share one aligned row */
@media (max-width: 991.98px) {
  .navbar .d-flex.align-items-center {
    flex: 1 1 auto;
    justify-content: space-between;
  }

  .navbar-brand {
    margin-left: auto;   /* 🔥 pushes logo to right */
  }

  .navbar-brand img {
    width: 35px;
    height: auto;
  }

  .navbar-toggler {
    margin-left: 0px;
  }
}

/* Compact desktop: keep the full menu visible on smaller desktop widths */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .navbar-nav {
    font-size: 14px !important;
  }

  .nav-item {
    padding-left: 4px !important;
    padding-right: 4px !important;
  }

  .navbar-brand img {
    height: 40px;
  }

  .navbar .btn {
    padding: 5px 10px;
    font-size: 13px;
  }

  .container-fluid {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
}




`}</style>
    </>
  );
}