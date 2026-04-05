import React from 'react'
import { motion } from 'framer-motion'
import BottleViewer from './BottleViewer'
import SEOHead from './SEOHead'
import { seoKeywords } from '../seoUtils'

const products = [
  {
    id: 1,
    name: 'Grape',
    price: '₹25',
    color: "#400052", // Tailwind class
    labelIndex: 1,
    tagline: 'Antioxidant Rich Hydration',
  },
  {
    id: 2,
    name: 'Strawberry',
    price: '₹25',
    color: '#d41220', // Hex color
    labelIndex: 2,
    tagline: 'Antioxidant Rich Hydration',
  },
  {
    id: 3,
    name: 'Mojito',
    price: '₹25',
    color: '#0298c4',
    labelIndex: 3,
    tagline: 'Antioxidant Rich Hydration',
  },
  {
    id: 4,
    name: 'Choco Roast',
    price: '₹25',
    color: '#3A2E2E',
    labelIndex: 4,
    tagline: 'Sparckling Coffee Infusion',
  },
];


export default function Products() {
  const productsSEO = {
    title: "Our Premium Wellness Products | Herito Wellness",
    description: "Explore Herito Wellness premium functional beverages - hydration drinks, energy drinks, sports nutrition, and immunity support products. Science-driven, clean ingredients, crafted for modern wellness.",
    keywords: [...seoKeywords.general, ...seoKeywords.hydration, ...seoKeywords.energy, "buy wellness products India", "premium hydration drinks online"],
    canonical: "https://www.heritowellness.com/products",
    ogTitle: "Herito Wellness Premium Products Collection",
    ogDescription: "Discover our range of functional beverages designed for hydration, energy, immunity, and balanced wellness.",
    ogUrl: "https://www.heritowellness.com/products",
  };

  return (
    <>
      <SEOHead {...productsSEO} />
      <main className="bg-[#f5f3f8] min-h-screen pt-40 pb-32">

        {/* PAGE HEADER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-semibold text-[#2b133d]"
          >
            Our Premium Wellness Products
          </motion.h1>

          <p className="mt-6 max-w-2xl mx-auto text-[#7a7382] text-lg">
            Functional beverages crafted with science, precision, clean ingredients, and refined taste for optimal wellness results.
          </p>
        </section>

      {/* PRODUCT GRID */}
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[3rem] overflow-hidden
                         border border-[#ede9f3]
                         shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]
                         hover:shadow-[0_40px_100px_-40px_rgba(0,0,0,0.35)]
                         transition-shadow duration-300"
            >
              {/* Subtle Glow Behind Bottle */}
              <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#6a1b9a]/20 blur-[120px]" />

              {/* 3D MODEL AREA */}
              <div className="relative h-[460px] bg-gradient-to-br from-[#f5f3f8] to-[#ffffff] flex items-center justify-center">
                <BottleViewer
                  color={product.color}
                  labelIndex={product.labelIndex}
                />
              </div>

              {/* PRODUCT INFO */}
              <div className="relative p-12 text-center">

                <span className="block text-xs tracking-[0.3em] uppercase text-[#6a1b9a] mb-3">
                  Signature Series
                </span>

                <h3 className="text-2xl font-semibold text-[#2b133d]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-[#7a7382]">
                  {product.tagline}
                </p>

                <p className="mt-6 text-2xl font-semibold text-[#2b133d]">
                  {product.price}
                </p>

                {/* CTA */}
                <button
                  className="mt-8 px-8 py-3 rounded-full
                             bg-gradient-to-r from-[#2b133d] to-[#4a148c]
                             text-white text-sm font-medium
                             hover:opacity-90 transition shadow-lg"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
      </main>
    </>
  );
}

