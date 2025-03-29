import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/user";

export async function PUT(request: Request) {
  try {
    await connectDB();
    const data = await request.json();

    const { firstName, lastName, email, phone, buildingInfo } = data;

    // Find user by email and update their profile
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        firstName,
        lastName,
        phone,
        buildingInfo,
        updatedAt: new Date(),
      },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await User.findOne({ email }).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
