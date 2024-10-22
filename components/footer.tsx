import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 md:py-16 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold mb-4">La Marina</h3>
          <p className="text-sm text-muted-foreground">
            Carnicería y pescadería de calidad, ofreciendo los mejores productos frescos desde 1980.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <div className="space-y-2">
            <Link href="https://maps.google.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <MapPin className="h-4 w-4" />
              Calle Principal 123, Madrid
            </Link>
            <Link href="tel:+34900000000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
              <Phone className="h-4 w-4" />
              900 000 000
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="border-t">
        <div className="container py-6">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} La Marina. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}