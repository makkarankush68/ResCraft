'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import NewResumeModal from '@/components/NewResumeModal';
import { ResumeDataType } from '@/lib/types';
import { Edit, Trash } from 'lucide-react';
import { EyeOpenIcon } from '@radix-ui/react-icons';

interface ResumeDataResType extends ResumeDataType {
  _id: string;
}

const Resumes = () => {
  const [resumes, setResumes] = useState<ResumeDataResType[]>([]);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserResumes() {
      console.log('Fetching resumes for user:');
      const res = await fetch('/api/resume', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        const data = await res.json();
        console.log('Resumes:', data);
        setResumes(data);
      }
    }
    fetchUserResumes();
  }, []);

  return (
    <motion.div
      className="container mx-auto max-w-5xl p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="!mb-4 flex flex-wrap justify-center gap-2.5 text-4xl font-bold max-sm:m-2 max-sm:mb-4 sm:m-8 sm:text-5xl md:text-7xl">
        Your Resumes.
      </h1>
      <p className="mb-6 text-center tracking-wide">view and manage your resumes here</p>
      <div className="flex w-full justify-center">
        <NewResumeModal slug={slug} setSlug={setSlug} />
      </div>
      {resumes.length > 0 ? (
        <ul className="space-y-4">
          {resumes.map((resume) => (
            <li
              key={resume._id}
              className="flex flex-wrap items-center justify-center gap-4 rounded-lg border p-4 md:justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold">
                  {resume.title
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </h2>
                <p className="text-sm text-gray-500">
                  Created on:{' '}
                  <span className="text-gray-400">
                    {resume?.createdAt ? new Date(resume.createdAt).toDateString() : 'N/A'}
                  </span>
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Link href={`/resume/edit/${resume._id}`} title="edit">
                  <button className="rounded bg-blue-500 px-4 py-2 text-white">
                    <Edit size={25} />
                  </button>
                </Link>
                <Link href={`/resume/${resume._id}`} title="open">
                  <button className="rounded bg-green-500 px-4 py-2 text-white">
                    <EyeOpenIcon className="size-[25px]" />
                  </button>
                </Link>
                <button title="delete" className="h-full rounded bg-red-700 px-4 py-2 text-white">
                  <Trash size={25} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">You have no resumes created yet.</p>
      )}
    </motion.div>
  );
};

export default Resumes;
