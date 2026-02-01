import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const yourEmail = process.env.YOUR_EMAIL;

    if (!resendKey || !yourEmail) {
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY or YOUR_EMAIL" },
        { status: 500 }
      );
    }

    const { name, email } = parsed.data;

    const resend = new Resend(resendKey);
    const { error } = await resend.emails.send({
      from: "StackOptimizer Waitlist <onboarding@resend.dev>",
      to: [yourEmail],
      subject: "New StackOptimizer Waitlist Signup",
      text: `Name: ${name || "Anonymous"}\nEmail: ${email}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: `Email error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { success: false, error: err instanceof Error ? err.message : "Server error" },
      { status: 500 }
    );
  }
}