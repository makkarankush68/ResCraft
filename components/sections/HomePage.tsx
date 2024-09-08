import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Zap, Shield, Award } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Create Your Perfect Resume
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Build a professional resume in minutes. Easy to use, AI-powered, and ATS-friendly.
              </p>
            </div>
            <div className="space-x-4">
              <Button>
                <Link href="/resume">Get Started</Link>
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-3 text-center">
              <Zap className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-bold">Quick and Easy</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Create a professional resume in just minutes with our intuitive builder.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center">
              <Shield className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-bold">ATS-Friendly</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our resumes are optimized to pass Applicant Tracking Systems.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3 text-center">
              <Award className="h-10 w-10 text-primary" />
              <h2 className="text-xl font-bold">Expert-Approved Templates</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Choose from a variety of professional templates designed by experts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
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
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Get Started</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Start your free trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
