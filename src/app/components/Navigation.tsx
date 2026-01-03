import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative group">
            <span className="text-2xl tracking-tight">Prodalign</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FC7802] group-hover:w-full transition-all duration-300" />
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`relative py-2 transition-colors ${
                isActive('/') ? 'text-[#FC7802]' : 'text-gray-700 hover:text-[#FC7802]'
              }`}
            >
              Home
              {isActive('/') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FC7802]"
                />
              )}
            </Link>
            <Link
              to="/about"
              className={`relative py-2 transition-colors ${
                isActive('/about') ? 'text-[#FC7802]' : 'text-gray-700 hover:text-[#FC7802]'
              }`}
            >
              About Us
              {isActive('/about') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FC7802]"
                />
              )}
            </Link>
            <Link
              to="/contact"
              className={`relative py-2 transition-colors ${
                isActive('/contact') ? 'text-[#FC7802]' : 'text-gray-700 hover:text-[#FC7802]'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FC7802]"
                />
              )}
            </Link>
          </div>

          {/* Right CTA */}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-[#FC7802] text-white rounded-md hover:bg-[#E56D02] transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center gap-6 pb-4">
          <Link
            to="/"
            className={`text-sm ${isActive('/') ? 'text-[#FC7802]' : 'text-gray-700'}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-sm ${isActive('/about') ? 'text-[#FC7802]' : 'text-gray-700'}`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`text-sm ${isActive('/contact') ? 'text-[#FC7802]' : 'text-gray-700'}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
