import Link from "next/link";

export default function Footer() {
  return (
    <>
      

      <footer className=" text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 p-4 border-bottom" style={{ backgroundColor: "rgb(0, 0, 0)", color: "#D9D9D9" }}>
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset text-decoration-none">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </section>

        <section className="" style={{ backgroundColor: "rgb(0, 0, 0)", color: "#D9D9D9" }}>
          <div className=" text-md-start pt-5">
            <div className="row mx-0 mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-start">
                <Link
  className="navbar-brand d-block text-start"
  href="/"
  style={{ marginLeft: "-30px" }}
>
                  <img src="images/llogo.png" height="100px" alt="" />
                </Link>
                <p>
                  02 Balbir Road Dalanwala,
                  Dehradun, (U.K.)-248001
                  <br /> <br />
                  Mobile: +91-96390 17070
                  <br />
                  <br />
                  Email: sales@bmwsteels.com
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Address</h6>
                <p>
                  <Link href="https://maps.app.goo.gl/yKbv77ELJRSG8EDL9" className="text-reset text-decoration-none now fw-normal">
                    <b>UNIT - 1</b><br /> BMW Steels Ltd.
                    Shiv Ganga Industrial Estate,
                    Lakeshwari, Bhagwanpur,
                    Haridwar, (U.K.)-247661
                  </Link>
                </p>
                <p>
                  <Link href="/fusedaluminaabrasive" className="text-reset text-decoration-none now">
                    <b>UNIT - 2</b><br /> BMW Steels Ltd.
                    D-8, INDUSTRIAL ESTATE,
                    JUNCTION ROAD, KHURJA – 203101
                  </Link>
                </p>
                <p>
                  <Link href="https://maps.app.goo.gl/u543ZrLhnKP9ePDT8" className="text-reset text-decoration-none now">
                    <b>UNIT - 3</b><br /> BMW Steels Ltd.
                    NAVIPUR ROAD,
                    HATHRAS – 204101
                  </Link>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                <p>
                  <Link href="/" className="text-reset text-decoration-none now">
                    Home
                  </Link>
                </p>
                
                <p>
                  <Link href="/aluminaceramic" className="text-reset text-decoration-none now">
                    Alumina Ceramic
                  </Link>
                </p>
                <p>
                  <Link href="/castbasalt" className="text-reset text-decoration-none now">
                    Cast Basalt
                  </Link>
                </p>
                <p>
                  <Link href="/researchdevelopmentdepartment" className="text-reset text-decoration-none now">
                    Research & Development Department
                    
                  </Link>
                </p>
                <p>
                  <Link href="/chemicallybondedcompoundseries" className="text-reset text-decoration-none now">
                    CBC Series
                    
                  </Link>
                </p>
                <p>
                  <Link href="/wearsealdiamondputty" className="text-reset text-decoration-none now">
                    Wear Seal Diamond Putty
                    
                  </Link>
                </p>
                <p>
                  <Link href="/basalticmineralfertilizer" className="text-reset text-decoration-none now">
                    Basaltic Mineral Fertilizer
                    
                  </Link>
                </p>
                <p>
                  <Link href="/contactus" className="text-reset text-decoration-none now">
                    Contact
                  </Link>
                </p>
                <p>
                  <Link href="/pravicypolicy" className="text-reset text-decoration-none now">
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                
                <a style={{ backgroundColor: "rgb(0, 0, 0)", color: "#D9D9D9",textDecoration:"none" }} href="https://maps.app.goo.gl/u543ZrLhnKP9ePDT8"><p className="now">
                  <i className="fas fa-location me-3 "></i>
                  <b>Marketing Office</b><br /> BMW Steels Ltd.
                  NAVIPUR ROAD,<br />
                  HATHRAS – 204101
                </p></a>
                <p className="now">
                  <i className="fas fa-envelope me-3 "></i>
                  Sales@bmwsteels.com
                </p>
                <p className="now">
                  <i className="fas fa-phone me-3"></i> +91-96390-17070
                </p>
                <p className="now">
                  <i className="fas fa-print me-3"></i> +91-98377-55569
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "rgb(0, 0, 0)", color: "#D9D9D9" }}>
          © 2025 Copyright:
          <a className="text-reset fw-bold now" href="https://www.starnexxt.com/">
            Starnexxt.com
          </a>
        </div>
      </footer>

      {/* 🔥 Responsive footer styles — layout/content untouched, only mobile-fit spacing & wrapping */}
      <style jsx>{`
        /* Contain the footer so nothing can overflow on small screens */
        footer {
          overflow-x: hidden;
        }

        /* Logo: undo the desktop -30px offset on small screens so it never overflows */
        @media (max-width: 767.98px) {
          footer .navbar-brand {
            margin-left: 0 !important;
          }

          footer .navbar-brand img {
            height: 80px;
            width: auto;
          }
        }

        /* Keep long addresses / links readable on any screen */
        footer p,
        footer a,
        footer h6 {
          overflow-wrap: break-word;
          word-break: break-word;
        }

        /* Mobile-only refinements (desktop look stays exactly as before) */
        @media (max-width: 767.98px) {
          /* Everything left-aligned on mobile */
          footer .text-start,
          footer .col-md-3,
          footer .col-md-2,
          footer .col-md-4,
          footer h6,
          footer p,
          footer a {
            text-align: left !important;
          }

          /* Address + Company link lists: comfortable vertical rhythm */
          footer p {
            line-height: 1.6;
          }

          /* Contact icons: tighter inline spacing when stacked */
          footer .fas {
            margin-right: 8px !important;
          }

          /* Social bar: keep icons comfortably spaced, left-aligned */
          footer section.d-flex {
            justify-content: flex-start !important;
            align-items: flex-start;
          }

          footer section a.me-4 {
            margin-right: 12px;
          }

          footer section a:last-child {
            margin-right: 0;
          }
        }

        /* Bottom copyright bar: left-aligned, clean wrap on mobile */
        @media (max-width: 767.98px) {
          footer .text-center.p-4 {
            text-align: left !important;
            font-size: 14px;
            line-height: 1.8;
          }
        }
      `}</style>
    </>
  );
}