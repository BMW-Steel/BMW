"use client"; 
import React from "react";
import { useEffect } from "react";


export default function Section5(){
  useEffect(() => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}, []);
    return (
        <>
       <div className="d-none d-lg-block">
  <div className="p-5 text-center">

  {/* HEADING */}
  <h5 className="section-sub">CERTIFICATIONS</h5>
  <h2 className="section-title">Certifications & Authorizations</h2>
  <p className="section-desc">
    We believe in transparency and quality. Here are some of the certifications we have proudly achieved.
  </p>

  {/* 🔥 MAIN PREVIEW (TOP) */}
  <div id="galleryCarousel" className="carousel slide mt-5" data-bs-ride="carousel">
    <div className="carousel-inner">

      {["file-10.jpg","file-20.jpg","file-30.jpg","file-40.jpg","file-50.jpg"].map((img, index) => (
        <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
          <img src={`images/${img}`} className="main-preview" />
        </div>
      ))}

    </div>

    {/* NAVIGATION */}
    <button
  className="carousel-control-prev custom-nav"
  type="button"
  data-bs-target="#galleryCarousel"
  data-bs-slide="prev"
>
  <span className="arrow-btn">‹</span>
</button>

<button
  className="carousel-control-next custom-nav"
  type="button"
  data-bs-target="#galleryCarousel"
  data-bs-slide="next"
>
  <span className="arrow-btn">›</span>
</button>
  </div>

  {/* 🔥 THUMBNAILS (BOTTOM) */}
  <div className="thumb-row mt-5 pt-3">

    {["file-10.jpg","file-20.jpg","file-30.jpg","file-40.jpg","file-50.jpg"].map((img, index) => (
      <img
        key={index}
        src={`images/${img}`}
        className="thumb"
        data-bs-target="#galleryCarousel"
        data-bs-slide-to={index}
      />
    ))}

  </div>

</div>
</div>

<div className="d-lg-none">
  <div className="p-2 p-md-5 d-flex flex-column flex-md-row justify-content-between align-items-between mt-5">
    <div className="carousel-thumbnails mt-3 w-100 text-center d-none">
      <div className="d-flex flex-column justify-content-start align-items-center">
        <h2 className="section-title" >
          Certifications and Authorizations
        </h2>
        <h4 className="pt-3 pb-3 w-75" style={{ color: 'rgb(66, 66, 66)', fontWeight: 400, textAlign: 'justify' }}>
          Because we are a transparent company that places priority on quality, we are pleased to present a series of certifications we have obtained.

          </h4>
      </div>
      <img
        src="images/file-10.jpg"
        data-bs-target="#carouselWithThumbnailss"
        data-bs-slide-to="0"
        className="active"
        alt="Thumbnail 1"
      />
      <img
        src="images/file-20.jpg"
        data-bs-target="#carouselWithThumbnailss"
        data-bs-slide-to="1"
        alt="Thumbnail 2"
      />
      <img
        src="images/file-30.jpg"
        data-bs-target="#carouselWithThumbnailss"
        data-bs-slide-to="2"
        alt="Thumbnail 3"
      />

<img
        src="images/file-40.jpg"
        data-bs-target="#carouselWithThumbnailss"
        data-bs-slide-to="3"
        alt="Thumbnail 4"
      />
      <img
        src="images/file-50.jpg"
        data-bs-target="#carouselWithThumbnailss"
        data-bs-slide-to="4"
        alt="Thumbnail 5"
      />
      
      
      
    </div>

    <div id="carouselWithThumbnailss" className="carousel slide p-2 w-100" data-bs-ride="carousel">
      <div>
        <h2 className="section-title" >
          Certifications and Authorizations
        </h2>
        <h4 className="section-desc">
         Because we are a transparent company that places priority on quality, we are pleased to present a series of certifications we have obtained.

</h4>
      </div>
      <div className="carousel-inner w-100 m-auto ps-4 ">
        <div className="carousel-item active text-center ">
          <img
            src="images/file-10.jpg"
            className="d-block"
            style={{ height: '450px', width: '300px' }}
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="images/file-20.jpg"
            className="d-block"
            style={{ height: '450px', width: '300px' }}
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="images/file-30.jpg"
            className="d-block"
            style={{ height: '450px', width: '300px' }}
            alt="Slide 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src="images/file-40.jpg"
            className="d-block"
            style={{ height: '450px', width: '300px' }}
            alt="Slide 4"
          />
        </div>
        <div className="carousel-item">
          <img
            src="images/file-50.jpg"
            className="d-block"
            style={{ height: '450px', width: '300px' }}
            alt="Slide 5"
          />
        </div>
      </div>

      <div className="text-center pt-2">
        <button
          className="carousel-control-prev arrow"
          type="button"
          data-bs-target="#carouselWithThumbnailss"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            style={{ backgroundColor: 'red', borderRadius: '50%' }}
            aria-hidden="true"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next arrow"
          type="button"
          data-bs-target="#carouselWithThumbnailss"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            style={{ backgroundColor: 'red', borderRadius: '50%' }}
            aria-hidden="true"
          />
          <span className="visually-hidden text-danger">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>
<style jsx>{`
body {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* HEADINGS */
.section-sub {
  color: red;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 600;
}

.section-title {
  font-size: 42px;
  font-weight: 600;
  color:red;
}

.section-desc {
  max-width: 700px;
  margin: 10px auto;
  color: #555;
  line-height: 1.7;
  font-size: 16px;
}

/* 🔥 MAIN IMAGE */
.main-preview {
  height: 500px;
  width: 340px;
  object-fit: cover;
  border-radius: 12px;
  margin: auto;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

/* 🔥 THUMB ROW */
.thumb-row {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

/* 🔥 THUMB */
.thumb {
  width: 110px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s ease;

  /* 🔥 DROP SHADOW */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.thumb:hover {
  opacity: 1;
  transform: scale(1.05);
}

/* 🔥 ACTIVE EFFECT */
.thumb.active {
  border: 2px solid red;
  opacity: 1;
}

/* 🔥 ARROWS */
.custom-arrow {
  background-color: red;
  border-radius: 50%;
  padding: 12px;
}
  .carousel {
  position: relative;
}
.carousel-item {
  transition: transform 0.6s ease-in-out;
}

/* 🔥 CUSTOM NAV POSITION */
.custom-nav {
  width: auto;
  top: 50%;
  transform: translateY(-50%);
}

/* LEFT ARROW CLOSE TO IMAGE */
.carousel-control-prev.custom-nav {
  left: calc(50% - 300px); 
}

/* RIGHT ARROW CLOSE TO IMAGE */
.carousel-control-next.custom-nav {
  right: calc(50% - 300px);
}

/* 🔥 BUTTON STYLE */
.arrow-btn {
  background: rgba(0,0,0,0.6);
  color: white;
  font-size: 28px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}

/* HOVER */
.arrow-btn:hover {
  background: red;
  transform: scale(1.1);
}

/* MOBILE FIX */
@media (max-width: 768px) {

  .section-title {
    font-size: 25px;
    margin-left: 5px;
}
.section-desc {
    font-size: 14px;
    margin-left: 5px;
}
    .carousel-item {
  transition: transform 0.6s ease-in-out;
  margin-left:10px;
}

   
  .carousel-control-prev.custom-nav {
    left: 10px;
  }

  .carousel-control-next.custom-nav {
    right: 10px;
  }
}

/* MOBILE */
@media (max-width: 768px) {
  .main-preview {
    height: 350px;
    width: 240px;
  }

  .thumb {
    width: 80px;
    height: 110px;
  }
}
.policy-block {
  scroll-margin-top: 100px; /* adjust according to navbar height */
}

`}</style>
  </>
    )}