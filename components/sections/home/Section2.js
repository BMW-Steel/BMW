import React from "react";
export default function Section2(){
    return (
<>
<div className="p-md-5">
  <div className="d-lg-flex m-md-5 p-3 p-md-5" style={{ backgroundColor: "#F4F4F4", borderRadius: "20px" }}>
    <div className="p-md-5 w-100">
      <h3 className="mobile-fonts-heading-sub" style={{ color: "red" }}>WHO WE ARE</h3>
      <h2 className="pt-md-4 mobile-fonts-heading" style={{ fontSize: "50px" }}>
        The company with innovative solutions
      </h2>

      <div className="text-center pt-2 d-md-none">
        <img
          src="images/home-1.webp"
          className="mobile-image"
          style={{
            height: "100px",
            width: "100px",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
          }}
          alt=""
        />
      </div>

      <h2 className="pt-4 pb-3" style={{ color: "red", fontWeight: "300" }}>
        Welcome to BMW Steels Ltd.
      </h2>

      <h4 style={{ color: "rgb(66, 66, 66)", fontWeight: "400" }}>
        BMW Steels Ltd. was founded in 1990. Our head office is in Dehradun, Uttarakhand, India. We offer state-of-the-art engineering solutions for coal power plants, steel plants, and cement plants. We understand the specific needs of our customers. Our engineering solutions are aided by AI technologies to achieve model-based designs and simulations. We strongly believe in quality and efficiency in our products. Our company has over 35 years of experience in the field of coal conveying and ash conveying pipeline systems, along with advanced engineering tools to collect accurate data for coal flow.
      </h4>
    </div>

    <div className="text-center d-none d-md-block">
      <img
        src="images/home-1.webp"
        className="mobile-image w-100"
        style={{
          height: "700px",
          width: "700px",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        }}
        alt=""
      />
    </div>
  </div>
</div>

</>
    )
}