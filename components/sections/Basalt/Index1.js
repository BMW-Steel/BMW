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
<div className="">
  <div className="text-center px-md-5 px-2">
    <h2
      className="pt-4 mobile-fonts-heading"
      style={{ fontSize: '60px' }}
    >
      Our Cast Basalt Manufacturing Plant
    </h2>

    <div className="px-md-5 py-md-3 text-center">
      <h4 style={{ color: 'rgb(66, 66, 66)', fontWeight: 400 }}>
        BMW Steels Ltd. has state of the art basalt manufacturing plant
        situated in Bhagwanpur, Haridwar, Uttarakhand.
      </h4>
    </div>
  </div>

  {/* Carousal  */}

  <div className="p-3 px-md-5">
    <div className="px-md-5">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/basalt/banner-1.webp"
              style={{ borderRadius: '15px' }}
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="p-3 section-6" style="color: black; backgroundColor: '#D9D9D9'; display:inline-block;position: relative;bottom: 50px; left: 100px; borderRadius: 10px;boxShadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"><h3>Hathras, Uttar Pradesh</h3>
                        <h4 style="color: rgb(68, 67, 67);">Fabrication and Assembly Unit</h4>
                      </div> */}
          </div>

          <div className="carousel-item">
            <img
              src="images/banner-2 (2).png"
              style={{ borderRadius: '15px' }}
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="p-3 section-6" style="color: black; backgroundColor: '#D9D9D9'; display:inline-block;position: relative;bottom: 50px; left: 100px; borderRadius: 10px;boxShadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"><h3>Hathras, Uttar Pradesh</h3>
                        <h4 style="color: rgb(68, 67, 67);">Fabrication and Assembly Unit</h4>
                      </div> */}
          </div>

          <div className="carousel-item">
            <img
              src="images/basalt/banner-3.jpg"
              style={{ borderRadius: '15px' }}
              className="d-block w-100"
              alt="..."
            />
            {/* <div className="p-3 section-6" style="color: black; backgroundColor: '#D9D9D9'; display:inline-block;position: relative;bottom: 50px; left: 100px; borderRadius: 10px;boxShadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"><h3>Hathras, Uttar Pradesh</h3>
                        <h4 style="color: rgb(68, 67, 67);">Fabrication and Assembly Unit</h4>
                      </div> */}
          </div>
          {/* <div className="carousel-item">
                      <img src="images/section-6-0-1.jpg" style="height: 600px; width: auto; borderRadius:15px;" className="d-block w-100" alt="...">
                      <div className="p-3 section-6" style="color: black; backgroundColor: '#D9D9D9'; display:inline-block;position: relative;bottom: 50px; left: 100px; borderRadius: 10px;boxShadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"><h3>Hathras, Uttar Pradesh</h3>
                        <h4 style="color: rgb(68, 67, 67);">Fabrication and Assembly Unit</h4>
                      </div>
                    </div> */}
          {/* <div className="carousel-item">
                      <img src="images/section-6-1.webp" style="height: 600px; width: auto; borderRadius:15px;" className="d-block w-100" alt="...">
                      <div className="p-3 section-6" style="color: black; backgroundColor: '#D9D9D9'; display:inline-block;position: relative;bottom: 50px; left: 100px; borderRadius: 10px;boxShadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"><h3>Hathras, Uttar Pradesh</h3>
                        <h4 style="color: rgb(68, 67, 67);">Fabrication and Assembly Unit</h4>
                      </div>
                    </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>

  {/* Carousal END */}
</div>

{/* BANNER END */}

{/* Section 1 */}

