"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CartItem } from "./cart-item"
import { useCart } from "@/lib/store"
import { formatPrice } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

export function CartSheet() {
  const cart = useCart()
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrito de compra</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          {cart.items.length === 0 ? (
            <p className="text-muted-foreground text-center py-6">
              Tu carrito está vacío
            </p>
          ) : (
            <>
              {cart.items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <Separator />
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  {formatPrice(cart.total())}
                </span>
              </div>
              <Button className="w-full">Realizar pedido</Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}