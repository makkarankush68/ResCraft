'use client';
import { ModeToggle } from '@/components/theme_toggle';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => (
  <motion.header
    className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
      <Link href="/">
        <motion.div className="cursor-pointer text-2xl font-bold" whileHover={{ scale: 1.05 }}>
          ResumeBuilder
        </motion.div>
      </Link>
      <nav className="flex items-center gap-6">
        <ModeToggle />
        <ul className="flex space-x-4">
          <li>
            <Link
              href="#features"
              className="transition-colors hover:text-slate-600 dark:hover:text-slate-400"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition-colors hover:text-slate-600 dark:hover:text-slate-400"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition-colors hover:text-slate-600 dark:hover:text-slate-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition-colors hover:text-slate-600 dark:hover:text-slate-400"
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
