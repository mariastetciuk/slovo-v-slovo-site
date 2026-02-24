import { matthew } from "./matthew";
import { mark } from "./mark";
import { luke } from "./luke";
import { john } from "./john";
import type { BookData } from "@/type/type";

export const books: Record<string, BookData> = {
  [matthew.bookSlug]: matthew,
  [mark.bookSlug]: mark,
  [luke.bookSlug]: luke,
  [john.bookSlug]: john,
};

export function getBook(bookSlug?: string): BookData | null {
  if (!bookSlug) return null

  const key = bookSlug.trim().toLowerCase()
  return books[key] ?? null
}