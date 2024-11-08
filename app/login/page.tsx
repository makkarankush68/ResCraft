'use client';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FcGoogle } from 'react-icons/fc';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Link from 'next/link';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const session = useSession();
  if (session) {
    window.location.pathname = '/';
  }

  const handleGoogleAuth = () => {
    signIn('google', { callbackUrl: '/resume' });
  };

  const handleSubmit = async (e: React.FormEvent, isSignUp: boolean) => {
    e.preventDefault();
    if (isSignUp) {
      // handle email/password signup
      console.log('Signup attempted');
    } else {
      // handle email/password login
      console.log('Login attempted');
    }
  };

  return (
    <div className="relative z-0 flex min-h-[calc(100dvh_-_100px)] items-center justify-center bg-background px-4">
      <ShootingStars className="-z-10" />
      <StarsBackground className="-z-10" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full md:min-w-[500px]">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {isSignUp ? 'Create an Account' : 'Welcome Back'}
            </CardTitle>
            <CardDescription className="text-center">
              {isSignUp ? 'Sign up to start building your resume' : 'Login to your account'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => handleSubmit(e, isSignUp)} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Enter your full name" required />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}
              <Button type="submit" className="w-full">
                {isSignUp ? 'Sign Up' : 'Login'}
              </Button>
            </form>
            {!isSignUp && (
              <div className="mt-4 text-center text-sm">
                <Link href="/forgot-password" className="text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
            )}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-black px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <Button
                variant="outline"
                type="button"
                className="mt-4 flex w-full items-center justify-center"
                onClick={handleGoogleAuth}
              >
                <FcGoogle className="mr-2 h-5 w-5" />
                {isSignUp ? 'Sign up with Google' : 'Sign in with Google'}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary hover:underline"
              >
                {isSignUp ? 'Log in' : 'Sign up'}
              </button>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
