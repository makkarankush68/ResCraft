import ResumeBuilder from '@/components/ResumeBuilder';
import { ModeToggle } from '@/components/theme_toggle';
import Image from 'next/image';
import Football from './public/assets/images/1.svg';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ModeToggle />
      <ResumeBuilder />
      <div className="fixed inset-0 -z-50 opacity-5">
        <Image src={Football} alt="Hero Image" fill />
      </div>
    </div>
  );
}
