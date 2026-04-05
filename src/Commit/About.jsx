import React from "react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <main className="bg-[#f5f3f8] text-[#5f5b66]">

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-semibold text-[#2b133d] leading-tight"
        >
          About Herito Wellness
        </motion.h1>
        <p className="mt-6 max-w-2xl mx-auto text-[#7a7382] text-lg">
          Science-driven functional nutrition designed to elevate everyday wellness.
        </p>
      </header>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 space-y-8 text-[17px] leading-relaxed">
        <p>
          Herito Wellness Company is a modern wellness innovation company creating
          science-driven functional beverages and functional foods designed to
          elevate everyday performance.
        </p>
        <p>
          From hydration and energy to recovery and immunity, we create products
          that combine clinical science, clean formulations, and superior taste,
          built for today’s health-conscious consumer.
        </p>
      </section>

      {/* BRAND STATEMENT */}
      <section className="mt-28 bg-gradient-to-r from-[#2b133d] to-[#4a148c]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 text-center">
          <p className="text-3xl md:text-4xl font-medium text-white tracking-wide">
            Simple. Functional. Effective. Ultra-Premium.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-28 grid md:grid-cols-2 gap-20">
        <div>
          <span className="block text-xs tracking-[0.3em] uppercase text-[#6a1b9a] mb-3">
            Capabilities
          </span>
          <h2 className="text-3xl font-semibold text-[#2b133d] mb-6">
            Our Capabilities
          </h2>
          <p className="text-[15px] leading-relaxed">
            Rooted in manufacturing excellence, R&D, processing, cold-chain facilities,
            and global-standard quality systems, we are building India’s most trusted
            functional wellness ecosystem.
          </p>
        </div>
        <div>
          <span className="block text-xs tracking-[0.3em] uppercase text-[#6a1b9a] mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl font-semibold text-[#2b133d] mb-6">
            Product Portfolio
          </h2>
          <p className="text-[15px] leading-relaxed">
            Our portfolio spans electrolyte beverages, functional drinks,
            wellness-focused RTDs, flavoured waters, protein and nutrient foods,
            and next-generation lifestyle nutrition solutions.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-[#2b133d] mb-16 text-center">
            Our Journey
          </h2>

          <div className="space-y-12 border-l border-[#e6e0f0] pl-10">
            {[
              ["2022", "Conceptualization of Herito Wellness and product research"],
              ["2023", "R&D, formulation trials, and manufacturing partnerships"],
              ["2024", "Brand development, certifications, and pilot launches"],
              ["2025", "Market expansion, B2B partnerships, and D2C growth"]
            ].map(([year, text], i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[46px] top-1 w-4 h-4 rounded-full bg-[#6a1b9a]" />
                <p className="text-sm tracking-widest uppercase text-[#6a1b9a]">
                  {year}
                </p>
                <p className="mt-2 text-[#5f5b66] text-[15px]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-[#2b133d] mb-16 text-center">
            Leadership & Advisory
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              ["Dinesh K", "Founder & Managing Director"],
              ["Advisory Member", "Nutrition Science Advisor"],
              ["Advisory Member", "Manufacturing & Quality Advisor"]
            ].map(([name, role], i) => (
              <div
                key={i}
                className="bg-white rounded-[2rem] border border-[#ede9f3] p-8 text-center shadow-[0_16px_40px_-28px_rgba(0,0,0,0.15)]"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#ede9f3] to-[#dcd5ea] mb-6" />
                <h3 className="font-semibold text-[#2b133d]">{name}</h3>
                <p className="mt-1 text-sm text-[#7a7382]">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold text-[#2b133d] mb-16 text-center">
            Our Core Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Scientifically validated ingredients",
              "Clean and minimal formulations",
              "Precision manufacturing & safety systems",
              "Global taste benchmarks",
              "Sustainable, modern design",
              "Multi-channel availability (Retail, B2B, D2C)"
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#f5f3f8] rounded-[1.5rem] p-8 text-[15px] border border-[#ede9f3]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold text-[#2b133d] mb-8">
            Certifications & Compliance
          </h2>
          <p className="text-[#7a7382] mb-12">
            Our operations follow nationally and internationally recognized
            quality, safety, and regulatory standards.
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-sm font-medium text-[#2b133d]">
            <span className="px-6 py-2 border border-[#d4af37]/40 rounded-full">ISO Certified</span>
            <span className="px-6 py-2 border border-[#d4af37]/40 rounded-full">GMP Compliant</span>
            <span className="px-6 py-2 border border-[#d4af37]/40 rounded-full">FSSAI Approved</span>
            <span className="px-6 py-2 border border-[#d4af37]/40 rounded-full">Quality Assured</span>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-28 text-center">
        <p className="text-[#7a7382] mb-4 tracking-widest uppercase text-xs">
          Our Purpose
        </p>
        <p className="text-3xl md:text-4xl font-semibold text-[#2b133d] max-w-3xl mx-auto leading-tight">
          To enhance hydration, energy, endurance, and overall lifestyle wellness —
          one product at a time.
        </p>
      </section>

      {/* CLOSING */}
      <footer className="max-w-5xl mx-auto px-6 md:px-12 pb-28 text-center text-[#7a7382] text-[15px]">
        Herito Wellness Company stands at the intersection of nutrition science,
        advanced manufacturing, and premium brand experience — shaping the future
        of functional wellness in India and beyond.
      </footer>

    </main>
  )
}
