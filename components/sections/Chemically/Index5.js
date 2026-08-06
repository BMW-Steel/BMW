"use client";
import React from "react";
export default function Index5(){
    return (
        <>
    <div>
      {/* BANNER */}
    <div className="cbc-section">

  <div className="cbc-container">

    <div className="cbc-header text-center">
      <p className="cbc-sub">PRODUCT SERIES</p>
      <h2 className="cbc-title">
        Chemically Bonded Compound Series (CBC)
      </h2>
    </div>

    <div className="cbc-text">
      <p>
        CBC one compound mortar series is trowel onto an anchoring expended mesh.
      </p>

      <p>
        CBC is a mortar bonded product range; contains extremely hard sintered compounds like Alumina and Silicon Carbide as fillers in CBCTM Linings. CBCTM contains micro and nano-components to ensure high degree of densification by close the pores of the mortar element.
      </p>

      <p>
        The high hardness fillers of sintered compounds incorporated in the CBCTM matrix offer extremely good sliding wear resistance. CBCTM has a hard sintered Alumina/Bauxite/Silicon Carbide base. CBCTM compounds are available with a variety of bonding agents, depending on the application.
      </p>
      <p>CBC has an advantage for all the grades about flexibility of use. CBCTM can be employed to install new linings with difficult profiles and on the roofs too using few simple lining tools. Recommended CBCTM lining thickness depends on the job requirements and application conditions. The thickness of the lining can be recommended after technical evaluation of BMW at the lining site. Curing time of CBCTM series of compounds is 48 hours.</p>
    </div>

  </div>

</div>
      {/* Section 2 END */}

      {/* Product Table */}
      <div className="cbc-section light">

  <div className="cbc-container">

    <div className="cbc-grid">

      {/* TABLE */}
      <div className="cbc-table">
        <table className="table modern-table text-center">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CBC 100</td>
              <td>Moderate wear protection up to 110°C</td>
              
            </tr>
            <tr className="alt">
              <td>CBC 500</td>
              <td>Excellent protection up to 400°C</td>
              
            </tr>
            <tr>
              <td>CBC 900</td>
              <td>Protection up to 1000°C</td>
              
            </tr>
          </tbody>
        </table>
      </div>

      {/* IMAGE */}
      <div className="cbc-image">
        <img src="images/cbc/section-2.png" alt="" />
      </div>

    </div>

  </div>

</div>

      {/* Application Areas */}
      <div className="cbc-section">

  <div className="cbc-container text-center">

    <h2 className="cbc-title small">
      Application areas of equipment and system components lined with CBC:
    </h2>

    <ul className="cbc-list">
      <li>Drag Chain Conveyors</li>
      <li>Pneumatic Conveying Systems for Coal,Cement and Slag</li>
      <li>Dust Extraction Equipment: Hydro Cyclones , Cyclones</li>
      <li>Grinding Mill Internal Lining for classifier , mill body and difficult shapes</li>
      <li>Static and Dynamic Separators: Chutes etc</li>
    </ul>

  </div>

</div>

      {/* Section 3 */}
      <div className="cbc-section light">

  <div className="cbc-container">

    {/* IMAGE GRID */}
    <div className="cbc-gallery">
      <img src="images/cbc/section-1 (3).png" alt="" />
      <img src="images/cbc/section-1 (2).png" alt="" />
      <img src="images/cbc/section-1 (1).png" alt="" />
    </div>

    {/* CAROUSEL */}
    <div className="cbc-carousel">
      <div id="carouselExampleAutoplaying" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/cbc/ection-3.png" className="d-block w-100" alt="" />
          </div>
        </div>
      </div>
    </div>

    {/* TEXT */}
    <div className="cbc-text">
      <p>
        CBC lining provides excellent protection against erosive and corrosive wear across a wide temperature range.
      </p>

      <p>
        A planetary mixer is used for preparation, ensuring proper consistency before application on mesh-lined surfaces.
      </p>
    </div>

  </div>

</div>
      {/* Section 3 END */}
    </div>
    <style jsx>{`

.cbc-section {
  padding: 80px 20px;
}

.cbc-section.light {
  background: #f9f9f9;
}

.cbc-container {
  max-width: 1100px;
  margin: auto;
}

/* HEADER */
.cbc-sub {
  color: red;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 600;
}

.cbc-title {
  font-size: 40px;
  font-weight: 600;
  margin-top: 8px;
}

.cbc-title.small {
  font-size: 30px;
}

/* TEXT */
.cbc-text {
  margin-top: 32px;
  max-width: 1200px;
  margin-inline: auto;

}

.cbc-text p {
  color: #444;
  line-height: 1.8;
  margin-bottom: 16px;
  font-size: 16px;
}

/* GRID */
.cbc-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  align-items: center;
}

/* TABLE */
.modern-table th {
  background: red;
  color: white;
  font-size: 16px;
}

.modern-table td {
  background: #f4f4f4;
  font-size: 14px;
  
}
  .table-row td {
  background: red;
  padding: 12px;
}

/* ALT ROW */
.alt td {
  background: red;
}

/* IMAGE */
.cbc-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

/* LIST */
.cbc-list {
  list-style: none;
  margin-top: 32px;
  padding: 0;
  font-size: 16px;
  
}

.cbc-list li {
  margin-bottom: 8px;
  color: #444;
  font-size: 16px;
}

.cbc-list li::before {
  content: "•";
  color: red;
  margin-right: 8px;
}

/* GALLERY */
.cbc-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.cbc-gallery img {
  width: 100%;
  border-radius: 10px;
}

/* CAROUSEL */
.cbc-carousel {
  margin-top: 48px;
}

/* MOBILE */
@media (max-width: 768px) {

.cbc-section {
  padding: 40px 20px;
}
  .cbc-grid {
    grid-template-columns: 1fr;
  }

  .cbc-gallery {
    grid-template-columns: 1fr;
  }

  .cbc-title {
    font-size: 28px;
  }
}

`}</style>

    
  
        
        </>
    )}