export type TogleModal = {
    togleModal: () => void;
};

export type NavLinks = {
  title: string;
  href: string;
  id:string
};

export type BooksList = {
  name: string
  books: Array<{
    title: string
    slug: string
  }>

}

export type BookData = {
  bookSlug: string;
  title: string;
  chapters: Record<number, {
    title: string;
    youtubeId: string;
    description?: string;
  }>;
};