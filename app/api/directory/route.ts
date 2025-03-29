import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/lib/models/user";

// Get all residents
export async function GET() {
  try {
    await connectDB();
    const residents = await User.find();
    return NextResponse.json(residents);
  } catch (error) {
    console.error("Error fetching residents:", error);
    return NextResponse.json(
      { error: "Failed to fetch residents" },
      { status: 500 }
    );
  }
}

// Create a new resident
interface ResidentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  unitNumber: string;
  residentType: "Owner" | "Tenant" | "Family Member";
  id?: string;
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = (await request.json()) as ResidentData;
    const newResident = new User(data);
    await newResident.save();

    // Redirect to the directory listing page after successful creation
    return NextResponse.redirect(new URL("/directory", request.url), 303);
  } catch (error) {
    console.error("Error creating resident:", error);
    return NextResponse.json(
      { error: "Failed to create resident" },
      { status: 500 }
    );
  }
}

// Update a resident
export async function PUT(request: Request) {
  try {
    await connectDB();
    const data = (await request.json()) as ResidentData & { id: string };
    const { id, ...updateData } = data;

    const updatedResident = await User.findByIdAndUpdate(
      id,
      { ...updateData, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedResident) {
      return NextResponse.json(
        { error: "Resident not found" },
        { status: 404 }
      );
    }

    // Redirect to the updated resident's page after successful update
    return NextResponse.redirect(
      new URL(`/directory/${updatedResident._id}`, request.url),
      303
    );
  } catch (error) {
    console.error("Error updating resident:", error);
    return NextResponse.json(
      { error: "Failed to update resident" },
      { status: 500 }
    );
  }
}

// Delete a resident
export async function DELETE(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Resident ID is required" },
        { status: 400 }
      );
    }

    const deletedResident = await User.findByIdAndDelete(id);

    if (!deletedResident) {
      return NextResponse.json(
        { error: "Resident not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Resident deleted successfully" });
  } catch (error) {
    console.error("Error deleting resident:", error);
    return NextResponse.json(
      { error: "Failed to delete resident" },
      { status: 500 }
    );
  }
}
