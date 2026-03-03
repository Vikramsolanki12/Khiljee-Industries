import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Why Choose Us", path: "/why-choose" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-blue-200"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://customer-assets.emergentagent.com/job_121eef63-2765-48a0-aa05-c7d1415c6c8c/artifacts/6llbyytm_IMG-20251016-WA0004.jpg"
                alt="Tiger Atta Logo"
                className="h-14 w-auto rounded-lg shadow-sm"
              />
              <div>
                <span className="text-xl font-semibold text-slate-800 tracking-wide">
                  M/s Khiljee Industries
                </span>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  since 2002
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-3 py-2 text-sm font-medium group"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "text-blue-900"
                          : "text-slate-900 group-hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                    </span>

                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute left-0 -bottom-1 h-0.5 bg-slate-900 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      } transition-all duration-300`}
                    />
                  </Link>
                );
              })}

              {/* CTA Button */}
              <Link
                to="/distributor"
                className="ml-6 px-6 py-2.5 text-center bg-gradient-to-r from-slate-900 to-blue-500 text-white rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Become a Distributor
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-blue-600 p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white shadow-lg border-t border-blue-200"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block text-base font-medium ${
                      location.pathname === link.path
                        ? "text-blue-600"
                        : "text-slate-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/distributor"
                  className="mt-4 w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-semibold shadow-md hover:shadow-lg transition"
                >
                  Become a Distributor
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
