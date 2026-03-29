"use client";
import React from "react";

export default function Index1(){
    return (
        <>
{/* <script>
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carouselExampleIndicators");
    const indicatorsContainer = document.querySelector(
      ".carousel-indicators"
    );

    const scrollActiveIndicatorIntoView = () => {
      const activeIndicator = document.querySelector(
        ".carousel-indicators .active"
      );

      if (activeIndicator) {
        // Get the bounding rectangle of the active indicator
        const indicatorRect = activeIndicator.getBoundingClientRect();
        const containerRect = indicatorsContainer.getBoundingClientRect();

        // Calculate the scroll offset
        const indicatorLeft = indicatorRect.left - containerRect.left;
        const indicatorRight = indicatorRect.right - containerRect.left;

        // Check if the active indicator is outside the visible area of the container
        if (
          indicatorLeft < 0 ||
          indicatorRight > indicatorsContainer.offsetWidth
        ) {
          indicatorsContainer.scrollTo({
            left:
              indicatorLeft -
              indicatorsContainer.offsetWidth / 2 +
              activeIndicator.offsetWidth / 2, // Center the active indicator
            behavior: "smooth",
          });
        }
      }
    };

    // Listen for slide events to update the active indicator scroll position
    carousel.addEventListener("slid.bs.carousel", () => {
      // Use setTimeout to ensure the DOM update happens before scrolling
      setTimeout(() => {
        scrollActiveIndicatorIntoView();
      }, 100); // Delay to ensure that the active indicator has been updated
    });

    // Initial scroll on page load (in case the page is loaded with an active slide)
    setTimeout(() => {
      scrollActiveIndicatorIntoView();
    }, 100); // Initial delay to ensure everything has loaded
  });
</script> */}

{/* <script>
  $('#myModal').on('shown.bs.modal', function () {
    $('#video1')[0].play();
  })
  $('#myModal').on('hidden.bs.modal', function () {
    $('#video1')[0].pause();
  })
</script> */}



{/* BANNER */}
<div className="section-wrapper">

  <div className="container-custom">

    {/* HEADER */}
    <div className="text-center">

      <h2 className="main-title">
        Our Cast Basalt Manufacturing Plant
      </h2>

      <p className="desc-text mt-2">
        BMW Steels Ltd. has state of the art basalt manufacturing plant
        situated in Bhagwanpur, Haridwar, Uttarakhand.
      </p>

    </div>

    {/* CAROUSEL */}
    <div className="carousel-wrapper mt-5">

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="images/basalt/banner-1.webp" className="carousel-img" alt="" />
          </div>

          <div className="carousel-item">
            <img src="images/banner-2 (2).png" className="carousel-img" alt="" />
          </div>

          <div className="carousel-item">
            <img src="images/basalt/banner-3.jpg" className="carousel-img" alt="" />
          </div>

        </div>

        {/* CONTROLS */}
        <button
          className="carousel-control-prev custom-nav"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next custom-nav"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

    </div>

  </div>

</div>

{/* BANNER END */}

{/* Section 1 */}

<div className="p-md-5 mt-3">
  <div className="section-wrapper">

  <div className="section-container">

    {/* HEADER */}
    <div className="section-header text-center">
      <p className="section-sub">OUR PRODUCT</p>
      <h2 className="section-title">
        Cast Basalt (BASALT450™)
      </h2>
    </div>

    {/* CONTENT */}
    <div className="section-grid">

      {/* TEXT */}
      <div className="section-text">
        <p>
          Cast Basalt is a durable and highly abrasion-resistant material produced by melting and reheating basalt rock. The process yields a dense, lustrous, black-coloured ceramic with exceptional hardness, scoring 8 on the Mohs scale (diamond is 10). To achieve these properties, a unique composition is required in cast basalt, providing remarkable resistance to abrasion, friction, and chemical wear.
Unfortunately Indian basalt deposits lacks required chemical and physical properties. To achieve world class Basalt product BMW undertook a massive R&amp;D activity.
        </p>
      </div>

      {/* IMAGE CARD */}
      <div className="section-image-card">
        <img src="images/basalt/section-1.webp" alt="" />

        <div className="image-info">
          <h4>Cast Basalt</h4>
          <a href="pdf/Cast Basalt.pdf" download>
            Download Brochure →
          </a>
        </div>
      </div>

    </div>

  </div>

</div>

  <div className="section-wrapper">

  <div className="container-custom">

    {/* 🔥 TITLE 1 */}
    <h2 className="section-title text-center">
      Typical Composition of Cast Basalt
    </h2>

    {/* TABLE 1 */}
    <div className="table-card mt-4">
      <table className="modern-table2">
        <thead>
          <tr>
            <th colSpan="8" className="table-head">
              Typical Composition (%)
            </th>
          </tr>
          <tr className="table-subhead">
            <td>Al203</td>
            <td>Si02</td>
            <td>Fe203/Fe0</td>
            <td>Ca0</td>
            <td>Mg0</td>
            <td>K20</td>
            <td>Na20</td>
            <td>Ti02</td>
          </tr>
        </thead>

        <tbody>
          <tr className="table-row">
            <td>10</td>
            <td>50</td>
            <td>12</td>
            <td>10</td>
            <td>10</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* 🔥 TITLE 2 */}
    <h2 className="section-title text-center mt-5">
      Typical Mechanical Properties of Cast Basalt
    </h2>

    {/* TABLE GRID */}
    <div className="grid-2 mt-4">

      {/* LEFT */}
      <div className="table-card">
        <table className="modern-table">
          <tbody>

            <tr><td>Density</td><td>2.8 - 3.1 gm/cc</td></tr>

            <tr className="alt">
              <td>Surface hardness, Mohs Scle</td>
              <td>approx. 8 (Diamond is 10)</td>
            </tr>

            <tr>
              <td>Comprehensive resistance</td>
              <td>2,500 - 4,500 kg/cm²</td>
            </tr>

            <tr className="alt">
              <td>Bending Strenght</td>
              <td>250 - 450 kg/cm²</td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* RIGHT */}
      <div className="table-card">
        <table className="modern-table">
          <tbody>

            <tr>
              <td>Application temperature range upto</td>
              <td>approx . 620K (approx .350 C)</td>
            </tr>

            <tr className="alt">
              <td>Chemical Strength</td>
              <td>Resistance to acids and alkali</td>
            </tr>

            <tr>
              <td>Water absorption</td>
              <td>0.5% (maximum)</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>

  </div>

