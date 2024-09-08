import { Education } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Trash2 } from 'lucide-react';

type EducationFormProps = {
  data: Education[];
  updateData: (data: Education[]) => void;
};

export default function EducationForm({ data, updateData }: EducationFormProps) {
  const handleChange = (index: number, field: keyof Education, value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    updateData(newData);
  };

  const addEducation = () => {
    updateData([...data, { institution: '', degree: '', startYear: '', endYear: '', marks: '' }]);
  };

  const removeEducation = (index: number) => {
    updateData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {data.map((education, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">Education {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor={`institution-${index}`}>Institution</Label>
                <Input
                  id={`institution-${index}`}
                  value={education.institution}
                  onChange={(e) => handleChange(index, 'institution', e.target.value)}
                  placeholder="University Name"
                />
              </div>
              <div>
                <Label htmlFor={`degree-${index}`}>Degree</Label>
                <Input
                  id={`degree-${index}`}
                  value={education.degree}
                  onChange={(e) => handleChange(index, 'degree', e.target.value)}
                  placeholder="Bachelor of Science"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor={`start-year-${index}`}>Start Year</Label>
                  <Input
                    id={`start-year-${index}`}
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    value={education.startYear}
                    onChange={(e) => handleChange(index, 'startYear', e.target.value)}
                    placeholder="2018"
                  />
                </div>
                <div>
                  <Label htmlFor={`end-year-${index}`}>End Year</Label>
                  <Input
                    id={`end-year-${index}`}
                    type="number"
                    min="1900"
                    max="2099"
                    step="1"
                    value={education.endYear}
                    onChange={(e) => handleChange(index, 'endYear', e.target.value)}
                    placeholder="2022"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor={`marks-${index}`}>Marks/CGPA</Label>
                <Input
                  id={`marks-${index}`}
                  value={education.marks}
                  onChange={(e) => handleChange(index, 'marks', e.target.value)}
                  placeholder="3.8/4.0 or 85%"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" onClick={() => removeEducation(index)}>
              <Trash2 className="mr-2 h-4 w-4" />
              Remove Education
            </Button>
          </CardFooter>
        </Card>
      ))}
      <Button onClick={addEducation}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Education
      </Button>
    </div>
  );
}
