import mogoose from 'mongoose';

const connection: { isConnected: number } = { isConnected: 0 };

export default async function dbConnect() {
  if (connection.isConnected) return;

  const db = await mogoose.connect(process.env.MONGODB_URI || '', {});
  connection.isConnected = db.connections[0].readyState;
}
