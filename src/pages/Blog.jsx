import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendar, FaUser } from "react-icons/fa";

const Blog = () => {
  const [blogPosts] = useState([
    {
      id: "1",
      title: "The Health Benefits of Whole Wheat Flour",
      slug: "health-benefits-whole-wheat-flour",
      excerpt:
        "Discover why whole wheat flour is essential for a healthy diet and how Tiger Atta preserves maximum nutrition.",
      image_url:
        "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg",
      author: "Tiger Atta Team",
      category: "Health & Nutrition",
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Traditional Chakki vs Modern Grinding",
      slug: "traditional-chakki-vs-modern-grinding",
      excerpt:
        "Learn about the traditional stone grinding method and why it makes our atta superior.",
      image_url:
        "https://images.pexels.com/photos/15045286/pexels-photo-15045286.jpeg",
      author: "Tiger Atta Team",
      category: "Process & Quality",
      created_at: new Date().toISOString(),
    },
  ]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            M/s Khiljee Industries Blog
          </motion.h1>

          <p className="text-lg text-slate-600">
            Insights on health, nutrition, traditional milling, and quality wheat products.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                  {post.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h2 className="text-xl font-semibold text-slate-800 mb-3 hover:text-blue-600 transition">
                  {post.title}
                </h2>

                <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* META */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
                  <span className="flex items-center gap-1">
                    <FaUser size={12} />
                    {post.author}
                  </span>

                  <span className="flex items-center gap-1">
                    <FaCalendar size={12} />
                    {formatDate(post.created_at)}
                  </span>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>

              </div>
            </motion.article>
          ))}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-600 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Want More Healthy Insights?
          </h2>
          <p className="text-slate-300 mb-8">
            Follow our blog for nutrition tips and product updates.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Blog;