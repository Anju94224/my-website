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

    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <h2>New message from your portfolio!</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
    } catch (emailError) {
      console.error("CONTACT EMAIL ERROR:", emailError?.message ?? emailError);
      return NextResponse.json(
        { success: true, data: newContact, emailError: emailError?.message ?? String(emailError) },
        { status: 201 }
      );
    }

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