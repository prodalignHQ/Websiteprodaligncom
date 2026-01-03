import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

export function BuildingPage() {
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
          <h1 className="mb-6 text-[36px]">Prodalign Board</h1>
          <p className="text-gray-600 max-w-3xl">
            Grow into founders, operators, and leaders through hands-on experience. Build ownership, judgment, and the confidence to create.
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
              <p>Individuals with entrepreneurial aspirations but no clear starting point</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FC7802] flex-shrink-0 mt-1" />
              <p>People who want to understand how businesses work before starting their own</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FC7802] flex-shrink-0 mt-1" />
              <p>Operators looking to build something meaningful in the future</p>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-[#FC7802] flex-shrink-0 mt-1" />
              <p>Anyone who sees work as a stepping stone to leadership, not just a paycheck</p>
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
              <h3 className="text-xl mb-3">Real-World Experience</h3>
              <p className="text-gray-600">
                Work across different companies, industries, and challenges. See what works, what doesn't, and why.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">Build Your Network</h3>
              <p className="text-gray-600">
                Connect with founders, operators, and other builders. Learn from their journeys and mistakes.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">Test Your Ideas</h3>
              <p className="text-gray-600">
                Use your time in real projects to validate assumptions, understand markets, and refine your vision.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">Earn While You Learn</h3>
              <p className="text-gray-600">
                Don't go broke chasing a dream. Work, earn, save, and build your foundation—then launch.
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
              <strong className="text-gray-900">Year 1:</strong> You've worked with multiple companies, learned what you love (and hate), and built skills that transfer.
            </p>
            <p>
              <strong className="text-gray-900">Year 2:</strong> You're operating with increasing autonomy, taking on more responsibility, and seeing patterns across industries.
            </p>
            <p>
              <strong className="text-gray-900">Year 3+:</strong> You're either launching your own venture with clarity and confidence, or stepping into leadership roles where you drive real impact.
            </p>
          </div>
        </motion.section>

        {/* The Builder's Mindset */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 border-l-4 border-[#FC7802] pl-8"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">The Builder's Mindset</h2>
          <div className="space-y-4 text-lg text-gray-600">
            <p>Not everyone wants to be an entrepreneur. But many people want agency over their work.</p>
            <p>
              Prodalign is for builders—people who want to create, lead, and shape outcomes. Whether that's a startup, a product, a team, or a new way of working.
            </p>
            <p className="pt-4 border-t border-gray-200 text-gray-900">
              <strong>We help you build the skills, confidence, and network to make it happen.</strong>
            </p>
          </div>
        </motion.section>

        {/* Not a Shortcut */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-gray-50 p-8 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">This Isn't a Shortcut</h2>
          <p className="text-lg text-gray-600 mb-4">
            Building something meaningful takes time, work, and persistence. Prodalign doesn't promise instant success or a guaranteed path to funding.
          </p>
          <p className="text-lg text-gray-600">
            What we do provide is structure, real experience, mentorship, and a community of people who are building alongside you.
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
          <h2 className="text-3xl mb-6">Ready to Start Building?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FC7802] text-white rounded-md hover:bg-[#E56D02] transition-all hover:gap-3"
          >
            Let's Discuss Your Vision
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}