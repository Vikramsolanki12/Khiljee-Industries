import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "919414107372";
  const message =
    "Hello! I am interested in Tiger Chakki Fresh Wheat Atta.";

  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Auto show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: showTooltip ? 1 : 0,
          x: showTooltip ? 0 : 20,
        }}
        transition={{ duration: 0.4 }}
        className="absolute right-16 bottom-3 bg-white text-green-600 px-4 py-2 rounded-xl text-sm font-semibold shadow-xl whitespace-nowrap hidden sm:block"
      >
        💬 Chat with us!
      </motion.div>

      {/* Button */}
      <button
        onClick={handleClick}
        data-testid="whatsapp-floating-button"
        aria-label="Chat on WhatsApp"
        className="relative w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>

        {/* Icon */}
        <FaWhatsapp size={30} className="relative z-10" />
      </button>
    </motion.div>
  );
};

export default WhatsAppButton;