"use client"

import Image from "next/image"
import { Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, CartItem as CartItemType } from "@/lib/store"
import { formatPrice } from "@/lib/utils"

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const cart = useCart()

  return (
    <div className="flex gap-4">
      <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-1">
        <span className="font-medium">{item.name}</span>
        <span className="text-sm text-muted-foreground">
          {formatPrice(item.price)}
        </span>
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => {
              if (item.quantity > 1) {
                cart.updateQuantity(item.id, item.quantity - 1)
              } else {
                cart.removeItem(item.id)
              }
            }}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => cart.updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={() => cart.removeItem(item.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}