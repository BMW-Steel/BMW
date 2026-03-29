"use client";
import React from "react";
export default function Index6(){
    return (
        <>
    <div>
        
      {/* BANNER */}
      <div className="putty-hero">

  <div className="putty-container">

    <div className="putty-header text-center">
      <p className="putty-sub">PRODUCT</p>
      <h2 className="putty-title">WEAR SEAL DIAMOND Putty</h2>
      <p className="putty-desc">
        Smooth, non-rusting ceramic epoxy based putty used to repair, recondition and rebuild ceramic lined equipments, cast basalt lined equipments or any other component which is subjected to wear and erosion.
      </p>
    </div>

    {/* CAROUSEL */}
    <div className="putty-carousel">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded-4 shadow">
          <div className="carousel-item active">
            <img
              src="images/cbc/putty.png"
              className="d-block w-100"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

  </div>

</div>
      {/* BANNER END */}

      {/* Section 1 */}
      <div className="putty-section">

  <div className="putty-container">

    <h3 className="section-heading">Recommended Applications</h3>

    <ul className="putty-list">

      <li>Repairs in tight spots where fine flowing putty is required</li>
      <li>As ceramic filler in 1–5 mm gaps</li>
      <li>Fixing wear resistant equipment</li>
      <li>Protection of metal from corrosion</li>
      <li>Joining tile-to-tile or pipe-to-pipe liners</li>
      <li>Lining pumps and wear faces</li>
      <li>Prevents wear on bends, pipes, valves and pumps</li>
      <li>Protecting flanges and elbows</li>
      <li>Repairing ceramic lined elbows and worn-out tiles</li>

    </ul>

  </div>

</div>
      {/* Section 1 END */}

      {/* Section 3 */}
      <div className="putty-section light">

  <div className="putty-container">

    <div className="table-card">

      <table className="table modern-table text-center">
        <thead>
          <tr>
            <th>SR.NO.</th>
            <th>PRODUCT</th>
            <th>DESCRIPTION</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>WEAR SEAL DIAMOND Putty</td>
            <td>
              Ceramic epoxy putty used for repair, gap filling and wear protection.
            </td>
            
          </tr>
        </tbody>
      </table>

    </div>

    <div className="storage-box">
      <h4>LIFE & STORAGE</h4>
      <p>
        Shelf life: 1 year at room temperature (22°C) in original packaging.
      </p>
    </div>

  </div>

</div>
      {/* Section 3 END */}
    </div>
    <style jsx>{`

/* CONTAINER */
.putty-container {
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
}

/* HERO */
.putty-hero {
  padding: 50px 0;
}

/* HEADER */
.putty-sub {
  color: red;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 600;
}

.putty-title {
  font-size: 40px;
  font-weight: 600;
  margin-top: 10px;
}

.putty-desc {
  margin-top: 10px;
  color: #555;
  max-width: 700px;
  margin-inline: auto;
  line-height: 1.5;
  font-size: 16px;
}

/* CAROUSEL */
.putty-carousel {
  margin-top: 40px;
}

/* SECTION */
.putty-section {
  padding: 60px 0;
}

.putty-section.light {
  background: #f9f9f9;
}

/* HEADING */
.section-heading {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 25px;
}

/* LIST */
.putty-list {
  list-style: none;
  padding: 0;
}

.putty-list li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 15px;
  color: #444;
  font-size: 16px;
}

.putty-list li::before {
  content: "•";
  color: red;
  position: absolute;
  left: 0;
}

/* TABLE */
.table-card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.modern-table th {
  background: red;
  color: white;
}

.modern-table td {
  background: #f4f4f4;
}

/* STORAGE */
.storage-box {
  margin-top: 20px;
}

.storage-box h4 {
  font-weight: 600;
}

.storage-box p {
  color: #555;
  font-size: 14px;
}

/* MOBILE */
@media (max-width: 768px) {
  .putty-title {
    font-size: 28px;
  }
}

`}</style>

   
 

        
        </>
    )
}