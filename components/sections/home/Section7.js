import React from "react";
export default function Section7(){
    return (
        <>

<div className="mt-5">
  <div className="text-center px-md-5 px-2">
    <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
      Our Alumina Creamic Assembly Plant
    </h2>
    <div className="px-md-5 text-start">
      <h4 style={{ color: 'rgb(66, 66, 66)', fontWeight: 400 }}>
        BMW Steels Ltd. operates state-of-the-art manufacturing plants equipped with cutting-edge technologies in Roorkee Bhagwanpur,assembly, and the production of high-quality wear-resistant and coal flow management solutions, ensuring precision and efficiency at every step.
      </h4>
    </div>
  </div>

  {/* Carousel */}
  <div className="container">
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner pt-2">
        <div className="carousel-item active">
          <img
            src="images/banner-2 (1).png"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6 d-none"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              left: '100px',
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            <h3>Hathras, Uttar Pradesh</h3>
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Fabrication and Assembly Unit</h4>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="images/banner-2 (2).png"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6 d-none"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              left: '100px',
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            <h3>Hathras, Uttar Pradesh</h3>
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Fabrication and Assembly Unit</h4>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="images/banner-2 (3).png"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6 d-none"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              left: '100px',
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            <h3>Hathras, Uttar Pradesh</h3>
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Fabrication and Assembly Unit</h4>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel END */}
</div>

{/* Section 7 */}
<div className="px-md-5 px-2 my-5">
  <div className="d-lg-flex justify-content-center align-items-center px-md-5">
    <div className="w-100 d-flex justify-content-center align-items-center flex-column ps-md-5 justify-content-md-start align-items-md-start">
      
      <img
        src="images/last.webp"
        className="w-75 my-4"
        style={{
          borderRadius: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }}
        alt=""
      />
    </div>
    <div className="w-100 pe-md-5">
      <div className="accordion p-2" id="accordionExample">
      <h2 className="pt-4 mobile-fonts-heading text-center pb-3x" style={{ fontSize: '75px' }}>
        Our Assurance
      </h2>
       <h5 className="faq-2 p-2 ps-4">1. We guarantee exceeding customer expectations through professional service.</h5>
<br/>
       <h5 className="faq-2 p-2 ps-4">2. We guarantee world class quality through ‘Make in India’ products</h5>
       <br/>
       <h5 className="faq-2 p-2 ps-4">3. We guarantee productivity improvement, energy saving, cost efficiency</h5>
       <br/>
       <h5 className="faq-2 p-2 ps-4">4. We guarantee consistency in quality of products, and service.</h5>
       <br/>
       <h5 className="faq-2 p-2 ps-4">5. We guarantee to be ON TIME.</h5>
      </div>
    </div>
  </div>
</div>
        </>
    )}