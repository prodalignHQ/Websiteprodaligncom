import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import imgShip from "figma:asset/ed4ca6a6327363eabfafb2082120fc537cbad4d3.png";

export function HomePage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
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
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-48 h-48 relative"
            >
              <img src={imgShip} alt="Journey" className="w-full h-full object-contain" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-6"
          >
            Unlocking Potential
            <br />
            From Anywhere
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Bridging the gap between raw talent and real opportunity.
            We don't wait for polish—we create it through work, mentorship, and structure.
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

      {/* Philosophy Section */}
      <section className="py-24 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">One Story, Many Outcomes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prodalign doesn't separate talent, companies, or builders. All three grow together through real work, real learning, and real opportunity.
            </p>
          </motion.div>

          {/* Interlocking Cards */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              { title: "Potential", desc: "We identify what's possible, not what's already perfect" },
              { title: "Practice", desc: "Real work creates real skills—faster than any classroom" },
              { title: "Progress", desc: "Every connection strengthens the entire ecosystem" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-[#FC7802] transition-colors"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-[#FC7802]/10 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#FC7802]" />
                </div>
                <h3 className="text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Products Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl mb-6">Three Products. One Alignment.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different journeys. One shared philosophy — learning, hiring, and building through real work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Prodalign Build",
                subtitle: "For students and early-career individuals who want to build real skills by working on real problems.",
                description: "Hands-on projects, structured mentorship, and real-world exposure designed to turn potential into confidence.",
                link: "/training"
              },
              {
                title: "Prodalign Partner",
                subtitle: "For companies looking to hire talent through trust, collaboration, and real-world evaluation.",
                description: "Work with talent on a contract basis, assess performance in practice, and convert to full-time when aligned.",
                link: "/hiring"
              },
              {
                title: "Prodalign Board",
                subtitle: "For future founders, operators, and leaders building judgment through real execution.",
                description: "Learn how to think, decide, and lead by working inside real products and businesses.",
                link: "/building"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="group"
              >
                <Link to={useCase.link} className="block h-full" onClick={handleUseCaseClick(useCase.link)}>
                  <div className="h-full p-8 border-2 border-gray-200 rounded-lg hover:border-[#FC7802] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-2xl mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {useCase.subtitle}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[#FC7802] group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Prodalign Exists */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-20"
          >
            Why Prodalign Exists
          </motion.h2>

          <div className="space-y-16">
            {[
              { step: "01", title: "Discover Potential", desc: "We identify raw talent based on curiosity, commitment, and capability—not credentials" },
              { step: "02", title: "Work Together", desc: "Real projects with real companies create real growth for everyone involved" },
              { step: "03", title: "Learn by Doing", desc: "Mentorship, structure, and feedback transform potential into proven skill" },
              { step: "04", title: "Grow Into Roles", desc: "What starts as a contract can become a career, a venture, or a new chapter" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="flex gap-8 items-start"
              >
                <div className="text-6xl font-light text-[#FC7802]/20 min-w-[100px]">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-[130px] top-0 w-px h-full bg-gradient-to-b from-[#FC7802]/20 via-[#FC7802]/50 to-[#FC7802]/20 origin-top"
            style={{ marginTop: '2rem' }}
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <blockquote className="text-2xl md:text-3xl italic text-gray-700 mb-8">
              "The best way to predict the future is to create it through the work we do today."
            </blockquote>
            <p className="text-gray-500">— Prodalign Philosophy</p>
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
            Whether you're exploring, hiring, or building—we'd love to talk.
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