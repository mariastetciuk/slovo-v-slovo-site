import Link from "next/link";
import { notFound } from "next/navigation";
import { getBook } from "@/data/books";
import { YoutubeEmbed } from "@/components/YoutubeEmbed";
import { getPrevNext, getSortedChapterNumbers } from "@/lib/chapters";

const ChapterPage = async ({
  params,
}: {
  params: Promise<{ book: string; chapter: string }>;
}) => {
  const data = await params;

  const book = getBook(data.book);
  if (!book) return notFound();

  const chapterNum = Number(data.chapter);
  const chapter = book.chapters[chapterNum];
  if (!chapter) return notFound();

  const chapterNumbers = getSortedChapterNumbers(book.chapters);
  const { prev, next } = getPrevNext(chapterNumbers, chapterNum);

  const videoUrl = `https://www.youtube.com/watch?v=${chapter.youtubeId}`;

  return (
    <div className="container">
      <h1 className=" mb-3 text-3xl font-semibold ">{chapter.title}</h1>
      {/* {chapter.description ? (
          <p className="mt-2 text-base opacity-80">{chapter.description}</p>
        ) : null} */}

      <nav className="mb-5 flex items-center justify-between gap-3">
        {prev ? (
          <Link
            href={`/books/${book.bookSlug}/${prev}`}
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-center transition hover:border-black/20 hover:shadow-sm"
          >
            ← Попередня глава
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/books/${book.bookSlug}/${next}`}
            className="rounded-xl border border-black/10 bg-white px-4 py-3 text-center transition hover:border-black/20 hover:shadow-sm"
          >
            Наступна глава →
          </Link>
        ) : (
          <div />
        )}
      </nav>
        <YoutubeEmbed videoId={chapter.youtubeId} title={chapter.title} />
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={videoUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-black px-4 py-2 text-white transition hover:bg-white hover:text-black hover:shadow-sm"
        >
          Дивитись на YouTube
        </a>

        <Link
          href={`/books/${book.bookSlug}`}
          className="rounded-xl border px-4 py-2 border-black/10 bg-white transition hover:bg-black hover:text-white hover:shadow-sm"
        >
          Усі глави
        </Link>
      </div>
    </div>
  );
};

export default ChapterPage;
