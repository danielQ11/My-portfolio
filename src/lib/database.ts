import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME || 'portafolio_contact';

if (!MONGODB_URI) {
  throw new Error('Falta MONGODB_URI en .env.local');
}

let cached: typeof mongoose | null = null;

async function connectDB() {
  if (cached) {
    return cached;
  }

  try {
    cached = await mongoose.connect(MONGODB_URI as string);
    return cached;
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
    throw error;
  }
}

export default connectDB;
