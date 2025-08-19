import React from "react";
export default function index20(){
    return (
        <>
  <div>
      {/* BANNER */}
      <div className="">
        <div className="text-center px-md-5 px-2">
          <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
            Fabrication
          </h2>

          <div className="px-md-5 py-md-3 text-start">
            <h4 style={{ color: 'rgb(66, 66, 66)', fontWeight: 400 }}>
            Our state-of-the-art fabrication facility is equipped to deliver high-precision, heavy-duty fabrication solutions 
tailored for industries such as Power Generation, Cement, oil & gas, mineral processing, and heavy engineering. 
With advanced machinery, skilled personnel, and strict quality controls, we provide end-to-end fabrication 
services including machining, up to six meter length pipe rolling, automatic and manual welding, and laser 
cutting.
            </h4>
          </div>
        </div>

        {/* Carousel */}
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
                    src="/images/fabrication/1.jpg"
                    alt="Aluminium Fabrication"
                    layout="responsive"
                    className="w-100"
                    style={{ borderRadius: '15px' }}
                  />
                  <div
                    className="p-3 mt-3"
                    style={{
                      color: 'black',
                      backgroundColor: '#D9D9D9',
                      display: 'inline-block',
                      borderRadius: '10px',
                      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    }}
                  >
                    <h4 style={{ color: 'rgb(68, 67, 67)' }}>Aluminium Fabrication</h4>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* Carousel END */}
      </div>
      {/* BANNER END */}

      {/* Section 1 */}
      {/* <div className="p-md-5 mt-3">
        <div className="d-lg-flex px-md-5 justify-content-center align-items-center">
          <div className="w-100 p-3">
            <h2 className="pt-md-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
              Metal Fabrication Services
            </h2>
            <h5
              className="pt-4"
              style={{
                color: 'rgb(66, 66, 66)',
                fontWeight: 400,
                textAlign: 'justify',
              }}
            >
              Our state-of-the-art fabrication facility is equipped to deliver high-precision, heavy-duty fabrication solutions 
tailored for industries such as Power Generation, Cement, oil & gas, mineral processing, and heavy engineering. 
With advanced machinery, skilled personnel, and strict quality controls, we provide end-to-end fabrication 
services including machining, up to six meter length pipe rolling, automatic and manual welding, and laser 
cutting. </h5>
           
          </div>
          <div className="text-center p-3 ps-md-5 w-75">
            <img
              src="/images/fabrication/Fabrication.jpg"
              alt="Metal Fabrication"
              layout="responsive"
              className="w-100"
              style={{
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              }}
            />
          </div>
        </div>
      </div> */}
      {/* Section 1 END */}

      {/* Section 3 */}
      <div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
           1. Machining Capabilities
          </h2>

          <h5
              className="pt-4"
              style={{
                color: 'rgb(66, 66, 66)',
                fontWeight: 400,
                textAlign: 'justify',
              }}
            >
              Our machine shop is outfitted with modern machines with turning diameter up to two meters to ensure precision 
              in component finishing. 
               </h5>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>Key Equipment : </h2>

            <ul className="pt-2">
              <li className="fs-3">NC turning centers</li>
              <li className="fs-3">Horizontal boring machine</li>
              <li className="fs-3">Radial drilling machines up to 2.5 Mtr. arm lenth.</li>
              <li className="fs-3">Surface grinders.</li>
            </ul>


            <h2 className="fs-1" style={{ color: 'red' }}>Services : </h2>

            <ul className="pt-2">
              <li className="fs-3">Precision turning and boring</li>
              <li className="fs-3">Threading and facing </li>
              <li className="fs-3">Machining of large components (up to 2 Mtr. diameter). </li>
              <li className="fs-3">Tolerance accuracy as per ISO and ASME standards 
              </li>
            </ul>


            

            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <img
                  src="/images/fabrication/image1.jpg"
                  alt="Rolling Service"
                  layout="responsive"
                  
                  className="w-100 p-3"
                />
                <img
                  src="/images/fabrication/image2.jpg"
                  alt="Rolling Service 2"
                  layout="responsive"
                 
                  className="w-100 p-3"
                />
                <div className="w-100"></div>
              </div>
              <div className="p-3 pt-0"></div>
            </div>
          </div>

         
        </div>
      </div>

      {/* Section 3 END */}

      {/* Section: Machining Services */}
      <div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
            2. Pipe Rolling and Bending 
          </h2>
          <h2 className="fs-4 fw-normal p-3 pt-4">
          We specialize in rolling of pipes and plates up to six meter single length to meet custom radius and diameter 
          specifications for industrial piping and pressure vessels.
          </h2>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>Capabilities:</h2>

            <ul className="pt-2">
              <li className="fs-3">Rolling of carbon steel, stainless steel, and alloy steel pipes </li>
              <li className="fs-3">Pipe diameters from [400 mm to 2 Mtr], wall thickness up to 35 mm. </li>
              <li className="fs-3">CNC-controlled pipe bending for tight radius and complex geometries </li>
              <li className="fs-3">Plate rolling up to 35 mm thick. 
              </li>
            </ul>

            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <img
                  src="/images/fabrication/image3.jpg"
                  alt="Turning Service"
                  layout="responsive"
                  
                  className="w-100 p-3"
                />
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>

              <div className="p-3 pt-0">
                <h2 className="fs-4 fw-normal pt-3">Applications include Coal Mill Body and internals along with stainless steel ducting systems. </h2>
              </div>
            </div>
          </div>

         
        </div>
      </div>

      {/* Section: Steel Fabrication */}



      <div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
            3. Welding and Fabrication 
          </h2>
          <h2 className="fs-4 fw-normal p-3 pt-4">
          Welding is a core strength of our fabrication services, carried out by qualified welders in accordance with 
          international codes (ASME, AWS, EN). 
          </h2>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>Welding Processes : </h2>

            <ul className="pt-2">
              <li className="fs-3">SMAW (Shielded Metal Arc Welding)</li>
              <li className="fs-3">GMAW/MIG (Gas Metal Arc Welding) </li>
              <li className="fs-3">SAW (Submerged Arc Welding) </li>
              
            </ul>

            <h2 className="fs-1" style={{ color: 'red' }}>Highlights : </h2>

<ul className="pt-2">
  <li className="fs-3">Welding of Carbon Steel and Stainless Steel materials </li>
  <li className="fs-3">Certified welders and WPS/PQR documentation </li>
  <li className="fs-3">Pre-heating, post-weld heat treatment (PWHT) facilities  </li>
  <li className="fs-3">In-house NDT inspection (UT, RT, MPI, DPI) 
  </li>
  
</ul>

            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <img
                  src="/images/fabrication/image4.jpg"
                  alt="Turning Service"
                  layout="responsive"
                  
                  className="w-100 p-3"
                />
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>

              
            </div>
          </div>

         
        </div>
      </div>




      {/* new  */}


      <div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
            4. Cutting Facilities 
          </h2>
          <h2 className="fs-4 fw-normal p-3 pt-4">
          We utilize high-precision cutting technologies to ensure clean edges, accurate dimensions, and minimal material 
waste. 
          </h2>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>Cutting Technologies : </h2>

            <ul className="pt-2">
              <li className="fs-3">CNC plasma cutting</li>
              <li className="fs-3">Oxy-fuel cutting </li>
              <li className="fs-3">Laser cutting (for precision sheet metal work)  </li>
              <li className="fs-3">Hydraulic shearing  </li>
              
            </ul>

            <h2 className="fs-1" style={{ color: 'red' }}>Capabilities : </h2>

<ul className="pt-2">
  <li className="fs-3">Plate cutting up to [ 40 mm thickness]  </li>
  <li className="fs-3">Cutting for structural steel, pressure parts, and custom profiles </li>
  <li className="fs-3">Template and contour cutting for custom fabrication  </li>
  
</ul>

            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>

              
            </div>
          </div>

         
        </div>
      </div>


      {/* new  */}


      <div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
            5. Facility Infrastructure 
          </h2>
          

          <div className="pt-3">
            

            <ul className="pt-2">
              <li className="fs-3">Covered Shop Floor Area: [50000 sq. ft.] + 40000 sq feet + 35000 sq Feet.</li>
              <li className="fs-3">Material Handling: Overhead cranes (up to 5 tons), forklifts, mobile cranes </li>
              <li className="fs-3">Power Backup: Diesel generators to ensure uninterrupted operations</li>
              <li className="fs-3">Layout: Segregated bays for machining, welding, rolling, and final assembly</li>  
            </ul>

           


            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
               
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>

              
            </div>
          </div>

         
        </div>
      </div>


        {/* nwe  */}


        <div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
            6. Quality Assurance 
          </h2>
          <h2 className="fs-4 fw-normal p-3 pt-4">
          We maintain a robust quality management system supported by:  
          </h2>

          <div className="pt-3">
            

            <ul className="pt-2">
              <li className="fs-3">ISO 9001:2015 certification </li>
              <li className="fs-3">In-house inspection team and third-party inspection (TPI) support  </li>
              <li className="fs-3">Material traceability and documentation   </li>
              <li className="fs-3">Calibrated measuring instruments and testing tools</li>
              
            </ul>
            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
               
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>

              
            </div>
            



           
          </div>

         
        </div>
      </div>




      <div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
            7. Safety and Compliance 
          </h2>
          <h2 className="fs-4 fw-normal p-3 pt-4">
          Safety is integral to our operations:
          </h2>

          <div className="pt-3">
            

            <ul className="pt-2">
              <li className="fs-3">Regular training and PPE for staff  </li>
              <li className="fs-3">Fire protection systems and emergency response protocols </li>
              <li className="fs-3">Compliance with OSHA, local labor laws, and environmental guidelines  </li> 
            </ul>

            


            <h2 className="fs-4 fw-normal p-3 pt-4 pb-5">
            Our fabrication facility is a one-stop solution for heavy and precision fabrication requirements. With a blend of 
modern technology, experienced workforce, and adherence to international standards, we deliver components 
and assemblies that meet the highest levels of reliability, performance, and quality.
          </h2>
           
          </div>

         
        </div>
      </div>


      



      {/* <div className="p-md-5 mt-3">
        <div className="d-lg-flex px-md-5 justify-content-center align-items-center">
          <div className="w-100 p-3">
            <h2 className="pt-md-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
              Steel Fabrication
            </h2>
            <h5
              className="pt-4"
              style={{
                color: 'rgb(66, 66, 66)',
                fontWeight: 400,
                textAlign: 'justify',
              }}
            >
              We manufacture high-strength steel components for different industries interests at BMW Steels. Every fabricative endeavour is accomplished with attention to detail owing to our advanced machinery and expert workforce. BMW Steels provides its clients with precise and dependable outcomes.
              <br /><br />
              At BMW Steels, we do more than fabricate—we build enduring relationships with our clients by offering components that are of the best quality and performance. We are adept and responsive owing to our innovation, control measures, client-focused strategies, and continuous innovation. Reliability, technical marvels, and having an unwavering reputation makes BMW Steels a force in high-strength steel fabrication.
            </h5>
          </div>
          <div className="text-center p-3 ps-md-5 w-75">
            <img
              src="/images/fabrication/Steel_Fabrication.jpg"
              alt="Steel Fabrication"
              layout="responsive"
              className="w-100"
              style={{
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              }}
            />
          </div>
        </div>
      </div> */}

      {/* Section: Our Steel Fabrication Services */}
      {/* <div className="p-3 px-md-5">
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
            Our Steel Fabrication Services Include:
          </h2>

          <h2 className="fs-1 p-3">Structural Steel Components</h2>
          <h2 className="fs-4 fw-normal p-3 pt-4 text-start">
            Columns and beams are prefabricated by us which serve the purpose of reinforcing massive structures and providing long-term stability.
          </h2>

          <h2 className="fs-1 p-3">Custom Equipment Fabrication</h2>
          <h2 className="fs-4 fw-normal p-3 pt-4 text-start">
            Tools and Machines are designed from scratch and crafted according to the specifications for our customers.
          </h2>

          <div className="pt-3">
            <h2 className="fs-1 p-3">Maintenance and Repair</h2>
            <h2 className="fs-4 fw-normal p-3 pt-4 text-start">
              Additional measures are adopted to improve the durability of the aged steel structure.
              <br /><br />
              In order to manufacture competitively strong products, CNC machines, MIG and TIG welding equipment, plasma cutters, and numerous other tools are incorporated into our workflows. We aim to offer the best in steel fabrication without sacrificing creativity.
            </h2>

            <h2 className="pt-4 mobile-fonts-heading text-center" style={{ fontSize: '75px' }}>
              Pipe Fabrication
            </h2>
          </div>
        </div>
      </div> */}

      {/* Section: Pipe Fabrication */}
      {/* <div className="p-3 px-md-5">
        <div className="px-md-5">
          <h2 className="fs-4 fw-normal py-3 pt-4 text-start">
            Other than tool and machine fabrication, BMW steels supplies pipes to the mining, and cement power plants industries as well. We tend to maintain the reliability and durability of our pipes too.
          </h2>
          <h2 className="fs-1 py-3">Pipe Sizes We Offer:</h2>

          <div className="pt-3">
            <h2 className="fs-1 py-3" style={{ color: 'red' }}>6m pipes</h2>
            <h2 className="fs-4 fw-normal py-3 pt-4 text-start">
              Excellent for use in industrial high-flow systems.
            </h2>
            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <div className="w-100">
                  <img
                    src="/images/fabrication/Pipe_Fabrication.jpg"
                    alt="6m Pipes"
                    layout="responsive"
                   
                    className="w-100 p-3"
                  />
                </div>
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>
              <div className="p-3 pt-0"></div>
            </div>
          </div>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>3m pipes</h2>
            <h2 className="fs-4 fw-normal py-3 pt-4 text-start">
              These pipes are suitable for routing in medium-scale modular configurations and open building plans.
            </h2>
            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <div className="w-100">
                  <img
                    src="/images/fabrication/3m_steel_pipe.jpg"
                    alt="3m Pipes"
                    layout="responsive"
                    
                    className="w-100 p-3"
                  />
                </div>
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>
              <div className="p-3 pt-0"></div>
            </div>
          </div>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>1.5m pipes</h2>
            <h2 className="fs-4 fw-normal py-3 pt-4 text-start">
              Used in tight spaces for system extension or for use as a maintenance substitute.
            </h2>
            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <div className="w-100">
                  <img
                    src="/images/fabrication/1.5m_steel_pipe.jpg"
                    alt="1.5m Pipes"
                    layout="responsive"
                    
                    className="w-100 p-3"
                  />
                </div>
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>
              <div className="p-3 pt-0"></div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Section: Pipe Features */}
    
    </div>
  


        </>
    )}