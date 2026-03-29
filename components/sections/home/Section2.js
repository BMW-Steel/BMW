"use client";          // ←  ADD THIS LINE
import React from "react";

export default function Section2() {
  return (
    <>
      <div className="section-wrapper">

        <div className="container-custom">

          <div className="about-card">

            {/* TEXT */}
            <div className="about-content">

              <h4 className="sub-heading">WHO WE ARE</h4>

              <h2 className="main-title">
                The company with innovative solutions
              </h2>

              {/* MOBILE IMAGE */}
              <div className="mobile-img d-md-none">
                <img src="images/home-1.webp" alt="" />
              </div>

              <h3 className="highlight-text">
                Welcome to BMW Steels Ltd.
              </h3>

              <p className="desc-text">
                BMW Steels Ltd. was founded in 1990. Our head office is in Dehradun, Uttarakhand, India. We offer state-of-the-art engineering solutions for coal power plants, steel plants, and cement plants. We understand the specific needs of our customers. Our engineering solutions are aided by AI technologies to achieve model-based designs and simulations. We strongly believe in quality and efficiency in our products. Our company has over 35 years of experience in the field of coal conveying and ash conveying pipeline systems, along with advanced engineering tools to collect accurate data for coal flow.
              </p>

            </div>

            {/* IMAGE */}
            <div className="about-image d-none d-md-block">
              <img src="images/home-1.webp" alt="" />
            </div>

          </div>

        </div>

      </div>
      <style jsx>{`
/* SECTION */
.section-wrapper {
  padding: 70px 0;
}

/* CONTAINER */
.container-custom {
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
}

/* CARD */
.about-card {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 50px;

  background: #f4f4f4;
  border-radius: 20px;
  padding: 40px;
  align-items: center;
}

/* TEXT */
.sub-heading {
  color: red;
  font-size: 14px;
  letter-spacing: 2px;
  font-weight: 600;
}

.main-title {
  font-size: 32px;   /* ✅ fixed */
  font-weight: 600;
  margin-top: 10px;
}

.highlight-text {
  color: red;
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
}

/* DESCRIPTION */
.desc-text {
  font-size: 16px;   /* ✅ standard */
  line-height: 1.5;
  color: #444;
  margin-top: 10px;
  text-align: justify;
}

/* IMAGE */
.about-image img {
  width: 100%;
  height: 420px;          /* 🔥 controlled */
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

/* MOBILE IMAGE */
.mobile-img img {
  width: 120px;
  height: 120px;
  border-radius: 16px;
  margin-top: 15px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* MOBILE */
@media (max-width: 768px) {
  .section-wrapper {
    padding: 30px 0;
  }
  .about-card {
    grid-template-columns: 1fr;
    padding: 20px;
    text-align: center;
  }

  .main-title {
    font-size: 24px;
  }

  .highlight-text {
    font-size: 18px;
  }
} 


`}</style>
    </>
  );
}