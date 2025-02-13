
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-verdandi-blue/90 backdrop-blur-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-verdandi-gold font-cormorant text-2xl font-semibold hover:text-verdandi-gold-light transition-colors duration-300"
        >
          Verdandi
        </Link>
        <div className="space-x-8">
          <Link
            to="/"
            className="text-white font-cormorant text-lg hover:text-verdandi-gold transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white font-cormorant text-lg hover:text-verdandi-gold transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white font-cormorant text-lg hover:text-verdandi-gold transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
