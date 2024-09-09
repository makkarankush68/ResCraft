'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import X from '@/app/vectors/X';
import Github from '@/app/vectors/Github';
const Footer = () => (
  <motion.footer
    className="py-8 backdrop-blur-md"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 1 }}
  >
    <div className="container mx-auto flex flex-wrap items-center justify-around gap-6 px-4 max-sm:flex-col">
      <div className="mb-4 text-center md:mb-0">
        &copy; 2024 ResumeBuilder. All rights reserved.
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 sm:justify-between">
        <div className="flex space-x-4">
          <Link href="#" className="transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="#" className="transition-colors">
            <X className="h-6 w-6" />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
