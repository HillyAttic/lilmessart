/**
 * Server-side data fetchers for Next.js Server Components
 * These functions run on the server and fetch data from Firestore
 * The fetched data is passed to client components as initial state
 */

import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase-server"
import type { Product, Category } from "@/lib/data-types"

/**
 * Fetch all products from Firestore, ordered by name
 * Returns an array of Product objects
 */
export async function getServerProducts(): Promise<Product[]> {
  try {
    const productsQuery = query(collection(db, "products"), orderBy("name"))
    const snapshot = await getDocs(productsQuery)

    if (snapshot.empty) {
      console.log("[Server] Products collection is empty")
      return []
    }

    const products: Product[] = []
    snapshot.forEach((doc) => {
      products.push(doc.data() as Product)
    })

    return products
  } catch (error) {
    console.error("[Server] Failed to fetch products:", error)
    return []
  }
}

/**
 * Fetch all categories from Firestore, ordered by id
 * Returns an array of Category objects
 */
export async function getServerCategories(): Promise<Category[]> {
  try {
    const categoriesQuery = query(collection(db, "categories"), orderBy("id"))
    const snapshot = await getDocs(categoriesQuery)

    if (snapshot.empty) {
      console.log("[Server] Categories collection is empty")
      return []
    }

    const categories: Category[] = []
    snapshot.forEach((doc) => {
      categories.push(doc.data() as Category)
    })

    return categories
  } catch (error) {
    console.error("[Server] Failed to fetch categories:", error)
    return []
  }
}
