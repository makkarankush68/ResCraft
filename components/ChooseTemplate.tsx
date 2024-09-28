import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';

const ChooseTemplate = ({
  selectedTemplate,
  setSelectedTemplate
}: {
  selectedTemplate: number;
  setSelectedTemplate: (value: number) => void;
}) => {
  return (
    <div className="mx-auto flex w-full items-center justify-around">
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Choose a Template</h2>
        <div className="flex flex-col gap-3">
          <Button
            onClick={() => setSelectedTemplate(1)}
            variant={selectedTemplate === 1 ? 'default' : 'outline'}
          >
            Template 1
          </Button>
          <Button
            onClick={() => setSelectedTemplate(2)}
            variant={selectedTemplate === 2 ? 'default' : 'outline'}
          >
            Template 2
          </Button>
          <Button
            onClick={() => setSelectedTemplate(3)}
            variant={selectedTemplate === 3 ? 'default' : 'outline'}
          >
            Template 3
          </Button>
        </div>
      </div>

      <div className="flex p-4">
        <Image
          src={`/previews/resume${selectedTemplate || 1}.png`}
          alt="Template 1"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default ChooseTemplate;
