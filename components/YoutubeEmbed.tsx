type Props = {
  videoId: string;
  title?: string;
};

export const YoutubeEmbed = ({ videoId, title = "YouTube video player" }: Props) => {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-sm">
        <div className="pt-[56.25%]" />
        <iframe
          className="absolute left-0 top-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default YoutubeEmbed;