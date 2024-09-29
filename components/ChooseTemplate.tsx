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
    <div className="mx-auto flex w-full items-center justify-around max-md:flex-col">
      <div>
        <h2 className="mb-4 max-w-full text-center text-lg font-semibold sm:text-2xl">
          Choose a Template
        </h2>
        <div className="scrollbar-hide flex max-w-[90vw] gap-3 overflow-x-scroll md:flex-col">
          {[...Array(3)].map((_, i) => (
            <Button
              key={i}
              onClick={() => setSelectedTemplate(i + 1)}
              variant={selectedTemplate === i + 1 ? 'default' : 'outline'}
            >
              Template {i + 1}
            </Button>
          ))}
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
