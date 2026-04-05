// import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Details from './Details'
import SEOHead from './SEOHead'
import { seoKeywords } from '../seoUtils'

export default function Home() {

  const homePageSEO = {
    title: "Herito Wellness - Premium Functional Beverages & Nutrition",
    description: "Discover Herito Wellness - Science-driven premium functional beverages and nutrition products for hydration, energy, sports nutrition, and immunity. Clean ingredients, modern wellness for healthy living in India.",
    keywords: [
      ...seoKeywords.general,
      ...seoKeywords.hydration,
      ...seoKeywords.energy,
      ...seoKeywords.immunity
    ],
    canonical: "https://www.heritowellness.com/",
    ogTitle: "Herito Wellness - Premium Functional Beverages",
    ogDescription: "Science-driven functional beverages for hydration, energy, and balanced wellness living.",
    ogImage: "https://www.heritowellness.com/og-image.jpg",
    ogUrl: "https://www.heritowellness.com/",
    twitterTitle: "Herito Wellness - Premium Wellness Drinks",
    twitterDescription: "Experience science-driven functional beverages for modern wellness.",
  };

  return (
    <>
      <SEOHead {...homePageSEO} />
      <main className="bg-[#f5f3f8]">
        {/* HERO SECTION */}
        <section className="relative pt-40 pb-32 overflow-hidden">

          {/* Subtle Luxury Ambient Glows */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18, y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#6a1b9a]/25 blur-[120px]"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15, y: [0, 30, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[#4a148c]/25 blur-[140px]"
          />

          <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center relative z-10">
            
            {/* LEFT CONTENT */}
            <motion.header
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="block text-xs tracking-[0.3em] uppercase text-[#6a1b9a]">
                Wellness • Nutrition • Balance
              </span>

              <h1 className="mt-6 text-5xl md:text-6xl font-semibold text-[#2b133d] leading-[1.1]">
                Wellness Crafted for Modern Living
              </h1>

              <p className="mt-8 max-w-xl text-[#5f5b66] leading-relaxed text-[15px]">
                At Herito Wellness, we believe wellness should be simple,
                transparent, and built into everyday routines — supporting
                long-term vitality and balance through premium functional beverages
                and science-driven nutrition products.
              </p>

              <div className="mt-12 flex flex-wrap gap-6">
                {/* Primary CTA */}
                <NavLink
                  to="/products"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#2b133d] to-[#4a148c] text-white text-sm font-medium hover:opacity-90 transition shadow-lg"
                  aria-label="Explore our premium wellness products and functional beverages"
                >
                  Explore Products
                </NavLink>

                {/* Secondary CTA */}
                <NavLink
                  to="/enquiry"
                  className="px-8 py-3.5 rounded-full border border-[#2b133d] text-[#2b133d] text-sm font-medium hover:bg-[#2b133d] hover:text-white transition"
                  aria-label="Contact Herito Wellness for product inquiries"
                >
                  Enquire Now
                </NavLink>
              </div>
            </motion.header>

            {/* RIGHT VISUAL / LUXURY SNAPSHOT CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-white rounded-[2.5rem] border border-[#ede9f3] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)] p-10">
                <span className="block text-xs tracking-[0.3em] uppercase text-[#6a1b9a] mb-4">
                  Wellness Overview
                </span>

                <p className="text-lg font-semibold text-[#2b133d]">
                  Why Choose Herito
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    { label: 'Daily Nutrition', value: 'Balanced Intake' },
                    { label: 'Immunity Focus', value: 'Year-round Support' },
                    { label: 'Clean Ingredients', value: 'Carefully Sourced' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between text-[15px] border-b border-[#f0ecf6] pb-3"
                    >
                      <span className="text-[#5f5b66]">{item.label}</span>
                      <span className="text-[#2b133d] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <Details />
      </main>
    </>
  )
}
