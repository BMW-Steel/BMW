"use client";         

import React, { useEffect } from "react";

export default function Section3() {
  /* ----------  same counter logic as before  ---------- */
  useEffect(() => {
    const targets = [25, 8, 300];
    const duration = 1500;
    const counters = [
      document.getElementById("counter1"),
      document.getElementById("counter2"),
      document.getElementById("counter3"),
    ];

    const animate = (el, target) => {
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    counters.forEach((el, i) => el && animate(el, targets[i]));

    const onFocus = () =>
      counters.forEach((el, i) => el && animate(el, targets[i]));
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, []);
  /* ----------------------------------------------------- */

  return (
    <>
    <div className="section-wrapper">

  <div className="container-custom">

    <div className="grid-2 align-center">

      {/* VIDEO */}
      <div className="video-box d-none d-md-flex justify-content-center">
        <video src="images/new.mp4" autoPlay loop muted />
      </div>

      {/* TEXT */}
      <div data-aos="fade-down">

        <h2 className="main-title">
          We Spread Around the World
        </h2>

        {/* MOBILE VIDEO */}
        <video
          className="mobile-video d-md-none mt-3"
          src="images/new.mp4"
          autoPlay
          loop
          muted
        />

        <p className="desc-text mt-3">
          BMW Steels Ltd. was founded in 1990. Our head Office is in
          Dehradun, Uttarakhand, India. We offer state-of-the-art Engineering
          solutions for Coal Power Plants, Steel Plants, and Cement Plants.
        </p>

        {/* COUNTERS */}
        <div className="counter-grid mt-4">

          {/* 1 */}
          <div className="counter-card">
            <div className="counter-value">
              <span id="counter1">0</span>+
            </div>
            <p className="counter-label">YEARS OF EXPERIENCE</p>
          </div>

          {/* 2 */}
          <div className="counter-card">
            <div className="counter-value">
              <span id="counter2">0</span>
            </div>
            <p className="counter-label">OFFICES WORLDWIDE</p>
          </div>

          {/* 3 */}
          <div className="counter-card">
            <div className="counter-value">
              <span id="counter3">0</span>+
            </div>
            <p className="counter-label">WORKERS EMPLOYED</p>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>
<style jsx>{`
/* SECTION */
.section-wrapper {
  padding: 70px 0;
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
  font-size: 32px;   /* ✅ fixed */
  font-weight: 600;
}

/* TEXT */
.desc-text {
  font-size: 16px;
  line-height: 1.5;
  color: #444;
}

/* VIDEO */
.video-box video {
  width: 80%;
  max-height: 400px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

.mobile-video {
  width: 100%;
  border-radius: 12px;
}

/* COUNTERS */
.counter-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

/* CARD */
.counter-card {
  background: #f4f4f4;
  border-radius: 14px;
  padding: 20px;
  min-width: 150px;
  text-align: center;
  flex: 1;

  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}

/* VALUE */
.counter-value {
  font-size: 28px;
  font-weight: 600;
  color: red;
}

/* LABEL */
.counter-label {
  font-size: 13px;
  margin-top: 5px;
  color: #555;
}

/* MOBILE */
@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }

  .main-title {
    font-size: 24px;
    margin-left: 20px;
  }

  .counter-grid {
    flex-direction: column;
  }
}



`}</style>
</>

  );
}