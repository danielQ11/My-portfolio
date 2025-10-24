import mongoose from 'mongoose';

// Simple schema for contact messages
const ContactMessageSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
export default mongoose.models.ContactMessage || mongoose.model('ContactMessage', ContactMessageSchema);
