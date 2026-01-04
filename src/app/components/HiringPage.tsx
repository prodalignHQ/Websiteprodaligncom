import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

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
            The interface layer that connects companies with talent. Partner provides real-world problem statements that create learning opportunities—with hiring as an optional outcome, not an obligation.
          </p>
        </motion.div>

        {/* What Partner Actually Is */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">What Partner Actually Is</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Prodalign Partner is not a hiring agency. It's a system that connects companies with talent through real collaboration.
            </p>
            <p>
              Companies submit non-critical or exploratory tasks—problems worth solving, but not urgent enough to block core operations. Teams from Prodalign Build work on these problems with structure and oversight.
            </p>
            <p>
              The result: Companies get work done at low risk. Talent gets real-world exposure and skill development. Hiring may happen, but only when both sides are confident.
            </p>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-gray-50 p-8 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">How Partner Works</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">1. Companies Submit Tasks</h3>
              <p className="text-gray-600">
                These are real problems—building a feature, researching a market, optimizing a workflow—but not mission-critical. Perfect for testing talent and providing learning opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">2. Teams Are Assigned</h3>
              <p className="text-gray-600">
                Participants from Build are matched based on capability and interest. Teams are guided by moderators to ensure quality and accountability.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">3. Work Happens with Check-ins</h3>
              <p className="text-gray-600">
                Weekly or bi-weekly check-ins keep everyone aligned. A company engineer may review progress. Feedback flows both ways.
              </p>
            </div>
            <div>
              <h3 className="text-xl mb-3">4. Outcomes Emerge Naturally</h3>
              <p className="text-gray-600">
                Some projects lead to full-time offers. Others end with learning and goodwill. There's no pressure to hire—just transparency about what worked.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Compensation Structure */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 border-l-4 border-[#FC7802] pl-8"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">Compensation & Expectations</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Work through Partner may be unpaid or stipend-based, depending on the project scope and company.
            </p>
            <p>
              Typical stipend: <strong className="text-gray-900">~₹6,000/month</strong>
            </p>
            <p>
              This isn't exploitation—it's a structured learning environment. Participants are building skills, portfolios, and connections that wouldn't exist otherwise. Companies are providing real problems and feedback.
            </p>
            <p className="pt-4 border-t border-gray-200">
              <strong className="text-gray-900">Important:</strong> Hiring is optional, never obligated. Companies are free to offer full-time roles when they see fit—but there's no contract requiring it.
            </p>
          </div>
        </motion.section>

        {/* For Companies */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">Why Companies Partner with Prodalign</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl mb-3">Low Risk, High Signal</h3>
              <p className="text-gray-600">
                Evaluate talent through real work, not interviews. See how they think, collaborate, and deliver before making any commitments.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl mb-3">Access Untapped Talent</h3>
              <p className="text-gray-600">
                Discover capable individuals from Tier 2 & Tier 3 cities who wouldn't appear in traditional hiring pipelines.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl mb-3">Exploratory Work Gets Done</h3>
              <p className="text-gray-600">
                Those "nice-to-have" projects that never get prioritized? Partner teams can tackle them without pulling your core team away.
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl mb-3">Learning-First Intent</h3>
              <p className="text-gray-600">
                Everyone understands this is about growth, not just deliverables. The pressure is lower, but the commitment is real.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What This Isn't */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-gray-50 p-8 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl mb-6 text-[32px]">What Partner Isn't</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Not a traditional staffing agency</li>
            <li>• Not a guaranteed pipeline to full-time hires</li>
            <li>• Not a replacement for your core engineering team</li>
            <li>• Not a fast solution for urgent, mission-critical work</li>
          </ul>
          <p className="text-gray-600 mt-6 pt-6 border-t border-gray-200">
            Partner works best when companies approach it with patience, clarity, and a genuine interest in talent development—not just cheap labor.
          </p>
        </motion.section>

        {/* Example Use Cases */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl mb-8 text-[32px]">Example Partner Projects</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-200 pl-6">
              <p className="text-gray-600">
                <strong className="text-gray-900">Market Research:</strong> Analyze competitor features, user feedback trends, or regional market opportunities.
              </p>
            </div>
            <div className="border-l-4 border-gray-200 pl-6">
              <p className="text-gray-600">
                <strong className="text-gray-900">Internal Tools:</strong> Build dashboards, automation scripts, or workflow improvements for internal teams.
              </p>
            </div>
            <div className="border-l-4 border-gray-200 pl-6">
              <p className="text-gray-600">
                <strong className="text-gray-900">Content & Marketing:</strong> Create technical documentation, case studies, or early-stage content strategies.
              </p>
            </div>
            <div className="border-l-4 border-gray-200 pl-6">
              <p className="text-gray-600">
                <strong className="text-gray-900">Experimental Features:</strong> Prototype ideas that aren't core roadmap priorities but could add value if proven.
              </p>
            </div>
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
          <h2 className="text-3xl mb-6">Interested in Partnering?</h2>
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
