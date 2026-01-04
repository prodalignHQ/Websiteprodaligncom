import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Compass,
  Users,
  RefreshCw,
  Layers,
  Heart,
  BookOpen,
  Target,
} from "lucide-react";

export function AboutPage() {
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
          <h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl">
            About Prodalign
          </h1>
          <p className="text-xl text-gray-500 mb-6">
            Helping students find their direction through real work.
          </p>

          <div className="max-w-3xl">
            <p className="text-gray-700">
              Prodalign exists for the phase of exploration - identifying and
              nurturing potential early, before people lock themselves into
              paths that don't fit.
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
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl mb-3">Engineering as a starting point</h3>
            <p className="text-gray-600">
              Many students choose engineering not from deep interest, but
              because it feels like a safe place to start. That isn't a failure.
              It's often how people find their way.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl mb-3">Medium to explore</h3>
            <p className="text-gray-600">
              Excellant designers, marketeers, salespersons, and founders began as
              engineering students. Engineering frequently becomes a medium to
              explore, not a destination.
            </p>
          </div>
        </motion.div>

        {/* Why Prodalign Exists */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl mb-8">Why Prodalign Exists</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-10 mb-8">
            <p className="text-xl text-gray-700 mb-6">
              India has thousands of engineering colleges and millions of
              students entering them every year. Many don't choose engineering
              because they have a deep interest in it. It feels like a safe
              place to start.
            </p>
            <div className="bg-[#FC7802]/5 border-l-4 border-[#FC7802] p-6 rounded-r-lg">
              <p className="text-gray-900 text-lg italic">
                Prodalign exists for this phase of exploration.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What We Do */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl mb-8">What We Do</h2>

          <div className="space-y-6 text-gray-700 mb-8">
            <p className="text-xl">
              Prodalign acts as a sidecar to formal education and helps students identify
              and nurture their potential early, before they lock themselves into
              paths that don't fit.
            </p>
            <p>
              We simulate a startup-like working environment within colleges,
              bringing together students with different interests and abilities
              to work on long-running, real-world problems.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <p className="text-gray-600 mb-4">Not short-lived mini-projects.</p>
            <p className="text-gray-600 mb-4">Not mock exercises.</p>
            <p className="text-gray-900 text-lg">
              But work that requires time, ownership, and sustained thinking.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <h3 className="text-xl mb-6 text-gray-900">
              Through this process, a few outcomes naturally emerge:
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  People with basic coding skills grow into building meaningful
                  solutions
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Some discover interests beyond coding and might pick up design, product,
                  marketing, content, sales, or operations
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Many realise what they <em>don't</em> want to do, early enough
                  to course-correct
                </span>
              </div>
            </div>
            <p className="text-gray-600 italic mt-6 pt-6 border-t border-gray-200">
              All of these outcomes are valid. Finding your direction early
              matters as much as mastering a skill.
            </p>
          </div>
        </motion.section>

        {/* Supporting Early Founders */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-[#FC7802]/5 p-10 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl mb-8">
            Supporting Early Founders
          </h2>

          <p className="text-gray-700 mb-6">
            A growing number of students in India are drawn to startups and
            entrepreneurship. Many want to build something of their own, but
            early enthusiasm often leads to committing too quickly to weak or
            poorly understood problem statements.
          </p>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-4">
              Prodalign helps identify individuals with founder potential and
              supports them in the early stages by:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Questioning whether a problem is worth solving
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Exploring non-technical or simpler solutions before building
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Introducing structure, discipline, and long-term thinking
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Providing access to experienced guidance and feedback
                </span>
              </div>
            </div>
          </div>

          <p className="text-center text-xl text-gray-900 mt-8 italic">
            The goal isn't speed. It's clarity.
          </p>
        </motion.section>

        {/* Our Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl mb-12">Our Philosophy</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Natural Inclinations</h3>
              <p className="text-gray-600 mb-4">
                Some people show early aptitude in specific areas. Most skills,
                however, can be learned with the right interest and intent.
              </p>
              <p className="text-gray-700 italic">
                Our goal is simple: help people discover what they're actually
                good at.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Depth Over Quantity</h3>
              <p className="text-gray-600 mb-4">
                We don't believe in collecting projects. You may work on one
                problem for months while others work on many.
              </p>
              <p className="text-gray-700 italic">
                Depth matters more than volume.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 p-8 rounded-lg md:col-span-2">
              <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Course Correction Is Normal</h3>
              <p className="text-gray-600">
                Not succeeding isn't failure. Discovering early that something
                isn't right for you is progress. Changing direction, letting go
                of a path, or redefining your goals is part of growth.
              </p>
              <p className="text-gray-700 italic mt-4">
                Prodalign treats course correction as learning and not a loss.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Values Grid */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#FC7802]" />
              </div>
              <h3 className="text-xl mb-3">Good People, No Competition</h3>
              <p className="text-gray-600 text-sm">
                Before outcomes or ambition, Prodalign focuses on building
                structure, focus, and discipline. We encourage humility and
                helpfulness, creating an environment where people grow by
                supporting one another.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#FC7802]" />
              </div>
              <h3 className="text-xl mb-3">Long-Term Thinking</h3>
              <p className="text-gray-600 text-sm">
                Short-term thinking is easy. Long-term thinking takes effort.
                Prodalign encourages sustained focus on a few meaningful
                problems. Expertise grows through patience and consistency.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[#FC7802]" />
              </div>
              <h3 className="text-xl mb-3">Learning to Learn</h3>
              <p className="text-gray-600 text-sm">
                Change is constant, and skills evolve quickly. Prodalign helps
                members learn how to learn and learn by doing - so they remain
                curious, adaptable, and capable. The goal isn't to reach a peak.
                It's to keep growing.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What We Aim For */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-white border-2 border-gray-200 p-10 md:p-12 rounded-lg"
        >
          <h2 className="text-3xl md:text-4xl mb-8">What We Aim For</h2>

          <p className="text-xl text-gray-700 mb-6">
            Not everyone will become a founder and that's okay.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">
              But everyone should leave with:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802]" />
                <span className="text-gray-700">Better judgment</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802]" />
                <span className="text-gray-700">Clearer self-awareness</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802]" />
                <span className="text-gray-700">Stronger work habits</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802]" />
                <span className="text-gray-700">
                  The confidence to contribute meaningfully
                </span>
              </div>
            </div>
          </div>

          <div className="text-center space-y-2 pt-6 border-t border-gray-200">
            <p className="text-gray-700">Some will build great products.</p>
            <p className="text-gray-700">Some will build strong careers.</p>
            <p className="text-gray-700">Some will build companies.</p>
          </div>

          <p className="text-center text-xl text-gray-900 italic mt-8">
            Prodalign exists to make that discovery process thoughtful,
            grounded, and honest.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border-t-2 border-gray-200 pt-16"
        >
          <h2 className="text-3xl md:text-4xl mb-6">Want to learn more?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you're exploring your path, looking to mentor, or want to
            collaborate; we'd love to hear from you.
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
