"use client"; 
import React from "react";
import { useEffect } from "react";
export default function Section7(){

  /* 🔥 Native hand-gesture swipe for the plant carousel (same as other carousels) */
  useEffect(() => {
    const carousel = document.getElementById("plantCarousel");
    if (!carousel) return;

    let startX = 0;
    let startY = 0;
    let tracking = false;

    const onTouchStart = (e) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      tracking = true;
    };

    const onTouchEnd = (e) => {
      if (!tracking) return;
      tracking = false;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      /* horizontal swipe only, past a comfortable threshold */
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
      const dir = dx < 0 ? "next" : "prev";
      const btn = carousel.querySelector(`[data-bs-slide="${dir}"]`);
      if (btn) btn.click();
    };

    carousel.addEventListener("touchstart", onTouchStart, { passive: true });
    carousel.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      carousel.removeEventListener("touchstart", onTouchStart);
      carousel.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

    return (
        <>

<div className="section-wrapper">

  {/* 🔥 HEADER */}
  <div className="text-center section-header">
    <p className="section-sub">OUR FACILITY</p>
    <h2 className="section-title">
      Alumina Ceramic Assembly Plant
    </h2>
    <p className="section-desc">
      BMW Steels Ltd. operates state-of-the-art manufacturing plants equipped with cutting-edge technologies in Roorkee and Bhagwanpur. The assembly and production of high-quality wear-resistant and coal flow management solutions ensure precision and efficiency at every step.
    </p>
  </div>

  {/* 🔥 CAROUSEL */}
  <div className="carousel-container">
    <div id="plantCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-touch="false">

      <div className="carousel-inner">

        {["banner-2 (1).png","banner-2 (2).png","banner-2 (3).png"].map((img, i) => (
          <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
            <img src={`images/${img}`} className="plant-img" />
          </div>
        ))}

      </div>

      {/* 🔥 CUSTOM ARROWS */}
      <button className="carousel-control-prev custom-nav" type="button" data-bs-target="#plantCarousel" data-bs-slide="prev">
        <span className="arrow-btn" aria-hidden="true">‹</span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next custom-nav" type="button" data-bs-target="#plantCarousel" data-bs-slide="next">
        <span className="arrow-btn" aria-hidden="true">›</span>
        <span className="visually-hidden">Next</span>
      </button>

    </div>
  </div>

  <div className="assurance-section">

  {/* 🔥 HEADING CENTER */}
  

  {/* 🔥 CONTENT + IMAGE */}
  <div className="assurance-section">

  {/* HEADING */}
  

  {/* CONTENT */}
  <div className="assurance-container">

    {/* 🔥 IMAGE LEFT */}
    <div className="assurance-image">
      <img src="images/last.webp" alt="" />
    </div>

    {/* 🔥 TEXT RIGHT */}
    <div className="assurance-content">
      <div className="text-center mb-5">
    <h2 className="section-title">Our Assurance</h2>
  </div>
      <ul className="assurance-list">
        <li>We guarantee exceeding customer expectations through professional service.</li>
        <li>We guarantee world class quality through ‘Make in India’ products.</li>
        <li>We guarantee productivity improvement, energy saving & cost efficiency.</li>
        <li>We guarantee consistency in quality and service.</li>
        <li>We guarantee to be ON TIME.</li>
      </ul>
    </div>

  </div>

</div>

</div>

</div>
<style jsx>{`

/* 🔥 WRAPPER */
.section-wrapper {
  padding: 80px 20px;
}

/* 🔥 HEADER */
.section-header {
  max-width: 800px;
  margin: auto;
}

.section-sub {
  color: red;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 600;
}

.section-title {
  font-size: 42px;
  font-weight: 600;
  margin-top: 8px;
}

.section-title.small {
  font-size: 32px;
}

.section-desc {
  color: #555;
  line-height: 1.5;
  margin-top: 16px;
  font-size: 16px;
}

/* 🔥 CAROUSEL */
.carousel-container {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}
  /* SLIDES */
.carousel-item {
  text-align: center;
}
 

.plant-img {
width: 100%;
  max-width: 900px;
  height: 450px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
   display: inline-block; 
}

/* 🔥 ARROWS */
.custom-nav {
  width: auto;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev.custom-nav {
  left: calc(50% - 480px);
}

.carousel-control-next.custom-nav {
  right: calc(50% - 480px);
}

.arrow-btn {
  background: rgba(0,0,0,0.6);
  color: white;
  font-size: 28px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}

.arrow-btn:hover {
  background: red;
  transform: scale(1.1);
}


.assurance-section {
  margin-top: 80px;
  padding: 0 20px;
}

/* 🔥 GRID */
.assurance-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  align-items: center;
  max-width: 1100px;
  margin: auto;
}

/* 🔥 IMAGE FIX (IMPORTANT) */
.assurance-image {
  display: flex;
  justify-content: center;
}



/* 🔥 TEXT */
.assurance-list {
  list-style: none;
  padding: 0;
}

.assurance-list li {
  margin-bottom: 8px;
  font-size: 17px;
  color: #444;
  padding-left: 24px;
  position: relative;
  line-height: 1.6;
}

/* CHECK ICON */
.assurance-list li::before {
  content: "✔";
  color: red;
  position: absolute;
  left: 0;
  font-size: 16px;
}

/* HEADING */
.section-title {
  font-size: 40px;
  font-weight: 600;
}

/* 🔥 MOBILE */
@media (max-width: 768px) {
  .assurance-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .assurance-image img {
    max-width: 300px;
  }

  .section-title {
    font-size: 28px;
  }
}.assurance-section {
  margin-top: 80px;
  padding: 0 20px;
}

/* 🔥 GRID */
.assurance-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  align-items: center;
  max-width: 1100px;
  margin: auto;
}

/* 🔥 IMAGE FIX (IMPORTANT) */
.assurance-image {
  display: flex;
  justify-content: center;
}

.assurance-image img {
  width: 100%;
  max-width: 420px;   /* ✅ prevents zoom */
  height: auto;       /* ✅ keeps aspect ratio */
  object-fit: contain; /* ✅ FIXES CROPPING */
  border-radius: 16px;
  
  padding: 20px;
  
}

/* 🔥 TEXT */
.assurance-list {
  list-style: none;
  padding: 0;
}

.assurance-list li {
  margin-bottom: 8px;
  font-size: 17px;
  color: #444;
  padding-left: 24px;
  position: relative;
  line-height: 1.6;
}

/* CHECK ICON */
.assurance-list li::before {
  content: "✔";
  color: red;
  position: absolute;
  left: 0;
  font-size: 16px;
}

/* HEADING */
.section-title {
  font-size: 40px;
  font-weight: 600;
}

/* 🔥 MOBILE */
@media (max-width: 768px) {
  .assurance-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .assurance-image img {
    max-width: 300px;
  }

  .section-title {
    font-size: 28px;
  }


  .custom-nav {
  width: auto;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev.custom-nav {
  left: 10px;
}

.carousel-control-next.custom-nav {
  right: 10px;
}
}
  .policy-block {
  scroll-margin-top: 100px; /* adjust according to navbar height */
}
`}</style>
        </>
    )}