import { Skills } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlusCircle, Trash2 } from 'lucide-react';

type SkillsFormProps = {
  data: Skills;
  updateData: (data: Skills) => void;
};

export default function SkillsForm({ data, updateData }: SkillsFormProps) {
  const handleChange = (category: keyof Skills, index: number, value: string) => {
    const newData = { ...data };
    if (newData[category]) newData[category][index] = value;
    updateData(newData);
  };

  const addSkill = (category: keyof Skills) => {
    const newData = { ...data };
    newData[category] = [...(newData[category] || []), ''];
    updateData(newData);
  };

  const removeSkill = (category: keyof Skills, index: number) => {
    const newData = { ...data };
    if (newData[category]) newData[category] = newData[category].filter((_, i) => i !== index);
    updateData(newData);
  };

  const renderSkillCategory = (category: keyof Skills) => (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          {data[category] &&
            data[category].map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Input
                  value={skill}
                  onChange={(e) => handleChange(category, index, e.target.value)}
                  placeholder={`${category.charAt(0).toUpperCase() + category.slice(1)} Skill`}
                />
                <Button variant="ghost" size="icon" onClick={() => removeSkill(category, index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
        </div>
        <Button variant="outline" size="sm" onClick={() => addSkill(category)} className="mt-4">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add {category.charAt(0).toUpperCase() + category.slice(1)} Skill
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <Tabs defaultValue="technical" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="technical">Technical Skills</TabsTrigger>
        <TabsTrigger value="soft">Soft Skills</TabsTrigger>
        <TabsTrigger value="tools">Tools</TabsTrigger>
        <TabsTrigger value="other">Other Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="technical" className="mt-4">
        {renderSkillCategory('technical')}
      </TabsContent>
      <TabsContent value="soft" className="mt-4">
        {renderSkillCategory('soft')}
      </TabsContent>
      <TabsContent value="tools" className="mt-4">
        {renderSkillCategory('tools')}
      </TabsContent>
      <TabsContent value="other" className="mt-4">
        {renderSkillCategory('other')}
      </TabsContent>
    </Tabs>
  );
}
