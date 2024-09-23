'use client';
// import { ModeToggle } from '@/components/ThemeToggle';
import Link from 'next/link';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';
import { motion } from 'framer-motion';
import { PanelBottomClose } from 'lucide-react';
import { FileCheck2 } from 'lucide-react';

const NavLinks = () => (
  <>
    <li>
      <Link href="/#features" className="transition-colors hover:text-[var(--slate-6-4)]">
        Features
      </Link>
    </li>
    <li>
      <Link href="#" className="transition-colors hover:text-[var(--slate-6-4)]">
        Pricing
      </Link>
    </li>
    <li>
      <Link href="#" className="transition-colors hover:text-[var(--slate-6-4)]">
        About
      </Link>
    </li>
    <li>
      <Link href="#" className="transition-colors hover:text-[var(--slate-6-4)]">
        Contact
      </Link>
    </li>
  </>
);

const Header = () => (
  <motion.header
    className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
      <Link href="/">
        <motion.div
          className="flex cursor-pointer gap-2 text-2xl font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <FileCheck2 className="h-8 w-8" />
          ResCraft
        </motion.div>
      </Link>
      <nav className="flex items-center gap-6">
        {/* <ModeToggle /> */}
        <ul className="flex space-x-4 max-sm:hidden">
          <NavLinks />
        </ul>
        <Drawer>
          <DrawerTrigger className="sm:hidden">
            <PanelBottomClose className="h-6 w-6" />
          </DrawerTrigger>
          <DrawerContent className="mx-2 border-none bg-black/50 text-white backdrop-blur-sm">
            <ul className="flex space-x-4 max-sm:hidden"></ul>
            <DrawerHeader>
              <DrawerTitle>
                ResCraft
                <br />
                <span className="mt-2 text-slate-400">professional resume in minutes.</span>
              </DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <ul className="flex flex-col items-center justify-center gap-4">
                <NavLinks />
              </ul>
              {/* <Button>Submit</Button> */}
              <DrawerClose>{/* <Button variant="outline">Cancel</Button> */}</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </nav>
    </div>
  </motion.header>
);

export default Header;
