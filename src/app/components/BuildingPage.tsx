import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Compass, Shield, Users, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

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
          className="mb-16"
        >
          <h1 className="mb-4 text-4xl">Prodalign Board</h1>
          <p className="text-xl text-gray-500 mb-6">
            Guidance, structure, and experienced perspective for first-time founders.
          </p>
          
          <div className="max-w-3xl">
            <p className="text-gray-700">
              Board is designed for people who want to build companies thoughtfully—not rush into execution without clarity.
            </p>
          </div>
        </motion.div>

        {/* Quick Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-6 mb-24"
        >
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">🧭</div>
            <h3 className="text-xl mb-3">Advisory, not execution</h3>
            <p className="text-gray-600">
              Board connects you with experienced professionals who guide your thinking—not do the work for you.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl mb-3">Long-term focus</h3>
            <p className="text-gray-600">
              No accelerator timelines or demo days. Board helps you build something sustainable over time.
            </p>
          </div>
        </motion.div>

        {/* What is Board? */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">What is Board?</h2>
          
          <div className="space-y-4 text-gray-700 mb-8">
            <p>
              Prodalign Board is a long-term advisory program for young entrepreneurs who are early in their journey and need guidance before building.
            </p>
            <p>
              Many first-time founders jump straight into solutions—often without validating whether the problem is real, whether people will pay, or whether a technical solution even makes sense.
            </p>
            <p>
              Board exists to slow this down in the right way.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-10">
            <p className="text-gray-700 mb-4">
              You get access to experienced industry professionals who form a dedicated board around your idea. Their role is not to execute for you, but to help you:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">Understand the problem space deeply</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">Question assumptions early</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">Avoid expensive and irreversible mistakes</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">Build something sustainable over time</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-[#FC7802]/5 border-l-4 border-[#FC7802] p-6 rounded-r-lg">
            <p className="text-gray-700">
              This is not an accelerator.<br />
              There's no demo day, no pitch competition, and no rush to fundraising.
            </p>
          </div>
        </motion.section>

        {/* Who is Board for? */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">Who is Board for?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#FC7802]" />
                </div>
                <h3 className="text-xl">Eligibility</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-[#FC7802] mt-1">•</span>
                  <span>Students or first-time founders under 30</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#FC7802] mt-1">•</span>
                  <span>A business idea + basic market research + early business plan</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#FC7802] mt-1">•</span>
                  <span>Willing to pivot if a better direction emerges</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#FC7802] mt-1">•</span>
                  <span>Comfortable working through uncertainty over time</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl">Not sure yet?</h3>
              </div>
              <p className="text-gray-700 mb-4">
                If you're unsure whether you want to be a founder yet, <Link to="/studio" className="text-[#FC7802] hover:underline font-medium">Prodalign Studio</Link> is often the right place to start.
              </p>
              <div className="pt-4 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  Need help with a business plan? Reach out to Prodalign for <strong className="text-gray-900">45 minutes of guidance</strong> at no cost.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What Board Offers */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">What Board offers</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Experienced Guidance</h3>
              <p className="text-gray-600">
                Access to operators and founders who've seen similar problems before.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Structured Thinking</h3>
              <p className="text-gray-600">
                Help refining problem statements, business models, and early strategy.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Accountability</h3>
              <p className="text-gray-600">
                Regular checkpoints that force reflection, not rushed decisions.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Network Access</h3>
              <p className="text-gray-600">
                Introductions to people, tools, and services when relevant—not by default.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What Board Takes */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-gray-50 p-10 md:p-12 rounded-lg"
        >
          <h2 className="text-4xl mb-10">What Board takes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-4 text-gray-900">What you commit</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>Long-term focus on one problem space</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>~60–90 minutes of work per day</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>Openness to feedback and course correction</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>Serious intent to pursue the idea if it gains traction</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-4 text-gray-900">What Board takes</h3>
              <div className="space-y-4">
                <div className="bg-[#FC7802]/5 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">One-time commitment fee</div>
                  <div className="text-2xl text-gray-900">₹7,500</div>
                  <div className="text-sm text-gray-600 mt-1 italic">Refunded upon company incorporation</div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-3">Equity alignment:</div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Per board member</span>
                      <span className="font-medium">2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Held by Prodalign</span>
                      <span className="font-medium">0.5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-6 pt-6 border-t border-gray-200 italic">
            Board size is flexible (1–6 advisors). For most ideas, 1–3 advisors are sufficient.
          </p>
        </motion.section>

        {/* How Board Works */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-12">How Board works</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#FC7802] text-white flex items-center justify-center text-xl">
                  1
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl mb-2">Initial Conversation</h3>
                <p className="text-gray-600">
                  Intro call to understand your idea, motivation, and readiness.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#FC7802] text-white flex items-center justify-center text-xl">
                  2
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl mb-2">Refinement Phase</h3>
                <p className="text-gray-600">
                  A Prodalign mentor helps sharpen your problem statement, business thinking, and pitch.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#FC7802] text-white flex items-center justify-center text-xl">
                  3
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl mb-2">Final Review</h3>
                <p className="text-gray-600">
                  A structured pitch with documentation and a working roadmap.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#FC7802] text-white flex items-center justify-center text-xl">
                  4
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl mb-2">Board Formation</h3>
                <p className="text-gray-600">
                  Prodalign curates and onboards advisors aligned to your domain and challenges.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#FC7802] text-white flex items-center justify-center text-xl">
                  5
                </div>
              </div>
              <div className="flex-1 pt-1 bg-[#FC7802]/5 p-6 rounded-lg -ml-6 pl-12">
                <h3 className="text-xl mb-2">Guided Execution</h3>
                <p className="text-gray-600">
                  You work independently while receiving structured guidance over time.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Timeline / Pathways */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-white border-2 border-gray-200 p-10 md:p-12 rounded-lg"
        >
          <h2 className="text-4xl mb-8">Possible pathways</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">Early mentor alignment</div>
                <div className="text-sm text-gray-600">Weeks 1–4</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">Roadmap and validation phase</div>
                <div className="text-sm text-gray-600">Months 2–4</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">Board introduction</div>
                <div className="text-sm text-gray-600">Month 4–5</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">Periodic board meetings</div>
                <div className="text-sm text-gray-600">Over ~18 months</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">Company incorporation</div>
                <div className="text-sm text-gray-600">When readiness emerges (often mid-way)</div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-8 pt-8 border-t border-gray-200 italic">
            Pivots are expected. Incorporation is not rushed.
          </p>
        </motion.section>

        {/* Who Board is NOT for */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="border-2 border-gray-300 p-10 md:p-12 rounded-lg">
            <h2 className="text-4xl mb-8">Who Board is not for</h2>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                Prodalign Board may not be the right fit if:
              </p>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>You want the founder title more than the work</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>You need constant certainty and clear answers</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>You struggle staying with one problem long-term</span>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>You're looking for shortcuts, hype, or quick funding</span>
                </div>
              </div>

              <p className="text-gray-700 pt-6 border-t border-gray-200">
                Board rewards patience, obsession with a domain, and the ability to think clearly over time.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border-t-2 border-gray-200 pt-16"
        >
          <div className="max-w-3xl mx-auto mb-10">
            <h2 className="text-4xl mb-6">Building a company takes years—not weeks.</h2>
            <p className="text-xl text-gray-600 mb-4">
              Board doesn't compress time.
            </p>
            <p className="text-xl text-gray-600">
              It gives you structure so you don't waste it.
            </p>
          </div>
          
          <p className="text-gray-700 mb-8">
            If you're ready to think deeply, work patiently, and build with intent—we're open to a conversation.
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