import { NextRequest, NextResponse } from "next/server"
import { updateSession, verifySession } from "@/lib/utils/auth"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protect /clients/* routes (except signin pages)
  if (pathname.startsWith("/clients/")) {
    const session = await verifySession()

    if (!session) {
      // Redirect to signin page
      const clientSlug = pathname.split("/")[2]
      return NextResponse.redirect(new URL(`/${clientSlug}/signin`, request.url))
    }

    // Verify the session matches the requested client
    const requestedClient = pathname.split("/")[2]
    if (session.clientSlug !== requestedClient) {
      // Redirect to correct signin page
      return NextResponse.redirect(new URL(`/${requestedClient}/signin`, request.url))
    }

    // Update session expiration
    return await updateSession(request)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)",
  ],
}
