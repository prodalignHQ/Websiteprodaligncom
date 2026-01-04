import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Layers,
  Users,
  Lightbulb,
} from "lucide-react";
import imgShip from "figma:asset/ed4ca6a6327363eabfafb2082120fc537cbad4d3.png";

export function HomePage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleUseCaseClick =
    (path: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      const scrollY = window.scrollY;
      navigate(path, { state: { scrollY } });
    };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-48 h-48 relative"
            >
              <img
                src={imgShip}
                alt="Journey"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Talent exists everywhere.
            <br />
            Structure doesn't.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Prodalign builds structure around raw talent—turning
            individuals into teams, teams into operators, and
            operators into founders.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FC7802] text-white rounded-md hover:bg-[#E56D02] transition-all hover:gap-3"
          >
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Animated lines/grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute inset-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FC7802] to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FC7802] to-transparent" />
        </motion.div>
      </section>

      {/* Capability States Section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              People don't start at the same place. And that's
              okay.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are working states, not identities. People
              move between them. No state is better than
              another.
            </p>
          </motion.div>

          {/* Capability States */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Execution-Focused",
                desc: "People who currently work best with clear direction, structure, and defined tasks.",
              },
              {
                icon: Users,
                title: "Problem-Solving Oriented",
                desc: "People who enjoy working on defined problems and improving systems over time.",
              },
              {
                icon: Lightbulb,
                title: "Vision-Oriented",
                desc: "People who naturally think in terms of products, outcomes, and long-term direction.",
              },
            ].map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                }}
                className="bg-white p-8 rounded-lg border border-gray-200"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <state.icon className="w-6 h-6 text-gray-700" />
                </div>
                <h3 className="text-2xl mb-3">{state.title}</h3>
                <p className="text-gray-600">{state.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Prodalign Works - Layered System */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              One System. Three Layers.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prodalign is a single ecosystem with progressive
              layers—not parallel choices. Everyone enters
              through the same foundation.
            </p>
          </motion.div>

          {/* Layer 1: Build (Foundation) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 bg-white border-2 border-gray-200 rounded-lg p-8 md:p-12"
          >
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#FC7802] shadow-[0_0_4px_rgba(252,120,2,0.6)]" />
                Ideal for students in colleges
              </span>
            </div>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#FC7802]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl text-[#FC7802]">
                  01
                </span>
              </div>
              <div>
                <h3 className="text-3xl mb-3">
                  Prodalign Build
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  The foundation of everything. Build operates
                  like a mock startup where participants
                  function as employees.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">
                  Structure
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Teams are intentionally mixed (leadership
                    + task-oriented)
                  </li>
                  <li>
                    • Work based on long-running problem
                    statements
                  </li>
                  <li>
                    • Weekly guidance from moderators and
                    mentors
                  </li>
                  <li>
                    • Exposure to engineering and
                    non-engineering roles
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Commitment
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• ~45 minutes on weekdays</li>
                  <li>• ~1.5 hours on Saturdays</li>
                  <li>
                    • Real work, real feedback, real growth
                  </li>
                  <li>• Early redirection when needed</li>
                </ul>
              </div>
            </div>

            <Link
              to="/training"
              onClick={handleUseCaseClick("/training")}
              className="inline-flex items-center gap-2 text-[#FC7802] hover:gap-3 transition-all"
            >
              Learn how Prodalign Build works
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Layer 2: Board */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 bg-white border-2 border-gray-200 rounded-lg p-8 md:p-12"
          >
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#FC7802] shadow-[0_0_4px_rgba(252,120,2,0.6)]" />
                1st-Time Founders, &lt; 28y
              </span>
            </div>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#FC7802]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl text-[#FC7802]">
                  02
                </span>
              </div>
              <div>
                <h3 className="text-3xl mb-3">
                  Prodalign Board
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Selective and aspirational. For individuals
                  showing strong vision and founder potential.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">
                  Eligibility
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• A business idea, OR</li>
                  <li>• A draft business plan, OR</li>
                  <li>• Market research, OR</li>
                  <li>
                    • Openness to work on a Prodalign-assigned
                    problem
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Structure
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 2–6 board members per venture</li>
                  <li>• Each member receives 1.5% equity</li>
                  <li>• Prodalign retains 0.75% equity</li>
                  <li>
                    • 12-month access, up to 6 board meetings
                  </li>
                </ul>
              </div>
            </div>

            <Link
              to="/building"
              onClick={handleUseCaseClick("/building")}
              className="inline-flex items-center gap-2 text-[#FC7802] hover:gap-3 transition-all"
            >
              Understand the Board program
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Layer 3: Partner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-12"
          >
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#FC7802] shadow-[0_0_4px_rgba(252,120,2,0.6)]" />
                For companies
              </span>
            </div>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#FC7802]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl text-[#FC7802]">
                  03
                </span>
              </div>
              <div>
                <h3 className="text-3xl mb-3">
                  Prodalign Partner
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Partner provides real-world problem statements
                  from companies. This is where learning meets
                  practice.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">
                  How It Works
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Companies submit non-critical or
                    exploratory tasks
                  </li>
                  <li>
                    • Teams work with weekly or bi-weekly
                    check-ins
                  </li>
                  <li>
                    • Company engineers may review progress
                  </li>
                  <li>
                    • Learning-first intent, low risk for
                    companies
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Compensation
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Work may be unpaid or stipend-based</li>
                  <li>• Typical stipend: ~₹6,000/month</li>
                  <li>• Hiring is optional, never obligated</li>
                  <li>
                    • High signal for talent, low cost for
                    companies
                  </li>
                </ul>
              </div>
            </div>

            <Link
              to="/hiring"
              onClick={handleUseCaseClick("/hiring")}
              className="inline-flex items-center gap-2 text-[#FC7802] hover:gap-3 transition-all"
            >
              Partner with Prodalign
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl mb-8">
              The Ecosystem Outcome
            </h2>
            <div className="space-y-4 text-xl text-gray-600">
              <p>Some people grow into strong engineers.</p>
              <p>Some grow into leaders.</p>
              <p>A few grow into founders.</p>
            </div>
            <p className="text-2xl text-gray-900 pt-8">
              Prodalign exists to support all of them—without
              forcing outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 lg:px-12 bg-[#FC7802] text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're exploring, hiring, or building—we'd
            love to talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#FC7802] rounded-md hover:bg-gray-100 transition-all hover:gap-3"
          >
            Let's Talk
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}