import type { Book } from './book';
import type { Chapter } from './chapter';
import type { Verse } from './verse';

export type VerseByBookResponse = {
  book: Book;
  chapter: Chapter;
  verses: Verse[];
};
