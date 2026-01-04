import { motion } from "motion/react";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", role: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
          className="bg-gray-50 p-8 md:p-12 rounded-lg"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC7802] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC7802] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="role" className="block mb-2">
                  I'm interested in (optional)
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC7802] focus:border-transparent transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="training">Training through real work</option>
                  <option value="hiring">Hiring talent for my company</option>
                  <option value="building">Building something new</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FC7802] focus:border-transparent transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-[#FC7802] text-white rounded-md hover:bg-[#E56D02] transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.6 }}
                className="inline-block mb-6"
              >
                <CheckCircle className="w-20 h-20 text-green-500" />
              </motion.div>
              <h2 className="text-3xl mb-4">Message Sent!</h2>
              <p className="text-xl text-gray-600">
                Thank you for reaching out. We'll get back to you soon.
              </p>
            </motion.div>
          )}
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
