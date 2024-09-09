'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Award, Briefcase, GraduationCap, ArrowRight, Mail, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Hero Section Component
const HeroSection = () => (
  <div className="relative flex min-h-[calc(100vh_-_var(--navHeight))] items-center justify-center">
    <div className="container mx-auto px-4 py-16 text-center">
      <motion.h1
        className="mb-8 text-5xl font-bold md:text-7xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Craft Your Perfect Resume
        <Zap className="ml-4 inline-block h-16 w-16" />
      </motion.h1>
      <motion.p
        className="mb-6 text-xl md:text-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Create a professional resume in minutes with our intuitive builder
      </motion.p>
      <motion.p
        className="mb-12 text-xl md:text-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Professional Resume in minutes. Easy to use, AI-powered, and ATS-friendly.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/resume" passHref>
          <Button size="lg" className="transition-colors duration-300 hover:opacity-90">
            Get Started
            <ArrowRight className="ml-2 h-5 w-4" />
          </Button>
        </Link>
      </motion.div>
    </div>
  </div>
);

// Features Section Component
const FeaturesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Zap,
      title: 'Quick and Easy',
      description: 'Create a professional resume in just minutes with our intuitive builder'
    },
    {
      icon: Shield,
      title: 'ATS-Friendly',
      description: 'Our resumes are optimized to pass Applicant Tracking Systems'
    },
    {
      icon: Award,
      title: 'Expert-Approved Templates',
      description: 'Choose from a variety of professional templates designed by experts'
    },
    {
      icon: Briefcase,
      title: 'Work Experience',
      description: 'Showcase your professional journey with style'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Highlight your academic achievements effortlessly'
    },
    {
      icon: Award,
      title: 'Skills',
      description: 'Present your technical and soft skills effectively'
    }
  ];

  return (
    <div id="features" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Powerful Features
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <Card key={index} className="border-primary/10 bg-primary/5">
              <CardContent className="p-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <feature.icon className="mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-primary">{feature.title}</h3>
                  <p className="text-sm text-primary/80">{feature.description}</p>
                  <motion.div
                    className="mt-4 h-1 bg-slate-600 dark:bg-slate-400"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredCard === index ? '100%' : '0%' }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Email Section Component
const EmailSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <motion.div
        className="container mx-auto px-4 text-center md:px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Start Building Your Resume Today
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of job seekers who have successfully landed their dream jobs with our
              resume builder.
            </p>
          </div>
          {isSubmitted ? (
            <motion.p
              className="text-tropical_indigo font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you for subscribing!
            </motion.p>
          ) : (
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button onClick={handleSubmit} type="submit">
                  Get Started
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Start your free trial. No credit card required.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

// HomePage Component
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <EmailSection />
    </div>
  );
}
