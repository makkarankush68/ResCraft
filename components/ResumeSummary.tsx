import { ResumeData } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type ResumeSummaryProps = {
  data: ResumeData;
};

export default function ResumeSummary({ data }: ResumeSummaryProps) {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Name:</strong> {data.personalInfo.name}
            </div>
            <div>
              <strong>Email:</strong> {data.personalInfo.email}
            </div>
            <div>
              <strong>Phone:</strong> {data.personalInfo.phone}
            </div>
            <div>
              <strong>LinkedIn:</strong> {data.personalInfo.linkedin}
            </div>
            <div>
              <strong>GitHub:</strong> {data.personalInfo.github}
            </div>
            <div>
              <strong>Twitter:</strong> {data.personalInfo.twitter}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Projects</CardTitle>
        </CardHeader>
        <CardContent>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="font-semibold">{project.name}</h4>
              <p className="text-sm text-muted-foreground">Date: {project.date}</p>
              <p className="text-sm">
                <strong>Technologies:</strong> {project.techUsed.join(', ')}
              </p>
              <ul className="list-inside list-disc">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-sm">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Work Experience</CardTitle>
        </CardHeader>
        <CardContent>
          {data.workExperience.map((exp, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <h4 className="font-semibold">
                {exp.position} at {exp.company}
              </h4>
              <p className="text-sm text-muted-foreground">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-sm text-muted-foreground">{exp.location}</p>
              <ul className="list-inside list-disc">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-2 last:mb-0">
              <h4 className="font-semibold">{edu.degree}</h4>
              <p className="text-sm">
                {edu.institution}, {edu.startYear} - {edu.endYear}
              </p>
              <p className="text-sm">Marks/CGPA: {edu.marks}</p>
            </div>
          ))}
        </CardContent>
      </Card>

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
            <div>
              <h4 className="font-semibold">Other Skills</h4>
              <p>{data.skills.other.join(', ')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
