import { WorkExperience } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Trash2 } from 'lucide-react';

type WorkExperienceFormProps = {
  data: WorkExperience[];
  updateData: (data: WorkExperience[]) => void;
};

export default function WorkExperienceForm({ data, updateData }: WorkExperienceFormProps) {
  const handleChange = (index: number, field: keyof WorkExperience, value: string | string[]) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    updateData(newData);
  };

  const addExperience = () => {
    updateData([
      ...data,
      {
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: ['']
      }
    ]);
  };

  const removeExperience = (index: number) => {
    updateData(data.filter((_, i) => i !== index));
  };

  const addDescription = (index: number) => {
    const newData = [...data];
    newData[index].description.push('');
    updateData(newData);
  };

  const removeDescription = (index: number, descIndex: number) => {
    const newData = [...data];
    newData[index].description = newData[index].description.filter((_, i) => i !== descIndex);
    updateData(newData);
  };

  return (
    <div className="space-y-4">
      {data.map((experience, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">Work Experience {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor={`company-${index}`}>Company</Label>
                <Input
                  id={`company-${index}`}
                  value={experience.company}
                  onChange={(e) => handleChange(index, 'company', e.target.value)}
                  placeholder="Company Name"
                />
              </div>
              <div>
                <Label htmlFor={`position-${index}`}>Position</Label>
                <Input
                  id={`position-${index}`}
                  value={experience.position}
                  onChange={(e) => handleChange(index, 'position', e.target.value)}
                  placeholder="Job Title"
                />
              </div>
              <div>
                <Label htmlFor={`location-${index}`}>Location</Label>
                <Input
                  id={`location-${index}`}
                  value={experience.location}
                  onChange={(e) => handleChange(index, 'location', e.target.value)}
                  placeholder="City, Country"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`start-date-${index}`}>Start Date</Label>
                  <Input
                    id={`start-date-${index}`}
                    type="month"
                    value={experience.startDate}
                    onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`end-date-${index}`}>End Date</Label>
                  <Input
                    id={`end-date-${index}`}
                    type="month"
                    value={experience.endDate}
                    onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label>Job Description</Label>
                {experience.description.map((desc, descIndex) => (
                  <div key={descIndex} className="mt-2 flex items-center space-x-2">
                    <Input
                      value={desc}
                      maxLength={100}
                      onChange={(e) => {
                        const newDescription = [...experience.description];
                        newDescription[descIndex] = e.target.value;
                        handleChange(index, 'description', newDescription);
                      }}
                      placeholder="Job responsibility"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeDescription(index, descIndex)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addDescription(index)}
                  className="mt-2"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Responsibility
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" onClick={() => removeExperience(index)}>
              <Trash2 className="mr-2 h-4 w-4" />
              Remove Experience
            </Button>
          </CardFooter>
        </Card>
      ))}
      <Button onClick={addExperience}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Work Experience
      </Button>
    </div>
  );
}
