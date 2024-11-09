'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import NewResumeModal from '@/components/NewResumeModal';
import { ResumeDataType } from '@/lib/types';
import { Edit } from 'lucide-react';
import { EyeOpenIcon } from '@radix-ui/react-icons';
import DeleteResumeModal from '@/components/DeleteResumeModal';
import { toast } from '@/hooks/use-toast';

const ResumeList = () => {
  const [resumes, setResumes] = useState<ResumeDataType[]>();
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

  const patchResumeData = async (data: ResumeDataType) => {
    const res = await fetch(`/api/resume/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: { ...data, isPublic: !data.isPublic }
      })
    });
    if (res.ok) {
      toast({
        description: 'Resume updated successfully ✅',
        type: 'foreground'
      });
      setResumes((prev) =>
        prev?.map((resume) => {
          if (resume._id === data._id) {
            return { ...resume, isPublic: !resume.isPublic };
          }
          return resume;
        })
      );
    } else {
      console.error('Failed to update resume');
      toast({
        description: 'Failed to update resume',
        variant: 'destructive'
      });
    }
  };

  return (
    <motion.div
      className="container mx-auto max-w-5xl p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="relative bg-gradient-to-b from-neutral-400 via-white to-white bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent sm:text-5xl md:text-7xl">
        Your Resumes.
      </h1>
      <p className="mb-6 text-center tracking-wide">view and manage your resumes here</p>
      <div className="flex w-full justify-center">
        <NewResumeModal slug={slug} setSlug={setSlug} />
      </div>
      {resumes ? (
        resumes.length > 0 ? (
          <ul className="space-y-4">
            {resumes.map((resume) => (
              <li
                key={resume._id.toString()}
                className="flex flex-wrap items-center justify-center gap-4 rounded-lg border p-4 md:justify-between"
              >
                <div className='flex items-center gap-4'>
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
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={resume.isPublic}
                      onChange={() => patchResumeData(resume)}
                      className="peer sr-only"
                    />
                    <div className="peer relative h-6 w-11 rounded-full border-gray-600 bg-gray-700 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
                    <span className="ms-3 text-sm font-medium tracking-normal text-gray-900 dark:text-gray-300">
                      {resume.isPublic ? 'Public' : 'Private'}
                    </span>
                  </label>
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
          <p className="text-center text-gray-600">
            You don't have any resumes yet. Create one now
          </p>
        )
      ) : (
        <p className="text-center text-gray-600">Loading...</p>
      )}
    </motion.div>
  );
};

export default ResumeList;
