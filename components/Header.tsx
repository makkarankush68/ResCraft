'use client';
import { ModeToggle } from '@/components/theme_toggle';
import { FileText } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <FileText className="h-8 w-8" />
        <span className="sr-only">ResumeBuilder</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center ">
        <ModeToggle />
        <Link className="text-sm font-medium underline-offset-4 hover:underline" href="#">
          Features
        </Link>
        <Link className="text-sm font-medium underline-offset-4 hover:underline" href="#">
          Pricing
        </Link>
        <Link className="text-sm font-medium underline-offset-4 hover:underline" href="#">
          About
        </Link>
        <Link className="text-sm font-medium underline-offset-4 hover:underline" href="#">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
