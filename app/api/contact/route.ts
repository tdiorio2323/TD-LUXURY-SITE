import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const TO = process.env.CONTACT_TO_EMAIL || "tyler@tdstudiosny.com"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { fullName, email, details, contactType, service, company, phone, budget, timeline } = data ?? {}

    if (!fullName || !email) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    // Build email body
    const message = `
Contact Form Submission
-----------------------

Name: ${fullName}
Email: ${email}
Company: ${company || "N/A"}
Phone: ${phone || "N/A"}
Service: ${service || "N/A"}
Budget: ${budget || "N/A"}
Timeline: ${timeline || "N/A"}
Contact Type: ${contactType || "general"}

Message:
${details || "No additional details provided"}
    `.trim()

    // Send via Resend if API key is configured, otherwise fallback to console
    if (resend) {
      try {
        await resend.emails.send({
          from: "TD Studios <noreply@tdstudiosny.com>",
          to: [TO],
          subject: `New Contact — ${fullName} (${email})`,
          text: message,
        })
        console.info("[contact] email sent via Resend", { fullName, email, contactType })
      } catch (emailError) {
        console.error("[contact] Resend error", emailError)
        // Log but don't fail the request - the form data is still captured
        console.info("[contact] fallback logging", { fullName, email, company, phone, service, details })
      }
    } else {
      console.info("[CONTACT] (dev fallback - no RESEND_API_KEY)", {
        fullName,
        email,
        company,
        phone,
        service,
        contactType,
        budget,
        timeline,
        details,
      })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[contact] failed to process request", error)
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
}
