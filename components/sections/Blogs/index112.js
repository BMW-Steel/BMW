import React from "react";
import Link from "next/link";
export default function Index30(){
    return (
        <>


        <div className="pb-5">
  <div className="text-center px-md-5 px-2 py-3 py-md-5" style={{ backgroundColor: "#ffffff" }}>
    <h2 className="pt-4 mobile-fonts-heading text-center" style={{ fontSize: "75px" }}>
      Blogs
    </h2>
  </div>

  {/* Carousal */}

  <div className="p-3 px-md-5 container">
    <div className="px-md-5">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
           <Link
               
                href="/Industrial-Wear-Resistant-Solutions"
                
              >
                <img
              src="images/Blogs/Blog_Image_22oct-01.jpg"
              style={{ borderRadius: "15px" }}
              className="d-block w-100"
              alt="..."
            />

                
              </Link> 
            
            


            <div className="p-3 mt-3">
              <h5 style={{ color: "rgb(126, 125, 125)" }}>September 15, 2025</h5>

              <Link
              style={{textDecoration:"none !important" }}
               
                href="/Industrial-Wear-Resistant-Solutions"
                
              >
                 <h3 style={{ color: "rgb(32, 32, 32)",textDecoration:"none !important" }}>
               BMW Steels Ltd.: Engineering Excellence for Power, Steel & Cement Industries

              </h3>
                
              </Link> 


             
            </div>
          </div>

          {/* <div className="carousel-item">
            <img src="images/section-6-0-1.jpg" style={{ height: "600px", width: "auto", borderRadius: "15px" }} className="d-block w-100" alt="..." />
            <div className="p-3 section-6" style={{ color: "black", backgroundColor: "#D9D9D9", display: "inline-block", position: "relative", bottom: "50px", left: "100px", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <h3>Hathras, Uttar Pradesh</h3>
              <h4 style={{ color: "rgb(68, 67, 67)" }}>Fabrication and Assembly Unit</h4>
            </div>
          </div> */}

          {/* <div className="carousel-item">
            <img src="images/section-6-1.webp" style={{ height: "600px", width: "auto", borderRadius: "15px" }} className="d-block w-100" alt="..." />
            <div className="p-3 section-6" style={{ color: "black", backgroundColor: "#D9D9D9", display: "inline-block", position: "relative", bottom: "50px", left: "100px", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <h3>Hathras, Uttar Pradesh</h3>
              <h4 style={{ color: "rgb(68, 67, 67)" }}>Fabrication and Assembly Unit</h4>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>



  <div className="p-3 px-md-5 container">
    <div className="px-md-5">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
           <Link
               
                href="/Alumina-Ceramic-Liners-For-Wear-Protection"
                
              >
                <img
              src="images/Blogs/Blog_Image_24oct-01.jpg"
              style={{ borderRadius: "15px" }}
              className="d-block w-100"
              alt="..."
            />

                
              </Link> 
            
            


            <div className="p-3 mt-3">
              <h5 style={{ color: "rgb(126, 125, 125)" }}>September 20, 2025</h5>

              <Link
              style={{textDecoration:"none !important" }}
               
                href="/Alumina-Ceramic-Liners-For-Wear-Protection"
                
              >
                 <h3 style={{ color: "rgb(32, 32, 32)",textDecoration:"none !important" }}>
               Why 92% Alumina Ceramic is a Game-Changer for Coal Pipeline Wear Protection
              </h3>
                
              </Link> 


             
            </div>
          </div>

          {/* <div className="carousel-item">
            <img src="images/section-6-0-1.jpg" style={{ height: "600px", width: "auto", borderRadius: "15px" }} className="d-block w-100" alt="..." />
            <div className="p-3 section-6" style={{ color: "black", backgroundColor: "#D9D9D9", display: "inline-block", position: "relative", bottom: "50px", left: "100px", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <h3>Hathras, Uttar Pradesh</h3>
              <h4 style={{ color: "rgb(68, 67, 67)" }}>Fabrication and Assembly Unit</h4>
            </div>
          </div> */}

          {/* <div className="carousel-item">
            <img src="images/section-6-1.webp" style={{ height: "600px", width: "auto", borderRadius: "15px" }} className="d-block w-100" alt="..." />
            <div className="p-3 section-6" style={{ color: "black", backgroundColor: "#D9D9D9", display: "inline-block", position: "relative", bottom: "50px", left: "100px", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
              <h3>Hathras, Uttar Pradesh</h3>
              <h4 style={{ color: "rgb(68, 67, 67)" }}>Fabrication and Assembly Unit</h4>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>





















 

 

  <nav>
    <ul className="pagination justify-content-center">
      <li className="page-item active" aria-current="page">
        <span className="page-link now">1</span>
      </li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
    </ul>
  </nav>

  {/* Carousal END */}
</div>


        


 



        </>
    )}