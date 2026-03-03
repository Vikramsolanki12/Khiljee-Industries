import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaHeart, FaShieldAlt, FaCheck } from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";

const Products = () => {
  const products = [
    {
      category: "Atta",
      name: "Tiger Chakki Atta",
      weight: "5 Kg",
      image:
        "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772555286/IMG_4513_vbqtey.png",
      description: "Perfect for small families",
      features: [
        "100% Whole Wheat",
        "Chakki Fresh Grinding",
        "High Fiber Content",
        "Soft & Fluffy Rotis",
      ],
    },
    {
      category: "Atta",
      name: "Tiger Chakki Atta",
      weight: "10 Kg",
      image:
        "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772556484/WhatsApp_Image_2026-03-03_at_22.13.22_vfzgsu.jpg",
      description: "Ideal for medium families",
      features: [
        "100% Whole Wheat",
        "Chakki Fresh Grinding",
        "Rich in Nutrition",
        "Most Popular Pack",
      ],
      popular: true,
    },
    {
      category: "Atta",
      name: "Tiger Chakki Atta",
      weight: "26 Kg",
      image:
        "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772555283/IMG_4514_vgyvzo.png",
      description: "Best value for large families",
      features: [
        "Premium Wheat Quality",
        "Stone Ground",
        "High Fiber",
        "Long Lasting Freshness",
      ],
    },
    {
      category: "Atta",
      name: "Tiger Chakki Atta",
      weight: "50 Kg",
      image:
        "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772555280/21b4f0ee-60b3-4498-9822-87029be9da19_wriurh.jpg",
      description: "Bulk pack for restaurants & businesses",
      features: [
        "Commercial Grade Quality",
        "Consistent Texture",
        "Cost Effective",
        "High Volume Supply",
      ],
    },
    {
      category: "Masala",
      name: "Tiger Chilli Powder",
      weight: "Various Packets",
      image:
        "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772555279/de15f2a9-e483-48f0-8c78-12fceca7d251_pw3ydl.jpg",
      description: "Premium quality red chilli powder",
      features: [
        "Rich Natural Color",
        "Strong Aroma",
        "Pure & Fresh",
        "No Artificial Color",
      ],
    },
    {
      category: "Masala",
      name: "Tiger Turmeric Powder",
      weight: "Various Packets",
      image:
        "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772555274/1c241b01-d428-4fc6-9997-79090ac0abf8_mqqxfx.jpg",
      description: "High-quality turmeric for daily cooking",
      features: [
        "High Curcumin Content",
        "Natural Yellow Color",
        "Pure & Hygienic",
        "Strong Aroma",
      ],
    },
    {
      category: "Masala",
      name: "Tiger Coriander Powder",
      weight: "Various Packets",
      image:
        "https://res.cloudinary.com/dycwzjo2h/image/upload/v1772555273/fbde7803-4224-4a68-808f-533580e071a5_n9y3bo.jpg",
      description: "Freshly ground coriander powder",
      features: [
        "Authentic Taste",
        "Natural Aroma",
        "Finely Ground",
        "Premium Quality Seeds",
      ],
    },
  ];

  const qualities = [
    {
      icon: <FaWheatAwn />,
      title: "100% Whole Wheat",
      description: "No maida mixing, pure whole wheat flour",
    },
    {
      icon: <FaLeaf />,
      title: "Chakki Fresh Grinding",
      description: "Traditional stone grinding preserves nutrients",
    },
    {
      icon: <FaHeart />,
      title: "High Fiber Content",
      description: "Natural fiber for better digestion",
    },
    {
      icon: <FaShieldAlt />,
      title: "Hygienically Packed",
      description: "Sealed in food-grade packaging",
    },
  ];

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
            Our Premium Products
          </motion.h1>
          <p className="text-lg text-slate-600">
            Freshly ground chakki atta and premium masale for every kitchen.
          </p>
        </div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className={`relative bg-white border rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ${
                product.popular
                  ? "border-blue-600 ring-2 ring-blue-400"
                  : "border-slate-200"
              }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-blue-600 text-white rounded-full text-xs font-bold shadow-md">
                  Most Popular
                </div>
              )}

              <div className="overflow-hidden rounded-xl mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-800 text-center">
                {product.name}
              </h3>

              <h4 className="text-2xl font-bold text-slate-900 text-center mb-2">
                {product.weight}
              </h4>

              <p className="text-slate-600 text-center mb-5 text-sm">
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <FaCheck className="text-blue-600 flex-shrink-0" size={14} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => (window.location.href = "/contact")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
              >
                Inquire Now
              </button>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose Tiger Atta?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Premium quality wheat flour crafted with tradition and care.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition text-center"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                {quality.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                {quality.title}
              </h3>
              <p className="text-sm text-slate-600">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            For Wholesome & Soft Rotis
          </h2>
          <p className="text-blue-100 mb-8">
            Contact us for pricing and availability in your area.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => (window.location.href = "/contact")}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              Contact Us
            </button>

            <button
              onClick={() => (window.location.href = "/distributor")}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-400 rounded-full font-semibold transition"
            >
              Become a Distributor
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;