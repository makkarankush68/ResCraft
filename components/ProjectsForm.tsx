import { Project } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Trash2 } from 'lucide-react';

type ProjectsFormProps = {
  data: Project[];
  updateData: (data: Project[]) => void;
};

export default function ProjectsForm({ data, updateData }: ProjectsFormProps) {
  const handleChange = (index: number, field: keyof Project, value: string | string[]) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    updateData(newData);
  };

  const addProject = () => {
    updateData([...data, { name: '', description: [''], techUsed: [''], date: '' }]);
  };

  const removeProject = (index: number) => {
    updateData(data.filter((_, i) => i !== index));
  };

  const addField = (index: number, field: 'description' | 'techUsed') => {
    const newData = [...data];
    newData[index][field] = [...newData[index][field], ''];
    updateData(newData);
  };

  const removeField = (index: number, field: 'description' | 'techUsed', fieldIndex: number) => {
    const newData = [...data];
    newData[index][field] = newData[index][field].filter((_, i) => i !== fieldIndex);
    updateData(newData);
  };

  return (
    <div className="space-y-4">
      {data.map((project, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg">Project {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor={`project-name-${index}`}>Project Name</Label>
                <Input
                  id={`project-name-${index}`}
                  value={project.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                  placeholder="Project Name"
                />
              </div>
              <div>
                <Label htmlFor={`project-date-${index}`}>Date</Label>
                <Input
                  id={`project-date-${index}`}
                  type="month"
                  value={project.date}
                  onChange={(e) => handleChange(index, 'date', e.target.value)}
                />
              </div>
              <div>
                <Label>Technologies Used</Label>
                {project.techUsed.map((tech, techIndex) => (
                  <div key={techIndex} className="mt-2 flex items-center space-x-2">
                    <Input
                      value={tech}
                      onChange={(e) => {
                        const newTechUsed = [...project.techUsed];
                        newTechUsed[techIndex] = e.target.value;
                        handleChange(index, 'techUsed', newTechUsed);
                      }}
                      placeholder="Technology"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeField(index, 'techUsed', techIndex)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addField(index, 'techUsed')}
                  className="mt-2"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Technology
                </Button>
              </div>
              <div>
                <Label>Description</Label>
                {project.description.map((desc, descIndex) => (
                  <div key={descIndex} className="mt-2 flex items-center space-x-2">
                    <Input
                      value={desc}
                      onChange={(e) => {
                        const newDescription = [...project.description];
                        newDescription[descIndex] = e.target.value;
                        handleChange(index, 'description', newDescription);
                      }}
                      placeholder="Project description point"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeField(index, 'description', descIndex)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => addField(index, 'description')}
                  className="mt-2"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Description Point
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" onClick={() => removeProject(index)}>
              <Trash2 className="mr-2 h-4 w-4" />
              Remove Project
            </Button>
          </CardFooter>
        </Card>
      ))}
      <Button onClick={addProject}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Project
      </Button>
    </div>
  );
}
