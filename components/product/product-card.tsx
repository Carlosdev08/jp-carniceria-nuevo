"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/lib/store"
import { formatPrice } from "@/lib/utils"
import { useToast } from "@/components/ui/use-toast"

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    image: string
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const cart = useCart()
  const { toast } = useToast()

  return (
    <Card>
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-lg font-bold text-primary">
          {formatPrice(product.price)}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => {
            cart.addItem(product)
            toast({
              title: "Producto añadido",
              description: `${product.name} se ha añadido al carrito.`,
            })
          }}
        >
          Añadir al carrito
        </Button>
      </CardFooter>
    </Card>
  )
}