import React from 'react'
import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <main className="bg-[#f5f3f8] text-[#5f5b66]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 pt-40 pb-32">

        {/* HERO */}
        <header className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-semibold text-[#2b133d] mb-6"
          >
            Privacy Policy
          </motion.h1>
          <p className="text-[#7a7382] max-w-3xl mx-auto text-lg">
            Herito Wellness Private Limited is committed to protecting your
            personal information and handling it responsibly, transparently,
            and securely.
          </p>
        </header>

        {/* COMPANY INFO */}
        <section className="bg-white/90 backdrop-blur border border-[#ede9f3] rounded-[2rem] p-10 mb-16
                            shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <p><span className="font-medium text-[#2b133d]">Company:</span> Herito Wellness Private Limited</p>
            <p><span className="font-medium text-[#2b133d]">Effective Date:</span> 12 August 2025</p>
            <p><span className="font-medium text-[#2b133d]">Jurisdiction:</span> Republic of India</p>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed">
            This Privacy Policy explains how personal information is collected,
            used, stored, shared, and protected when you interact with our
            products, websites, applications, and services.
          </p>
        </section>

        {/* SECTIONS */}
        <div className="space-y-12">

          {/* Helper Section Component Style */}
          {[
            {
              title: '1. Information We Collect',
              content: (
                <>
                  <div className="space-y-5">
                    <div>
                      <p className="font-medium text-[#2b133d]">A. Information You Provide</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Name, email, phone number</li>
                        <li>Shipping and billing address</li>
                        <li>Date of birth (optional)</li>
                        <li>Feedback, complaints, surveys</li>
                        <li>Payment details (processed by partners, not stored by us)</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-[#2b133d]">B. Information Collected Automatically</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>IP address and device details</li>
                        <li>Browser and operating system</li>
                        <li>Usage behavior and analytics</li>
                        <li>Cookies and tracking technologies</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-[#2b133d]">C. Campaign & Social Sources</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Public profile identifiers</li>
                        <li>Engagement and referral data</li>
                      </ul>
                    </div>

                    <p>
                      We do not knowingly collect data from children under 14 years
                      without parental supervision.
                    </p>
                  </div>
                </>
              ),
            },
            {
              title: '2. How We Use Your Information',
              content: (
                <>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Order processing and delivery</li>
                    <li>Customer support and service communication</li>
                    <li>Promotions, offers, and loyalty benefits</li>
                    <li>Product improvement and analytics</li>
                    <li>Fraud prevention and regulatory compliance</li>
                  </ul>
                  <p className="mt-4">
                    Personal data is not used for medical diagnosis or health profiling.
                  </p>
                </>
              ),
            },
            {
              title: '3. Legal Basis for Processing',
              content: (
                <ul className="list-disc pl-6 space-y-1">
                  <li>User consent</li>
                  <li>Performance of contracts and purchases</li>
                  <li>Legitimate business interests</li>
                  <li>Legal and safety obligations</li>
                </ul>
              ),
            },
            {
              title: '4. Sharing of Information',
              content: (
                <p>
                  We do not sell or rent personal data. Information is shared only
                  with essential service providers such as logistics partners,
                  payment gateways, communication tools, analytics platforms, or
                  regulatory authorities when required by law.
                </p>
              ),
            },
            {
              title: '5. Cookies & Tracking',
              content: (
                <p>
                  Cookies help improve website performance, personalization, and
                  analytics. Disabling cookies may limit certain features.
                </p>
              ),
            },
            {
              title: '6. Data Security',
              content: (
                <p>
                  We use encryption, access controls, cybersecurity monitoring, and
                  PCI-DSS-compliant payment systems. Absolute security cannot be
                  guaranteed.
                </p>
              ),
            },
            {
              title: '7. Data Retention',
              content: (
                <p>
                  Personal data is retained only as long as necessary for business,
                  legal, or safety purposes.
                </p>
              ),
            },
            {
              title: '8. Marketing Communication',
              content: (
                <p>
                  You may opt out of promotional communications at any time through
                  unsubscribe options or by contacting us.
                </p>
              ),
            },
            {
              title: '9. Your Rights',
              content: (
                <ul className="list-disc pl-6 space-y-1">
                  <li>Access or correct personal data</li>
                  <li>Restrict marketing communications</li>
                  <li>Request account or data deletion</li>
                </ul>
              ),
            },
            {
              title: '10. Contact Information',
              content: (
                <>
                  <p><strong>Email:</strong> support@heritowellness.com</p>
                  <p><strong>Phone:</strong> +91 94454 54943</p>
                  <p>
                    <strong>Address:</strong> 115/33, Gobichettipalayam,
                    Erode – 638476, Tamil Nadu, India
                  </p>
                </>
              ),
            },
          ].map((section, index) => (
            <section
              key={index}
              className="bg-white/90 backdrop-blur border border-[#ede9f3]
                         rounded-[2rem] p-10
                         shadow-[0_16px_40px_-28px_rgba(0,0,0,0.15)]"
            >
              <h2 className="text-xl font-semibold text-[#2b133d] mb-6">
                {section.title}
              </h2>
              <div className="text-[15px] leading-relaxed space-y-4">
                {section.content}
              </div>
            </section>
          ))}

        </div>

        {/* ACCEPTANCE */}
        <footer className="mt-24 bg-white/90 backdrop-blur border border-[#ede9f3]
                           rounded-[2rem] p-12 text-center
                           shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]">
          <p className="font-medium text-[#2b133d] text-lg">
            By interacting with Herito Wellness, you acknowledge that you have
            read and understood this Privacy Policy.
          </p>
        </footer>

      </div>
    </main>
  )
}
