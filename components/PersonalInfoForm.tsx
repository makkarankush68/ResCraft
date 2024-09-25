import { PersonalInfo } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from './ui/textarea';

type PersonalInfoFormProps = {
  data: PersonalInfo;
  updateData: (data: PersonalInfo) => void;
};

export default function PersonalInfoForm({ data, updateData }: PersonalInfoFormProps) {
  const handleChange =
    (field: keyof PersonalInfo) =>
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      updateData({ ...data, [field]: e.target.value });
    };

  const PersonalInputFields: Record<
    keyof PersonalInfo,
    { label: string; placeholder: string; type: string }
  > = {
    name: {
      label: 'Name',
      placeholder: 'John Doe',
      type: 'text'
    },
    email: {
      label: 'Email',
      placeholder: 'john@example.com',
      type: 'email'
    },
    phone: {
      label: 'Phone',
      placeholder: '+1 (555) 123-4567',
      type: 'tel'
    },
    linkedin: {
      label: 'LinkedIn',
      placeholder: 'linkedin.com/in/johndoe',
      type: 'url'
    },
    github: {
      label: 'GitHub',
      placeholder: 'github.com/johndoe',
      type: 'url'
    },
    twitter: {
      label: 'Twitter',
      placeholder: 'twitter.com/johndoe',
      type: 'url'
    },
    portfolio: {
      label: 'Portfolio',
      placeholder: 'johndoe.com',
      type: 'url'
    },
    location: {
      label: 'Location',
      placeholder: 'New York, USA',
      type: 'text'
    },
    summary: {
      label: 'Summary',
      placeholder: 'A brief summary about yourself',
      type: 'text'
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {Object.entries(PersonalInputFields).map(([field, { label, placeholder, type }]) => (
            <div key={field}>
              <Label htmlFor={field}>{label}</Label>
              {field !== 'summary' ? (
                <Input
                  id={field}
                  type={type}
                  placeholder={placeholder}
                  value={data[field as keyof PersonalInfo]}
                  onChange={handleChange(field as keyof PersonalInfo)}
                />
              ) : (
                <Textarea
                  id={field}
                  placeholder={placeholder}
                  value={data[field as keyof PersonalInfo]}
                  onChange={handleChange(field as keyof PersonalInfo)}
                />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
