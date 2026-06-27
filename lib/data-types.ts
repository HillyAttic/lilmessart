export interface Product {
  id: string
  name: string
  category: string
  price: string
  stock: number
  status: string
  image?: string
}

export interface Category {
  id: number
  name: string
  image?: string
  icon?: string
  color?: string
  products: number
  description: string
}
