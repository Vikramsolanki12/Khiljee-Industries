import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaAward, FaUsers, FaChartLine } from "react-icons/fa";

const About = () => {
  const milestones = [
    { year: "2002", title: "Company Founded", description: "Started our journey in Barmer, Rajasthan" },
    { year: "2015", title: "Expansion", description: "Expanded distribution across multiple Indian states" },
    { year: "2020", title: "Modern Facility", description: "Upgraded to state-of-the-art processing plant" },
  ];

  const values = [
    {
      icon: <FaAward size={26} />,
      title: "Quality First",
      description: "We never compromise on wheat quality or processing standards.",
    },
    {
      icon: <FaUsers size={26} />,
      title: "Customer Trust",
      description: "Serving families for decades with consistency and care.",
    },
    {
      icon: <FaIndustry size={26} />,
      title: "Modern Hygiene",
      description: "Traditional wisdom combined with advanced safety systems.",
    },
    {
      icon: <FaChartLine size={26} />,
      title: "Continuous Growth",
      description: "Constant innovation to meet evolving customer needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            About M/s Khiljee Industries
          </motion.h1>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A legacy of quality, trust, and tradition spanning over three decades.
            From Rajasthan’s soil to kitchens across India.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-5 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              Our Heritage
            </span>

            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              M/s Khiljee Industries
            </h2>

            <p className="text-slate-600 mb-4 leading-relaxed">
              Founded in Barmer, Rajasthan, Khiljee Industries has been a
              cornerstone of premium wheat flour production for over three decades.
            </p>

            <p className="text-slate-600 mb-4 leading-relaxed">
              The Tiger brand was born from our commitment to excellence —
              sourcing the finest wheat and grinding it using traditional
              stone chakki methods to preserve natural nutrition and authentic taste.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Today, Tiger Chakki Fresh Atta is trusted by thousands of families
              for making soft, healthy rotis every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.pexels.com/photos/15100268/pexels-photo-15100268.jpeg"
              alt="Golden wheat field"
              className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            The principles that drive our commitment to quality and growth.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl mb-5 mx-auto">
                {value.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-800 mb-2 text-center">
                {value.title}
              </h3>

              <p className="text-slate-600 text-sm text-center">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
            Our Journey
          </h2>

          <div className="relative border-l-4 border-blue-600 ml-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 ml-8"
              >
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 mt-2"></div>
                <h3 className="text-2xl font-bold text-blue-600">
                  {milestone.year}
                </h3>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {milestone.title}
                </h4>
                <p className="text-slate-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-slate-500 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <FaAward className="mx-auto mb-6 text-blue-400" size={50} />
          <h2 className="text-4xl font-bold mb-6">
            ISO Certified Quality
          </h2>
          <p className="text-slate-300 mb-8">
            Recognized for excellence in food safety and quality management.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-slate-800 px-8 py-6 rounded-2xl border border-slate-700">
              ISO 22000 – Food Safety
            </div>
            <div className="bg-slate-800 px-8 py-6 rounded-2xl border border-slate-700">
              ISO 9001 – Quality Management
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;