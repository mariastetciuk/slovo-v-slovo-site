import Link from "next/link";
import { books } from "@/data/bookList";

const BooksSection = () => {
  return (
    <section className="bg-paper container">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl mb-8 font-semibold tracking-tight">
          БІБЛІЯ
        </h2>
        <p className="text-center text-sm tracking-wide text-black/70">
          ↓ Обери книгу Біблії
        </p>
        {books.map(({ name, books }) => (
          <div
            key={name}
            className="relative mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-8 shadow-2xl"
          >
            <h2 className="text-center text-xl mb-6 font-semibold tracking-tight">
              ЄВАНГЕЛІЄ
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {books.map(({ title, slug }) => (
                <Link
                  key={slug}
                  href={`/books/${slug}`}
                  className="group rounded-2xl border border-black/10 bg-white px-5 py-6 text-center transition hover:border-black/20 hover:shadow-sm"
                >
                  <div className="text-lg font-semibold tracking-tight">
                    {title}
                  </div>
                  <div className="mt-2 text-sm text-black/60">
                    Відкрити глави →
                  </div>

                  <div className="mx-auto mt-4 h-px w-10 bg-black/10 transition group-hover:bg-hover" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BooksSection;
