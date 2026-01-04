import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Code,
  Users,
  Target,
  Lightbulb,
  XCircle,
} from "lucide-react";

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
          className="mb-16"
        >
          <h1 className="mb-4 text-4xl">Prodalign Build</h1>
          <p className="text-xl text-gray-500 mb-6">
            The foundation of the Prodalign ecosystem
          </p>

          <div className="max-w-3xl">
            <p className="text-gray-700">
              Build exists to help students move beyond
              micro-projects and develop the depth, context, and
              patience that real work requires.
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
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl mb-3">Not a classroom</h3>
            <p className="text-gray-600">
              Build operates like a startup. You work on one or
              two problem statements and stay with them long
              enough to understand the domain.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl mb-3">Sustainable pace</h3>
            <p className="text-gray-600">
              ~45 minutes on weekdays, ~90 minutes on Saturdays.
              Consistency over intensity. Real growth takes
              time.
            </p>
          </div>
        </motion.div>

        {/* What is Prodalign Build? */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">
            What is Prodalign Build?
          </h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-10 mb-8">
            <p className="text-xl text-gray-700 mb-6">
              A program where students work together in small
              teams to build real products over an extended
              period of time.
            </p>
            <p className="text-gray-600 mb-6">
              The focus is not on finishing fast—it's on
              learning how real work unfolds:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  How problems evolve
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  How decisions compound
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  How teams coordinate
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  How progress is made despite ambiguity
                </span>
              </div>
            </div>
          </div>

          <div className="bg-[#FC7802]/5 border-l-4 border-[#FC7802] p-6 rounded-r-lg">
            <p className="text-gray-700">
              While primarily designed for students interested
              in software engineering, Build intentionally
              exposes participants to other roles—product
              design, product management, sales, marketing, and
              content.
            </p>
            <p className="text-gray-600 mt-3 italic">
              Not because you need to master everything, but
              because real companies don't operate in silos.
            </p>
          </div>
        </motion.section>

        {/* Who is it for? */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">
            Who is Prodalign Build for?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2 bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 text-sm rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#FC7802]" />
                  Primary audience
                </span>
              </div>
              <h3 className="text-2xl mb-3">
                Students in their second year of learning to
                code
              </h3>
              <p className="text-gray-600">
                You're past the basics but want to go beyond
                tutorials and short projects. You're ready for
                something with more depth.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 text-sm rounded-full">
                  Sometimes
                </span>
              </div>
              <h3 className="text-xl mb-3">
                Early-career explorers
              </h3>
              <p className="text-gray-600 text-sm">
                In some cases, the program extends to freshers
                exploring opportunities. Reach out to learn
                more.
              </p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-3 py-8">
            <p className="text-xl text-gray-700">
              You don't need to be exceptional.
            </p>
            <p className="text-xl text-gray-700">
              You don't need to be "startup-ready."
            </p>
            <p className="text-2xl text-gray-900 pt-4">
              You just need to be curious enough to stick with a
              problem longer than most people do.
            </p>
          </div>
        </motion.section>

        {/* What we expect from you */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">
            What we expect from you
          </h2>

          <div className="space-y-6">
            {/* Technical comfort */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">
                    Basic technical comfort
                  </h3>
                  <p className="text-gray-600">
                    Very basic programming concepts in{" "}
                    <strong className="text-gray-900">
                      any language
                    </strong>
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 ml-16">
                <div className="text-gray-600">
                  ✓ Writing a loop
                </div>
                <div className="text-gray-600">
                  ✓ Using conditional logic
                </div>
                <div className="text-gray-600">
                  ✓ Simple data structures (arrays, maps)
                </div>
              </div>
              <p className="text-gray-500 mt-4 ml-16 italic">
                That's enough to start.
              </p>
            </div>

            {/* Time commitment */}
            <div className="bg-[#FC7802]/5 border-2 border-[#FC7802]/20 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#FC7802]" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">
                    Time commitment
                  </h3>
                  <p className="text-gray-600">
                    This structure is intentional. We're
                    building consistency, rhythm, and ownership.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ml-16">
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-3xl text-[#FC7802] mb-2">
                    45min
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    Weekdays
                  </div>
                  <p className="text-gray-600 text-sm">
                    Daily focused sessions
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <div className="text-3xl text-[#FC7802] mb-2">
                    90min
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    Saturdays
                  </div>
                  <p className="text-gray-600 text-sm">
                    Deeper work + mentor sync
                  </p>
                </div>
              </div>
            </div>

            {/* Mindset */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">Mindset</h3>
                  <p className="text-gray-600">
                    You don't need confidence. You don't need
                    certainty.
                  </p>
                </div>
              </div>
              <div className="ml-16 space-y-3">
                <p className="text-gray-700">
                  What you do need:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FC7802]" />
                    <span className="text-gray-700">
                      Humility
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FC7802]" />
                    <span className="text-gray-700">
                      Willingness to learn
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#FC7802]" />
                    <span className="text-gray-700">
                      Comfort with uncertainty
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 italic pt-4">
                  If you're unsure whether you're "good
                  enough"—that's often a good reason to try.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How it works */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-12">
            How Prodalign Build works
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#FC7802] text-white flex items-center justify-center text-xl">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-3">
                  Small, intentional teams
                </h3>
                <p className="text-gray-700 mb-4">
                  Usually no more than six people. Think of it
                  as a focused working group, not a cohort.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-3">
                    Teams are intentionally mixed:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">
                        Execution-focused contributors
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">
                        Problem-solving oriented thinkers
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">
                        Vision-oriented leaders
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mt-4 italic">
                    This mirrors how real teams function.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#FC7802] text-white flex items-center justify-center text-xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-3">
                  Choosing what to work on
                </h3>
                <p className="text-gray-700 mb-4">
                  Prodalign works with your team to identify one
                  or two problem statements.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">
                      Source
                    </div>
                    <div className="text-gray-700">
                      Prodalign's exploration
                    </div>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">
                      Source
                    </div>
                    <div className="text-gray-700">
                      Partner companies
                    </div>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">
                      Source
                    </div>
                    <div className="text-gray-700">
                      Team's curiosity
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 italic text-sm">
                  You don't need a fully-formed idea. That's
                  part of the process.
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
              <div className="flex-1">
                <h3 className="text-2xl mb-3">
                  Before building begins
                </h3>
                <p className="text-gray-700 mb-4">
                  Before any code is written, mentors spend time
                  with the team to set direction.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Clarify what problem is actually being
                      solved
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Break it down into achievable milestones
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Understand individual interests and
                      learning goals
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  This pre-work prevents busywork and helps
                  everyone start aligned.
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
              <div className="flex-1 bg-[#FC7802]/5 p-8 rounded-lg border-2 border-[#FC7802]/20">
                <h3 className="text-2xl mb-3">
                  Building, consistently
                </h3>
                <p className="text-gray-700 mb-6">
                  Once direction is clear, the team begins work.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-gray-900 mb-1">
                      Daily sessions
                    </div>
                    <div className="text-sm text-gray-600">
                      45–60 min focused work + quick sync
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-gray-900 mb-1">
                      Weekly check-ins
                    </div>
                    <div className="text-sm text-gray-600">
                      Saturday mentor sessions
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg md:col-span-2">
                    <div className="text-gray-900 mb-1">
                      Ongoing support
                    </div>
                    <div className="text-sm text-gray-600">
                      Slack/messaging for urgent questions
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-6 text-center italic">
                  The goal is steady progress—not pressure.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What you gain */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-gray-50 p-10 md:p-12 rounded-lg"
        >
          <h2 className="text-4xl mb-8">
            What you gain from Build
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl mb-4 text-gray-900">
                Over time, participants:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Develop depth in a problem space
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Understand how teams actually ship work
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Learn where their strengths naturally lie
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    Gain exposure beyond just code
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-4 text-gray-900">
                Possible paths forward:
              </h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-gray-700">
                    Continue on longer problem statements
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-gray-700">
                    Transition to paid/stipend opportunities
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-gray-700">
                    Explore founder-oriented paths
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xl text-gray-700 italic pt-6 border-t border-gray-200">
            No outcome is forced. Growth reveals direction.
          </p>
        </motion.section>

        {/* This isn't for everyone */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="border-2 border-gray-300 p-10 md:p-12 rounded-lg">
            <h2 className="text-4xl mb-8">
              This isn't for everyone
            </h2>

            <div className="space-y-8">
              <div>
                <p className="text-xl text-gray-700 mb-4">
                  Prodalign Build isn't a shortcut. It doesn't
                  promise guaranteed jobs or instant results.
                </p>
              </div>

              <div className="max-w-2xl">
                <p className="text-gray-600 mb-4">
                  If you're looking for:
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Quick certificates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>Surface-level projects</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span>External validation without effort</span>
                  </div>
                </div>
                <p className="text-gray-700 mt-6">
                  This likely isn't the right fit.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-xl text-gray-900 max-w-3xl">
                  But if you're willing to show up consistently,
                  learn through practice, and grow over
                  time—Build gives you a foundation most
                  students never get.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border-t-2 border-gray-200 pt-16"
        >
          <h2 className="text-4xl mb-6">Ready to explore?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you're a student trying to understand real
            work, a company exploring collaboration, or someone
            building long-term—we're open to a conversation.
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