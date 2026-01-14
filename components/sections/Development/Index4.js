import React from "react";
export default function Index4(){
    return (
        <>
    <div>
      {/* BANNER */}
      <div className="">
        <div className="text-center px-md-5 px-2">
          <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: '60px' }}>
            Research & Development Department
          </h2>
        </div>

        {/* Carousal */}
        <div className="p-3 px-md-5">
          <div className="px-md-5">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              dataBsRide="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="images/devlopment/banner.png"
                    style={{ borderRadius: '15px' }}
                    className="d-block w-100"
                    alt=""
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                dataBsTarget="#carouselExampleAutoplaying"
                dataBsSlide="prev"
              >
                <span className="carousel-control-prev-icon" ariaHidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                dataBsTarget="#carouselExampleAutoplaying"
                dataBsSlide="next"
              >
                <span className="carousel-control-next-icon" ariaHidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* Carousal END */}
      </div>
      {/* BANNER END */}

      {/* Section 2 */}
      <div className="p-3 px-md-5">
        <div className="px-md-5">
          <h2 className="fs-4 fw-normal pt-3">
            Research & Development Department backed by strong R&D for deliverance of high quality product, yet it is always new. Achieving this level of maturity requires
            years of questioning the purpose of our existence and truly understanding who we are creating for.
          </h2>
          <h2 className="fs-4 fw-normal pt-3">
            BMW's research and development laboratory is one of the finest in India in terms of the sheer efficiency and updated modern
            testing facilities. Changing the face of the alumina ceramic and cast basalt manufacturing, one innovation at a time. Every product
            of BMW is a result of a flawless R&D set-up.
          </h2>
          <h2 className="fs-4 fw-normal pt-3">
            Discovering opportunities that can raise quality standards by means of breakthrough technology and innovations.
          </h2>
        </div>
      </div>
      {/* Section 2 END */}

      {/* Testing Facilities Table */}
      <div className="p-md-5">
        <div className="px-md-5 p-3">
          <div className="px-md-3 table-responsive">
            <h2 className="pb-3 mobile-fonts-heading" style={{ fontSize: '75px' }}>
              Testing Facilities at our R&D Lab
            </h2>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <td style={{ backgroundColor: '#ff2d2d', color: '#f4f4f4' }}>SR.NO.</td>
                  <td style={{ backgroundColor: '#ff2d2d', color: '#f4f4f4' }}>CHARACTERISTIC</td>
                  <td style={{ backgroundColor: '#ff2d2d', color: '#f4f4f4' }}>TEST METHOD</td>
                  <td style={{ backgroundColor: '#ff2d2d', color: '#f4f4f4' }}>INSTRUMENT MAKE</td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>1.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Green modulus of rapture</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>ISO-10545-4</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Italy</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>2.</td>
                  <td style={{ backgroundColor: '#f48221' }}>Dry Modulus of rupture</td>
                  <td style={{ backgroundColor: '#f48221' }}>ISO-10545-4</td>
                  <td style={{ backgroundColor: '#f48221' }}>Italy</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>3.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Dry shrinkage</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>ISO-10545-2</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>4.</td>
                  <td style={{ backgroundColor: '#f48221' }}>Fired shrinkage</td>
                  <td style={{ backgroundColor: '#f48221' }}>ISO-10545-2</td>
                  <td style={{ backgroundColor: '#f48221' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>5.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Water absorption</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>ISO-10545-3</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>6.</td>
                  <td style={{ backgroundColor: '#f48221' }}>Bulk density (green / fired )</td>
                  <td style={{ backgroundColor: '#f48221' }}>ISO-10545-3 (1995)</td>
                  <td style={{ backgroundColor: '#f48221' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>7.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Viscosity of Slurry</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>ASTM D6910</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>8.</td>
                  <td style={{ backgroundColor: '#f48221' }}>PH</td>
                  <td style={{ backgroundColor: '#f48221' }}>PH METER</td>
                  <td style={{ backgroundColor: '#f48221' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>9.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>T.D.S.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>T.D.S. METER</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>10.</td>
                  <td style={{ backgroundColor: '#f48221' }}>Particle size analysis</td>
                  <td style={{ backgroundColor: '#f48221' }}>Laser diffraction</td>
                  <td style={{ backgroundColor: '#f48221' }}>China</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>11.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Thermal expansion</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>ISO-10545-8</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>12.</td>
                  <td style={{ backgroundColor: '#f48221' }}>Surface flatness</td>
                  <td style={{ backgroundColor: '#f48221' }}>SO-10545-2</td>
                  <td style={{ backgroundColor: '#f48221' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>13.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Glossiness ( 60° )</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>GLOSSOMETER</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Japan</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>14.</td>
                  <td style={{ backgroundColor: '#f48221' }}>MOH'S hardness</td>
                  <td style={{ backgroundColor: '#f48221' }}>EN-101</td>
                  <td style={{ backgroundColor: '#f48221' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>15.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Deep abrasion resistance</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>IS-13630 (Part 12)</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>16.</td>
                  <td style={{ backgroundColor: '#f48221' }}>Surface abrasion</td>
                  <td style={{ backgroundColor: '#f48221' }}>ISO-10545-7</td>
                  <td style={{ backgroundColor: '#f48221' }}>Italy</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>17.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Jet Impact resistance</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>ISO-10545-5</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>18.</td>
                  <td style={{ backgroundColor: '#f48221' }}>Breaking strength (Flexural)</td>
                  <td style={{ backgroundColor: '#f48221' }}>IS-13630 (Part-6)</td>
                  <td style={{ backgroundColor: '#f48221' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>19.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Chemical resistance</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>ISO-10545-13</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>20.</td>
                  <td style={{ backgroundColor: '#f48221' }}>Gross Calorific value (Liquid fuel)</td>
                  <td style={{ backgroundColor: '#f48221' }}>BOMB CALORIMETER</td>
                  <td style={{ backgroundColor: '#f48221' }}>India</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#bdbcc3' }}>21.</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Chemical analysis</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>XRF</td>
                  <td style={{ backgroundColor: '#bdbcc3' }}>Netherland</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* BMW R&D Laboratory Section */}
      <div className="" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="text-center px-md-5 px-2">
          <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
            BMW R&D Laboratory
          </h2>
        </div>

        {/* Carousal */}
        <div className="p-3 px-md-5">
          <div className="px-md-5">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              dataBsRide="carousel"
            >
              <div className="carousel-inner" style={{ borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <div className="carousel-item active" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                  <img
                    src="images/devlopment/banner.png"
                    style={{ borderRadius: '15px' }}
                    className="d-block w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <h4 className="pt-4" style={{ color: 'rgb(68, 67, 67)' }}>
              BMW R&D Laboratory at Bhagwanpur, Haridwar, Uttarakhand
            </h4>
          </div>
        </div>
        {/* Carousal END */}
      </div>

      {/* Section 3 */}
      <div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="px-md-5">
          <div className="d-flex flex-column-reverse flex-md-column">
            <div className="d-md-flex pt-2">
              <div className="w-100">
                <img
                  src="images/devlopment/section-1 (2).png"
                  className="w-100 p-3"
                  alt=""
                />
                <h2 className="fs-4 fw-bold fw-normal pt-3">Compressive Strength Testing Machine</h2>
                <h2 className="fs-5 fw-normal p-2 pt-3">
                  A compression testing machine (CTM) is a
                  device that measures a material's compressive strength by applying a force until it breaks.
                </h2>
              </div>
              <div className="w-100">
                <img
                  src="images/devlopment/section-1 (9).png"
                  className="w-100 p-3"
                  alt=""
                />
                <h2 className="fs-4 fw-bold fw-normal pt-3">Flexural Strength Testing Machine</h2>
                <h2 className="fs-5 fw-normal p-2 pt-3">
                  Flexural testing machine is used to measure the force required to bend a beam of
                  plastic material and determines the resistance to flexing or stiffness of a material.
                </h2>
              </div>
              <div className="w-100">
                <img
                  src="images/devlopment/section-1 (6).png"
                  className="w-100 p-3"
                  alt=""
                />
                <h2 className="fs-4 fw-bold fw-normal pt-3">Deep Abrasion Testing Machine</h2>
                <h2 className="fs-5 fw-normal p-2 pt-3">
                  A deep abrasion testing machine is a device that evaluates how well a material resists deep abrasion. It's used to test the resistance of unglazed tiles and other materials to abrasion.
                </h2>
              </div>
            </div>
            <div className="d-md-flex pt-2">
              <div className="w-100">
                <img
                  src="images/devlopment/section-1 (7).png"
                  className="w-100 p-3"
                  alt=""
                />
                <h2 className="fs-4 fw-bold fw-normal pt-3">Particle Size Analyser</h2>
                <h2 className="fs-5 fw-normal p-2 pt-3">
                  A particle size analyzer is a tool that measures the size, shape, and distribution of
                  particles in a sample. It can be used to analyze samples in liquid, powder, aerosol, or other forms.
                </h2>
              </div>
              <div className="w-100">
                <img
                  src="images/devlopment/section-1 (8).png"
                  className="w-100 p-3"
                  alt=""
                />
                <h2 className="fs-4 fw-bold fw-normal pt-3">XRF Analyser Machine</h2>
                <h2 className="fs-5 fw-normal p-2 pt-3">
                  An X-ray fluorescence (XRF) analyzer is a nondestructive instrument that measures the elemental composition of a material by
                  exposing it to X-rays and analyzing the resulting fluorescent X-rays.
                </h2>
              </div>
              <div className="w-100">
                <img
                  src="images/devlopment/section-1 (5).png"
                  className="w-100 p-3"
                  alt=""
                />
                <h2 className="fs-4 fw-bold fw-normal pt-3">Water Absorption Test Machine</h2>
                <h2 className="fs-5 fw-normal p-2 pt-3">
                  A Water Absorption test machine is used
                  to test how much water any material
                  can absorb.
                </h2>
              </div>
            </div>
            <div className="d-md-flex pt-2">
              <div className="w-100">
                <img
                  src="images/devlopment/section-1 (3).png"
                  className="w-100 p-3"
                  alt=""
                />
                <h2 className="fs-4 fw-bold fw-normal pt-3">Muffle Furnace</h2>
                <h2 className="fs-5 fw-normal p-2 pt-3">
                  A muffle furnace is a laboratory instrument used to heat materials to extremely high temperatures whilst isolating them from fuel
                  and the byproducts of combustion from the heat source. Muffle furnaces allow for the isolation of a material to reduce the risks of
                  cross-contamination and identify
                  specific properties.
                </h2>
              </div>
              <div className="w-100">
                <img
                  src="images/devlopment/section-1 (4).png"
                  className="w-100 p-3"
                  alt=""
                />
                <h2 className="fs-4 fw-bold fw-normal pt-3">Coefficient of Linear Expansion Testing Machine</h2>
                <h2 className="fs-5 fw-normal p-2 pt-3">
                  CLTE tester is a machine that measures how much a material expands when heated or cooled. The coefficient of linear expansion is a measure of how much a material's length changes in relation to its total length when the temperature changes by one Kelvin.
                </h2>
              </div>
              <div className="w-100">
                <img
                  src="images/devlopment/section-1 (1).png"
                  className="w-100 p-3"
                  alt=""
                />
                <h2 className="fs-4 fw-bold fw-normal pt-3">Density Testing Machine</h2>
                <h2 className="fs-5 fw-normal p-2 pt-3">
                  A density testing machine, also known as a density meter or densimeter, is a device used to measure the density of solids, liquids, and powders.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 3 END */}

      {/* Section 4 */}
      <div className="p-3 p-md-5">
        <div className="px-md-5">
          <div>
            <h2 className="fs-1" style={{ color: 'red' }}>Our Research Partners</h2>
            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="pt-2">
                <div className="w-100">
                  <h2 className="fs-4 fw-normal pt-3 p-3">
                    We Partner with premier research institutes for developing new products.
                  </h2>
                  <img
                    src="images/devlopment/section-2 (1).png"
                    className="p-3"
                    alt=""
                  />
                </div>
                <div className="w-100">
                  <h2 className="fs-4 fw-normal pt-3 p-3">
                    We have partnered with IIT Madras for developing Porous Alumina bricks.
                  </h2>
                  <img
                    src="images/devlopment/section-2 (3).png"
                    className="p-3"
                    alt=""
                  />
                </div>
                <div className="w-100">
                  <h2 className="fs-4 fw-normal pt-3 p-3">
                    We have partnered with IIT Jodhpur for developing online particle size sensor.
                  </h2>
                  <img
                    src="images/devlopment/section-2 (2).png"
                    className="p-3"
                    alt=""
                  />
                  <h2 className="fs-4 fw-normal pt-3 p-3">
                    We have partnered with IIT Roorkee to validate the testing of our laboratory.
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>Our Successful developments with the help of R&D</h2>
            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <div className="w-100">
                  <img
                    src="images/devlopment/section-3.png"
                    className="w-100 p-3"
                    alt=""
                  />
                </div>
                <div className="w-100">
                  <img
                    src="images/devlopment/section-3-1.png"
                    className="w-100 p-3"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 END */}

      {/* Section-7 */}
      
      {/* Section-7 End */}
    </div>
  


        </>
    )}