"use client"

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react"
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  setDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore"
import { db } from "@/lib/firebase"
import type { Product, Category } from "@/lib/data-types"

// ---------- seed data (used only when Firestore is empty) ----------

const seedProducts: Product[] = [
  { id: "#1734-9743", name: "Niker College Bag", category: "Landscape", price: "₹199.99", stock: 120, status: "Available", image: "/images/geo-play-blocks.png" },
  { id: "#1234-4567", name: "Dslr Camera (50mm f/1.9 HRM Lens)", category: "Landscape", price: "₹1,299.99", stock: 34, status: "Available", image: "/images/serene-sphere-decor.png" },
  { id: "#1902-9883", name: "Outdoor Bomber Jacket", category: "Abstract", price: "₹99.99", stock: 0, status: "Not Available", image: "/images/plush-pebble-stools.png" },
  { id: "#8745-1232", name: "Light Blue Teddy", category: "Illustration", price: "₹79.00", stock: 12, status: "Limited Deal", image: "/images/skincare-collection.png" },
  { id: "#1962-9033", name: "Orange Smart Watch (24mm)", category: "Abstract", price: "₹199.99", stock: 55, status: "In Offer", image: "/images/geo-play-blocks.png" },
  { id: "#5523-1122", name: "Leather Jacket for Men", category: "Still Life", price: "₹249.00", stock: 18, status: "Available", image: "/images/plush-pebble-stools.png" },
  { id: "#3312-8890", name: "Wireless Earbuds Pro", category: "Illustration", price: "₹89.99", stock: 200, status: "Available", image: "/images/serene-sphere-decor.png" },
  { id: "#9901-3344", name: "Running Shoes (Air Max)", category: "Landscape", price: "₹129.99", stock: 0, status: "Not Available", image: "/images/skincare-collection.png" },
]

const seedCategories: Category[] = [
  { id: 1, name: "Illustration", image: "https://i.pinimg.com/736x/0e/03/a4/0e03a4da5bb2815d33a845a6ba517219.jpg", products: 2, description: "Hand-drawn and digital illustrations" },
  { id: 2, name: "Abstract", image: "https://i.pinimg.com/1200x/cf/83/49/cf83490e2a369ef7d8752f37bb26553b.jpg", products: 2, description: "Abstract and contemporary art" },
  { id: 3, name: "Landscape", image: "https://i.pinimg.com/736x/e5/25/fd/e525fd76fcf1accf55dd8f23930fba47.jpg", products: 2, description: "Scenic and nature-inspired art" },
  { id: 4, name: "Still Life", image: "https://i.pinimg.com/736x/bc/f7/5c/bcf75ccedc9a18775af72f09bec40376.jpg", products: 2, description: "Classic still life compositions" },
]

// ---------- context shape ----------

interface StoreContextValue {
  products: Product[]
  categories: Category[]
  loading: boolean

  // Product mutations
  addProduct: (p: Product) => Promise<void>
  updateProduct: (p: Product) => Promise<void>
  deleteProduct: (id: string) => Promise<void>

  // Category mutations
  addCategory: (c: Category) => Promise<void>
  updateCategory: (c: Category) => Promise<void>
  deleteCategory: (id: number) => Promise<void>

  // Helpers
  getProductsByCategory: (name: string) => Product[]
}

const StoreContext = createContext<StoreContextValue | null>(null)

// ---------- provider ----------

interface StoreProviderProps {
  children: ReactNode
  initialProducts?: Product[]
  initialCategories?: Category[]
}

export function StoreProvider({
  children,
  initialProducts,
  initialCategories,
}: StoreProviderProps) {
  // Start with server-fetched data if provided, otherwise fall back to seed data
  // This enables SSR: server fetches data → HTML renders instantly → client hydrates
  const [products, setProducts] = useState<Product[]>(
    initialProducts && initialProducts.length > 0 ? initialProducts : seedProducts
  )
  const [categories, setCategories] = useState<Category[]>(
    initialCategories && initialCategories.length > 0 ? initialCategories : seedCategories
  )
  const [loading, setLoading] = useState(true)

  // --- Firestore listeners ---

  useEffect(() => {
    let productsSeeded = false
    let categoriesSeeded = false

    // Listen to products collection
    const productsQuery = query(collection(db, "products"), orderBy("name"))

    const unsubProducts = onSnapshot(productsQuery, (snapshot) => {
      if (snapshot.empty) {
        // Seed data on first load
        if (!productsSeeded) {
          productsSeeded = true
          seedFirestore()
        }
      } else {
        const list: Product[] = []
        snapshot.forEach((d) => list.push(d.data() as Product))
        setProducts(list)
      }
      setLoading(false)
    })

    // Listen to categories collection
    const categoriesQuery = query(collection(db, "categories"), orderBy("id"))

    const unsubCategories = onSnapshot(categoriesQuery, (snapshot) => {
      if (snapshot.empty) {
        if (!categoriesSeeded) {
          categoriesSeeded = true
          seedCategoriesToFirestore()
        }
      } else {
        const list: Category[] = []
        snapshot.forEach((d) => list.push(d.data() as Category))
        setCategories(list)
      }
    })

    return () => {
      unsubProducts()
      unsubCategories()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // --- seed helpers ---

  async function seedFirestore() {
    try {
      for (const p of seedProducts) {
        await setDoc(doc(db, "products", p.id), p as Record<string, unknown>)
      }
    } catch (err) {
      console.error("Seeding products failed:", err)
    }
  }

  async function seedCategoriesToFirestore() {
    try {
      for (const c of seedCategories) {
        await setDoc(doc(db, "categories", String(c.id)), c as Record<string, unknown>)
      }
    } catch (err) {
      console.error("Seeding categories failed:", err)
    }
  }

  // --- product mutations ---

  const addProduct = useCallback(async (p: Product) => {
    try {
      await setDoc(doc(db, "products", p.id), p as Record<string, unknown>)
    } catch (err) {
      console.error("Failed to add product:", err)
    }
  }, [])

  const updateProduct = useCallback(async (p: Product) => {
    try {
      await setDoc(doc(db, "products", p.id), p as Record<string, unknown>)
    } catch (err) {
      console.error("Failed to update product:", err)
    }
  }, [])

  const deleteProduct = useCallback(async (id: string) => {
    try {
      await deleteDoc(doc(db, "products", id))
    } catch (err) {
      console.error("Failed to delete product:", err)
    }
  }, [])

  // --- category mutations ---

  const addCategory = useCallback(async (c: Category) => {
    try {
      await setDoc(doc(db, "categories", String(c.id)), c as Record<string, unknown>)
    } catch (err) {
      console.error("Failed to add category:", err)
    }
  }, [])

  const updateCategory = useCallback(async (c: Category) => {
    try {
      await setDoc(doc(db, "categories", String(c.id)), c as Record<string, unknown>)
    } catch (err) {
      console.error("Failed to update category:", err)
    }
  }, [])

  const deleteCategory = useCallback(async (id: number) => {
    try {
      await deleteDoc(doc(db, "categories", String(id)))
    } catch (err) {
      console.error("Failed to delete category:", err)
    }
  }, [])

  // --- helpers ---

  const getProductsByCategory = useCallback(
    (name: string) => products.filter((p) => p.category === name),
    [products]
  )

  return (
    <StoreContext.Provider
      value={{
        products,
        categories,
        loading,
        addProduct,
        updateProduct,
        deleteProduct,
        addCategory,
        updateCategory,
        deleteCategory,
        getProductsByCategory,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

// ---------- hook ----------

export function useStore(): StoreContextValue {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error("useStore must be used within a StoreProvider")
  return ctx
}
