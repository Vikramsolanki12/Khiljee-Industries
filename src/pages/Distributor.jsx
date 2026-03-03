import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaHandshake,
  FaTruck,
  FaChartLine,
} from "react-icons/fa";
import { toast } from "sonner";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";

const Distributor = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    contact_person: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    business_type: "",
    experience: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Save to Firebase
      await addDoc(collection(db, "distributorApplications"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // Send Email (IMPORTANT: await added)
      await emailjs.send(
        "service_fagv0jo",
        "template_jmsp9wd",
        {
          company_name: formData.company_name,
          contact_person: formData.contact_person,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          state: formData.state,
          business_type: formData.business_type,
          experience: formData.experience,
          message: formData.message,
        },
        "2yhUBZS26XzJYWfKb"
      );

      toast.success("Application submitted successfully! We will contact you soon.");

      setFormData({
        company_name: "",
        contact_person: "",
        phone: "",
        email: "",
        city: "",
        state: "",
        business_type: "",
        experience: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <FaHandshake />,
      title: "Trusted Brand",
      description: "Partner with a well-established brand known for quality.",
    },
    {
      icon: <FaTruck />,
      title: "Timely Supply",
      description: "Efficient logistics & consistent product availability.",
    },
    {
      icon: <FaChartLine />,
      title: "Growth Potential",
      description: "Strong market demand and expanding network.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Assurance",
      description: "ISO-certified production with strict standards.",
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
            className="text-5xl font-bold text-slate-900 mb-6"
          >
            Become a Tiger Brand Distributor
          </motion.h1>
          <p className="text-slate-600 text-lg">
            Join our growing distribution network across India.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-3xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Distributor Application Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {Object.keys(formData).map((field) =>
                field !== "message" ? (
                  <Input
                    key={field}
                    label={field.replace("_", " ").toUpperCase()}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field !== "email"}
                  />
                ) : null
              )}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional Information (Optional)"
                rows="4"
                className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300 disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>

            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

const Input = ({ label, name, value, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-slate-700 mb-2">
      {label} {required && "*"}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
    />
  </div>
);

export default Distributor;