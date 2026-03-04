import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= BRAND ================= */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://customer-assets.emergentagent.com/job_121eef63-2765-48a0-aa05-c7d1415c6c8c/artifacts/6llbyytm_IMG-20251016-WA0004.jpg"
                alt="Tiger Atta Logo"
                className="h-14 w-auto bg-white rounded-xl p-2"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  M/s Khiljee Industries
                </h3>
                <p className="text-sm text-gray-400">
                  Chakki Fresh Atta & Masale
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed mb-6">
              Pure Wheat, Powerful Taste. Freshly ground whole wheat and premium
              spices crafted with tradition and quality.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-slate-800 hover:bg-yellow-500 text-gray-300 hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", link: "/about" },
                { name: "Products", link: "/products" },
                { name: "Why Choose Us", link: "/why-choose" },
                { name: "Gallery", link: "/gallery" },
                { name: "Testimonials", link: "/testimonials" },
                { name: "Blog", link: "/blog" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="hover:text-yellow-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SUPPORT ================= */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Contact Us", link: "/contact" },
                { name: "Become a Distributor", link: "/distributor" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="hover:text-yellow-400 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm">

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt
                  className="text-yellow-400 mt-1"
                  size={16}
                />
                <span>
                  H-1/37, RIICO Industrial Area,
                  <br />
                  Barmer – 344001, Rajasthan, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-yellow-400" size={16} />
                <div>
                  <a
                    href="tel:02982227272"
                    className="block hover:text-yellow-400"
                  >
                    02982-227272
                  </a>
                  <a
                    href="tel:9214407372"
                    className="block hover:text-yellow-400"
                  >
                    9214407372
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" size={16} />
                <a
                  href="mailto:rahman314@gmail.com"
                  className="hover:text-yellow-400"
                >
                  rahman314@gmail.com
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* ================= BADGES ================= */}
        <div className="mt-14 flex flex-wrap justify-center gap-4 text-xs text-gray-400">
          {[
            "100% Whole Wheat",
            "Made in India 🇮🇳",
          ].map((badge, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-slate-800 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} M/s Khiljee Industries. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
