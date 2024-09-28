import { ResumeData } from "./types";

export const initialResumeData: ResumeData = {
  personalInfo: {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
    linkedin: 'https://linkedin.com/in/janesmith',
    github: 'https://github.com/janesmith',
    twitter: 'https://twitter.com/janesmith',
    portfolio: 'https://janesmith.dev',
    location: 'Los Angeles, CA',
    summary:
      'Full-stack developer with 5+ years of experience in building responsive web applications and leading engineering teams. Passionate about learning new technologies and improving software scalability and performance.'
  },
  projects: [
    {
      name: 'Social Media Platform',
      description: [
        'Designed and developed a scalable social media platform using React and Node.js.',
        'Integrated real-time notifications and messaging using WebSockets.',
        'Deployed on AWS with CI/CD pipeline automation.'
      ],
      techUsed: ['React', 'Node.js', 'AWS', 'MongoDB', 'WebSockets'],
      date: 'June 2023'
    }
  ],
  workExperience: [
    {
      company: 'Tech Innovators Inc.',
      position: 'Lead Software Engineer',
      location: 'Remote',
      startDate: 'April 2020',
      endDate: 'Present',
      description: [
        'Led a team of 7 engineers to build scalable microservices architecture for a cloud-based SaaS platform.',
        'Collaborated with the product team to define technical roadmaps and deliver on key project milestones.',
        'Reduced server response times by 30% by optimizing backend algorithms.'
      ]
    },
    {
      company: 'Creative Web Solutions',
      position: 'Full Stack Developer',
      location: 'San Francisco, CA',
      startDate: 'August 2017',
      endDate: 'March 2020',
      description: [
        'Developed and maintained responsive web applications using React, Node.js, and PostgreSQL.',
        'Integrated third-party APIs for payments, shipping, and social media sharing.',
        'Enhanced application performance by reducing page load times by 20%.'
      ]
    }
  ],
  education: [
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      startYear: '2013',
      endYear: '2017',
      marks: '3.9 GPA'
    }
  ],
  skills: {
    technical: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'GraphQL', 'MongoDB'],
    soft: ['Team Leadership', 'Communication', 'Problem-Solving', 'Time Management'],
    tools: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'AWS'],
    other: ['Project Management', 'Agile Methodologies', 'Public Speaking']
  }
};
