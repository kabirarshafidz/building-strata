import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },

  unitNumber: {
    type: String,
    required: true,
    trim: true,
  },
  residentType: {
    type: String,
    required: true,
    enum: ["Owner", "Tenant", "Family Member"],
    default: "Owner",
  },
  status: {
    type: String,
    required: true,
    enum: ["Active", "Inactive", "Pending"],
    default: "Active",
  },
  notificationPreferences: {
    email: { type: Boolean, default: true },
    sms: { type: Boolean, default: false },
    maintenance: { type: Boolean, default: true },
    meetings: { type: Boolean, default: true },
  },
  twoFactorEnabled: {
    type: Boolean,
    default: false,
  },
  buildingInfo: {
    name: String,
    address: String,
    contact: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
