"use client";          // ←  ADD THIS LINE

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
    <div>
      <div className="d-lg-flex p-2 p-md-5 pt-md-0">
        {/* Image Section */}
        <div className="p-2 text-center p-md-5 w-100 d-none d-md-block align-item-center d-flex justify-content-center">
          <video className="w-100" src="images/new.mp4" autoPlay loop muted />
        </div>

        {/* Text Section */}
        <div className="p-2 p-md-5 w-100" data-aos="fade-down">
          <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: "50px" }}>
            We Spread Around the World
          </h2>

          <video
            className="mobile-image-2 d-md-none pt-3"
            src="images/new.mp4"
            width="700"
            autoPlay
            loop
            muted
          />
          <h4
            className="pt-4"
            style={{
              color: "rgb(66, 66, 66)",
              fontWeight: 400,
              textAlign: "justify",
            }}
          >
            BMW Steels Ltd. was founded in 1990. Our head Office is in
            Dehradun, Uttarakhand, India. We offer state-of-the-art Engineering
            solutions for Coal Power Plants, Steel Plants, and Cement Plants.
          </h4>

          {/* Counter Section */}
          <div className="d-lg-flex justify-content-between px-2 pt-3">
            {/* Experience Counter */}
            <div
              className="p-4 m-3"
              style={{ backgroundColor: "#F4F4F4", borderRadius: "20px" }}
            >
              <div className="d-flex">
                <h2
                  className="counter"
                  id="counter1"
                  style={{ color: "red", fontWeight: 600 }}
                >
                  0
                </h2>
                <h2 style={{ color: "red", fontWeight: 600 }}>+</h2>
              </div>
              <h3>YEARS OF EXPERIENCE</h3>
            </div>

            {/* Offices Counter */}
            <div
              className="p-4 m-3"
              style={{ backgroundColor: "#F4F4F4", borderRadius: "20px" }}
            >
              <h2
                className="counter"
                id="counter2"
                style={{ color: "red", fontWeight: 600 }}
              >
                0
              </h2>
              <h3>OFFICES WORLDWIDE</h3>
            </div>

            {/* Workers Counter */}
            <div
              className="p-4 m-3"
              style={{ backgroundColor: "#F4F4F4", borderRadius: "20px" }}
            >
              <div className="d-flex">
                <h2
                  className="counter"
                  id="counter3"
                  style={{ color: "red", fontWeight: 600 }}
                >
                  0
                </h2>
                <h2 style={{ color: "red", fontWeight: 600 }}>+</h2>
              </div>
              <h3>WORKERS EMPLOYED</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}