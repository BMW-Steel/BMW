import React from "react";

export default function Section1() {
  return (
    <>
      <div className="container-full">
        
<div
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
  
>

          <div 
  className="carousel-indicators d-flex justify-content-center gap-3 py-3 px-2" 
  style={{ marginTop: "3px", transform: "scale(0.9)", transformOrigin: "center" }}
>
  <button
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="0"
    className="active w-25 d-none d-lg-block"
    aria-current="true"
    aria-label="Slide 1"
    style={{ zIndex: 10 }}
  >
    <div className="d-flex ps-2 justify-content-between align-items-center">
      
      <div>
        <img
          src="images/banner-img.jpg"
          style={{ borderRadius: "8px" }}
          width="120px"
          alt=""
        />
      </div>
      <div style={{ fontWeight: 500, width: "120px", fontSize: "16px" }}>BMW Steels</div>
    </div>
  </button>

  <button
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="1"
    className="w-25 d-none d-lg-block"
    aria-current="true"
    aria-label="Slide 2"
    style={{ zIndex: 10 }}
  >
    <div className="d-flex ps-2 justify-content-between align-items-center">
      <p
        className="hide"
        style={{
          position: "absolute",
          fontSize: "10px",
          top: "2px",
          fontWeight: 600,
          left: "40px",
          color: "white",
          display: "none",
        }}
      ></p>
      <div>
        <img
          src="images/banner-img.jpg"
          style={{ borderRadius: "8px" }}
          width="120px"
          alt=""
        />
      </div>
      <div style={{ fontWeight: 500, width: "120px", fontSize: "16px" }}>Cast Basalt</div>
    </div>
  </button>

  <button
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="2"
    className="w-25 d-none d-lg-block"
    aria-current="true"
    aria-label="Slide 3"
    style={{ zIndex: 10 }}
  >
    <div className="d-flex ps-2 justify-content-between align-items-center">
      <p
        className="hide2"
        style={{
          position: "absolute",
          fontSize: "10px",
          top: "2px",
          fontWeight: 600,
          left: "40px",
          color: "white",
          display: "none",
        }}
      >
        Current
      </p>
      <div>
        <img
          src="images/banner-img.jpg"
          style={{ borderRadius: "8px" }}
          width="120px"
          alt=""
        />
      </div>
      <div style={{ fontWeight: 500, width: "120px", fontSize: "16px" }}>Fused Alumina Abrasive</div>
    </div>
  </button>

  <button
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="3"
    className="w-25 d-none d-lg-block"
    aria-current="true"
    aria-label="Slide 4"
    style={{ zIndex: 10 }}
  >
    <div className="d-flex ps-2 justify-content-between align-items-center">
      <div>
        <img
          src="images/banner-img.jpg"
          style={{ borderRadius: "8px" }}
          width="120px"
          alt=""
        />
      </div>
      <div style={{ fontWeight: 500, width: "120px", fontSize: "16px" }}>Alumina Ceramic</div>
    </div>
  </button>

  <button
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="4"
    className="w-25 d-none d-lg-block"
    aria-current="true"
    aria-label="Slide 5"
    style={{ zIndex: 10 }}
  >
    <div className="d-flex ps-2 justify-content-between align-items-center">
      <div>
        <img
          src="images/banner-img.jpg"
          style={{ borderRadius: "8px" }}
          width="120px"
          alt=""
        />
      </div>
      <div style={{ fontWeight: 500, width: "120px", fontSize: "16px" }}>Lining Erosion Warning System</div>
    </div>
  </button>

  <button
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide-to="5"
    className="w-25 d-none d-lg-block"
    aria-current="true"
    aria-label="Slide 6"
    style={{ zIndex: 10 }}
  >
    <div className="d-flex ps-2 justify-content-between align-items-center">
      <div>
        <img
          src="images/banner-img.jpg"
          style={{ borderRadius: "8px" }}
          width="120px"
          alt=""
        />
      </div>
      <div style={{ fontWeight: 500, width: "120px", fontSize: "16px" }}>Basaltic Mineral Fertilizer</div>
    </div>
  </button>
</div>

          <div className="carousel-inner mobile">
            <div className="carousel-item active" data-bs-interval="8000">
              <div
                className="py-md-4 banner-bg"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  color: "#D9D9D9",
                  marginInline: "auto",
                  width: "auto",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.868) 100%)",
                }}
              >
                <h1
                  className="text-center mobile-fonts"
                  style={{ fontSize: "90px", fontWeight: 600 }}
                >
                  BMW Steels Ltd
                </h1>
              </div>
              <div className="video-container">
                <video
                  className="w-100"
                  src="/banner-video/banner-video4.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline
                />
              </div>
            </div>

            <div className="carousel-item">
              <div
                className="py-md-4 banner-bg"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  color: "#D9D9D9",
                  marginInline: "auto",
                  width: "auto",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.868) 100%)",
                }}
              >
                <h1
                  className="text-center mobile-fonts"
                  style={{ fontSize: "90px", fontWeight: 600 }}
                >
                  CAST BASALT
                </h1>
              </div>
              <div className="video-container">
                <video
                  className="w-100"
                  src="/banner-video/BMWFRONT.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline
                />
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="30000">
              <div
                className="py-md-4 banner-bg"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  color: "#D9D9D9",
                  marginInline: "auto",
                  width: "auto",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.868) 100%)",
                }}
              >
                <h1
                  className="text-center mobile-fonts"
                  style={{ fontSize: "90px", fontWeight: 600 }}
                >
                  FUSED ALUMINA ABRASIVE
                </h1>
              </div>
              <div className="video-container">
                <video
                  className="w-100"
                  src="/banner-video/abrasive2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline
                />
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="19000">
              <div
                className="py-md-4 banner-bg"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  color: "#D9D9D9",
                  marginInline: "auto",
                  width: "auto",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.868) 100%)",
                }}
              >
                <h1
                  className="text-center mobile-fonts"
                  style={{ fontSize: "90px", fontWeight: 600 }}
                >
                  ALUMINA CERAMIC
                </h1>
              </div>
              <div className="video-container">
                <video
                  className="w-100"
                  src="/banner-video/aluminia3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline
                />
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="17000">
              <div
                className="py-md-4 banner-bg"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  color: "#D9D9D9",
                  marginInline: "auto",
                  width: "auto",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.868) 100%)",
                }}
              >
                <h1
                  className="text-center mobile-fonts"
                  style={{ fontSize: "90px", fontWeight: 600 }}
                >
                  LINING EROSION WARNING SYSTEM
                </h1>
              </div>
              <div className="video-container">
                <video
                  className="w-100"
                  src="/banner-video/system.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline
                />
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="11000">
              <div
                className="py-md-4 banner-bg"
                style={{
                  zIndex: 1,
                  position: "absolute",
                  left: 0,
                  right: 0,
                  color: "#D9D9D9",
                  marginInline: "auto",
                  width: "auto",
                  background:
                    "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.868) 100%)",
                }}
              >
                <h1
                  className="text-center mobile-fonts"
                  style={{ fontSize: "90px", fontWeight: 600 }}
                >
                  BASALTIC MINERAL FERTILIZER
                </h1>
              </div>
              <div className="video-container">
                <video
                  className="w-100"
                  src="/banner-video/banner-video5.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  webkit-playsinline
                />
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}