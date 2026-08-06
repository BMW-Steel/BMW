import Layout from "@/components/layout/layout";
import Script from "next/script";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { blogContent } from "@/data/blog-content";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  return {
    title: blog ? blog.title : "Blog",
    description: blog ? "BMW Steels blog post" : "BMW Steels blog",
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  const content = blogContent[slug];

  if (!blog || !content) {
    notFound();
  }

  return (
    <Layout>
      {content}
      <Script src="/js/index.js" />
    </Layout>
  );
}