</div>
</div>

{/* Section 1 END */}

{/* Section 2 */}

<div className="section-wrapper">

  <div className="container-custom">

    {/* HEADING */}
    <h2 className="section-title">
      Typical Mechanical Properties of Cast Basalt
    </h2>

    {/* CONTENT */}
    <p className="desc-text mt-3">
      Indian basalt deposits do not have the required chemistry, so they lag in achieving the required physical parameters.
    </p>

    <p className="desc-text">
      The BMW team has collected 750 samples from deposits across the length and breadth of the country. However, not a single stone could achieve the desired parameters. Therefore, basalt samples from two or more stones are blended to achieve the required chemistry.
    </p>

  </div>

</div>

{/* Section 2 END */}

{/* Section 3 */}

<div className="section-wrapper light">

  <div className="container-custom">

    {/* 🔥 MAIN HEADING */}
    <h2 className="main-title text-center">
      Cast Basalt Products
    </h2>

    {/* ===================== 1 ===================== */}
    <div className="product-block">

      <h3 className="product-title">
        1. Cast Basalt Cylinders
      </h3>

      <p className="desc-text">
        BMW manufactures Cast Basalt cylinders in various sizes, as per the client's requirement. Basalt Cylindrical Liner are manufactured by Centrifugal Cylinder Casting.
      </p>

      <div className="image-grid">
        <img src="images/basalt/section-3-1.png" alt="" />
        <img src="images/basalt/section-3-2.png" alt="" />
        <img src="images/basalt/section-3-0.jpeg" alt="" />
      </div>

      <p className="caption">Centrifugal Cylinder Casting</p>

    </div>

    {/* ===================== 2 ===================== */}
    <div className="product-block">

      <h3 className="product-title">
        2. Cast Basalt Tiles
      </h3>

      <p className="desc-text">
        Basalt Tiles casting is shown in the attached clip. Basalt Tiles can be of different shapes like rectangular, hexagonal and Trench Liners depending on their application. Basalt Tile liners are manufactured by Casting by directly pouring molten basalt into various shapes of moulds.
      </p>

      <div className="image-grid">
        <img src="images/basalt/section-3-3 (5).png" alt="" />
        <img src="images/basalt/section-3-4.png" alt="" />
        <img src="images/basalt/section-3-3 (1).png" alt="" />
      </div>

      <p className="caption">Tile Casting</p>

      <div className="image-grid">
        <img src="images/basalt/section-3-3 (2).png" alt="" />
        <img src="images/basalt/section-3-3 (3).png" alt="" />
        <img src="images/basalt/section-3-3 (4).png" alt="" />
      </div>

    </div>

  </div>

  {/* ===================== 3 ===================== */}
  {/* ===================== 3 ===================== */}
