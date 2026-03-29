"use client";
import React from "react";
import Link from "next/link";
export default function Index30(){
    return (
        <>


      <div className="blog-section">

  {/* 🔥 HEADER */}
  <div className="text-center mb-5">
    <h2 className="main-title">Blogs</h2>
  </div>

  {/* 🔥 BLOG GRID */}
  <div className="container blog-grid">

    {/* BLOG 1 */}
    <div className="blog-card">
      <Link href="/Industrial-Wear-Resistant-Solutions">
        <img
          src="images/Blogs/Blog_Image_22oct-01.jpg"
          alt=""
          className="blog-img"
        />
      </Link>

      <div className="blog-content">
        <p className="blog-date">September 15, 2025</p>

        <Link href="/Industrial-Wear-Resistant-Solutions">
          <h3 className="blog-title">
            BMW Steels Ltd.: Engineering Excellence for Power, Steel & Cement Industries
          </h3>
        </Link>
      </div>
    </div>

    {/* BLOG 2 */}
    <div className="blog-card">
      <Link href="/Alumina-Ceramic-Liners-For-Wear-Protection">
        <img
          src="images/Blogs/Blog_Image_24oct-01.jpg"
          alt=""
          className="blog-img"
        />
      </Link>

      <div className="blog-content">
        <p className="blog-date">September 20, 2025</p>

        <Link href="/Alumina-Ceramic-Liners-For-Wear-Protection">
          <h3 className="blog-title">
            Why 92% Alumina Ceramic is a Game-Changer for Coal Pipeline Wear Protection
          </h3>
        </Link>
      </div>
    </div>

  </div>

  {/* 🔥 PAGINATION */}
  

</div>
<style jsx>{`
/* SECTION */
.blog-section {
  padding: 60px 20px;
}

/* HEADING */
.main-title {
  font-size: 32px;
  font-weight: 600;
}

/* GRID */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

/* CARD */
.blog-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

/* IMAGE */
.blog-img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

/* CONTENT */
.blog-content {
  padding: 20px;
}

/* DATE */
.blog-date {
  font-size: 14px;
  color: #888;
  margin-bottom: 8px;
}

/* TITLE */
.blog-title {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  line-height: 1.5;
  text-decoration: none;
}

.blog-title:hover {
  color: red;
}

/* PAGINATION */
.pagination .page-link {
  border-radius: 8px;
  margin: 0 5px;
}

/* MOBILE */
@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .main-title {
    font-size: 24px;
  }
}


`}</style>



        


 



        </>
    )}