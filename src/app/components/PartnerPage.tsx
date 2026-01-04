import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Users,
  Clock,
  FileText,
  CheckCircle,
  XCircle,
  TrendingUp,
  Code,
  Search,
  Wrench,
  Shield,
} from "lucide-react";

export function PartnerPage() {
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
          <h1 className="mb-4 text-4xl">Prodalign Partner</h1>
          <p className="text-xl text-gray-500 mb-6">
            A structured way for companies to collaborate with student
            teams—guided, mentored, and low risk
          </p>

          <div className="max-w-3xl">
            <p className="text-gray-700">
              Partner connects real company problems with developing
              talent, without forcing hiring or compromising quality.
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
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl mb-3">Not outsourcing</h3>
            <p className="text-gray-600">
              This is a mentored collaboration model. Prodalign forms,
              trains, and oversees student teams—companies don't manage
              them directly.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl mb-3">Learning-first</h3>
            <p className="text-gray-600">
              Ideal for exploratory, non-critical work. Companies get
              meaningful output. Students gain real-world discipline.
              Hiring remains optional.
            </p>
          </div>
        </motion.div>

        {/* What is a Partner? */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">What is a Prodalign Partner?</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-10 mb-8">
            <p className="text-xl text-gray-700 mb-6">
              Prodalign Partner is a collaboration model where companies
              offload <strong>non-critical, exploratory, or long-term
              work</strong> to student teams—without treating it like
              outsourcing.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                Prodalign forms, trains, and mentors a dedicated team of
                students within a college. This team works as an{" "}
                <strong>external engineering group</strong>, supported
                closely by Prodalign mentors to ensure structure,
                learning, and delivery.
              </p>
              <p>
                Companies don't manage students directly.{" "}
                <strong>Prodalign does.</strong>
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl mb-6 text-gray-900">The result:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Companies get meaningful work done at low risk
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Students gain real-world exposure and discipline
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Hiring remains optional, not assumed
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Eligibility */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">
            Eligibility to become a Partner
          </h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-10 mb-6">
            <p className="text-gray-700 mb-6">
              Prodalign Partner is designed for{" "}
              <strong className="text-gray-900">
                serious, product-oriented companies.
              </strong>
            </p>
            <p className="text-gray-600 text-sm">
              To be eligible, a company should meet the following
              criteria:
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-[#FC7802] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">
                  Minimum 15+ full-time employees
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-[#FC7802] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">
                  Registered Pvt. Ltd. company or LLP
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-[#FC7802] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">
                  At least 1 year since incorporation
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-[#FC7802] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">
                  Product-driven (not services-only)
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-[#FC7802] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">
                  Has senior technical leadership available for
                  periodic review
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-[#FC7802] mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-gray-900 mb-1">
                  Comfortable with a learning-first collaboration model
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 italic mt-6 pt-6 border-t border-gray-200">
            Prodalign is selective by design. Not every company is a good
            fit—and that's intentional.
          </p>
        </motion.section>

        {/* What a Partner Gives */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">What a Partner needs to give</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Problem Definition */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">Problem Definition</h3>
                </div>
              </div>
              <div className="ml-16 space-y-3">
                <p className="text-gray-600 mb-4">
                  Partners are expected to provide:
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">→</span>
                    <span className="text-gray-700">
                      A clear problem statement or requirement
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">→</span>
                    <span className="text-gray-700">
                      Context around why the problem matters
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">→</span>
                    <span className="text-gray-700">
                      Constraints, expectations, and success criteria
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic pt-4">
                  These should be important but not mission-critical
                  problems.
                </p>
              </div>
            </div>

            {/* Time Commitment */}
            <div className="bg-[#FC7802]/5 border-2 border-[#FC7802]/20 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#FC7802]" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">Time Commitment</h3>
                </div>
              </div>
              <div className="ml-16 space-y-3">
                <p className="text-gray-600 mb-4">
                  Partners are expected to commit:
                </p>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-2xl text-[#FC7802] mb-1">
                    ~90 min/month
                  </div>
                  <div className="text-sm text-gray-600">
                    Preferably from senior engineers (SDE-IV+),
                    engineering managers, or tech leads
                  </div>
                </div>
                <p className="text-gray-700 mb-2">This time is used for:</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <div>• Reviews</div>
                  <div>• Directional feedback</div>
                  <div>• Course correction</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What a Partner Gets */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-gray-50 p-10 md:p-12 rounded-lg"
        >
          <h2 className="text-4xl mb-10">What a Partner gets</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Dedicated Team</h3>
              <p className="text-gray-600">
                A focused team of 2–6 engineers working on your problem
                statement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Mentored Execution</h3>
              <p className="text-gray-600">
                Prodalign mentors oversee training, structure, and
                delivery quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Code & Output Ownership</h3>
              <p className="text-gray-600">
                Complete handover of code, documentation, and outputs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="text-xl mb-3">Hiring Optionality</h3>
              <p className="text-gray-600">
                Evaluate talent with hands-on domain experience. Hiring
                is possible—but never compulsory.
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-center mt-8 pt-8 border-t border-gray-200 italic">
            This is not trial hiring. It's informed collaboration.
          </p>
        </motion.section>

        {/* Compensation */}
        {/* <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">Compensation & Expectations</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 md:p-10">
            <div className="space-y-4 text-gray-700">
              <p>Work under Prodalign Partner may be:</p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-900">Unpaid, or</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-900">
                    Stipend-based depending on scope
                  </div>
                </div>
              </div>

              <div className="bg-[#FC7802]/5 p-6 rounded-lg border border-[#FC7802]/20">
                <div className="text-sm text-gray-600 mb-1">
                  Typical stipend
                </div>
                <div className="text-2xl text-gray-900">
                  ~₹6,000/month
                </div>
              </div>

              <p className="pt-4">
                This model exists to support learning—not to replace
                full-time roles or reduce company costs.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mt-6">
                <p className="text-gray-700 mb-3">
                  Participants are compensated with:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <span className="text-gray-700">Real experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <span className="text-gray-700">Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <span className="text-gray-700">Exposure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <span className="text-gray-700">
                      Optional hiring opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-6 italic">
            Transparency is mandatory. Exploitation is not tolerated.
          </p>
        </motion.section> */}

        {/* Who Partner is NOT for */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl mb-8">Who Partner is not for</h2>

          <div className="bg-gray-50 p-8 md:p-10 rounded-lg">
            <p className="text-gray-700 mb-6">
              Prodalign Partner is <strong>not</strong> the right fit for
              companies that:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Need immediate delivery for mission-critical work
                </span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Are looking for a staffing or outsourcing agency
                </span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  Want to hand off work and disengage
                </span>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  View this primarily as a cost-cutting exercise
                </span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-700 mb-3">
                Partner works best when companies value:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FC7802]" />
                  <span className="text-gray-700">Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FC7802]" />
                  <span className="text-gray-700">Patience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FC7802]" />
                  <span className="text-gray-700">
                    Long-term talent development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Companies Choose Prodalign */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 bg-gray-50 p-10 md:p-12 rounded-lg"
        >
          <h2 className="text-4xl mb-8">
            Why companies choose Prodalign
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-700">
                  Evaluate talent through real work, not interviews
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-700">
                  Access capable students outside traditional pipelines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-700">
                  Get exploratory work done without disrupting core teams
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-3 h-3 rounded-full bg-[#FC7802] mt-2 flex-shrink-0" />
              <div>
                <p className="text-gray-700">
                  Contribute meaningfully to talent development
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border-t border-gray-200 pt-12"
        >
          <h2 className="text-3xl mb-4">
            Prodalign Partner isn't about speed or scale.
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            It's about building trust—slowly and deliberately. If your
            company values thoughtful execution and long-term talent
            growth, we're open to a conversation.
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