<div className="p-md-5 mt-3">
  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '75px' }}
      >
        Cast Basalt (BASALT450&#8482;)
      </h2>
      <h5
        className="pt-4"
        style={{
          color: 'rgb(66, 66, 66)',
          fontWeight: 400,
          textAlign: 'justify',
        }}
      >
        Cast Basalt is a durable and highly abrasion-resistant material produced by melting and reheating basalt rock. The process yields a dense, lustrous, black-coloured ceramic with exceptional hardness, scoring 8 on the Mohs scale (diamond is 10). To achieve these properties, a unique composition is required in cast basalt, providing remarkable resistance to abrasion, friction, and chemical wear.

      </h5>
      <h5
        className="pt-4"
        style={{
          color: 'rgb(66, 66, 66)',
          fontWeight: 400,
          textAlign: 'justify',
        }}
      >
       Unfortunately Indian basalt deposits lacks required chemical and physical properties. To achieve world class Basalt product BMW undertook a massive R&D activity.

      </h5>
    </div>
    <div className="text-center p-3 ps-md-5">
      <img
        src="images/basalt/section-1.webp"
        style={{
          borderRadius: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }}
        className="w-100"
        alt=""
      />
      <div className="pt-2">
        <h3>Cast Basalat</h3>
        <a
          href="pdf/Cast Basalt.pdf"
          download=""
          style={{ color: 'red', textDecoration: 'none' }}
        >
          Download Now
        </a>
      </div>
    </div>
  </div>

  <div className="px-md-5 p-3">
    <div className="px-md-3 table-responsive">
      <h2 className="pt-md-4 fs-1 my-3 py-4">
        Typical Composition of Cast Basalt
      </h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th
              style={{ backgroundColor: '#f48221' }}
              colspan="9"
              scope="col"
              className="text-white text-center"
            >
              Typical Composition (%)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ border: '2px solid white' }}>
            <td style={{ backgroundColor: '#bdbcc3' }}>Al203</td>
            <td style={{ backgroundColor: '#bdbcc3' }}>Si02</td>
            <td style={{ backgroundColor: '#bdbcc3' }}>Fe203/Fe0</td>
            <td style={{ backgroundColor: '#bdbcc3' }}>Ca0</td>
            <td style={{ backgroundColor: '#bdbcc3' }}>Mg0</td>
            <td style={{ backgroundColor: '#bdbcc3' }}>K20</td>
            <td style={{ backgroundColor: '#bdbcc3' }}>Na20</td>
            <td style={{ backgroundColor: '#bdbcc3' }}>Ti02</td>
          </tr>
          <tr style={{ border: '2px solid white' }}>
            <td style={{ backgroundColor: '#e7e7e9' }}>10</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>50</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>12</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>10</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>10</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>3</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>3</td>
            <td style={{ backgroundColor: '#e7e7e9' }}>2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="pt-md-4 px-md-3 fs-1 my-3 py-4">
      Typical Mechanical Properties of Cast Basalt
    </h2>
    <div className="d-md-flex">
      <div className="px-md-3 table-responsive w-100">
        <table className="table">
          <thead className="thead-dark">
            {/* <tr >
                    
                    
                    <th style="background-color: #F48221;" colspan="9" scope="col" className="text-white text-center">Typical Composition</th>
                  </tr> */}
          </thead>
          <tbody>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#f48221' }}>Density</td>
              <td style={{ backgroundColor: '#f48221' }}>2.8 - 3.1 gm/cc</td>
            </tr>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#e7e7e9' }}>
                Surface hardness, Mohs Scle
              </td>
              <td style={{ backgroundColor: '#e7e7e9' }}>
                approx. 8 (Diamond is 10)
              </td>
            </tr>

            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#f48221' }}>
                Comprehensive resistance
              </td>
              <td style={{ backgroundColor: '#f48221' }}>2,500 - 4,500 kg/cm  &#178;</td>
            </tr>

            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#e7e7e9' }}>Bending Strenght</td>
              <td style={{ backgroundColor: '#e7e7e9' }}>250 - 450 kg/cm &#178;</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="px-md-3 table-responsive w-100">
        <table className="table">
          <thead className="thead-dark">
            {/* <tr >
                    
                    
                    <th style="background-color: #F48221;" colspan="9" scope="col" className="text-white text-center">Typical Composition</th>
                  </tr> */}
          </thead>
          <tbody>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#f48221' }}>
                Application temperature <br />range upto
              </td>
              <td style={{ backgroundColor: '#f48221' }}>
                approx . 620K <br />
                (approx .350 C)
              </td>
            </tr>
            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#e7e7e9' }}>Chemical Strength</td>
              <td style={{ backgroundColor: '#e7e7e9' }}>
                Resistance to acids and <br />
                alkali
              </td>
            </tr>

            <tr style={{ border: '2px solid white' }}>
              <td style={{ backgroundColor: '#f48221' }}>Water absorption</td>
              <td style={{ backgroundColor: '#f48221' }}>0.5% (maximum)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

