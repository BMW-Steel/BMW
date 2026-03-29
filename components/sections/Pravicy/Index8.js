"use client";
import React from "react";
export default function Index8(){
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



<div className="privacy-layout">

  {/* 🔥 SIDEBAR */}
  <aside className="privacy-sidebar">
    <ul>
      <li><a href="#info">Information</a></li>
      <li><a href="#business">Business Info</a></li>
      <li><a href="#technical">Technical Data</a></li>
      <li><a href="#usage">Usage</a></li>
      <li><a href="#cookies">Cookies</a></li>
      <li><a href="#sharing">Sharing</a></li>
      <li><a href="#security">Security</a></li>
      <li><a href="#retention">Retention</a></li>
      <li><a href="#rights">Your Rights</a></li>
      <li><a href="#links">Third Party</a></li>
      <li><a href="#changes">Changes</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </aside>

  {/* 🔥 CONTENT */}
  <div className="privacy-content">

    <h1 className="main-title text-center mb-5">
      Privacy Policy
    </h1>

    {/* SECTION EXAMPLE */}
    <section id="info" className="policy-block">
      <h2 className="section-title">Information We Collect</h2>
      {/* KEEP YOUR SAME CONTENT */}
    </section>

    <section id="business" className="policy-block">
      <h2 className="section-title">Business & Project Information</h2>
    </section>

    <section id="technical" className="policy-block">
      <h2 className="section-title">Technical & Usage Data</h2>
    </section>

    <section id="usage" className="policy-block">
      <h2 className="section-title">How We Use Your Information</h2>
    </section>

    <section id="cookies" className="policy-block">
      <h2 className="section-title">Cookies and Tracking Technologies</h2>
    </section>

    <section id="sharing" className="policy-block">
      <h2 className="section-title">Sharing of Information</h2>
    </section>

    <section id="security" className="policy-block">
      <h2 className="section-title">Data Security</h2>
    </section>

    <section id="retention" className="policy-block">
      <h2 className="section-title">Data Retention</h2>
    </section>

    <section id="rights" className="policy-block">
      <h2 className="section-title">Your Rights</h2>
    </section>

    <section id="links" className="policy-block">
      <h2 className="section-title">Third-Party Links</h2>
    </section>

    <section id="changes" className="policy-block">
      <h2 className="section-title">Changes to This Privacy Policy</h2>
    </section>

    <section id="contact" className="policy-block">
      <h2 className="section-title">Contact Us</h2>
    </section>

  </div>

</div>
<style jsx>{`
/* LAYOUT */
.privacy-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 40px;
  padding: 60px 20px;
}

/* SIDEBAR */
.privacy-sidebar {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.privacy-sidebar ul {
  list-style: none;
  padding: 0;
}

.privacy-sidebar li {
  margin-bottom: 10px;
}

.privacy-sidebar a {
  text-decoration: none;
  color: #555;
  font-size: 14px;
  transition: 0.2s;
}

.privacy-sidebar a:hover {
  color: red;
}

/* CONTENT */
.privacy-content {
  max-width: 800px;
}

/* TITLE */
.main-title {
  font-size: 32px;
  font-weight: 600;
}

/* BLOCK */
.policy-block {
  margin-bottom: 40px;
}

/* SECTION TITLE */
.section-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
}

/* TEXT */
.desc-text {
  font-size: 15px;
  line-height: 1.8;
  color: #444;
}

/* LIST */
.policy-block ul {
  padding-left: 20px;
}

.policy-block li {
  font-size: 15px;
  margin-bottom: 6px;
}

/* SCROLL SMOOTH */
html {
  scroll-behavior: smooth;
}

/* MOBILE */
@media (max-width: 992px) {
  .privacy-layout {
    grid-template-columns: 1fr;
  }

  .privacy-sidebar {
    display: none;
  }

  .main-title {
    font-size: 24px;
  }
}
`}</style>

  
        </>
    )
}