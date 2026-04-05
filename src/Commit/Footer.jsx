import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#2b133d] text-[#e6dff0]">

      {/* Top Gold Accent Line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />

      {/* Certifications */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-wrap gap-10 justify-center text-sm tracking-wide">
          {['ISO Certified', 'GMP Compliant', 'FSSAI Approved', 'Quality Assured'].map((item) => (
            <span
              key={item}
              className="px-6 py-2 rounded-full border border-[#d4af37]/40 text-[#f0eaf6]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid gap-16 md:grid-cols-5">

        {/* Company Info */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold text-white mb-6">
            Herito Wellness Private Limited
          </h2>
          <p className="text-sm leading-relaxed text-[#d8d2e3] max-w-md">
            A science-driven wellness company delivering functional beverages
            and nutrition solutions designed for modern, balanced living.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e0c97f] mb-6">
            Company
          </h3>
          <ul className="space-y-4 text-sm">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Products', '/products'],
              ['Enquiry', '/enquiry'],
            ].map(([label, link]) => (
              <li key={label}>
                <a
                  href={link}
                  className="hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e0c97f] mb-6">
            Legal & Support
          </h3>
          <ul className="space-y-4 text-sm">
            {[
              ['Privacy Policy', '/privacy'],
              ['Terms & Conditions', '/terms'],
              ['Help Center', '#'],
              ['Customer Support', '#'],
            ].map(([label, link]) => (
              <li key={label}>
                <a
                  href={link}
                  className="hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Registered Office */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e0c97f] mb-6">
            Registered Office
          </h3>

          <p className="text-sm leading-relaxed text-[#d8d2e3]">
            Herito Wellness Private Limited<br />
            115/33, Gobichettipalayam,<br />
            Erode – 638476,<br />
            Tamil Nadu, India
          </p>

          <div className="mt-5 text-sm space-y-2 text-[#d8d2e3]">
            <p>
              <span className="text-[#e0c97f] font-medium">Phone:</span>{' '}
              <a
                href="tel:+919445454943"
                className="hover:text-white transition"
              >
                +91 94454 54943
              </a>
            </p>

            <p>
              <span className="text-[#e0c97f] font-medium">CIN:</span> UXXXXXXXXXX2025PTCXXXXXX
            </p>

            <p>
              <span className="text-[#e0c97f] font-medium">GSTIN:</span> 33XXXXXXXXXXZ5
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e0c97f] mb-6">
            Newsletter
          </h3>
          <p className="text-sm mb-5 text-[#d8d2e3]">
            Get wellness insights and product updates.
          </p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 text-sm rounded-full bg-white/10 border border-white/20
                         text-white placeholder-[#cfc7da] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60"
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-medium rounded-full
                         bg-gradient-to-r from-[#d4af37] to-[#b8962e]
                         text-[#2b133d] hover:opacity-90 transition shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center text-sm text-[#d8d2e3]">

          <p>
            © {new Date().getFullYear()} Herito Wellness Private Limited. All rights reserved.
          </p>

          <p className="mt-2">
  Crafted by{" "}
  <span className="text-[#e0c97f] font-medium hover:text-white transition">
    <a
      href="https://www.poeage.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Poeage Group's
    </a>
  </span>
</p>

          {/* Social */}
          <div className="mt-6 flex justify-center gap-6 text-lg">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full
                         border border-white/20 hover:bg-white hover:text-[#2b133d] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="w-10 h-10 flex items-center justify-center rounded-full
                         border border-white/20 hover:bg-white hover:text-[#2b133d] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full
                         border border-white/20 hover:bg-white hover:text-[#2b133d] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full
                         border border-white/20 hover:bg-white hover:text-[#2b133d] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