<div className="container-custom product-row reverse">

  <div className="product-image">
    <img src="images/basalt/section-3-3-3 (2).png" alt="" />
  </div>

  <div className="product-content">
    <h3 className="product-title">3. Skid Pan Tiles</h3>

    <p className="desc-text">
      In 1979, the Automotive Research Association of England tested cast basalt skid pan tiles at their track, confirming their suitability for automotive safety testing over six years. Today, the automotive industry worldwide uses these specially designed tiles in low-friction test facilities, including in India.
      BMW’s cast basalt tiles are widely accepted for their durability and smoothness. Available in polished or unpolished forms, they maintain surface smoothness due to their high wear resistance.
      Standard dimensions are 200 × 200 mm, with thicknesses ranging from 25 mm to 40 mm, along with curved options for circular tracks.
    </p>
  </div>

</div>

  {/* ===================== 4 ===================== */}
  <div className="container-custom product-row reverse">

    <div className="product-image">
      <img src="images/basalt/section-4-7 (2).png" alt="" />
    </div>

    <div className="product-content">
      <h3 className="product-title">4. Cast Basalt Lined Equipment</h3>

      <p className="desc-text">
        With our innovative approaches, we have established ourselves as a reliable manufacturer of cast basalt ash pipeline bends. These bends are widely used in various sectors such as hydraulic pipelines, chemical industries, electric power, mining, metallurgy, coal handling, and many more.
        Cast basalt liners offer outstanding corrosion and abrasion resistance; as a result, they easily withstand high working pressures. Enclosed with cement mortar inside metal pipes, the liners prevent early wear of the inner pipe walls.
        Moreover, the flexible joints of our ash pipeline system facilitate quick fitting, secure connections, and smooth performance.
      </p>
    </div>

  </div>

</div>

<div className="p-3 px-md-5">
  <div className="lining-section">

  {/* 🔥 HEADER */}
  <div className="section-header text-center">
    <p className="section-sub">APPLICATION</p>
    <h2 className="section-title">
      Cast Basalt Lining Solutions
    </h2>
    <p className="section-desc">
      Cast basalt lining is an effective solution for protecting equipment in the coal industry, offering exceptional resistance against abrasion, corrosion, and chemical exposure.
    </p>
  </div>

  {/* 🔥 CONTENT */}
  <div className="section-container">

    {/* INTRO */}
    <div className="section-block">
      <p>
        The choice of lining material depends on operating conditions and equipment requirements. Cast basalt is ideal for highly abrasive and chemically exposed environments.
      </p>
    </div>

    {/* 🔥 WEAR SECTION */}
    <div className="section-block">
      <h3 className="section-heading">Wear in the Coal Industry</h3>

      <ul className="custom-list">
        <li>
          <span>Abrasive wear</span>
          Provides excellent resistance against friction from fly ash and slurry.
        </li>
        <li>
          <span>Erosive wear</span>
          Protects surfaces from particle flow degradation.
        </li>
        <li>
          <span>Corrosive wear</span>
          Reduces chemical damage caused by SOx exposure.
        </li>
        <li>
          <span>Impact wear</span>
          Not suitable for heavy impact conditions.
        </li>
      </ul>
    </div>

    {/* 🔥 EQUIPMENT SECTION */}
    <div className="section-block">
      <h3 className="section-heading">
        Equipment Protected by Cast Basalt
      </h3>

      <ul className="custom-list">
        <li>
          <span>Conveyors & transport systems</span>
          Protects surfaces handling fly ash and slurry.
        </li>
        <li>
          <span>Pipes & chutes</span>
          Prevents wear and corrosion in transport lines.
        </li>
        <li>
          <span>Bunkers & silos</span>
          Reduces wear in storage and feeder systems.
        </li>
        <li>
          <span>Cyclones & separators</span>
          Increases lifespan of internal components.
        </li>
      </ul>
    </div>

  </div>

</div>
</div>