{/* Section 1 END */}

{/* Section 2 */}

<div className="p-3 px-md-5 mb-4">
  <div className="px-md-5">
    <h2 className="fs-1">Typical Mechanical Properties of Cast Basalt</h2>

    <h2 className="fs-4 fw-normal pt-3">
     Indian basalt deposits do not have the required chemistry, so they lag in achieving the required physical parameters.

    </h2>

    <h2 className="fs-4 fw-normal pt-3">
      The BMW team has collected 750 samples from deposits across the length and breadth of the country. However, not a single stone could achieve the desired parameters. Therefore, basalt samples from two or more stones are blended to achieve the required chemistry.
    </h2>
  </div>
</div>

{/* Section 2 END */}

{/* Section 3 */}

<div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
  <div className="px-md-5">
    <h2
      className="pt-4 mobile-fonts-heading text-center"
      style={{ fontSize: '75px' }}
    >
      Cast Basalt Products
    </h2>

    <div>
      <h2 className="fs-1" style={{ color: 'red' }}>
        1. Cast Basalt Cylinders
      </h2>

      <h2 className="fs-4 fw-normal p-3 pt-4">
        BMW manufactures Cast Basalt cylinders in various sizes, as per the
        client's requirement. Basalt Cylindrical Liner are manufactured by
        Centrifugal Cylinder Casting.
      </h2>

      <div className="d-flex flex-column-reverse flex-md-column">
        <div className="d-md-flex pt-2">
          <img
            src="images/basalt/section-3-1.png"
            className="w-100 p-3"
            alt=""
          />
          <img
            src="images/basalt/section-3-2.png"
            className="w-100 p-3"
            alt=""
          />
          <img
            src="images/basalt/section-3-0.jpeg"
            className="w-100 p-3"
            alt=""
          />
        </div>

        <div className="p-3 pt-0">
          <h2 className="fs-4 fw-normal pt-3">Centrifugal Cylinder Casting</h2>
        </div>
      </div>
    </div>

    <div className="pt-3">
      <h2 className="fs-1" style={{ color: 'red' }}>
        2. Cast Basalt Tiles
      </h2>

      <h2 className="fs-4 fw-normal p-3 pt-4">
        Basalt Tiles casting is shown in the attached clip. Basalt Tiles can
        be of different shapes like rectangular, hexagonal and Trench Liners
        depending on their application. Basalt Tile liners are manufactured
        by Casting by directly pouring molten basalt into various shapes of
        moulds.
      </h2>

      <div>
        <div className="d-md-flex pt-2">
          <img
            src="images/basalt/section-3-3 (5).png"
            className="w-100 p-3"
            alt=""
          />
          <img
            src="images/basalt/section-3-4.png"
            className="w-100 p-3"
            alt=""
          />
          <img
            src="images/basalt/section-3-3 (1).png"
            className="w-100 p-3"
            alt=""
          />
        </div>

        <div className="p-3 pt-0">
          <h2 className="fs-4 fw-normal pt-3">Tile Casting</h2>
        </div>

        <div className="d-md-flex pt-2">
          <img
            src="images/basalt/section-3-3 (2).png"
            className="w-100 p-3"
            alt=""
          />
          <img
            src="images/basalt/section-3-3 (3).png"
            className="w-100 p-3"
            alt=""
          />
          <img
            src="images/basalt/section-3-3 (4).png"
            className="w-100 p-3"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>

  <div
    className="p-3 p-md-5 d-lg-flex justify-content-center align-items-center"
  >
    <div className="w-100">
      <img
        src="images/basalt/section-3-3-3 (2).png"
        className="w-100"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          borderRadius: '10px',
        }}
        alt=""
      />
    </div>
    <div className="w-100 ps-md-5">
      <h2 className="pt-3" style={{ color: 'red', fontSize: '44px' }}>
        3. Skid Pan Tiles
      </h2>
      <h2 className="fs-4 fw-normal p-3 pt-4">
        In 1979, the Automotive Research Association of England tested cast basalt skid pan tiles at their track, confirming their suitability for automotive safety testing over six years. Today, the automotive industry worldwide uses these specially designed tiles in low-friction test facilities, including in India.
