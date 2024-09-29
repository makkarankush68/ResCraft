import mongoose, { Schema } from 'mongoose';

interface User {
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  imageUrl?: string;
}

const UserSchema = new Schema<User>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String,
    default: ''
  }
});

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export { UserModel };
