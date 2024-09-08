'use client';
import { ModeToggle } from '@/components/theme_toggle';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    className="bg-ghost_white/50 fixed left-0 right-0 top-0 z-50 backdrop-blur-md"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <motion.div className="text-chocolate_cosmos text-2xl font-bold" whileHover={{ scale: 1.05 }}>
        ResumeBuilder
      </motion.div>
      <nav className="flex items-center gap-6">
        <ModeToggle />
        <ul className="flex space-x-4">
          <li>
            <Link
              href="#features"
              className="text-chocolate_cosmos hover:text-tropical_indigo transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-chocolate_cosmos hover:text-tropical_indigo transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-chocolate_cosmos hover:text-tropical_indigo transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-chocolate_cosmos hover:text-tropical_indigo transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </motion.header>
);

export default Header;
