import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-min-32-characters-long"
)

export interface SessionPayload {
  clientSlug: string
  expiresAt: Date
}

// Token expiration: 24 hours
const EXPIRATION_TIME = 24 * 60 * 60 * 1000

export async function encrypt(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload as any)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(secret)
}

export async function decrypt(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ["HS256"],
    })
    return payload as unknown as SessionPayload
  } catch (error) {
    console.error("Failed to verify token:", error)
    return null
  }
}

export async function createSession(clientSlug: string): Promise<void> {
  const expiresAt = new Date(Date.now() + EXPIRATION_TIME)
  const session = await encrypt({ clientSlug, expiresAt })

  const cookieStore = await cookies()
  cookieStore.set("client_session", session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  })
}

export async function verifySession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies()
  const cookie = cookieStore.get("client_session")?.value

  if (!cookie) {
    return null
  }

  const session = await decrypt(cookie)

  if (!session) {
    return null
  }

  // Check if session is expired
  if (new Date(session.expiresAt) < new Date()) {
    return null
  }

  return session
}

export async function deleteSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("client_session")
}

export async function updateSession(request: NextRequest): Promise<NextResponse> {
  const cookie = request.cookies.get("client_session")?.value
  const response = NextResponse.next()

  if (!cookie) {
    return response
  }

  const session = await decrypt(cookie)

  if (!session) {
    return response
  }

  // Check if session is expired
  if (new Date(session.expiresAt) < new Date()) {
    response.cookies.delete("client_session")
    return response
  }

  // Refresh the session if it's still valid
  const expiresAt = new Date(Date.now() + EXPIRATION_TIME)
  const newSession = await encrypt({ ...session, expiresAt })

  response.cookies.set("client_session", newSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  })

  return response
}

export function getPasscodeForClient(clientSlug: string): string | null {
  const envKey = `CLIENT_${clientSlug.toUpperCase()}_PASSCODE`
  return process.env[envKey] || null
}
