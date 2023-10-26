export type BookAbbrev = {
  pt: string;
  en: string;
};

export type Book = {
  abbrev: BookAbbrev;
  author: string;
  chapters: 50;
  group: string;
  name: string;
  testament: string;
};