<div className="section-wrapper">

  <div className="container-custom">

    {/* 🔥 HEADER */}
    <h2 className="main-title text-center">
      Application Areas
    </h2>

    <p className="desc-text text-center mt-2">
      Basalt lining is used in various industries to reduce wear and tear in mechanical components.
    </p>

    {/* ===================== 1 ===================== */}
    <div className="app-block">

  <h3 className="app-title">1. Powerplants</h3>

  <div className="image-grid single-grid">

    <div className="card-item">
      <img src="images/basalt/section-4 (3).png" alt="" />
      <p>Basalt Lining in Ash Handling Line</p>
    </div>

    <div className="card-item">
      <img src="images/basalt/section-4 (4).png" alt="" />
      <p>Basalt Lining in Ash Handling Line</p>
    </div>

    <div className="card-item">
      <img src="images/basalt/section-4 (5).png" alt="" />
      <p>Basalt Lining in Coal Hopper</p>
    </div>

    {/* CENTER ITEM */}
    <div className="card-item center-item">
      <img src="images/basalt/section-4 (6).png" alt="" />
      <p>Basalt Lining in Coal Conveyor System</p>
    </div>

  </div>

</div>

    {/* ===================== 2 ===================== */}
    <div className="app-block">

      <h3 className="app-title">2. Sewage Plant</h3>

      <div className="image-grid single-grid">
        <div className="card-item ">
          <img src="images/basalt/section-4-7 (1).png" alt="" />
          <p>Basalt Sewer Systems</p>
        </div>
      </div>

    </div>

    {/* ===================== 3 ===================== */}
    <div className="app-block">

      <h3 className="app-title">3. Cement Plants</h3>

      <div className="image-grid two">
        <div className="card-item">
          <img src="images/basalt/frame (1).png" alt="" />
        </div>

        <div className="card-item">
          <img src="images/basalt/frame (2).png" alt="" />
        </div>
      </div>

    </div>

    {/* ===================== 4 ===================== */}
    <div className="app-block">

      <h3 className="app-title mt-5">4. Steel Plant</h3>

      <div className="image-grid">
        <div className="card-item">
          <img src="images/basalt/section-4 (1).png" alt="" />
          <p>Flume Tunnel</p>
        </div>

        <div className="card-item">
          <img src="images/basalt/section-4 (2).png" alt="" />
          <p>Basalt Lining in Ash Handling Line</p>
        </div>
      </div>

    </div>

  </div>

</div>

<div className="rd-section">

  <div className="rd-container">

    {/* 🔥 HEADER */}
    <div className="rd-header text-center">
      <p className="rd-sub">INNOVATION</p>
      <h2 className="rd-title">Our R&D in Basalt</h2>
    </div>

    {/* 🔥 CONTENT */}
    <div className="rd-grid">

      {/* IMAGE */}
      <div className="rd-image">
        <img src="images/basalt/section-6.png" alt="" />
      </div>

      {/* TEXT */}
      <div className="rd-content">
        <h3>Basalt Fiber</h3>

        <p>
          BMW has focused on developing basalt fiber — a next-generation material created by fusing basalt rock and drawing it into fibers. These fibers provide exceptional heat stability, insulation, durability, and vibration resistance.
        </p>

        <p>
          Basalt fiber consists of mineral filaments and outperforms most traditional fibers in mechanical and physico-chemical properties. It is widely used in reinforced composites due to its excellent corrosion and fire resistance.
        </p>

        <p>
          The manufacturing process involves melting basalt rock at around 1400°C and extruding it through fine nozzles to produce continuous fiber filaments.
        </p>
      </div>

    </div>

  </div>

