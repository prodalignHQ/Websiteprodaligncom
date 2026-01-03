import { motion } from 'motion/react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-24 px-6 lg:px-12 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8">
            We Believe in
            <br />
            Untapped Potential
          </h1>
          <div className="w-24 h-1 bg-[#FC7802]" />
        </motion.div>

        {/* Story Sections */}
        <div className="space-y-16">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">Why We Exist</h2>
            <p className="text-xl text-gray-600 mb-4">
              Talent isn't limited to metropolitan hubs or prestigious institutions. It exists everywhere—in Tier 2 and Tier 3 cities, in people who've never had access to the right opportunities, in individuals who are hungry to learn but lack the platform.
            </p>
            <p className="text-xl text-gray-600">
              Prodalign exists to identify this potential and give it the right push through real work, structured mentorship, and clear pathways to growth.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="border-l-4 border-[#FC7802] pl-8"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Our Philosophy</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                <strong className="text-gray-900">Identify potential, not polish.</strong>
                <br />
                We look for curiosity, commitment, and capability—not credentials.
              </p>
              <p>
                <strong className="text-gray-900">Real work creates real skills.</strong>
                <br />
                Classroom learning has its place, but nothing beats hands-on experience with mentorship.
              </p>
              <p>
                <strong className="text-gray-900">Growth is mutual.</strong>
                <br />
                When talent grows, companies benefit. When companies invest, talent thrives. When both succeed, new ventures emerge.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">Long-Term Thinking</h2>
            <p className="text-xl text-gray-600 mb-4">
              We're not building a transactional marketplace. We're building an ecosystem where:
            </p>
            <ul className="space-y-4 text-lg text-gray-600 ml-6">
              <li className="flex gap-3">
                <span className="text-[#FC7802] mt-1">•</span>
                <span>Individuals discover their strengths through real-world challenges</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FC7802] mt-1">•</span>
                <span>Companies access reliable, future-ready talent before committing full-time</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FC7802] mt-1">•</span>
                <span>The next generation of builders, operators, and founders emerges organically</span>
              </li>
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-12 rounded-lg"
          >
            <h2 className="text-3xl md:text-4xl mb-6">What We're Not</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>We're not a quick hiring fix.</p>
              <p>We're not a bootcamp that promises job placement.</p>
              <p>We're not a staffing agency focused on filling roles fast.</p>
              <p className="pt-4 border-t border-gray-200">
                <strong className="text-gray-900">We're an alignment layer</strong>—connecting potential with opportunity, work with growth, and today's talent with tomorrow's leaders.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center pt-12"
          >
            <div className="inline-block">
              <div className="w-16 h-16 rounded-full bg-[#FC7802]/10 flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 rounded-full bg-[#FC7802]" />
              </div>
              <h2 className="text-3xl md:text-4xl mb-4">Our Commitment</h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                To build thoughtfully, work credibly, and create opportunities that matter—for individuals, companies, and the ecosystem at large.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
