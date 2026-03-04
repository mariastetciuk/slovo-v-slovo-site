import { getBook } from "@/data/books";
import { notFound } from "next/navigation";
import ChapterButton from "@/components/ChapterButton"
import Link from "next/link";

const BookPage = async ({
  params,
}: {
  params: Promise<{ book?: string }>
}) => {
  const { book: bookSlug } = await params
  const book = getBook(bookSlug)
  console.log(book)
  if (!book) return notFound()

  const chapters = Object.keys(book.chapters).map(Number).sort((a, b) => a - b)


  return (
    <div className="container">
      <Link href={'/'} className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-center transition hover:border-black/20 hover:shadow-sm">← Повернутися </Link>
      <h1 className="text-3xl mt-4 text-center font-semibold">{book.title}</h1>
      <p className="mt-3 text-center opacity-80">Обери главу.</p>

      <div className="mt-6 grid grid-cols-2 gap-3  sm:grid-cols-3 md:grid-cols-4">
        {chapters.map((ch) => {
  const chapter = book.chapters[ch]

  return (
    <ChapterButton
      key={ch}
      chapter={ch}
      bookSlug={book.bookSlug}
      youtubeId={chapter.youtubeId}
    />
  )
})}
      </div>
    </div>
  );
}

export default BookPage