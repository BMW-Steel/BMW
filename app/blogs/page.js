"use client";
import Layout from "@/components/layout/layout";
import Link from "next/link";
import Script from "next/script";
import { blogs } from "@/data/blogs";

export default function Blogs() {
  return (
    <Layout>
      <div className="blog-section">

        {/* 🔥 HEADER */}
        <div className="text-center mb-5">
          <h2 className="main-title">Blogs</h2>
        </div>

        {/* 🔥 BLOG GRID */}
        <div className="container blog-grid">

          {blogs.map((blog) => (
            <div className="blog-card" key={blog.slug}>
              <Link href={`/blogs/${blog.slug}`}>
                <img
                  src={blog.image}
                  alt=""
                  className="blog-img"
                />
              </Link>

              <div className="blog-content">
                <p className="blog-date">{blog.date}</p>

                <Link href={`/blogs/${blog.slug}`}>
                  <h3 className="blog-title">
                    {blog.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
      <Script src="/js/index.js" />
      <style jsx>{`
/* SECTION */
.blog-section {
  padding: 80px 20px;
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
  gap: 32px;
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
  padding: 24px;
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

/* MOBILE */
@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .blog-section {
    padding: 40px 20px;
  }

  .main-title {
    font-size: 24px;
  }
}
`}</style>
    </Layout>
  );
}
