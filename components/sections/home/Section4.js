"use client";

import React, { useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);

  const playVid = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <video
      ref={videoRef}
      poster="/images/section-4.jpg"
      onClick={playVid}
      id="myVideo"
      src="images/banner-video/BMW0.3.mp4"
      type="video/mp4"
      loop
      crossOrigin="anonymous"
      className="hover-to-play w-100 video-2"
      style={{
        borderRadius: "10px",
        cursor: "pointer",
        height: "800px",
      }}
    ></video>
  );
};

const Section4 = () => {
  return (
    <div className="p-md-5 py-md-0 p-4" style={{ backgroundColor: "#F4F4F4" }}>
      <div className="d-lg-flex p-md-5">
        <div className="w-100">
          <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: "50px" }}>
          Our Sensor Based  <br />Software Development Company
          </h2>
        </div>
        <div className="w-100 d-flex justify-content-center align-items-center">
          <h4
            className="pt-4"
            style={{
              color: "rgb(66, 66, 66)",
              fontWeight: 400,
              textAlign: "justify",
            }}
          >
            The Coal Flow Monitoring System is a real-time system that continuously
            measures and balances the mass flow, temperature, and velocity of coal
            in each pipe using advanced microwave.
            <br />
            <a
            className="btn btn-danger btn-lg mt-4"
            href="#"
            style={{ backgroundColor: "red" }}
          >
            
            Know More
          </a>
          </h4>
         
        </div>
      </div>

      <div className="p-md-5 pt-md-0 pt-3">
        <VideoSection /> {/* ✅ Use the VideoSection component inside Section4 */}
      </div>
    </div>
  );
};

export default Section4; // ✅ Only one export default
