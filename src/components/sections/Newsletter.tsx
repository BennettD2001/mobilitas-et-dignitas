'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="container-max">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <Mail className="w-12 h-12 text-gold" />
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-bold text-marian-blue dark:text-gold mb-4">
            Stay Updated
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-warm-gray dark:text-slate-400 mb-8">
            Get thoughtful writing, travel insights, and practical resources delivered to your inbox. No spam, ever.
          </motion.p>

          {/* Form */}
          <motion.form
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle subscription
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-light-gray dark:border-slate-700 rounded-sm focus:outline-none focus:border-marian-blue dark:focus:border-gold transition-colors bg-cream dark:bg-slate-800 text-warm-gray dark:text-slate-100"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </motion.form>

          {/* Subtext */}
          <motion.p variants={itemVariants} className="text-xs text-warm-gray dark:text-slate-500 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
