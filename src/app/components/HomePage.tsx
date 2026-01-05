import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Layers, Users, Lightbulb } from "lucide-react";

export function HomePage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleUseCaseClick = (path: string) => (e: React.MouseEvent) => {
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
          className="max-w-7xl mx-auto text-center"
        >
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-48 h-48 relative"
            >
              <img
                src="/prodalign-ship.png"
                alt="Journey"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            {/* Helping individuals build structure to create meaningful products. */}
            {/* Potential <span className="">⇒</span> Products */}
            Real Capability, <span className="whitespace-nowrap">Infinite Outcomes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-md lg:text-lg mb-6 max-w-3xl mx-auto"
          >
            {/* text-xl text-gray-600 max-w-3xl mx-auto */}
            Prodalign helps people discover what they’re good at, build real
            capability, and in some cases, start companies.
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
            <h2 className="text-3xl md:text-4xl mb-6">
              People don't start at the same place. And that's okay.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are working states, not identities. People move between
              them. No state is better than another.
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
                title: "Systems-Focused",
                desc: "People who enjoy working on defined problems and improving systems over time.",
              },
              {
                icon: Lightbulb,
                title: "Outcome-Focused",
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
            <h2 className="text-3xl md:text-4xl mb-6">
              One System. Three Layers.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prodalign is a single ecosystem with multiple layers. Everyone
              enters through the same foundation.
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
                <span className="text-2xl text-[#FC7802]">01</span>
              </div>
              <div>
                <h3 className="text-3xl mb-3">Prodalign Studio</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Studio operates like a mock startup where participants
                  function as employees, working on long-running, real-world
                  problem statements
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Structure</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Teams are intentionally mixed (leadership + task-oriented)
                  </li>
                  <li>• Work based on long-running problem statements</li>
                  <li>• Weekly guidance from moderators and mentors</li>
                  <li>• Exposure to engineering and non-engineering roles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Commitment</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 45 minutes on weekdays</li>
                  <li>• 1.5 hours on Saturdays</li>
                  <li>• Real work, real feedback, real growth</li>
                  <li>• Early redirection when needed</li>
                </ul>
              </div>
            </div>

            <Link
              to="/studio"
              onClick={handleUseCaseClick("/studio")}
              className="inline-flex items-center gap-2 text-[#FC7802] hover:gap-3 transition-all"
            >
              Learn how Prodalign Studio works
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
                1st-Time Founders, &lt; 30y
              </span>
            </div>
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#FC7802]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl text-[#FC7802]">02</span>
              </div>
              <div>
                <h3 className="text-3xl mb-3">Prodalign Board</h3>
                <p className="text-gray-600 text-lg mb-6">
                  For individuals that have a business idea and want to build
                  it.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Eligibility</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Students or first-time founders under 30</li>
                  <li>
                    • A business idea + basic market research + early business
                    plan
                  </li>
                  <li>• Willing to pivot if a better direction emerges</li>
                  <li>• Comfortable working through uncertainty over time</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Structure</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 1–6 board members per venture</li>
                  <li>• Each member receives 2% equity</li>
                  <li>• Prodalign retains 0.5% equity</li>
                  <li>• ~18 months of advisory support</li>
                </ul>
              </div>
            </div>

            <Link
              to="/board"
              onClick={handleUseCaseClick("/board")}
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
                <span className="text-2xl text-[#FC7802]">03</span>
              </div>
              <div>
                <h3 className="text-3xl mb-3">Prodalign Partner</h3>
                <p className="text-gray-600 text-lg mb-6">
                  A structured way for companies to collaborate with student
                  teams. Guided, mentored, and low risk.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">What It Is</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mentored collaboration; Not Outsourcing</li>
                  <li>• Prodalign forms, trains, and oversees teams</li>
                  <li>• Companies provide problems, not management</li>
                  <li>• Ideal for exploratory, non-critical work</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Expectations</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Learning-first, not speed-first</li>
                  <li>• ~90 min/month from senior engineers</li>
                  <li>• Work may be unpaid or stipend-based</li>
                  <li>• Hiring is optional, never required</li>
                </ul>
              </div>
            </div>

            <Link
              to="/partner"
              onClick={handleUseCaseClick("/partner")}
              className="inline-flex items-center gap-2 text-[#FC7802] hover:gap-3 transition-all"
            >
              Partner with Prodalign
              <ArrowRight className="w-5 h-5" />
            </Link>
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
          <h2 className="text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're exploring, hiring, or building, we'd love to talk.
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
    </div >
  );
}
