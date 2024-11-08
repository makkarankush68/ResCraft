import { ResumeDataType } from '@/lib/types';
import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema<ResumeDataType>({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  personalInfo: {
    name: {
      type: String,
      required: [true, 'Name is required']
    },
    email: {
      type: String,
      required: [true, 'Email is required']
    },
    phone: String,
    linkedin: String,
    github: String,
    twitter: String,
    portfolio: String,
    location: String,
    summary: {
      type: String,
      required: [true, 'Summary is required']
    }
  },
  projects: [
    {
      name: {
        type: String,
        required: [true, 'Project name is required']
      },
      description: {
        type: [String],
        required: [true, 'Project description is required']
      },
      techUsed: {
        type: [String],
        required: [true, 'Tech stack is required']
      },
      date: {
        type: String,
        required: [true, 'Project date is required']
      }
    }
  ],
  workExperience: [
    {
      company: {
        type: String,
        required: [true, 'Company name is required']
      },
      position: {
        type: String,
        required: [true, 'Position is required']
      },
      location: String,
      startDate: {
        type: String,
        required: [true, 'Start date is required']
      },
      endDate: {
        type: String,
        required: [true, 'End date is required']
      },
      description: {
        type: [String],
        required: [true, 'Description is required']
      }
    }
  ],
  education: [
    {
      institution: {
        type: String,
        required: [true, 'Institution name is required']
      },
      degree: {
        type: String,
        required: [true, 'Degree is required']
      },
      startYear: {
        type: String,
        required: [true, 'Start year is required']
      },
      endYear: {
        type: String,
        required: [true, 'End year is required']
      },
      marks: String
    }
  ],
  skills: {
    technical: [String],
    soft: [String],
    tools: [String],
    other: [String]
  }
});

const ResumeModel = mongoose.models.Resume || mongoose.model('Resume', resumeSchema);

export { ResumeModel };
