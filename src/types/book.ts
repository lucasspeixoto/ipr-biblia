import type { BookAbbrev } from './book-abbrev';

export type Book = {
  abbrev: BookAbbrev;
  name: string;
  author: string;
  chapters: 50;
  group: string;
  testament?: string;
  version?: string;
};
