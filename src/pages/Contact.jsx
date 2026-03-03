import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaDirections,
} from "react-icons/fa";
import { toast } from "sonner";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      await emailjs.send(
        "service_fagv0jo",
        "template_1icgwqg",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "2yhUBZS26XzJYWfKb"
      );

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const directionsLink =
    "https://www.google.com/maps/dir/?api=1&destination=Khilji+industries+Tiger+Brand+Atta+and+masala+Barmer";

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
            Contact M/s Khiljee Industries
          </motion.h1>

          <p className="text-lg text-slate-600">
            We’re here to help you. Reach out for inquiries, distribution, or support.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                value: "RIICO Industrial Area, Barmer – Rajasthan",
              },
              {
                icon: <FaPhone />,
                title: "Phone",
                value: "+91 9414107372",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "rahman314@gmail.com",
              },
              {
                icon: <FaWhatsapp />,
                title: "WhatsApp",
                value: "Chat on WhatsApp",
                link: "https://wa.me/919414107372",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:shadow-lg transition"
              >
                <div className="text-2xl text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-blue-600 transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-600">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-3xl shadow-lg p-10"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                required
                className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="4"
                className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
              />

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300 disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Visit Our Location
          </h2>

          <a
            href={directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300"
          >
            <FaDirections />
            Get Directions
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <iframe
              title="Khilji Industries Location"
              src="https://www.google.com/maps?q=Khilji+industries+Tiger+Brand+Atta+and+masala+Barmer&z=17&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full h-[450px]"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;