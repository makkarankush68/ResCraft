'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import NewResumeModal from '@/components/NewResumeModal';
import { ResumeDataType } from '@/lib/types';
import { Edit, Trash } from 'lucide-react';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import { toast } from '@/hooks/use-toast';
import DeleteResumeModal from '@/components/DeleteResumeModal';

const Resumes = () => {
  const [resumes, setResumes] = useState<ResumeDataType[]>([]);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserResumes() {
      const res = await fetch('/api/resume', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.ok) {
        const data = await res.json();
        setResumes(data);
      }
    }
    fetchUserResumes();
  }, []);

  return (
    <>
      <motion.div
        className="container mx-auto max-w-5xl p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative bg-gradient-to-b from-neutral-400 via-white to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl">
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
                key={resume._id.toString()}
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
                  <div title="delete" className="h-full rounded bg-red-700 text-white">
                    <DeleteResumeModal resume={resume} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">You have no resumes created yet.</p>
        )}
      </motion.div>
    </>
  );
};

export default Resumes;
