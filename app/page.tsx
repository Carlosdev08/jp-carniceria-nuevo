import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Beef, Fish, Timer, Award, Phone } from "lucide-react"

const products = [
  {
    category: "Carnes",
    items: [
      { name: "Solomillo de Ternera", price: "24.99€/kg", image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a" },
      { name: "Chuletas de Cordero", price: "19.99€/kg", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7" },
      { name: "Pechuga de Pollo", price: "8.99€/kg", image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791" },
    ]
  },
  {
    category: "Pescados",
    items: [
      { name: "Lubina Fresca", price: "18.99€/kg", image: "https://images.unsplash.com/photo-1611171711791-b34b41c4f827" },
      { name: "Salmón Premium", price: "22.99€/kg", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6" },
      { name: "Gambas Rojas", price: "29.99€/kg", image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47" },
    ]
  }
]

const offers = [
  {
    title: "Pack Barbacoa",
    description: "Selección especial de carnes para barbacoa",
    price: "49.99€",
    oldPrice: "65.99€",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
  },
  {
    title: "Marisco Fresco",
    description: "Combinado de mariscos del día",
    price: "39.99€",
    oldPrice: "54.99€",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47"
  }
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1553163147-622ab57be1c7"
          alt="Carnicería"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            J&P
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Carnicería & Pescadería de calidad
          </p>
          <Button asChild size="lg">
            <Link href="#productos">Ver Productos</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Timer className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Productos Frescos</h3>
            <p className="text-muted-foreground">
              Recibimos productos frescos diariamente
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Máxima Calidad</h3>
            <p className="text-muted-foreground">
              Seleccionamos los mejores productos
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="h-12 w-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Pedidos por Teléfono</h3>
            <p className="text-muted-foreground">
              Haz tu pedido y recógelo en tienda
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="productos" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Productos
          </h2>
          
          {products.map((section) => (
            <div key={section.category} className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
                {section.category === "Carnes" ? (
                  <Beef className="h-6 w-6" />
                ) : (
                  <Fish className="h-6 w-6" />
                )}
                {section.category}
              </h3>
              
              <div className="grid gap-6 md:grid-cols-3">
                {section.items.map((item) => (
                  <Card key={item.name}>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{item.name}</h4>
                      <p className="text-primary font-medium">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offers */}
      <section id="ofertas" className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ofertas Especiales
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {offers.map((offer) => (
              <Card key={offer.title}>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4">Oferta</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">{offer.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{offer.oldPrice}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contacto
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold mb-4">Horario</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Lunes a Viernes: 8:00 - 20:00</p>
                <p>Sábados: 8:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Calle Principal 123</p>
                <p>28001 Madrid</p>
                <p>Tel: 900 000 000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}