BMW’s cast basalt tiles are widely accepted for their durability and smoothness. Available in polished or unpolished forms, they maintain surface smoothness due to their high wear resistance.
Standard dimensions are 200 × 200 mm, with thicknesses ranging from 25 mm to 40 mm, along with curved options for circular tracks.

      </h2>
    </div>
  </div>

  <div
    className="p-3 p-md-5 mb-5 d-lg-flex flex-row-reverse justify-content-center align-items-center"
  >
    <div className="w-100">
      <img
        src="images/basalt/section-4-7 (2).png"
        className="w-100"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          borderRadius: '10px',
        }}
        alt=""
      />
    </div>
    <div className="w-100 pe-md-5">
      <h2 className="pt-3" style={{ color: 'red', fontSize: '44px' }}>
        4. Cast Basalt Lined Equipment
      </h2>
      <h2 className="fs-4 fw-normal p-3 pt-4">
        With our innovative approaches, we have established ourselves as a reliable manufacturer of cast basalt ash pipeline bends. These bends are widely used in various sectors such as hydraulic pipelines, chemical industries, electric power, mining, metallurgy, coal handling, and many more.
Cast basalt liners offer outstanding corrosion and abrasion resistance; as a result, they easily withstand high working pressures. Enclosed with cement mortar inside metal pipes, the liners prevent early wear of the inner pipe walls.
Moreover, the flexible joints of our ash pipeline system facilitate quick fitting, secure connections, and smooth performance.

      </h2>
    </div>
  </div>
</div>

<div className="p-3 px-md-5">
  <div className="px-md-5">
    <h2
      className="pt-4 mobile-fonts-heading text-center"
      style={{ fontSize: '75px' }}
    >
      Cast Basalt Lining Solutions
    </h2>

    <h2 className="fs-4 fw-normal p-3 pt-4 text-start">
      Cast basalt lining is an effective solution for protecting equipment in the coal industry, especially in coal preparation plants and coal-fired power plants. Its high wear resistance and durability make it ideal for conditions involving intense abrasion and chemical exposure.

    </h2>

    <h2 className="fs-4 fw-normal p-3 pt-4 text-start">
      In general, the choice of lining material depends on specific operating conditions and equipment requirements. Cast basalt lining is excellent for environments with high abrasiveness and chemical exposure.

    </h2>

    <div>
      <h2 className="fs-1">Usage of cast basalt lining in the coal industry</h2>

      <h2 className="fs-3 pt-2">Wear in the Coal industry:</h2>

      <h2 className="fs-4 pt-2">
        <li style={{ color: 'red' }}>Abrasive wear :</li>
