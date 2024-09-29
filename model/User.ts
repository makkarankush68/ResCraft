import mongoose, { Schema } from 'mongoose';

interface User {
  email: string;
  password?: string;
  name: string;
  createdAt: Date;
  imageUrl?: string;
  provider: 'google' | 'email';
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
    required: false
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
  },
  provider: {
    type: String,
    required: [true, 'Provider is required'],
    default: 'google'
  }
});

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);

export { UserModel };
