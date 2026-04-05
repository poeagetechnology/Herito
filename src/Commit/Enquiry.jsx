import React from 'react'
import { motion } from 'framer-motion'

export default function Enquiry() {
  return (
    <main className="bg-[#f5f3f8] text-[#5f5b66]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-semibold text-[#2b133d]"
        >
          Enquiry
        </motion.h1>
        <p className="mt-6 max-w-2xl mx-auto text-[#7a7382] text-lg">
          Connect with us for partnerships, product enquiries, or business opportunities.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-32 grid lg:grid-cols-2 gap-20">

        {/* LEFT – TRUST & INFO */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="block text-xs tracking-[0.3em] uppercase text-[#6a1b9a] mb-4">
            Partnerships
          </span>

          <h2 className="text-3xl font-semibold text-[#2b133d] mb-8">
            Let’s Work Together
          </h2>

          <p className="text-[15px] leading-relaxed mb-8">
            Herito Wellness collaborates with distributors, retailers, corporate
            partners, fitness institutions, and healthcare-focused organizations.
            We welcome enquiries aligned with quality, innovation, and wellness.
          </p>

          <ul className="space-y-4 text-[15px] mb-10">
            <li className="flex gap-3">
              <span className="text-[#6a1b9a]">—</span>
              Product & distribution enquiries
            </li>
            <li className="flex gap-3">
              <span className="text-[#6a1b9a]">—</span>
              Corporate & institutional partnerships
            </li>
            <li className="flex gap-3">
              <span className="text-[#6a1b9a]">—</span>
              B2B supply & private label discussions
            </li>
            <li className="flex gap-3">
              <span className="text-[#6a1b9a]">—</span>
              Media & strategic collaborations
            </li>
          </ul>

          {/* Office Card */}
          <div className="mt-10 p-8 bg-white rounded-[2rem] border border-[#ede9f3]
                          shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]">
            <p className="text-sm tracking-widest uppercase text-[#6a1b9a] mb-3">
              Registered Office
            </p>
            <p className="text-[15px] leading-relaxed">
              115/33, Gobichettipalayam,<br />
              Erode – 638476,<br />
              Tamil Nadu, India
            </p>
            <p className="mt-4 text-[15px]">
              <span className="font-medium text-[#2b133d]">Phone:</span>{' '}
              <a
                href="tel:+919445454943"
                className="hover:text-[#2b133d] transition"
              >
                +91 94454 54943
              </a>
            </p>
          </div>
        </motion.div>

        {/* RIGHT – LUXURY FORM */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur rounded-[2.5rem]
                     border border-[#ede9f3]
                     shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]
                     p-12"
        >
          <span className="block text-xs tracking-[0.3em] uppercase text-[#6a1b9a] mb-3">
            Enquiry Form
          </span>

          <h3 className="text-2xl font-semibold text-[#2b133d] mb-10">
            Send an Enquiry
          </h3>

          <form className="space-y-7">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#2b133d]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full px-5 py-3 rounded-full
                           bg-[#f5f3f8] border border-[#ede9f3]
                           focus:outline-none focus:ring-2 focus:ring-[#6a1b9a]/40"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#2b133d]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-5 py-3 rounded-full
                           bg-[#f5f3f8] border border-[#ede9f3]
                           focus:outline-none focus:ring-2 focus:ring-[#6a1b9a]/40"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#2b133d]">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-5 py-3 rounded-full
                           bg-[#f5f3f8] border border-[#ede9f3]
                           focus:outline-none focus:ring-2 focus:ring-[#6a1b9a]/40"
              />
            </div>

            {/* Nature */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#2b133d]">
                Nature of Enquiry
              </label>
              <select
                className="w-full px-5 py-3 rounded-full
                           bg-[#f5f3f8] border border-[#ede9f3]
                           focus:outline-none focus:ring-2 focus:ring-[#6a1b9a]/40"
              >
                <option>General Enquiry</option>
                <option>Product Information</option>
                <option>Distribution / Partnership</option>
                <option>Corporate / Institutional</option>
                <option>Media / Collaboration</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#2b133d]">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us more about your enquiry"
                className="w-full px-5 py-4 rounded-[1.5rem]
                           bg-[#f5f3f8] border border-[#ede9f3]
                           focus:outline-none focus:ring-2 focus:ring-[#6a1b9a]/40"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 py-4 rounded-full
                         bg-gradient-to-r from-[#2b133d] to-[#4a148c]
                         text-white text-sm font-medium
                         hover:opacity-90 transition shadow-lg"
            >
              Submit Enquiry
            </button>

          </form>
        </motion.div>

      </section>
    </main>
  )
}
