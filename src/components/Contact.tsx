import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Linkedin, Instagram, Send, CheckCircle2, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-sand-50 relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-[-10%] w-96 h-96 bg-ocean-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-96 h-96 bg-olive-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Clean Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col space-y-8"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-ocean-700"></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-ocean-800">
                LET'S CONNECT
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-6xl text-charcoal-900 tracking-tight leading-tight">
              Have an idea? <br />
              <span className="font-serif italic font-normal text-ocean-800 underline decoration-sand-300">
                Let's build it.
              </span>
            </h2>

            <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed max-w-lg">
              I’m always open to interesting projects, hackathons, team collaborations, and opportunities to learn and build together.
            </p>

            {/* Clean Contact Buttons */}
            <div className="space-y-4 pt-4 border-t border-sand-300">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-olive-800">
                DIRECT CONTACT CHANNELS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* Email Box */}
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="p-4 rounded-2xl bg-white border border-sand-300 shadow-sm flex flex-col justify-between group hover:border-ocean-300 hover:shadow-md transition-all min-h-[100px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-ocean-100 text-ocean-800 flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      className="p-1.5 rounded-lg hover:bg-sand-100 text-charcoal-700 transition-colors"
                    >
                      {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-charcoal-700 uppercase">GMAIL</div>
                    <div className="font-mono font-bold text-xs text-ocean-900 flex items-center gap-1 group-hover:text-ocean-700 transition-colors mt-0.5">
                      <span>Send Email</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-sand-300 shadow-sm flex flex-col justify-between group hover:border-ocean-300 hover:shadow-md transition-all min-h-[100px]"
                >
                  <div className="w-9 h-9 rounded-xl bg-ocean-100 text-ocean-800 flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-charcoal-700 uppercase">LINKEDIN</div>
                    <div className="font-mono font-bold text-xs text-ocean-900 flex items-center gap-1 group-hover:text-ocean-700 transition-colors mt-0.5">
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={PERSONAL_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white border border-sand-300 shadow-sm flex flex-col justify-between group hover:border-ocean-300 hover:shadow-md transition-all min-h-[100px]"
                >
                  <div className="w-9 h-9 rounded-xl bg-olive-100 text-olive-800 flex items-center justify-center">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-charcoal-700 uppercase">INSTAGRAM</div>
                    <div className="font-mono font-bold text-xs text-ocean-900 flex items-center gap-1 group-hover:text-ocean-700 transition-colors mt-0.5">
                      <span>Instagram Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form / Message Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sand-300 shadow-xl relative">
              
              <h3 className="font-display font-bold text-2xl text-charcoal-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-charcoal-700 mb-6 font-sans">
                Fill in the details below to initiate a collaboration or hackathon pitch.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-display font-bold text-lg text-emerald-900">Message Received!</h4>
                  <p className="text-xs text-emerald-700">
                    Thank you for reaching out. Atchaya will review your message and respond shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-emerald-800 underline font-semibold pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-charcoal-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 text-sm text-charcoal-900 focus:outline-none focus:border-ocean-600 focus:ring-1 focus:ring-ocean-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-charcoal-700 mb-1.5">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 text-sm text-charcoal-900 focus:outline-none focus:border-ocean-600 focus:ring-1 focus:ring-ocean-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase text-charcoal-700 mb-1.5">
                      Project / Hackathon Opportunity
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your idea, hackathon team, or collaboration opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-sand-50 border border-sand-300 text-sm text-charcoal-900 focus:outline-none focus:border-ocean-600 focus:ring-1 focus:ring-ocean-600 transition-colors resize-none"
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    className="w-full py-4 rounded-xl bg-ocean-800 hover:bg-olive-800 text-sand-50 font-display font-bold text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </MagneticButton>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
