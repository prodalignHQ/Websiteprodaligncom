import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

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
            The apex layer of the Prodalign ecosystem. Selective, aspirational, and designed for individuals showing strong vision and founder potential.
          </p>
        </motion.div>

        {/* What Board Is */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">What Prodalign Board Is</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Prodalign Board is a structured support system for individuals who want to build companies—but need guidance, accountability, and experienced perspectives before launching.
            </p>
            <p>
              This isn't an accelerator. There's no Demo Day, no pitch competition, no race to fundraising. Instead, Board provides long-term advisory support as you refine your idea, test assumptions, and build the foundation for something sustainable.
            </p>
            <p>
              Participation is selective. Not everyone from Build moves to Board—and that's intentional. This layer is for people who've demonstrated vision, judgment, and the discipline to execute over time.
            </p>
          </div>
        </motion.section>

        {/* Eligibility */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-gray-50 p-8 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">Eligibility Requirements</h2>
          <p className="text-gray-600 mb-6">
            To be considered for Prodalign Board, you need at least one of the following:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <p className="text-gray-600">
                <strong className="text-gray-900">A business idea</strong> — Something you've been thinking about and want to refine through structured feedback.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <p className="text-gray-600">
                <strong className="text-gray-900">A draft business plan</strong> — Early thinking on market, model, or go-to-market strategy.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <p className="text-gray-600">
                <strong className="text-gray-900">Market research</strong> — Evidence that you've explored a space and see an opportunity.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <p className="text-gray-600">
                <strong className="text-gray-900">Openness to work on a Prodalign-assigned problem</strong> — Willingness to build around a challenge we've identified and believe has potential.
              </p>
            </div>
          </div>
          <p className="text-gray-600 mt-6 pt-6 border-t border-gray-200">
            Prodalign assists in refining ideas before board formation. If your concept needs work, we'll help you sharpen it—or redirect you toward something more viable.
          </p>
        </motion.section>

        {/* Board Structure */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 border-l-4 border-[#FC7802] pl-8"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">How Board Structure Works</h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-xl mb-2 text-gray-900">Board Composition</h3>
              <p>
                Each venture is supported by <strong className="text-gray-900">2–6 board members</strong>—experienced operators, founders, or domain experts who provide strategic guidance.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2 text-gray-900">Equity Allocation</h3>
              <p>
                Each board member receives <strong className="text-gray-900">1.5% equity</strong> in the venture. Prodalign retains <strong className="text-gray-900">0.75% equity</strong> to sustain the ecosystem and align incentives long-term.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-2 text-gray-900">Duration & Meetings</h3>
              <p>
                Board access lasts for <strong className="text-gray-900">12 months</strong>, with up to <strong className="text-gray-900">6 board meetings</strong> during that period. Meetings are intentional, not frequent—focused on high-leverage decisions, not day-to-day operations.
              </p>
            </div>
          </div>
          <p className="text-gray-600 mt-6 pt-6 border-t border-gray-200">
            This structure ensures board members are genuinely invested in your success—not just offering advice for free or charging consulting fees.
          </p>
        </motion.section>

        {/* What Board Members Do */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">What Board Members Provide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl mb-3">Strategic Direction</h3>
              <p className="text-gray-600">
                Help you think through big decisions—pivots, hiring, fundraising, market positioning—without rushing or forcing outcomes.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl mb-3">Pattern Recognition</h3>
              <p className="text-gray-600">
                Share what they've seen work (and fail) in similar contexts. Save you months of trial and error.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl mb-3">Network Access</h3>
              <p className="text-gray-600">
                Introductions to customers, partners, investors, or operators who can unlock doors you didn't know existed.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl mb-3">Honest Feedback</h3>
              <p className="text-gray-600">
                Tell you when something isn't working, when to double down, or when to redirect. No sugarcoating, no ego protection.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What Board Isn't */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-gray-50 p-8 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">What Board Doesn't Promise</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• No guaranteed funding or investor introductions</li>
            <li>• No instant success or "fast-track to unicorn" narrative</li>
            <li>• No hands-on execution—board members advise, you build</li>
            <li>• No replacement for doing the hard work yourself</li>
          </ul>
          <p className="text-gray-600 mt-6 pt-6 border-t border-gray-200">
            Prodalign Board is serious, long-term, and grounded in reality. If you're chasing hype or shortcuts, this isn't the place.
          </p>
        </motion.section>

        {/* Who This Is For */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">Who Board Is For</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Prodalign Board is for people who want to build something meaningful—not just start a company for the sake of it.
            </p>
            <p>
              You're willing to spend time refining your thinking. You understand that judgment, discipline, and pattern recognition take years to develop. You want guidance, but you're not looking for someone to build it for you.
            </p>
            <p>
              You might not have all the answers yet. But you're asking the right questions—and you're willing to work through uncertainty with structure and support.
            </p>
          </div>
        </motion.section>

        {/* Progression to Board */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 border-l-4 border-gray-200 pl-8"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">Path to Board Eligibility</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Most people who join Board have gone through Build and Partner first. They've demonstrated execution, learned how teams work, and shown the capacity to think beyond tasks.
            </p>
            <p>
              But that's not a strict requirement. If you have a strong idea, clear thinking, and the discipline to execute—you can apply directly. Prodalign will assess readiness and help you determine if Board is the right next step.
            </p>
          </div>
        </motion.section>

        {/* This Takes Time */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-[#FC7802]/5 border border-[#FC7802]/20 p-8 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">This Takes Time</h2>
          <p className="text-gray-600 mb-4">
            Building a company isn't a sprint. Most successful founders spend years refining their craft before something works. Board doesn't accelerate time—it provides structure so you use that time well.
          </p>
          <p className="text-gray-600">
            Expect slow, intentional progress. Expect honest conversations about what's working and what isn't. Expect to question your assumptions and rethink your approach.
          </p>
          <p className="text-gray-900 mt-6 pt-6 border-t border-[#FC7802]/20 font-semibold">
            If you're ready for that—Board exists to support you.
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
          <h2 className="text-3xl mb-6">Ready to Explore Board?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're exploring, hiring, or building—we'd love to talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FC7802] text-white rounded-md hover:bg-[#E56D02] transition-all hover:gap-3"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
