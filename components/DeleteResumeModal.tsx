import { Trash } from 'lucide-react';
import { Modal, ModalBody, ModalContent, ModalTrigger} from './ui/animated-modal';
import { toast } from '@/hooks/use-toast';
import { ResumeDataType } from '@/lib/types';

const DeleteResumeModal = ({ resume }: { resume: ResumeDataType | null }) => {
  if (!resume) {
    return null;
  }

  const handleDelete = async () => {
    fetch(`/api/resume/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: resume._id
      })
    }).then((res) => {
      if (res.ok) {
        toast({
          description: 'Resume deleted successfully ✅',
          variant: 'default'
        });
        window.location.href = '/resume';
      } else {
        toast({
          description: 'Failed to delete resume',
          variant: 'destructive'
        });
      }
    });
  };

  return (
    <Modal>
      <ModalTrigger>
        <Trash size={25} />
      </ModalTrigger>
      <ModalBody>
        <ModalContent>
          <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
            <h2 className="text-xl font-semibold">Are you sure you want to delete this resume?</h2>
            <h2 className="text-lg font-semibold">
              Deleting:{' '}
              {resume.title
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </h2>

            <button
              onClick={handleDelete}
              className="w-full rounded-md bg-red-400 px-4 py-2 font-semibold text-gray-900 hover:bg-red-500"
            >
              Delete
            </button>
            {/* <button
              onClick={() => {
                console.log('Cancel delete');
              }}
              className="w-full rounded-md px-4 py-2 font-semibold text-white hover:bg-gray-800"
            >
              Cancel
            </button> */}
            <p className="text-sm">This action cannot be undone.</p>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default DeleteResumeModal;
