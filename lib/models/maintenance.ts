import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed", "cancelled"],
    default: "pending",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high", "urgent"],
    default: "medium",
  },
  requestedBy: { type: String, required: true },
  assignedTo: { type: String },
  location: { type: String, required: true },
  requestDate: { type: Date, default: Date.now },
  completionDate: { type: Date },
  lastUpdated: { type: Date, default: Date.now },
  notes: [
    {
      content: String,
      author: String,
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

export const Maintenance =
  mongoose.models.Maintenance ||
  mongoose.model("Maintenance", maintenanceSchema);
