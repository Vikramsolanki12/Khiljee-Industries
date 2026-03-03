import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendar, FaUser, FaTag, FaArrowLeft } from "react-icons/fa";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(getDefaultPost(slug));
  }, [slug]);

  const getDefaultPost = (slug) => {
    const defaultContent = `
      <p>Welcome to our blog post! We're excited to share valuable insights about Tiger Chakki Fresh Atta and healthy living.</p>

      <h2>Quality You Can Trust</h2>
      <p>Our traditional chakki grinding method preserves nutrients and authentic taste, ensuring soft and healthy rotis every day.</p>

      <h2>Our Commitment</h2>
      <p>We maintain strict hygiene and ISO-certified standards in every pack we deliver.</p>

      <blockquote>Pure Wheat. Powerful Taste.</blockquote>

      <p>Thank you for choosing Tiger Atta — a brand trusted by families across India.</p>
    `;

    return {
      id: "1",
      title: slug
        ?.split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      slug,
      excerpt: "Discover more about Tiger Chakki Fresh Atta",
      content: defaultContent,
      image_url:
        "https://images.pexels.com/photos/15100268/pexels-photo-15100268.jpeg",
      author: "Tiger Atta Team",
      category: "General",
      tags: ["quality", "health", "nutrition"],
      created_at: new Date().toISOString(),
    };
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (!post) return null;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <div className="relative h-[450px] overflow-hidden">
        <img
          src={post.image_url}
          alt={post.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
          {post.category}
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold max-w-4xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* ARTICLE */}
      <article className="max-w-4xl mx-auto px-6 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-slate-200"
        >

          {/* Back Button */}
          <button
            onClick={() => navigate("/blog")}
            className="flex items-center gap-2 text-blue-600 font-semibold hover:underline mb-8"
          >
            <FaArrowLeft size={14} />
            Back to Blog
          </button>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-8 border-b border-slate-200 pb-6">
            <span className="flex items-center gap-2">
              <FaUser size={14} />
              {post.author}
            </span>

            <span className="flex items-center gap-2">
              <FaCalendar size={14} />
              {formatDate(post.created_at)}
            </span>

            <span className="flex items-center gap-2 flex-wrap">
              <FaTag size={14} />
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </span>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-slate-700 font-medium mb-10">
            {post.excerpt}
          </p>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none 
                       prose-headings:text-slate-800 
                       prose-headings:font-bold 
                       prose-blockquote:border-l-4 
                       prose-blockquote:border-blue-600 
                       prose-blockquote:text-blue-600 
                       prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </motion.div>
      </article>

      {/* CTA */}
      <section className="bg-slate-700 py-20 mt-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Enjoyed This Article?
          </h2>
          <p className="text-slate-300 mb-8">
            Explore more insights about health, nutrition and traditional milling.
          </p>

          <button
            onClick={() => navigate("/blog")}
            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            View More Articles
          </button>
        </div>
      </section>

    </div>
  );
};

export default BlogDetail;