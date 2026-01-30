import React from "react";
export default function Section5(){
    return (
        <>
       <div className="d-none d-lg-block">
  <div className="p-2 p-md-5 d-flex flex-row justify-content-between align-items-between mt-5">
    <div className="carousel-thumbnails mt-3 w-100 text-center">
      <div className="d-flex flex-column justify-content-start align-items-center">
        <h2 className="pt-4 mobile-fonts-heading" style={{ color: 'red', fontWeight: 600, fontSize: '50px' }}>
          Certifications and Authorizations
        </h2>
        <h4 className="pt-3 pb-3 w-75" style={{ color: 'rgb(66, 66, 66)', fontWeight: 400, textAlign: 'justify' }}>
          Because we are a transparent company, which puts price on quality, we show you a series of certificates we obtained.
        </h4>
      </div>
      <div>
        <img
          src="images/file-10.jpg"
          style={{ cursor: 'pointer' }}
          data-bs-target="#carouselWithThumbnails"
          data-bs-slide-to="0"
          className="active w-25"
          alt="Thumbnail 1"
        />
        <img
          src="images/file-20.jpg"
          style={{ cursor: 'pointer' }}
          data-bs-target="#carouselWithThumbnails"
          data-bs-slide-to="1"
          alt="Thumbnail 2"
          className="w-25"
        />
        <img
          src="images/file-30.jpg"
          style={{ cursor: 'pointer' }}
          data-bs-target="#carouselWithThumbnails"
          data-bs-slide-to="2"
          alt="Thumbnail 3"
            className="w-25"
        />

<img
          src="images/file-40.jpg"
          style={{ cursor: 'pointer' }}
          data-bs-target="#carouselWithThumbnails"
          data-bs-slide-to="3"
          alt="Thumbnail 4"
            className="w-25"
        />

<img
          src="images/file-50.jpg"
          style={{ cursor: 'pointer' }}
          data-bs-target="#carouselWithThumbnails"
          data-bs-slide-to="4"
          alt="Thumbnail 5"
            className="w-25"
        />
       
       
      </div>
    </div>

    <div id="carouselWithThumbnails" className="carousel slide w-50" data-bs-ride="carousel">
      <div className="carousel-inner w-100">
        <div className="carousel-item active text-center">
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
            alt="Slide 3"
          />
        </div>

        <div className="carousel-item">
          <img
            src="images/file-50.jpg"
            className="d-block"
            style={{ height: '450px', width: '300px' }}
            alt="Slide 3"
          />
        </div>
       
      </div>

      <div className="d-none">
        <button
          className="carousel-control-prev arrow"
          type="button"
          data-bs-target="#carouselWithThumbnails"
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
          data-bs-target="#carouselWithThumbnails"
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

<div className="d-lg-none">
  <div className="p-2 p-md-5 d-flex flex-column flex-md-row justify-content-between align-items-between mt-5">
    <div className="carousel-thumbnails mt-3 w-100 text-center d-none">
      <div className="d-flex flex-column justify-content-start align-items-center">
        <h2 className="pt-4 mobile-fonts-heading" style={{ color: 'red', fontWeight: 600, fontSize: '50px' }}>
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
        <h2 className="pt-4 mobile-fonts-heading" style={{ color: 'red', fontWeight: 600, fontSize: '50px' }}>
          Certifications and Authorizations
        </h2>
        <h4 className="pt-3 pb-3" style={{ color: 'rgb(66, 66, 66)', fontWeight: 400, textAlign: 'justify' }}>
         Because we are a transparent company that places priority on quality, we are pleased to present a series of certifications we have obtained.

</h4>
      </div>
      <div className="carousel-inner w-100 m-auto ps-4">
        <div className="carousel-item active text-center">
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
  </>
    )}