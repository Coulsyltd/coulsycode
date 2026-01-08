import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Initialize Resend only when needed (not during build)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return NextResponse.json(
        { 
          error: "Email service not configured. Please add RESEND_API_KEY to Netlify environment variables.",
          hint: "Go to Netlify Dashboard → Site Settings → Environment Variables"
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const formData = await request.formData();
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const challenge = formData.get("challenge") as string;
    const message = formData.get("message") as string;

    // Validate required fields
    if (!name || !email || !challenge || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend (like old PHP mail() but modern)
    // Sending to info@coulsycode.co.uk which forwards to robert@coulsy.co.uk via Cloudflare
    // Using verified domain as sender (coulsycode.co.uk is verified in Resend)
    const { data, error } = await resend.emails.send({
      from: "Contact Form <info@coulsycode.co.uk>",
      to: "info@coulsycode.co.uk",
      replyTo: email,
      subject: `New Contact Form Submission from ${name} - coulsycode.co.uk`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">From coulsycode.co.uk website</p>
          </div>
          <div style="background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <div style="background-color: white; padding: 20px; border-radius: 4px; margin-bottom: 15px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Name:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
              ${company ? `<p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Company:</strong> ${company}</p>` : ""}
              <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Challenge:</strong> ${challenge}</p>
            </div>
            <div style="background-color: white; padding: 20px; border-radius: 4px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Message:</strong></p>
              <p style="margin: 0; color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p style="margin: 0;">This email was sent from the contact form on <a href="https://coulsycode.co.uk" style="color: #2563eb; text-decoration: none;">coulsycode.co.uk</a></p>
          </div>
        </div>
      `,
      text: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW CONTACT FORM SUBMISSION
From: coulsycode.co.uk website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
Challenge: ${challenge}

Message:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This email was sent from the contact form on coulsycode.co.uk
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error.message || String(error) },
        { status: 500 }
      );
    }

    // Send automated confirmation email to the form submitter
    // Using personal email (robert@coulsycode.co.uk) for authentic personal touch
    // Reply-to set to info@ so replies go to monitored inbox
    const { data: confirmData, error: confirmError } = await resend.emails.send({
      from: "Robert Coulson <robert@coulsycode.co.uk>",
      to: email,
      replyTo: "info@coulsycode.co.uk",
      subject: "Thank you for contacting Coulsy Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0; font-size: 24px;">Thank you for your message, ${name}!</h2>
          </div>
          <div style="background-color: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="margin: 0 0 15px 0; color: #374151; line-height: 1.6;">
              We've received your message and will get back to you as soon as possible.
            </p>
            <div style="background-color: white; padding: 20px; border-radius: 4px; margin: 20px 0; border-left: 4px solid #1e40af;">
              <p style="margin: 0 0 10px 0; font-size: 14px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Your Message:</p>
              <p style="margin: 0; color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            <p style="margin: 15px 0 0 0; color: #374151; line-height: 1.6;">
              If you have any urgent questions, feel free to call us at <a href="tel:07544030486" style="color: #2563eb; text-decoration: none;">07544 030486</a>.
            </p>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p style="margin: 0;">Coulsy Code | <a href="https://coulsycode.co.uk" style="color: #2563eb; text-decoration: none;">coulsycode.co.uk</a></p>
          </div>
        </div>
      `,
      text: `
Thank you for your message, ${name}!

We've received your message and will get back to you as soon as possible.

Your Message:
${message}

If you have any urgent questions, feel free to call us at 07544 030486.

Coulsy Code
coulsycode.co.uk
      `,
    });

    // Log confirmation email errors but don't fail the form submission
    if (confirmError) {
      console.error("Confirmation email error:", confirmError);
      // Continue anyway - the main email was sent successfully
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Form submission error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
