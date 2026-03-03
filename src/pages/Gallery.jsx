import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/15100268/pexels-photo-15100268.jpeg",
      title: "Golden Wheat Fields",
      category: "Wheat Source",
    },
    {
      url: "https://images.pexels.com/photos/15045286/pexels-photo-15045286.jpeg",
      title: "Traditional Chakki",
      category: "Grinding Process",
    },
    {
      url: "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg",
      title: "Fresh Rotis",
      category: "Final Product",
    },
    {
      url: "https://customer-assets.emergentagent.com/job_121eef63-2765-48a0-aa05-c7d1415c6c8c/artifacts/iyfugjpb_1766033583021.jpg",
      title: "Tiger Atta Packaging",
      category: "Product",
    },
    {
      url: "https://images.pexels.com/photos/8188732/pexels-photo-8188732.jpeg",
      title: "Happy Families",
      category: "Customer Stories",
    },
    {
      url: "https://customer-assets.emergentagent.com/job_121eef63-2765-48a0-aa05-c7d1415c6c8c/artifacts/6llbyytm_IMG-20251016-WA0004.jpg",
      title: "Tiger Brand Logo",
      category: "Branding",
    },
  ];

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            Our Gallery
          </motion.h1>
          <p className="text-lg text-slate-600">
            From golden wheat fields to your dining table.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-md bg-white border border-slate-200 hover:shadow-xl transition"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                <span className="text-blue-400 text-sm font-semibold mb-1">
                  {image.category}
                </span>
                <h3 className="text-white text-xl font-bold">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full text-center"
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="mt-6 text-white">
                <span className="text-blue-400 font-semibold">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-bold mt-2">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;