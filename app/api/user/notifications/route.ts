import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/user";

export async function PUT(request: Request) {
  try {
    await connectDB();
    const data = await request.json();

    const { email, notificationPreferences } = data;

    // Find user by email and update their notification preferences
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        notificationPreferences,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating notification preferences:", error);
    return NextResponse.json(
      { error: "Failed to update notification preferences" },
      { status: 500 }
    );
  }
}
