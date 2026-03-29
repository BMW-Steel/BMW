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
                <a
  className="navbar-brand d-block text-start"
  href="/"
  style={{ marginLeft: "-30px" }}
>
                  <img src="images/llogo.png" height="100px" alt="" />
                </a>
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
                  <Link href="/FusedAluminaAbrasive" className="text-reset text-decoration-none now">
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
                  <Link href="/AluminaCeramic" className="text-reset text-decoration-none now">
                    Alumina Ceramic
                  </Link>
                </p>
                <p>
                  <Link href="/CastBasalt" className="text-reset text-decoration-none now">
                    Cast Basalt
                  </Link>
                </p>
                <p>
                  <Link href="/ResearchDevelopmentDepartment" className="text-reset text-decoration-none now">
                    Research & Development Department
                    
                  </Link>
                </p>
                <p>
                  <Link href="/ChemicallyBondedCompoundSeries" className="text-reset text-decoration-none now">
                    CBC Series
                    
                  </Link>
                </p>
                <p>
                  <Link href="/WearSealDiamondPutty" className="text-reset text-decoration-none now">
                    Wear Seal Diamond Putty
                    
                  </Link>
                </p>
                <p>
                  <Link href="/BasalticMineralFertilizer" className="text-reset text-decoration-none now">
                    Basaltic Mineral Fertilizer
                    
                  </Link>
                </p>
                <p>
                  <Link href="ContactUs" className="text-reset text-decoration-none now">
                    Contact
                  </Link>
                </p>
                <p>
                  <Link href="/PravicyPolicy" className="text-reset text-decoration-none now">
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
    </>
  );
}