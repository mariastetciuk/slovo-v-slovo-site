import Link from "next/link"

type Props = {
  chapter: number
  bookSlug: string
  youtubeId?: string
}

const ChapterButton = ({ chapter, bookSlug, youtubeId }: Props) => {
  const isAvailable = Boolean(youtubeId)

  const base =
    "rounded-2xl border bg-white px-4 py-3 text-center transition hover:border-black/20 hover:shadow-sm"

  const active =
    "border-black/10 hover:bg-black hover:text-white"

  const disabled =
    "opacity-40 border-black cursor-not-allowed pointer-events-none"

  const className = `${base} ${isAvailable ? active : disabled}`

  if (isAvailable) {
    return (
      <Link href={`/books/${bookSlug}/${chapter}`} className={className}>
        Глава {chapter}
      </Link>
    )
  }

  return (
    <p className={className}>
      Глава {chapter}
      <span className="block text-xs mt-1">скоро</span>
    </p>
  )
}

export default ChapterButton