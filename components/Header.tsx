'use client';
import { useSession, signOut } from 'next-auth/react';
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
import { PanelBottomClose, FileCheck2, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

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

const UserAvatar = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Link href="/login">
        <Button variant="default" size="default">
          Log in
        </Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={session.user?.image || ''} />
          <AvatarFallback>
            <User className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="#">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#">Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Header = () => (
  <motion.header
    className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md"
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
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
        <ul className="flex space-x-4 max-sm:hidden">
          <NavLinks />
        </ul>
        <UserAvatar />
        <Drawer>
          <DrawerTrigger className="sm:hidden">
            <PanelBottomClose className="h-8 w-8" />
          </DrawerTrigger>
          <DrawerContent className="mx-2 border-none bg-black/50 text-white backdrop-blur-sm">
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
              <DrawerClose></DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </nav>
    </div>
  </motion.header>
);

export default Header;
