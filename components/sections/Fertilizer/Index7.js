"use client";
import React from "react";
export default function Index7(){
    return (
        <>
    <div>
      {/* Section 1 */}
      <div className="fert-section">

  <div className="fert-container">

    {/* 🔥 HEADER */}
    <div className="fert-header text-center">
      <p className="fert-sub">AGRICULTURE SOLUTION</p>
      <h2 className="fert-title">
        BMW Basaltic Mineral Fertilizer
      </h2>
    </div>

    {/* 🔥 CONTENT */}
    <div className="fert-grid">

      {/* TEXT */}
      <div className="fert-text">
        <p>
          Mineral fertilizers are most environ friendly fertilizers. Modified Basalt powder is a 100% natural product. Basalt rock is rich in macro- and microelements as well as oxides, which are necessary for plant growth. It contains ingredients that are not being provided by chemical fertilizers.
        </p>

        <p>
          Boost Your Agricultural Productivity with BMW's Revolutionary Mineral fertilizer Solutions. To restore soil health, fight crop diseases, and improve yields with our proven natural mineral nutrition solutions.
        </p>

        <p>
          At BMW we understand the urgent need for sustainable, high-quality solutions that help restore soil health, enhance crop yields, and reduce dependency on harmful chemicals. The mineral fertilizer has several minerals that, when applied, can improve soil fertility and plant growth.
        </p>

        <p>
          BMW Basaltic Mineral fertilizers are of mafic composition, hence rich in magnesium (Mg) and iron (Fe) silicates of basic pH. These fertilizers are also sources of phosphorus (P), potassium (K), calcium (Ca), and several micronutrients essential for plant nutrition.
        </p>
        <p>Therefore, the use of Basaltic mineral fertilizer in agriculture allows for soil fertility improvement, releasing nutrients and inducing soil pH correction as well. The nutrients are released slowly and continuously, providing satisfactory results for up to five years, without application at each planting.</p>
        <p>Furthermore, the tests revealed that applying the dose of basaltic fertilizer substantially elevated pH, and increased concentrations of phosphorus (P), potassium (K+), calcium(Ca2+), magnesium (Mg2+), boron (B), and silicon (Si) contents in the soil.</p>
      </div>

      {/* IMAGE */}
      <div className="fert-image">
        <img src="images/fertilizer/section-1.png" alt="" />
      </div>

    </div>

  </div>

</div>
      {/* Section 1 END */}

      {/* Section 2 */}
      <div className="fert-section light">

  <div className="fert-container">

    {/* HEADER */}
    <div className="fert-header text-center">
      <h2 className="fert-title">
        Why Choose BMW Basaltic Mineral Fertilizer?
      </h2>
    </div>

    {/* LIST */}
    <div className="fert-benefits">

      <div className="benefit-item">
        <span>Proven Quality</span>
        Every product undergoes strict quality control for top performance.
      </div>

      <div className="benefit-item">
        <span>Trust & Reliability</span>
        Backed by strong expertise in mineral fertilizer innovation.
      </div>

      <div className="benefit-item">
        <span>Sustainable Solutions</span>
        Improves soil health while reducing environmental impact.
      </div>

      <div className="benefit-item">
        <span>Exceptional Service</span>
        Technical support ensures maximum product efficiency.
      </div>

    </div>

  </div>

</div>

      {/* Section-7 */}
      
      {/* Section-7 End */}
    </div>
    <style jsx>{`

/* SECTION */
.fert-section {
  padding: 50px 20px;
}

.fert-section.light {
  background: #f9f9f9;
}

/* CONTAINER */
.fert-container {
  max-width: 1100px;
  margin: auto;
}

/* HEADER */
.fert-sub {
  color: red;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 600;
}

.fert-title {
  font-size: 40px;
  font-weight: 600;
  margin-top: 10px;
}

/* GRID */
.fert-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  margin-top: 50px;
  align-items: center;
}

/* TEXT */
.fert-text p {
  color: #444;
  line-height: 1.8;
  margin-bottom: 15px;
  font-size: 16px;
  max-width: 520px;
}

/* IMAGE */
.fert-image {
  text-align: center;
}

.fert-image img {
  width: 100%;
  max-width: 420px;
  border-radius: 14px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

/* BENEFITS */
.fert-benefits {
  margin-top: 40px;
  display: grid;
  gap: 20px;
}

.benefit-item {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
  line-height: 1.6;
}

.benefit-item span {
  display: block;
  font-weight: 600;
  color: red;
  margin-bottom: 5px;
}

/* MOBILE */
@media (max-width: 768px) {
  .fert-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .fert-title {
    font-size: 28px;
  }

  .fert-text p {
    max-width: 100%;
  }
}

`}</style>
 
        
        </>
    )}