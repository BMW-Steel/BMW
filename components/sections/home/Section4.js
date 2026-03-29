"use client";
import Link from "next/link";
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
  poster="images/section-4.jpg"
  id="myVideo"
  src="images/banner-video/BMW0.3.mp4"
  loop
  controls
  controlsList="nodownload"   // ✅ REMOVE DOWNLOAD
  disablePictureInPicture     // 🔥 optional (removes PiP)
  crossOrigin="anonymous"
  className="video-2"
 
/>
  );
};

const Section4 = () => {
  return (
    <>
    <div className="section-wrapper light">

  <div className="container-custom">

    {/* TOP CONTENT */}
    <div className="grid-2 align-center">

      {/* LEFT */}
      <div>
        <h2 className="main-title">
          Our Sensor Based <br /> Software Development Company
        </h2>
      </div>

      {/* RIGHT */}
      <div>
        <p className="desc-text">
          The Coal Flow Monitoring System is a real-time system that continuously measures and balances the mass flow, temperature, and velocity of coal in each pipe using advanced microwave technology.
        </p>

        <Link
          className="btn btn-danger mt-3"
          href="/ContactUs"
        >
          Know More
        </Link>
      </div>

    </div>

    {/* VIDEO */}
    <div className="video-container mt-5">
      <VideoSection />
    </div>

  </div>

</div>
<style jsx>{`
/* SECTION */
.section-wrapper {
  padding: 70px 0;
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

/* GRID */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.align-center {
  align-items: center;
}

/* HEADING */
.main-title {
  font-size: 32px;   /* ✅ standard */
  font-weight: 600;
}

/* TEXT */
.desc-text {
  font-size: 16px;
  line-height: 1.5;
  color: #444;
}

/* VIDEO */
.video-container {
  width: 100%;
}

.video-2 {
  width: 100%;
  height: 420px;
  object-fit: cover;
  object-position: center;
  aspect-ratio: 16 / 9;
  height: auto;

  border-radius: 6px;
  
  /* 🔥 reduces visual dominance */
  background: black;
}

/* MOBILE */
@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .main-title {
    font-size: 24px;
  }

  .video-2 {
    height: 250px;
  }
}

`}</style>

    </>

  );
};

export default Section4; 
