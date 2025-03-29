import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/user";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    await connectDB();
    const resident = await User.findById(id);

    if (!resident) {
      return NextResponse.json(
        { error: "Resident not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(resident);
  } catch (error) {
    console.error("Error fetching resident:", error);
    return NextResponse.json(
      { error: "Failed to fetch resident" },
      { status: 500 }
    );
  }
}
