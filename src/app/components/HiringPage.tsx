import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

export function HiringPage() {
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
          <h1 className="mb-6 text-[36px]">Prodalign Partner</h1>
          <p className="text-gray-600 max-w-3xl">
            Hire talent through real collaboration and trust. Evaluate performance in practice, not through interviews alone.
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
              <p>Early to mid-stage companies building their teams</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FC7802] flex-shrink-0 mt-1" />
              <p>Organizations looking for talent beyond traditional hiring pools</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FC7802] flex-shrink-0 mt-1" />
              <p>Teams that value potential and growth mindset over polish</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FC7802] flex-shrink-0 mt-1" />
              <p>Companies who want to test fit before making full-time commitments</p>
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
              <h3 className="text-xl mb-3">Pre-Vetted Talent</h3>
              <p className="text-gray-600">
                We identify candidates based on curiosity, capability, and commitment—not just credentials.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">Contract-First Model</h3>
              <p className="text-gray-600">
                Start with project-based work. Build confidence through results before making long-term commitments.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">Clear Communication</h3>
              <p className="text-gray-600">
                Transparent processes, regular updates, and structured feedback loops keep everyone aligned.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">Conversion Pathways</h3>
              <p className="text-gray-600">
                Successful contracts naturally evolve into full-time roles when there's mutual fit and value.
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
              <strong className="text-gray-900">Week 1:</strong> You're matched with talent that fits your needs, culture, and timeline. Onboarding begins immediately.
            </p>
            <p>
              <strong className="text-gray-900">Month 1:</strong> Your contract hire is delivering value, learning your systems, and proving their capabilities.
            </p>
            <p>
              <strong className="text-gray-900">Month 3-6:</strong> You've built confidence in their work, they've grown with your company, and conversion to full-time feels natural.
            </p>
            <p>
              <strong className="text-gray-900">Beyond:</strong> You've added a reliable team member who was tested in real scenarios, not just interviews.
            </p>
          </div>
        </motion.section>

        {/* Why Contract-to-Hire Works */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 border-l-4 border-[#FC7802] pl-8"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">Why Contract-to-Hire Works</h2>
          <p className="text-lg text-gray-600 mb-4">
            Traditional hiring is expensive, slow, and risky. You interview well, hire fast, and hope for the best.
          </p>
          <p className="text-lg text-gray-600">
            Prodalign's contract-first model lets you work together first. See how they think, collaborate, and deliver. Then decide if they're the right long-term fit.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border-t border-gray-200 pt-12"
        >
          <h2 className="text-3xl mb-6">Ready to Build Your Team?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FC7802] text-white rounded-md hover:bg-[#E56D02] transition-all hover:gap-3"
          >
            Let's Talk About Hiring
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}