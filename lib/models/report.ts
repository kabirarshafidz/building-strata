import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["financial", "maintenance"],
    required: true,
  },
  period: {
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  summary: {
    totalRequests: { type: Number, default: 0 },
    completedRequests: { type: Number, default: 0 },
    pendingRequests: { type: Number, default: 0 },
    urgentRequests: { type: Number, default: 0 },
  },
  financialDetails: {
    totalExpenses: { type: Number, default: 0 },
    maintenanceCosts: { type: Number, default: 0 },
    operationalCosts: { type: Number, default: 0 },
  },
  generatedAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["draft", "generated", "sent"],
    default: "draft",
  },
  recipients: [
    {
      email: String,
      sentAt: Date,
      status: {
        type: String,
        enum: ["pending", "sent", "failed"],
        default: "pending",
      },
    },
  ],
});

export const Report =
  mongoose.models.Report || mongoose.model("Report", reportSchema);
