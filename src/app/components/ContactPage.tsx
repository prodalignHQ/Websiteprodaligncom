import { motion } from "motion/react";
import { useState } from "react";

export function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSceD7dj2hfTbEvVUyAZg4njKSfrARbXnnkN3hk6UmUBk3nSaA/viewform?embedded=true"

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">Let's Talk</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're exploring, hiring, or building, we'd love to talk.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-gray-50 p-4 md:p-8 rounded-lg overflow-hidden min-h-[600px] relative"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
              <div className="w-8 h-8 border-4 border-[#FC7802] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <iframe
            src={googleFormUrl}
            width="640"
            height="1560"
            className="w-full h-full min-h-[1200px]"
            onLoad={() => setIsLoading(false)}
          >
            Loading…
          </iframe>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <h3 className="text-xl mb-2">For Talent</h3>
            <p className="text-gray-600">
              Curious about real-world training? Let's explore what's possible.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-2">For Companies</h3>
            <p className="text-gray-600">
              Looking to hire with clarity? We'll help you find the right fit.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-2">For Builders</h3>
            <p className="text-gray-600">
              Want to create something new? Let's talk about your vision.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
