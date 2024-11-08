import { NextRequest, NextResponse } from 'next/server';
import { ResumeModel } from '@/model/Resume';
import dbConnect from '@/lib/dbConnect';
import { UserModel } from '@/model/User';
import { getServerSession } from 'next-auth';

export async function GET() {
  await dbConnect();
  const session = await getServerSession();
  const email = session?.user?.email;
  const user = await UserModel.findOne({ email });
  if (user) {
    const resumes = await ResumeModel.find({ userId: user._id });
    if (resumes) {
      return NextResponse.json(resumes, { status: 200 });
    }
  }
  return NextResponse.json({ message: 'Resume not found' }, { status: 404 });
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const session = await getServerSession();
  const email = session?.user?.email;
  const { data } = await req.json();
  const user = await UserModel.findOne({ email });
  if (user && data) {
    const newResume = new ResumeModel({ ...data, userId: user._id });
    const resume = await newResume.save();
    return NextResponse.json({ message: 'Resume created', resume }, { status: 201 });
  } else {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  await dbConnect();
  const session = await getServerSession();
  const email = session?.user?.email;
  const { data } = await req.json();
  const user = await UserModel.findOne({ email });
  if (user && data) {
    const updatedResume = await ResumeModel.findOneAndUpdate(
      { userId: user._id, _id: data._id },
      data
    );
    if (updatedResume) {
      return NextResponse.json({ message: 'Resume updated' }, { status: 200 });
    }
  }
  return NextResponse.json({ message: 'Invalid request or resume not found' }, { status: 400 });
}
