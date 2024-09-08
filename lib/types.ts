export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  twitter: string;
};

export type Project = {
  name: string;
  description: string[];
  techUsed: string[];
  date: string;
};

export type WorkExperience = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export type Education = {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
  marks: string;
};

export type Skills = {
  technical: string[];
  soft: string[];
  tools: string[];
  other: string[];
};

export type ResumeData = {
  personalInfo: PersonalInfo;
  projects: Project[];
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skills;
};
