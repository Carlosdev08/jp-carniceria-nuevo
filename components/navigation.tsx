"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { CartSheet } from "./cart/cart-sheet"
import { useToast } from "@/components/ui/use-toast"

const routes = [
  { name: "Inicio", path: "/" },
  { name: "Productos", path: "/#productos" },
  { name: "Ofertas", path: "/#ofertas" },
  { name: "Contacto", path: "/#contacto" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const handleLogout = async () => {
    try {
      const { supabase } = await import('@/lib/supabase')
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        toast({
          title: "Error",
          description: "No se pudo cerrar sesión.",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Sesión cerrada",
          description: "Has cerrado sesión correctamente.",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error al cerrar sesión.",
        variant: "destructive",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">J&P</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {route.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="tel:+34900000000" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">900 000 000</span>
          </Link>
          <CartSheet />
          <Button variant="outline" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {route.name}
                </Link>
              ))}
              <Button variant="outline" onClick={handleLogout} className="mt-4">
                Cerrar sesión
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}