import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Si el usuario no está autenticado y la ruta no es /login,
  // redirigir a /login
  if (!session && req.nextUrl.pathname !== "/login") {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = "/login"
    return NextResponse.redirect(redirectUrl)
  }

  // Si el usuario está autenticado y la ruta es /login,
  // redirigir a la página principal
  if (session && req.nextUrl.pathname === "/login") {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = "/"
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}