import Link from "next/link";
import { getBook } from "@/data/books";
import { notFound } from "next/navigation";

const BookPage = async ({
  params,
}: {
  params: Promise<{ book?: string }>
}) => {
  const { book: bookSlug } = await params
  const book = getBook(bookSlug)
  if (!book) return notFound()

  const chapters = Object.keys(book.chapters).map(Number).sort((a, b) => a - b)


  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl text-center font-semibold">{book.title}</h1>
      <p className="mt-2 text-center opacity-80">Обери главу.</p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {chapters.map((ch) => (
          <Link
            key={ch}
            href={`/books/${book.bookSlug}/${ch}`}
            className="rounded-xl border px-4 py-3 text-center hover:bg-black hover:text-white transition"
          >
            Глава {ch}
          </Link>
        ))}
      </div>
    </main>
  );
}

export default BookPage