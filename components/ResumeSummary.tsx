import { ResumeDataType } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Github, Twitter } from 'lucide-react'; // Example for social icons
import { AvatarIcon } from '@radix-ui/react-icons';

type ResumeSummaryProps = {
  data: ResumeDataType;
};

export default function ResumeSummary({ data }: ResumeSummaryProps) {
  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-4 md:grid-cols-2">
            <div>
              <dt className="font-semibold">Name:</dt>
              <dd>{data.personalInfo.name}</dd>
            </div>
            <div>
              <dt className="font-semibold">Email:</dt>
              <dd>{data.personalInfo.email}</dd>
            </div>
            <div>
              <dt className="font-semibold">Phone:</dt>
              <dd>{data.personalInfo.phone}</dd>
            </div>
          </dl>
          {/* Socials */}
          <dl className="mt-4 grid gap-4 md:grid-cols-2">
            {data.personalInfo.linkedin && (
              <div>
                <dt className="flex items-center font-semibold">
                  <Linkedin className="mr-2" /> LinkedIn:
                </dt>
                <dd>{data.personalInfo.linkedin}</dd>
              </div>
            )}
            {data.personalInfo.github && (
              <div>
                <dt className="flex items-center font-semibold">
                  <Github className="mr-2" /> GitHub:
                </dt>
                <dd>{data.personalInfo.github}</dd>
              </div>
            )}
            {data.personalInfo.twitter && (
              <div>
                <dt className="flex items-center font-semibold">
                  <Twitter className="mr-2" /> Twitter:
                </dt>
                <dd>{data.personalInfo.twitter}</dd>
              </div>
            )}
            {data.personalInfo.portfolio && (
              <div>
                <dt className="flex items-center font-semibold">
                  <AvatarIcon className="mr-2 size-6" /> Portfolio:
                </dt>
                <dd>{data.personalInfo.portfolio}</dd>
              </div>
            )}
          </dl>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-semibold">{project.name}</h4>
              <p className="text-sm text-muted-foreground">Date: {project.date}</p>
              <p className="text-sm">
                <strong>Technologies:</strong> {project.techUsed.join(', ')}
              </p>
              <ul className="list-inside list-disc text-sm">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Work Experience */}
      <Card>
        <CardHeader>
          <CardTitle>Work Experience</CardTitle>
        </CardHeader>
        <CardContent>
          {data.workExperience.map((exp, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-lg font-semibold">
                {exp.position} at {exp.company}
              </h4>
              <p className="text-sm text-muted-foreground">
                {exp.startDate} - {exp.endDate} | {exp.location}
              </p>
              <ul className="list-inside list-disc text-sm">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-lg font-semibold">{edu.degree}</h4>
              <p className="text-sm text-muted-foreground">
                {edu.institution}, {edu.startYear} - {edu.endYear}
              </p>
              <p className="text-sm">Marks/CGPA: {edu.marks}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Technical Skills</h4>
              <p>{data.skills.technical.join(', ')}</p>
            </div>
            <div>
              <h4 className="font-semibold">Soft Skills</h4>
              <p>{data.skills.soft.join(', ')}</p>
            </div>
            <div>
              <h4 className="font-semibold">Tools</h4>
              <p>{data.skills.tools.join(', ')}</p>
            </div>
            {data.skills.other.length > 0 && (
              <div>
                <h4 className="font-semibold">Other Skills</h4>
                <p>{data.skills.other.join(', ')}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
