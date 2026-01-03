import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

export function TrainingPage() {
  const location = useLocation();
  const savedScrollY = location.state?.scrollY;

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-5xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/"
            state={{ scrollY: savedScrollY }}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FC7802] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="mb-6 text-[36px]">Prodalign Build</h1>
          <p className="text-gray-600 max-w-3xl">
            Learn by doing real work, with structure and mentorship. Build skills and confidence through execution, not theory.
          </p>
        </motion.div>

        {/* Who This Is For */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">Who This Is For</h2>
          <div className="space-y-4 text-lg text-gray-600">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FC7802] flex-shrink-0 mt-1" />
              <p>Individuals from Tier 2 & Tier 3 cities looking for real-world exposure</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FC7802] flex-shrink-0 mt-1" />
              <p>Recent graduates or career changers seeking hands-on experience</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FC7802] flex-shrink-0 mt-1" />
              <p>Anyone who learns better by doing than by listening</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FC7802] flex-shrink-0 mt-1" />
              <p>People who want real work experience before committing to full-time roles</p>
            </div>
          </div>
        </motion.section>

        {/* How Prodalign Helps */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-gray-50 p-8 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">How Prodalign Helps</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-3">Real Projects</h3>
              <p className="text-gray-600">
                Work on actual company projects, not hypothetical case studies. Build your portfolio while solving real problems.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">Structured Mentorship</h3>
              <p className="text-gray-600">
                Get guidance from experienced professionals who've been where you are and know where you're going.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">Clear Pathways</h3>
              <p className="text-gray-600">
                Understand what success looks like at each stage, with transparent feedback and growth opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">Contract-to-Career</h3>
              <p className="text-gray-600">
                Start on contract terms and prove your value. Many contracts naturally evolve into full-time opportunities.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What Success Looks Like */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">What Success Looks Like</h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              <strong className="text-gray-900">In 3 months:</strong> You've completed your first real project, received structured feedback, and built something you can show.
            </p>
            <p>
              <strong className="text-gray-900">In 6 months:</strong> You're working with increasing autonomy, your skills are demonstrable, and companies are taking notice.
            </p>
            <p>
              <strong className="text-gray-900">In 12 months:</strong> You're either in a full-time role you earned, starting your own venture, or exploring multiple high-quality opportunities.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border-t border-gray-200 pt-12"
        >
          <h2 className="text-3xl mb-6">Ready to Start Learning by Doing?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FC7802] text-white rounded-md hover:bg-[#E56D02] transition-all hover:gap-3"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}