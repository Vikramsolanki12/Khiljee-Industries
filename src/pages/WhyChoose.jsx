import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaIndustry,
  FaCertificate,
  FaUsers,
  FaHeart,
  FaShieldAlt,
} from "react-icons/fa";

const WhyChoose = () => {
  const reasons = [
    {
      icon: <FaCheckCircle size={36} />,
      title: "Traditional Chakki Grinding",
      description:
        "Age-old stone grinding preserves nutrients, fiber, and authentic aroma for superior taste.",
    },
    {
      icon: <FaShieldAlt size={36} />,
      title: "Strong Quality Control",
      description:
        "Multi-stage quality checks ensure only the finest wheat reaches your kitchen.",
    },
    {
      icon: <FaCertificate size={36} />,
      title: "ISO Certified Manufacturing",
      description:
        "ISO 22000 & ISO 9001 certified facility following international standards.",
    },
    {
      icon: <FaHeart size={36} />,
      title: "Rich Taste & Nutrition",
      description:
        "High fiber and essential nutrients for healthier, softer rotis.",
    },
    {
      icon: <FaUsers size={36} />,
      title: "Trusted by Families",
      description:
        "Millions of Indian families rely on Tiger Atta for daily meals.",
    },
    {
      icon: <FaIndustry size={36} />,
      title: "Modern Hygiene Standards",
      description:
        "Advanced facility ensuring clean, safe, and fresh packaging.",
    },
  ];

  const benefits = [
    "Makes soft and fluffy rotis",
    "Rich in dietary fiber",
    "No chemicals or preservatives",
    "Freshly ground for maximum nutrition",
    "Excellent taste and aroma",
    "Easy to knead and roll",
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
            Why Choose Tiger Atta?
          </motion.h1>
          <p className="text-lg text-slate-600">
            The perfect blend of tradition, quality, and trust.
          </p>
        </div>
      </section>

      {/* REASONS GRID */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                {reason.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            src="https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg"
            alt="Fresh rotis"
            className="rounded-3xl shadow-2xl"
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Health & Taste Benefits
            </h2>

            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    <FaCheckCircle size={14} />
                  </div>
                  <span className="text-lg text-slate-700">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Quality Process
          </h2>
          <p className="text-slate-600">
            From farm to your kitchen.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Wheat Selection" },
            { step: "02", title: "Stone Grinding" },
            { step: "03", title: "Quality Testing" },
            { step: "04", title: "Hygienic Packing" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 text-center"
            >
              <div className="text-5xl font-bold text-blue-200 mb-4">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-600 py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Experience the Tiger Difference
          </h2>
          <p className="text-slate-300 mb-8">
            Join millions of satisfied families today.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => (window.location.href = "/products")}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold shadow-lg transition"
            >
              View Products
            </button>

            <button
              onClick={() => (window.location.href = "/contact")}
              className="px-8 py-4 border border-white/40 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyChoose;