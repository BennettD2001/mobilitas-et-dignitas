'use client';

import Link from 'next/link';
import { Mail, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail('');
  };

  return (
    <footer className="bg-marian-blue dark:bg-slate-950 text-cream dark:text-slate-100 border-t border-gold dark:border-slate-800">
      {/* Newsletter Section */}
      <div className="border-b border-gold dark:border-slate-800">
        <div className="container-max py-12">
          <div className="max-w-md">
            <h3 className="text-2xl font-serif font-bold mb-2 text-gold">Stay Connected</h3>
            <p className="text-cream dark:text-slate-300 mb-6">
              Get thoughtful insights on budgeting, travel, and intentional living.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-sm bg-cream dark:bg-slate-800 text-warm-gray dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <button type="submit" className="btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max py-12 grid md:grid-cols-4 gap-8 mb-12">
        {/* Explore */}
        <div>
          <h4 className="font-semibold text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/budgeting" className="hover:text-gold transition-colors">
                Budgeting
              </Link>
            </li>
            <li>
              <Link href="/travel" className="hover:text-gold transition-colors">
                Travel
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gold transition-colors">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Create */}
        <div>
          <h4 className="font-semibold text-gold mb-4">Create</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/photography" className="hover:text-gold transition-colors">
                Photography
              </Link>
            </li>
            <li>
              <Link href="/writing" className="hover:text-gold transition-colors">
                Writing
              </Link>
            </li>
            <li>
              <Link href="/media" className="hover:text-gold transition-colors">
                Media & Reviews
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-gold transition-colors">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:hello@mobilitas.com" className="hover:text-gold transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold transition-colors">
                Book a Session
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-gold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="border-t border-gold dark:border-slate-800">
        <div className="container-max py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-cream dark:text-slate-400 mb-4 md:mb-0">
            © 2024 Mobilitas et dignitas. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
