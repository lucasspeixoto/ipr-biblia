import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * The above type represents a selected book store with properties for the selected
 * book abbreviation and verse, as well as functions to set the selected book
 * abbreviation and verse.
 * @property {string | null} bookAbbrev - A string that represents the abbreviation
 * of a book in a bookstore.
 * @property setSelectedBookAbbrev - A function that takes a string parameter
 * representing a book abbreviation and sets the value of the "bookAbbrev" property
 * to that value.
 * @property {number | null} verse - The `verse` property is a number or null. It
 * represents the selected verse in a book.
 * @property setSelectedVerse - The `setSelectedVerse` property is a function that
 * takes a `verse` parameter of type `number` and does not return anything
 * (`void`). It is used to update the selected verse in the `SelectedBookStore`.
 */
type SelectedBookStore = {
  bookAbbrev: string | null;
  setSelectedBookAbbrev: (bookAbbrev: string) => void;
  verse: number | null;
  setSelectedVerse: (verse: number) => void;
  chapters: number;
  setChaptersNumber: (chapters: number) => void;
};

/* The code is creating a custom hook called `useSelectedBook` using the Zustand
library. Zustand is a state management library for React that provides a simple
API to manage state in a functional way. */
const useSelectedBook = create(
  persist<SelectedBookStore>(
    (set) => ({
      bookAbbrev: 'gn',
      setSelectedBookAbbrev: (bookAbbrev: string) => {
        set((state) => ({
          ...state,
          bookAbbrev,
        }));
      },
      verse: 1,
      setSelectedVerse: (verse: number) => {
        set((state) => ({
          ...state,
          verse,
        }));
      },
      chapters: 1,
      setChaptersNumber: (chapters: number) => {
        set((state) => ({
          ...state,
          chapters,
        }));
      },
    }),
    {
      name: 'selected-book-storage', // name of the item in the storage (must be unique)
    },
  ),
);

export default useSelectedBook;
