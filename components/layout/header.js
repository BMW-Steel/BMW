"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React from "react";
import GoogleTranslate from "@/components/GoogleTranslate"; // Import the Google Translate component
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function Header() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-0" style={{ backgroundColor: "black" }}>
      <GoogleTranslate/>
      <div className="container-fluid d-flex justify-content-around align-items-center" style={{ backgroundColor: "black" }}>
        <div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="/images/menu.png" alt="Menu"/>
          </button>
          <a className="navbar-brand" href="#">
            <img src="/images/llogo.png" height="70px" alt="Logo"/>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link white  ${isActive('/') ? 'active' : ''}`}
                href="/"
              >
                Home
              </Link>
            </li>

            

            <li className="nav-item">
              <Link
                className={`nav-link white now ${isActive('/CastBasalt') ? 'active' : ''}`}
                href="/CastBasalt"
              >
                Cast Basalt
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link white now ${isActive('/FusedAluminaAbrasive') ? 'active' : ''}`}
                href="/FusedAluminaAbrasive"
              >
                Fused Alumina Abrasive
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link white now ${isActive('/AluminiaCeramic') ? 'active' : ''}`}
                href="/AluminiaCeramic"
              >
                Alumina Ceramic
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle white now"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Other Products
              </a>
              <ul className="dropdown-menu">

                <li className="nav-item">
              <Link
                className={`dropdown-item${isActive('/Fabrication') ? 'active' : ''}`}
                href="/Fabrication"
              >
                Fabrication
              </Link>
            </li>

             <li>
                  <hr className="dropdown-divider" />
                </li>



                <li>
                  <Link
                    className={`dropdown-item ${isActive('/ResearchDevelopmentDepartment') ? 'active' : ''}`}
                    href="/ResearchDevelopmentDepartment"
                  >
                    Research & Development Department
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${isActive('/ChemicallyBondedCompoundSeries') ? 'active' : ''}`}
                    href="/ChemicallyBondedCompoundSeries"
                  >
                    Chemically Bonded Compound Series
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${isActive('/WearSealDiamondPutty') ? 'active' : ''}`}
                    href="/WearSealDiamondPutty"
                  >
                    Wear Seal Diamond Putty
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className={`dropdown-item ${isActive('/BasalticMineralFertilizer') ? 'active' : ''}`}
                    href="/BasalticMineralFertilizer"
                  >
                    BMW Basaltic Mineral Fertilizer
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link white now ${isActive('/ContactUs') ? 'active' : ''}`}
                href="/ContactUs"
              >
                Contact Us
              </Link>
            </li>


             <li className="nav-item">
              <Link
                className={`nav-link white now ${isActive('/Blogs') ? 'active' : ''}`}
                href="/Blogs"
              >
               Blogs
              </Link>
            </li>


            
          </ul>
        </div>

        <div className="d-none d-md-block">
         
          <Link
                className="btn white"
                href="/ContactUs"
                style={{ backgroundColor: "red" }}
              >
                Get a Quote <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>

          
        </div>
      </div>
      
    </nav>
    
  );
}
