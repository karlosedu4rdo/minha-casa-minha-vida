import { updateSession } from "@/lib/supabase/middleware"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard")
  const isAuthRoute = request.nextUrl.pathname.startsWith("/auth")

  // For protected routes, check authentication
  if (isProtectedRoute || isAuthRoute) {
    return await updateSession(request)
  }

  // For public routes, just pass through
  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
}