Provides excellent resistance against abrasive wear caused by friction from fly ash and ash slurry.
      </h2>

      <h2 className="fs-4 pt-2">
        <li style={{ color: 'red' }}>Erosive wear :</li>
        Protects surfaces from degradation due to the flow of fly ash and ash slurry particles.

      </h2>

      <h2 className="fs-4 pt-2">
        <li style={{ color: 'red' }}>Corrosive wear :</li>
        Effective in reducing corrosive wear caused by chemical exposure, especially due to the effects of SOx.
      </h2>

      <h2 className="fs-4 pt-2">
        <li style={{ color: 'red' }}>Impact wear :</li>
        Cast basalt performs poorly under impact conditions; therefore, it should be avoided in applications involving heavy impact.
      </h2>
    </div>

    <div className="pt-3">
      <h2 className="fs-1">Technological Equipment Protected by Cast Basalt Lining </h2>

      <h2 className="fs-4 pt-2">
        <li style={{ color: 'red' }}>Conveyors and transport systems :</li>
        Used for removing Fly Ash and Ash slurry.  
        Cast basalt protects surfaces from abrasive wear.
      </h2>

      <h2 className="fs-4 pt-2">
        <li style={{ color: 'red' }}>Pipes and chutes :</li>
        Used for transporting fly ash dust and ash slurry lines. The lining prevents wear and corrosion.

      </h2>

      <h2 className="fs-4 pt-2">
        <li style={{ color: 'red' }}>Bunkers and silos :</li>
       Provides protective lining for coal storage and feeder systems. Cast basalt reduces wear on equipment walls and bottoms.
      </h2>

      <h2 className="fs-4 pt-2">
        <li style={{ color: 'red' }}>Cyclones and separators :</li>
        Used for particle segregation of pulverized coal. Cast basalt increases the lifespan of internal components.

      </h2>
    </div>
  </div>
</div>

<div className="p-3 px-md-5">
  <div className="px-md-5">
    <h2
      className="pt-4 mobile-fonts-heading text-center"
      style={{ fontSize: '75px' }}
    >
      Application Areas
    </h2>

    <h2 className="fs-4 fw-normal p-3 pt-4 text-center">
      Basalt lining is used in various industries to reduce wear and tear in
      mechanical components.
    </h2>

    <div>
      <h2 className="fs-1" style={{ color: 'red' }}>
        1. Powerplants
      </h2>

      <div className="d-flex flex-column-reverse flex-md-column">
        <div className="d-md-flex pt-2">
          <div className="w-100">
            <img
              src="images/basalt/section-4 (3).png"
              className="w-100 p-3"
              alt=""
            />

            <h2 className="fs-4 fw-normal pt-3 p-3">
              Basalt Lining in Ash Handling Line
            </h2>
          </div>
          <div className="w-100">
            <img
              src="images/basalt/section-4 (4).png"
              className="w-100 p-3"
              alt=""
            />

            <h2 className="fs-4 fw-normal pt-3 p-3">
              Basalt Lining in Ash Handling Line
            </h2>
          </div>
          <div className="w-100">
            <img
              src="images/basalt/section-4 (5).png"
              className="w-100 p-3"
              alt=""
            />

            <h2 className="fs-4 fw-normal pt-3 p-3">
              Basalt Lining in Coal Hopper
            </h2>
          </div>
        </div>

        <div className="p-3 pt-0">
          {/* <h2 className="fs-4 fw-bold pt-3">Centrifugal Cylinder Casting</h2> */}
        </div>
      </div>

      <div className="d-flex flex-column-reverse flex-md-column">
        <div className="d-md-flex pt-2">
          <div className="w-100">
            <img
              src="images/basalt/section-4 (6).png"
              className="w-100 p-3"
              alt=""
            />

            <h2 className="fs-4 fw-normal pt-3 p-3">
              Basalt Lining in Coal Conveyor System
            </h2>
          </div>
          <div className="w-100"></div>
          <div className="w-100"></div>
        </div>

        <div className="p-3 pt-0">
          {/* <h2 className="fs-4 fw-bold pt-3">Centrifugal Cylinder Casting</h2> */}
        </div>
      </div>
    </div>

    <div className="pt-3">
      <h2 className="fs-1" style={{ color: 'red' }}>
        2. Sewage Plant
      </h2>

      <div className="d-flex flex-column-reverse flex-md-column">
        <div className="d-md-flex pt-2">
          <div className="w-100">
            <img
              src="images/basalt/section-4-7 (1).png"
              className="w-100 p-3"
              alt=""
            />

            <h2 className="fs-4 fw-normal pt-3 p-3">Basalt Sewer Systems</h2>
          </div>
          <div className="w-100"></div>
          <div className="w-100"></div>
        </div>

        <div className="p-3 pt-0">
          {/* <h2 className="fs-4 fw-bold pt-3">Centrifugal Cylinder Casting</h2> */}
        </div>
      </div>
    </div>

    <div className="pt-3">
      <h2 className="fs-1" style={{ color: 'red' }}>
        3. Cement Plants
      </h2>

      <div className="d-flex flex-column-reverse flex-md-column">
        <div className="d-md-flex pt-2">
          <div className="w-100">
            <img
              src="images/basalt/frame (1).png"
              className="w-100 p-3"
              alt=""
            />
          </div>

          <div className="w-100">
            <img
              src="images/basalt/frame (2).png"
              className="w-100 p-3"
              alt=""
            />
          </div>
        </div>

        <div className="p-3 pt-0">
          {/* <h2 className="fs-4 fw-bold pt-3">Centrifugal Cylinder Casting</h2> */}
        </div>
      </div>
    </div>

    <div className="pt-3">
      <h2 className="fs-1" style={{ color: 'red' }}>
        4. Steel Plant
      </h2>

      <div className="d-flex flex-column-reverse flex-md-column">
        <div className="d-md-flex pt-2">
          <div className="w-100">
            <img
              src="images/basalt/section-4 (1).png"
              className="w-100 p-3"
              alt=""
            />

            <h2 className="fs-4 fw-normal pt-3 p-3">Flume Tunnel</h2>
          </div>
          <div className="w-100">
            <img
              src="images/basalt/section-4 (2).png"
              className="w-100 p-3"
              alt=""
            />

            <h2 className="fs-4 fw-normal pt-3 p-3">
              Basalt Lining in Ash Handling Line
            </h2>
          </div>
          <div className="w-100"></div>
        </div>

        <div className="p-3 pt-0">
          {/* <h2 className="fs-4 fw-bold pt-3">Centrifugal Cylinder Casting</h2> */}
        </div>
      </div>
    </div>
  </div>
