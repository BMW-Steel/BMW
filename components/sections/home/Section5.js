"use client";          
import Link from "next/link";
import React, { useEffect } from "react";
export default function Section5(){
    /* 🔥 Mobile carousel: keep dots in sync + tap dots to scroll */
    useEffect(() => {
        const track = document.querySelector(".division-carousel");
        const dotsContainer = document.querySelector(".division-dots");
        const prevBtn = document.querySelector(".division-prev");
        const nextBtn = document.querySelector(".division-next");
        if (!track || !dotsContainer) return;
        const dots = dotsContainer.querySelectorAll("button");
        const slideCount = dots.length;

        const currentIndex = () => {
            const slide = track.querySelector(".card-wrapper");
            if (!slide || slide.offsetWidth === 0) return 0;
            return Math.round(track.scrollLeft / slide.offsetWidth);
        };

        const updateDots = () => {
            const index = currentIndex();
            dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
            if (prevBtn) {
                const isStart = index <= 0;
                prevBtn.disabled = isStart;
                prevBtn.classList.toggle("disabled", isStart);
            }
            if (nextBtn) {
                const isEnd = index >= slideCount - 1;
                nextBtn.disabled = isEnd;
                nextBtn.classList.toggle("disabled", isEnd);
            }
        };

        const goTo = (i) => {
            const slide = track.querySelector(".card-wrapper");
            if (!slide) return;
            const clamped = Math.max(0, Math.min(slideCount - 1, i));
            track.scrollTo({ left: clamped * slide.offsetWidth, behavior: "smooth" });
        };

        const onDotClick = (e) => {
            const dot = e.target.closest("button");
            if (!dot) return;
            const index = Array.from(dotsContainer.children).indexOf(dot);
            goTo(index);
        };

        const onPrev = () => goTo(currentIndex() - 1);
        const onNext = () => goTo(currentIndex() + 1);

        track.addEventListener("scroll", updateDots, { passive: true });
        window.addEventListener("resize", updateDots);
        dotsContainer.addEventListener("click", onDotClick);
        if (prevBtn) prevBtn.addEventListener("click", onPrev);
        if (nextBtn) nextBtn.addEventListener("click", onNext);

        updateDots();

        return () => {
            track.removeEventListener("scroll", updateDots);
            window.removeEventListener("resize", updateDots);
            dotsContainer.removeEventListener("click", onDotClick);
            if (prevBtn) prevBtn.removeEventListener("click", onPrev);
            if (nextBtn) nextBtn.removeEventListener("click", onNext);
        };
    }, []);

    return (
        <>
        <div className="division-section">
  <div className="container py-0">
    <h2 className="main-title text-center text-red">
      Powering Industries with Precision<br></br> Manufacturing
    </h2>
  </div>
  {/* 🔥 CARDS: stacked on desktop, swipeable carousel on mobile */}
  <div className="division-carousel-wrap">
  <div className="division-carousel">
  {/* CARD */}
  <div className="mb-5 scro card-wrapper">
    <div
      className="mx-3 mx-md-5 division-card d-flex flex-column flex-lg-row align-items-center justify-content-center"
      style={{
        backgroundColor: '#F4F4F4',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div className="p-md-5 w-100 d-flex align-items-center justify-content-center">
        <img
          src="images/section-5.webp"
          className="w-100"
          alt=""
          style={{
            borderRadius: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        />
      </div>
      <div className="w-100 pe-2  d-flex flex-column justify-content-around">
        <h3 className="card-title">Cast Basalt Division</h3>
        <p className="desc-text">
          BMW extracts and grades basalt with a unique structure for maximum erosion resistance. The basalt is melted at 1325°C and cast into molds, followed by controlled heat treatment to enhance recrystallization. This process yields dense, inert, and highly erosion-resistant products with zero porosity, thanks to advanced processing and quality control systems.

          </p>
        <div className="d-flex m-auto m-md-0">
          <Link
            className="btn btn-danger btn-lg mt-4 mx-md-3 me-1"
            href="/castbasalt"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* CARD end */}

  {/* CARD */}
  <div className="mb-5 scro card-wrapper">
    <div
      className="mx-3 mx-md-5 division-card d-flex flex-column flex-lg-row align-items-center justify-content-center"
      style={{
        backgroundColor: '#F4F4F4',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div className="p-md-5 w-100 d-flex align-items-center justify-content-center">
        <img
          src="images/image6.webp"
          className="w-100"
          alt=""
          style={{
            borderRadius: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        />
      </div>
      <div className="w-100 pe-2  d-flex flex-column justify-content-around">
        <h3 className="card-title">Alumina Ceramic Division</h3>
        <p className="desc-text">
          BMW sources high-grade sintered and finely ground alumina with a special microstructure for optimal erosion resistance. The alumina powder is mixed with additives and water in a ball mill, then dried in a spray dryer to form granules. These granules are pressed into shape and fired in a tunnel furnace at 1550°C. Each batch undergoes rigorous quality checks to ensure top quality.

          </p>
        <div className="d-flex m-auto m-md-0">
          <Link
            className="btn btn-danger btn-lg mt-4 mx-md-3 me-1"
            href="/aluminaceramic"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* CARD end */}

  {/* CARD */}
  <div className="mb-5 scro card-wrapper">
    <div
      className="mx-3 mx-md-5 division-card d-flex flex-column flex-lg-row align-items-center justify-content-center"
      style={{
        backgroundColor: '#F4F4F4',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div className="p-md-5 w-100 d-flex align-items-center justify-content-center">
        <img
          src="images/image6.webp"
          className="w-100"
          alt=""
          style={{
            borderRadius: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        />
      </div>
      <div className="w-100 pe-2  d-flex flex-column justify-content-around">
        <h3 className="card-title">Alumina Powder and Fused Alumina Abrasive</h3>
        <p className="desc-text">
          BMW&apos;s Wear Seal® series, including Wear Seal® Diamond and Wear Seal® CBC, protects against extreme wear, abrasion, and corrosion. These customizable linings are applied to pipes, chutes, and hoppers, offering a cost-effective solution to extend machinery life in cement, mining, and power generation industries.
        </p>
        <div className="d-flex m-auto m-md-0">
          <Link
            className="btn btn-danger btn-lg mt-4 mx-md-3 me-1"
            href="/fusedaluminaabrasive"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* CARD end */}

  {/* CARD */}
  <div className="mb-5 scro card-wrapper">
    <div
      className="mx-3 mx-md-5 division-card d-flex flex-column flex-lg-row align-items-center justify-content-center"
      style={{
        backgroundColor: '#F4F4F4',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div className="p-md-5 w-100 d-flex align-items-center justify-content-center">
        <img
          src="images/image5.webp"
          className="w-100"
          alt=""
          style={{
            borderRadius: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        />
      </div>
      <div className="w-100 pe-2  d-flex flex-column justify-content-around">
        <div>
          <h3 className="card-title">Chemically Bonded Compound Series (CBC)</h3>
        </div>
        <p className="desc-text">
         The CBC series offers flexibility of use across all grades. CBCTM can be employed to install new linings with complex profiles as well as on roofs, using only a few simple lining tools. The recommended CBCTM lining thickness depends on the job requirements and application conditions. Final lining thickness can be recommended after technical evaluation by BMW at the lining site. The curing time for the CBCTM series of compounds is 48 hours.
</p>
        <div className="d-flex m-auto m-md-0">
          <Link
            className="btn btn-danger btn-lg mt-4 mx-md-3 me-1"
            href="/chemicallybondedcompoundseries"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* CARD end */}
  </div>
  {/* 🔥 NAV BUTTONS (visible on mobile only) */}
  <button type="button" className="division-prev" aria-label="Previous card">‹</button>
  <button type="button" className="division-next" aria-label="Next card">›</button>
  </div>
  {/* 🔥 CAROUSEL DOTS (visible on mobile only) */}
  <div className="division-dots" aria-label="Card carousel">
    <button type="button" className="active" aria-label="Go to card 1" />
    <button type="button" aria-label="Go to card 2" />
    <button type="button" aria-label="Go to card 3" />
    <button type="button" aria-label="Go to card 4" />
  </div>
</div>
<style jsx>{`
/* HEADING */
.main-title {
  font-size: 42px;
  font-weight: 600;
}

.text-red {
  color: red;
}

/* 🔥 CARD UPGRADE */
/* 🔥 WRAPPER */
.card-wrapper {
  display: flex;
  justify-content: center;
}

/* 🔥 CARD */
.division-card {
  width: 100%;
  max-width: 1000px;   /* controls size */
  margin: 0 auto;      /* perfect centering */

  background: #f4f4f4;
  border-radius: 14px;
  padding: 24px;

  
  transition: 0.3s ease;
}

/* HOVER EFFECT (subtle) */
.division-card:hover {
  transform: translateY(-5px);
}

/* IMAGE */
.division-card img {
  width: 100%;
  height: 260px;              /* 🔥 key fix */
  object-fit: cover;

  border-radius: 10px;
  
}

/* TITLE */
.card-title {
  font-size: 20px;   /* slightly reduced */
  font-weight: 600;
  margin-bottom: 8px;
}

.desc-text {
  font-size: 15px;   /* tighter */
  line-height: 1.5;
}

/* BUTTON */
.division-card .btn {
  margin-top: 24px;
  
  
}

/* MOBILE */
@media (max-width: 768px) {
  .main-title {
    font-size: 24px;
  }

  .card-title {
    font-size: 18px;
  }
  .division-card {
  transition: 0.3s ease;
  margin: 0 auto;      /* perfect centering */

  background: #f4f4f4;
  border-radius: 14px;
  padding: 24px;

  }
  .division-card:hover {
  transform: translateY(-5px);
}}

/* SECTION */
.division-section {
  padding: 80px 20px;
}

@media (max-width: 768px) {
  .division-section {
    padding: 40px 20px;
  }
}

/* 🔥 MOBILE CAROUSEL: cards become a swipeable carousel on mobile only */
.division-dots {
  display: none;
}

.division-prev,
.division-next {
  display: none;
}

@media (max-width: 768px) {
  .division-carousel-wrap {
    position: relative;
  }

  .division-carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    touch-action: pan-y;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .division-carousel::-webkit-scrollbar {
    display: none;
  }

  .division-carousel .card-wrapper {
    flex: 0 0 100%;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    position: static !important;  /* neutralize sticky inside the swipe track */
    margin-bottom: 0;
  }

  .division-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-top: 16px;
  }

  .division-dots button {
    width: 8px;
    height: 8px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: #ccc;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .division-dots button.active {
    background: red;
    width: 24px;
    border-radius: 4px;
  }

  /* 🔥 NAVIGATION ARROWS */
  .division-prev,
  .division-next {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    z-index: 3;
    transition: all 0.3s ease;
  }

  .division-prev {
    left: 2px;
  }

  .division-next {
    right: 2px;
  }

  .division-prev:hover,
  .division-next:hover {
    background: red;
  }

  .division-prev.disabled,
  .division-next.disabled {
    opacity: 0.35;
    pointer-events: none;
  }
}

`}</style>
        </>
    )}