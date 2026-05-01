import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import { Resend } from "resend";

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

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY in environment variables");
    }

    const resend = new Resend(resendApiKey);

    // 1. Save to MongoDB
    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    // 2. Send email notification to you
    await resend.emails.send({
      from: "Amna Noor <onboarding@resend.dev>",
      to: "itsmenoor20@gmail.com", 
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New message from your portfolio!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
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