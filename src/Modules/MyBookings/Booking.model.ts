import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for TypeScript
export interface Tbooking extends Document {
  user: mongoose.Types.ObjectId;
  slot: mongoose.Types.ObjectId;
  isDeleted: boolean;
  isConfirm: boolean;
}

// Define the Mongoose schema
const bookingSchema: Schema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model
    required: true  // Ensures user is required
  },
  slot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slot',  // Reference to the Slot model
    required: true  // Ensures slot is required
  },
  isDeleted: {
    type: Boolean,
    default: false  // Defaults to false if not provided
  },
  isConfirm: {
    type: Boolean,
    default: false  // Defaults to false if not provided
  }
});

// Create and export the model
const MybookingModel = mongoose.model<Tbooking>('Booking', bookingSchema);
export default MybookingModel;
