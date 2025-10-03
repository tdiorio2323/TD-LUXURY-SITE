import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { fullName, email, details, contactType, service, company, phone, budget, timeline } = data ?? {}

    if (!fullName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    console.info("[contact] inquiry received", {
      fullName,
      email,
      company,
      phone,
      service,
      contactType,
      budget,
      timeline,
      hasDetails: Boolean(details && String(details).trim())
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[contact] failed to parse request", error)
    return NextResponse.json({ error: "Unable to process request" }, { status: 500 })
  }
}
