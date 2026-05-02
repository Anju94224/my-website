'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // This runs every time user types in any field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This runs when user clicks Send Message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // stops page from refreshing
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // sends data to MongoDB
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50 dark:bg-slate-900 py-20 px-4 md:px-8">
      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">Have a project in mind? Let&apos;s work together!</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-sm ring-1 ring-slate-200 dark:ring-gray-700"
        >
          {/* Success Message */}
          {status === 'success' && (
            <div className="mb-6 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
              ✅ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {/* Error Message */}
          {status === 'error' && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              ❌ Something went wrong. Please try again.
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 dark:border-gray-600 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400"
              placeholder="Your name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 dark:border-gray-600 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 dark:border-gray-600 px-4 py-3 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-gray-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </section>
  );
}