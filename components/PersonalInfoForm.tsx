import { PersonalInfo } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type PersonalInfoFormProps = {
  data: PersonalInfo;
  updateData: (data: PersonalInfo) => void;
};

export default function PersonalInfoForm({ data, updateData }: PersonalInfoFormProps) {
  const handleChange = (field: keyof PersonalInfo) => (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData({ ...data, [field]: e.target.value });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={data.name}
              onChange={handleChange('name')}
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={data.email}
              onChange={handleChange('email')}
              placeholder="john@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={data.phone}
              onChange={handleChange('phone')}
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              value={data.linkedin}
              onChange={handleChange('linkedin')}
              placeholder="linkedin.com/in/johndoe"
            />
          </div>
          <div>
            <Label htmlFor="github">GitHub</Label>
            <Input
              id="github"
              value={data.github}
              onChange={handleChange('github')}
              placeholder="github.com/johndoe"
            />
          </div>
          <div>
            <Label htmlFor="twitter">Twitter</Label>
            <Input
              id="twitter"
              value={data.twitter}
              onChange={handleChange('twitter')}
              placeholder="twitter.com/johndoe"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
