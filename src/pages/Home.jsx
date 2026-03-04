import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart,
  FaCertificate,
  FaLeaf,
  FaTruck,
} from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";

const Home = () => {
  const features = [
    {
      icon: <FaWheatAwn size={32} />,
      title: "100% Whole Wheat",
      description: "Pure whole wheat flour with no additives or preservatives",
    },
    {
      icon: <FaLeaf size={32} />,
      title: "Chakki Fresh",
      description: "Freshly ground using traditional stone chakki method",
    },
    {
      icon: <FaHeart size={32} />,
      title: "High Fiber",
      description: "Rich in fiber and essential nutrients for healthy living",
    },
  ];

  // ✅ Slider Images
  const images = [
    "https://customer-assets.emergentagent.com/job_121eef63-2765-48a0-aa05-c7d1415c6c8c/artifacts/iyfugjpb_1766033583021.jpg",
    "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772555286/IMG_4515_xnwttp.png",
    "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772555274/IMG_4516_f0avzm.png",
    "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772555273/95dd68c8-a329-44ec-97c2-1dc7dfbdcf1f_wnqc5s.jpg",
    "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772555272/IMG_4517_r7vfsw.png",
    "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772554777/image_ne9juh.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50">

      {/* HERO SECTION */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              Premium Quality Since 2002
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Tiger Chakki Fresh Atta & Masale
            </h1>

            <p className="text-xl text-blue-600 font-semibold mb-4">
              Pure Wheat. Powerful Taste.
            </p>

            <p className="text-slate-600 text-lg mb-8 max-w-xl">
              Freshly ground whole wheat for soft, healthy rotis every day.
              Experience the authentic taste of tradition with modern hygiene standards.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>

              <Link
                to="/distributor"
                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Become Distributor
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE SLIDER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-xl relative h-[450px]">

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Tiger Atta"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute w-full h-full object-cover"
                />
              </AnimatePresence>

            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-3 mt-5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-blue-600 scale-125"
                      : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Families Trust Tiger Atta
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Our commitment to tradition and quality makes us the preferred choice across India.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl mb-5 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-center text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FaTruck className="mx-auto mb-6 text-blue-400" size={50} />

          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Tiger Difference?
          </h2>

          <p className="text-slate-300 mb-8 text-lg">
            Join thousands of families enjoying soft, nutritious rotis every day.
          </p>

          <Link
            to="/products"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            Explore Products
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
