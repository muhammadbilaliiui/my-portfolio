import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check, Sparkles, Phone, MapPin } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const email = "bilal20030315@gmail.com";
  const phone = "03315581529";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#121212] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 shadow-2xl text-[#D7E2EA] z-10 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#D7E2EA] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#BBCCD7]">
              <Sparkles className="w-5 h-5 text-[#B600A8]" />
              <span className="text-xs uppercase tracking-widest font-medium">Let&apos;s collaborate</span>
            </div>

            <h3 className="hero-heading font-black uppercase text-2xl sm:text-3xl tracking-tight mb-2">
              Get in touch
            </h3>
            <p className="text-xs sm:text-sm font-light text-[#D7E2EA]/70 mb-5 leading-relaxed">
              Have a workflow automation, AI chatbot, machine learning, or web design project in mind? Reach out and let&apos;s build something high-impact.
            </p>

            {/* Contact Information Pills */}
            <div className="flex flex-col gap-2.5 mb-6">
              {/* Email quick copy */}
              <div className="flex items-center justify-between p-3 bg-black/40 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#D7E2EA]/60 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-light truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex-shrink-0 text-xs uppercase tracking-wider font-medium px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    'Copy'
                  )}
                </button>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-2.5 p-2.5 bg-black/40 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#BBCCD7]" />
                  <span className="text-xs font-light text-[#D7E2EA] truncate">{phone}</span>
                </a>
                <div className="flex items-center gap-2.5 p-2.5 bg-black/40 rounded-2xl border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-[#BBCCD7]" />
                  <span className="text-xs font-light text-[#D7E2EA] truncate">Kahuta, Islamabad</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {submitted ? (
              <div className="py-8 text-center bg-white/5 rounded-2xl border border-white/10">
                <Check className="w-10 h-10 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-lg font-medium text-white">Message Dispatched!</h4>
                <p className="text-xs text-[#D7E2EA]/70 mt-1">Thank you! Muhammad Bilal will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                    Project Details
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <ContactButton label="Send Message" className="w-full sm:w-auto" />
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
