/* ============================================================
   Common blog data file — single source of truth for every
   blog post (metadata only, serializable).
   The JSX content for each post lives in data/blog-content.js
   and is rendered by the server-only /blogs/[slug] page.
   Slugs are lowercase kebab-case.
   ============================================================ */

export const blogs = [
  {
    slug: "engineering-excellence-for-power-steel-and-cement",
    title: "BMW Steels Ltd.: Engineering Excellence for Power, Steel & Cement Industries",
    date: "September 15, 2025",
    image: "/images/Blogs/Blog_Image_22oct-01.jpg",
  },
  {
    slug: "92-alumina-ceramic-for-coal-pipeline-wear-protection",
    title: "Why 92% Alumina Ceramic is a Game-Changer for Coal Pipeline Wear Protection",
    date: "September 20, 2025",
    image: "/images/Blogs/Blog_Image_24oct-01.jpg",
  },
];

/* Helper: look up a single blog post by its lowercase slug */
export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}
