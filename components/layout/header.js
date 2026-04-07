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
                className={`nav-link text-white ${isActive('/CastBasalt') ? 'active border-bottom' : ''}`}
                href="/CastBasalt"
                style={navLinkStyle}
              >
                Cast Basalt
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link
                className={`nav-link text-white ${isActive('/FusedAluminaAbrasive') ? 'active border-bottom' : ''}`}
                href="/FusedAluminaAbrasive"
                style={navLinkStyle}
              >
                Fused Alumina
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link
                className={`nav-link text-white ${isActive('/AluminaCeramic') ? 'active border-bottom' : ''}`}
                href="/AluminaCeramic"
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
                <li><Link className="dropdown-item" href="/ResearchDevelopmentDepartment">R & D Department</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/ChemicallyBondedCompoundSeries">Chemically Bonded</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/WearSealDiamondPutty">Wear Seal Putty</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" href="/BasalticMineralFertilizer">BMW Fertilizer</Link></li>
              </ul>
            </li>

            <li className="nav-item px-2">
              <Link
                className={`nav-link text-white ${isActive('/Blogs') ? 'active border-bottom' : ''}`}
                href="/Blogs"
                style={navLinkStyle}
              >
                Blogs
              </Link>
            </li>
            {/* 🔥 MOBILE ONLY CONTACT LINK */}
<li className="nav-item px-2 d-lg-none">
  <Link
    className={`nav-link text-white ${isActive('/ContactUs') ? 'active border-bottom' : ''}`}
    href="/ContactUs"
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
            href="/ContactUs"
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
  @media (max-width: 768px) {

  /* 🔥 MAKE FULL WIDTH FLEX */
  .navbar .d-flex.align-items-center {
    width: 100%;
    justify-content: space-between;
  
  }

  /* 🔥 MOVE GOOGLE TRANSLATE + LOGO TO LEFT */
  #google_translate_element {
    position: static !important;
    margin-right: 8px;
  }

  .navbar-brand {
  margin-left: auto;   /* 🔥 pushes logo to right */
  margin-bottom: 20px;
}
    .navbar-brand img {
      width: 35px;
      height: auto;
      
    }

  /* 🔥 PUSH HAMBURGER TO RIGHT */
  .navbar-toggler {
    margin-left: 0px;
  }

}




`}</style>
    </>
  );
}