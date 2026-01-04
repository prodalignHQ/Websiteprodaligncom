import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Contact */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="inline-flex flex-col items-center gap-2 mb-6"
            >
              <img
                src="/prodalign-ship.png"
                alt="Prodalign"
                className="h-12 object-contain"
              />
              <span className="text-2xl tracking-tight text-[#FC7802] font-semibold">
                Prodalign
              </span>
            </Link>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:talk@prodalign.com"
                className="hover:text-[#FC7802] transition-colors"
              >
                talk@prodalign.com
              </a>
            </div>
          </div>

          {/* Sitemap - Main */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Main</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-[#FC7802] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-[#FC7802] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#FC7802] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap - Ecosystem */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Ecosystem</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/studio"
                  className="text-gray-600 hover:text-[#FC7802] transition-colors"
                >
                  Prodalign Studio
                </Link>
              </li>
              <li>
                <Link
                  to="/board"
                  className="text-gray-600 hover:text-[#FC7802] transition-colors"
                >
                  Prodalign Board
                </Link>
              </li>
              <li>
                <Link
                  to="/partner"
                  className="text-gray-600 hover:text-[#FC7802] transition-colors"
                >
                  Prodalign Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Prodalign. Building structure around
            talent.
          </p>
        </div>
      </div>
    </footer>
  );
}
