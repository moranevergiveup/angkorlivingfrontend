// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || null;

  // 👉 If user visits root "/" and already logged in → go to dashboard
  if (req.nextUrl.pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  // 👉 Protect dashboard routes → if no token → go to root
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

// ✅ Apply middleware only to root and dashboard routes
export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