</div>
<style jsx>{`
/* SECTION */
.section-wrapper {
  padding: 50px 0;
  
}

/* CONTAINER */
.container-custom {
  max-width: 1100px;
  margin: auto;
  padding: 0 ;
}

/* HEADER */
.main-title {
  font-size: 32px;   /* ✅ fixed */
  font-weight: 600;
}

.desc-text {
  font-size: 16px;
  color: #444;
  line-height: 1.5;
}

/* CAROUSEL WRAPPER */
.carousel-wrapper {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}


/* NAV BUTTONS */
.custom-nav {
  width: 50px;
  height: 50px;
  
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev {
  left: 15px;
}

.carousel-control-next {
  right: 15px;
}

/* MOBILE */
@media (max-width: 768px) {
.section-wrapper {
  padding: 20px 0px;
}
  .main-title {
    font-size: 24px;
  }

  .carousel-img {
    height: 250px;
  }
    .modern-table2 {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  margin-left: -25px; /* 🔥 center the table on mobile */
}
}

/* MAKE BUTTON AREA MORE VISIBLE */
.carousel-control-prev,
.carousel-control-next {
  width: 60px;
  height: 60px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 1; /* always visible */
}

/* 🔥 ICON BACKGROUND */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.7);
  background-size: 60% 60%;
  border-radius: 50%;
  padding: 20px;
}

/* 🔥 HOVER EFFECT */
.carousel-control-prev:hover .carousel-control-prev-icon,
.carousel-control-next:hover .carousel-control-next-icon {
  background-color: red;
  transform: scale(1.1);
}

/* 🔥 POSITION (closer to image) */
.carousel-control-prev {
  left: 20px;
}

.carousel-control-next {
  right: 20px;
}

/* 🔥 ADD SHADOW FOR VISIBILITY */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
}

/* REMOVE FADE EFFECT */
.carousel-control-prev,
.carousel-control-next {
  filter: none;
}


/* FIX CAROUSEL HEIGHT */


/* 🔥 MAKE ALL IMAGES SAME SIZE */
.carousel-inner img {
  height: 100%;
  width: 100%;
  object-fit: cover; /* fills area nicely */
  border-radius: 15px;
}
 


/* 🔥 CENTERED CONTAINER (IMPORTANT FIX) */
.section-container {
  max-width: 1100px;
  margin: auto;
}

/* HEADER */
.section-sub {
  color: red;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
}

.section-title {
  font-size: 32px;
  font-weight: 600;
}

/* 🔥 GRID BALANCE FIX */
.section-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  margin-top: 50px;
  align-items: center;
}

/* 🔥 TEXT FIX (MOST IMPORTANT) */
.section-text {
  max-width: 900px; /* 🔥 prevents stretching */
}

.section-text p {
  color: #444;
  line-height: 1.5;
  margin-bottom: 18px;
  font-size: 16px;
}

/* 🔥 IMAGE CARD IMPROVED */
.section-image-card {
  background: #fff;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.12);
  text-align: center;
  max-width: 380px;
  margin-left: auto; /* 🔥 aligns right properly */
}

/* IMAGE FIX */
.section-image-card img {
  width: 100%;
  height: 260px;
  object-fit: contain;
}

/* TEXT UNDER IMAGE */
.image-info h4 {
  margin-top: 12px;
  font-size: 18px;
}

.image-info a {
  color: red;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
}

/* 🔥 HOVER EFFECT */
.section-image-card:hover {
  transform: translateY(-5px);
  transition: 0.3s ease;
}

/* MOBILE */
@media (max-width: 768px) {
  .section-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .section-text {
    max-width: 100%;
  }

  .section-image-card {
    margin: auto;
  }

  .section-title {
    font-size: 25px;
  }
}
  .lining-section {
  padding: 80px 20px;
}

/* 🔥 CONTAINER */
.section-container {
  max-width: 900px;
  margin: auto;
}

/* HEADER */
.section-sub {
  color: red;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 600;
}



.section-desc {
  margin-top: 10px;
  color: #555;
  line-height: 1.5;
  max-width: 700px;
  margin-inline: auto;
  font-size: 16px;
}

/* BLOCK SPACING */
.section-block {
  margin-top: 40px;
}

/* SECTION HEADING */
.section-heading {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
}

/* TEXT */
.section-block p {
  color: #444;
  line-height: 1.5;
  font-size: 16px;
}

/* 🔥 CUSTOM LIST */
.custom-list {
  list-style: none;
  padding: 0;
}

.custom-list li {
  margin-bottom: 18px;
  font-size: 16px;
  color: #444;
  line-height: 1.5;
  padding-left: 25px;
  position: relative;
}

/* RED BULLET */
.custom-list li::before {
  content: "•";
  color: red;
  font-size: 20px;
  position: absolute;
  left: 0;
  top: 2px;
}

/* HIGHLIGHT TITLE */
.custom-list span {
  font-weight: 600;
  display: block;
  color:red;
}

/* MOBILE */
@media (max-width: 768px) {
  .section-title {
    font-size: 28px;
  }

  .section-heading {
    font-size: 20px;
  }
}
  img {
  border-radius: 12px;
  transition: 0.3s ease;
}

img:hover {
  transform: scale(1.03);
}


  .rd-section {
  background: #f4f4f4;
  padding: 50px 20px;
}

/* 🔥 CONTAINER */
.rd-container {
  max-width: 1100px;
  margin: auto;
}

/* HEADER */
.rd-sub {
  color: red;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 600;
}

.rd-title {
  font-size: 40px;
  font-weight: 600;
  margin-top: 10px;
  color:red;
}

/* 🔥 GRID */
.rd-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  margin-top: 50px;
  align-items: center;
}

/* IMAGE */
.rd-image {
  text-align: center;
}

.rd-image img {
  width: 100%;
  max-width: 420px;
  border-radius: 14px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  transition: 0.3s ease;
}

/* HOVER */
.rd-image img:hover {
  transform: scale(1.03);
}

/* TEXT */
.rd-content h3 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 15px;
}

.rd-content p {
  color: #444;
  line-height: 1.5;
  margin-bottom: 15px;
  font-size: 16px;
  
}

/* 🔥 MOBILE */
@media (max-width: 768px) {
  .rd-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .rd-title {
    font-size: 28px;
  }
}
  .table-card {
  background: #fff;
  border-radius: 14px;
  padding: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

/* TABLE */
.modern-table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}

.modern-table2 {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
}



/* HEAD */
.table-head {
  background: #f48221;
  color: white;
  padding: 12px;
  font-weight: 600;
}

/* SUB HEAD */
.table-subhead td {
  background: #d1d1d6;
  font-weight: 500;
  padding: 10px;
}

/* ROW */
.table-row td {
  background: #f48221;
  padding: 10px;
}

/* ALT ROW */
.alt td {
  background: #f48221;
}

/* GENERAL CELLS */
.modern-table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
}

/* GRID */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

/* MOBILE */
@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
    
    
}

 
}
  .container-custom {
  max-width: 900px;   /* 🔥 better readability */
  margin: auto;
  padding: 0 20px;
}

/* TITLE */


/* TEXT */
.desc-text {
  font-size: 16px;
  line-height: 1.5;
  color: #444;
}
  .section-wrapper.light {
  background: #f4f4f4;
}

/* CONTAINER */
.container-custom {
  max-width: 1100px;
  margin: auto;
  padding: 0 20px;
}

/* MAIN TITLE */
.main-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 40px;
}

/* PRODUCT BLOCK */
.product-block {
  margin-bottom: 60px;
}

/* TITLES */
.product-title {
  font-size: 22px;
  font-weight: 600;
  color: red;
}

/* TEXT */
.desc-text {
  font-size: 16px;
  line-height: 1.5;
  color: #444;
  margin-top: 10px;
}

/* IMAGE GRID */
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.image-grid img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

/* CAPTION */
.caption {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

/* ROW LAYOUT */
.product-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-top: 60px;
}

.product-row.reverse {
  direction: rtl;
}

.product-row.reverse .product-content {
  direction: ltr;
}

/* IMAGE */
.product-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

/* MOBILE */
@media (max-width: 768px) {
  .image-grid {
    grid-template-columns: 1fr;
  }

  .product-row {
    grid-template-columns: 1fr;
  }

  .main-title {
    font-size: 24px;
  }

  .main-title {
  font-size: 32px;
  font-weight: 600;
}

.desc-text {
  font-size: 16px;
  color: #444;
  line-height: 1.7;
}

/* BLOCK */
.app-block {
  margin-top: 50px;
}

/* TITLE */
.app-title {
  font-size: 22px;
  font-weight: 600;
  color: red;
  margin-bottom: 15px;
  mt-3;
  
}

/* GRID */


/* ===================== FIXED 3 + 1 PERFECT GRID ===================== */

/* 🔥 MAIN GRID */
.single-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* 🔥 CENTER ITEM PERFECTLY ALIGNED */
.center-item {
  grid-column: 2;   /* middle column */
}

/* CARD */
.card-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* IMAGE SAME SIZE */
.card-item img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
}

/* TEXT */
.card-item p {
  font-size: 15px;
  margin-top: 10px;
  color: #444;
}

/* MOBILE */
@media (max-width: 768px) {
  .single-grid {
    grid-template-columns: 1fr;
  }

  .center-item {
    grid-column: auto;
  }
}
  
  
`}</style>




  
        </>
    )
}
