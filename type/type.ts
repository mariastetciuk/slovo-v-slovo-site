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