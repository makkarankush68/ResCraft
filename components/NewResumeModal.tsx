import { useState } from 'react';
import { ArrowUpNarrowWideIcon } from 'lucide-react';
import { Modal, ModalBody, ModalContent, ModalTrigger } from './ui/animated-modal';
import { initialResumeData } from '@/lib/initialResumeData';
import { useRouter } from 'next/navigation';

const NewResumeModal = ({
  slug,
  setSlug
}: {
  slug: string | null;
  setSlug: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [resumeName, setResumeName] = useState('');
  const router = useRouter();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setResumeName(name);
    setSlug(
      name
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
    );
  };

  const handleCreate = async () => {
    const data = { ...initialResumeData, title: slug };
    const res = await fetch('/api/resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data
      })
    });
    if (res.ok) {
      console.log('Resume created successfully');
      const data = await res.json();
      console.log('Response:', `/resume/edit/${data.resume._id}`);
      router.push(`/resume/edit/${data.resume._id}`);
    } else {
      console.error('Failed to create resume');
    }
  };

  return (
    <Modal>
      <ModalTrigger className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="mx-auto inline-flex h-full w-fit cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-semibold text-white backdrop-blur-3xl">
          Create New Resume
          <ArrowUpNarrowWideIcon className="ml-2 h-5 w-5" />
        </span>
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <div className="space-y-4 p-6">
            <h2 className="text-xl font-semibold">Name Your Resume</h2>
            <div>
              <label htmlFor="resumeName" className="block text-sm font-medium">
                Resume Name
              </label>
              <input
                type="text"
                id="resumeName"
                value={resumeName}
                onChange={handleNameChange}
                className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter a name for your resume"
              />
            </div>
            {slug && (
              <p className="text-sm">
                Generated Slug: <span className="font-mono">{slug}</span>
              </p>
            )}
            <button
              onClick={handleCreate}
              disabled={!resumeName}
              className="w-full rounded-md bg-blue-400 px-4 py-2 font-semibold text-gray-900 hover:bg-blue-500 disabled:bg-gray-300"
            >
              Create
            </button>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default NewResumeModal;
