import React from 'react'
import { motion } from 'framer-motion'
import FounderImg from '../Asset/Pineapple.png'

export default function AboutMissionVision() {
  return (
    <section className="relative bg-[#f5f3f8] py-32 px-6 md:px-12 overflow-hidden">

      {/* Subtle Luxury Background Glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18, y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#6a1b9a]/20 blur-[120px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, y: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[#4a148c]/20 blur-[140px]"
      />

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">

        {/* ABOUT + MISSION + VISION */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ABOUT – Main Editorial Card */}
          <motion.article
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] border border-[#ede9f3] p-12 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]"
          >
            <span className="inline-block mb-4 text-xs tracking-[0.3em] uppercase text-[#6a1b9a]">
              About Us
            </span>

            <h2 className="text-4xl font-semibold text-[#2b133d] mb-8 leading-tight">
              About Herito Wellness
            </h2>

            <div className="space-y-6 text-[#5f5b66] leading-relaxed text-[15px]">
              <p>
                Herito Wellness Company is a modern wellness innovation company creating
                science-driven functional beverages and functional foods designed to elevate
                everyday performance.
              </p>

              <p>
                Rooted in strong manufacturing, R&D, processing, cold-chain facilities,
                and global-standard quality systems, we are building India’s most trusted
                functional wellness ecosystem.
              </p>

              <p className="font-medium text-[#2b133d]">
                Wellness should be simple. Functional. Effective. Ultra-premium.
              </p>

              <ul className="list-disc pl-6 space-y-2 marker:text-[#6a1b9a]">
                <li>Scientifically validated ingredients</li>
                <li>Minimal, clean formulations</li>
                <li>Precision manufacturing & safety systems</li>
                <li>Global taste benchmarks for Indian palates</li>
                <li>Sustainable, modern design</li>
                <li>Retail, B2B, institutional, D2C & e-commerce reach</li>
              </ul>

              <p className="font-medium text-[#2b133d]">
                Our purpose is to enhance hydration, energy, endurance, and lifestyle wellness.
              </p>
            </div>
          </motion.article>

          {/* MISSION + VISION – Luxury Minimal Stack */}
          <div className="space-y-14">

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-[2rem] border border-[#ede9f3] p-10 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.15)]"
            >
              <span className="block mb-3 text-xs tracking-[0.3em] uppercase text-[#6a1b9a]">
                Mission
              </span>

              <h3 className="text-2xl font-semibold text-[#2b133d] mb-4">
                Our Mission
              </h3>
              <p className="text-[#5f5b66] text-[15px] leading-relaxed">
                To create functional foods and beverages that truly work—combining
                scientific formulation, clean nutrition, and exceptional taste.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-[2rem] border border-[#ede9f3] p-10 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.15)]"
            >
              <span className="block mb-3 text-xs tracking-[0.3em] uppercase text-[#6a1b9a]">
                Vision
              </span>

              <h3 className="text-2xl font-semibold text-[#2b133d] mb-4">
                Our Vision
              </h3>
              <p className="text-[#5f5b66] text-[15px] leading-relaxed">
                To become the most trusted global wellness brand that elevates
                everyday living through science-backed hydration and nutrition.
              </p>
            </motion.div>

          </div>
        </div>

        {/* FOUNDER SECTION – Signature Luxury Feature */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative grid md:grid-cols-2 gap-20 items-center bg-gradient-to-br from-[#2b133d] to-[#4a148c] rounded-[3rem] p-16 text-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)]"
        >
          {/* Gold Accent Line */}
          <div className="absolute top-12 left-12 w-20 h-[2px] bg-gradient-to-r from-[#d4af37] to-transparent" />

          {/* Founder Image */}
          <div className="flex justify-center">
            <img
              src={FounderImg}
              alt="Dinesh K – Founder"
              className="w-60 rounded-[2rem] object-cover shadow-2xl border border-white/30"
            />
          </div>

          {/* Founder Note */}
          <div>
            <span className="inline-block mb-4 text-lg tracking-[0.3em] uppercase text-[#e0c97f]">
              Founder’s Message
            </span>

            <div className="space-y-5 text-[#f0eaf6] text-[15px] leading-relaxed">
              <p>Dear Community,</p>

              <p>
                Herito Wellness Company was created with one intention:
                to make functional nutrition simple, effective, and accessible.
              </p>

              <p>
                Every formulation starts with science. Every product is refined
                with purpose—from taste to performance.
              </p>

              <p>
                We are not here to follow trends. We are here to redefine
                wellness for the next generation.
              </p>

              <p className="font-medium text-white">
                Together, let’s Move Better. Live Better.
              </p>

              <p className="font-medium text-white pt-6">
                Dinesh K <br />
                Founder & Managing Director <br />
                Herito Wellness Private Limited
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </section>
  )
}