</div>

<div className="p-md-5 py-md-4 p-3" style={{ backgroundColor: '#f4f4f4' }}>
  <div className="px-md-5">
    <h2
      className="pt-4 mobile-fonts-heading text-center"
      style={{ fontSize: '75px', color: 'red' }}
    >
      Our R&D in Basalt
    </h2>
  </div>

  <div
    className="p-3 p-md-5 mb-5 d-lg-flex flex-row-reverse justify-content-center align-items-center"
  >
    <div className="w-100 text-center">
      <img
        src="images/basalt/section-6.png"
        className="w-75 text-center"
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          borderRadius: '10px',
        }}
        alt=""
      />
    </div>
    <div className="w-100 pe-md-5">
      <h2 className="pt-3" style={{ fontSize: '44px' }}>
        Basalt Fiber:
      </h2>
      <h2 className="fs-4 fw-normal pt-4">
        BMW has focused on the development of a potential new form of basalt, i.e., basalt fiber. Basalt fiber is created by fusing basalt rock and then drawing it into fibers. These fibers offer heat stability, thermal and sound insulation properties, durability, and vibration resistance.
Basalt fiber contains filaments that are classified as mineral fibers. They are superior to most other fibers in terms of mechanical and physico-chemical properties.

      </h2>

      <h2 className="fs-4 fw-normal pt-4">
        These qualities enable basalt fiber to be used in reinforced composites, as it provides excellent corrosion and fire resistance. The manufacture of basalt fiber requires melting basalt rock at about 1400°C. This molten material is then extruded through small nozzles to produce continuous basalt fiber filaments.

      </h2>
    </div>
  </div>
</div>




  
        </>
    )
}
