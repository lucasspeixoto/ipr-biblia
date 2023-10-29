'use client';

/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Select, SelectItem, Spinner } from '@nextui-org/react';
import useFetchBooks from '@queries/books';
import useSelectedBook from '@store/useSelectedBook';
import React from 'react';

import BookDetail from '../BookDetail';

const FIRST_SELECTED_VERSE = 1;

const BooksAndVerses = () => {
  const { data, isLoading } = useFetchBooks();

  const selectedBookAbbrev = useSelectedBook((state) => state.bookAbbrev);

  const setSelectedBookAbbrev = useSelectedBook(
    (state) => state.setSelectedBookAbbrev,
  );

  const setSelectedVerse = useSelectedBook((state) => state.setSelectedVerse);

  const setSelectedBookAbbrevHandle = React.useCallback(
    (bookAbbrev: string) => {
      setSelectedBookAbbrev(bookAbbrev);
      setSelectedVerse(FIRST_SELECTED_VERSE);
    },
    [],
  );

  /**
   * Recupera o livro selecionado, atualiza o estado e chama os versículos
   * @param {React.ChangeEvent<HTMLSelectElement>} event:React.ChangeEvent<HTMLSelectElement>
   * @returns {void}
   */
  const handleSelectionBookChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const bookAbbrev = event.target.value;

    setSelectedBookAbbrevHandle(bookAbbrev);
  };

  return (
    <React.Fragment>
      <div className="flex h-auto w-full items-center justify-center">
        {isLoading || !data ? (
          <Spinner />
        ) : (
          <Select
            label="Livro"
            placeholder="Selecione um livro"
            variant="bordered"
            className="max-w-xs"
            onChange={handleSelectionBookChange}
          >
            {data.map((book) => (
              <SelectItem value={book.abbrev.pt} key={book?.abbrev.pt}>
                {book.name}
              </SelectItem>
            ))}
          </Select>
        )}
      </div>

      <BookDetail selectedBook={selectedBookAbbrev} />
    </React.Fragment>
  );
};

export default BooksAndVerses;
