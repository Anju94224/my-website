import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, message } = body;

    // Save to MongoDB
    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      { success: true, data: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT API ERROR:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  } }