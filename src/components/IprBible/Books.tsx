'use client';

import { Select, SelectItem } from '@nextui-org/react';
import React from 'react';

import { FIRST_SELECTED_VERSE } from '@/config/constants';
import useFetchBooks from '@/queries/books';
import useSelectedBook from '@/store/useSelectedBook';

import { LoadingPage } from '../LoadingPage';

const Books: React.FC = () => {
  const { data, isLoading } = useFetchBooks();

  const setSelectedBookAbbrev = useSelectedBook(
    state => state.setSelectedBookAbbrev
  );

  const setSelectedVerse = useSelectedBook(state => state.setSelectedVerse);

  /* The `setSelectedBookAbbrevHandle` is a callback function created using the
  `React.useCallback` hook. It is used to set the selected book abbreviation and
  selected verse in the state. */
  const setSelectedBookAbbrevHandle = React.useCallback(
    (bookAbbrev: string) => {
      setSelectedBookAbbrev(bookAbbrev);
      setSelectedVerse(FIRST_SELECTED_VERSE);
    },
    []
  );

  /**
   * Recupera o livro selecionado, atualiza o estado e chama os versículos
   * @param {React.ChangeEvent<HTMLSelectElement>} event:React.ChangeEvent<HTMLSelectElement>
   * @returns {void}
   */
  const handleSelectionBookChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const bookAbbrev = event.target.value;

    setSelectedBookAbbrevHandle(bookAbbrev);
  };

  return (
    <React.Fragment>
      <div className="flex w-full items-center justify-center">
        {isLoading || !data ? (
          <LoadingPage />
        ) : (
          <Select
            label="Livro"
            placeholder="Selecione um livro"
            variant="bordered"
            className="max-w-xs"
            onChange={handleSelectionBookChange}>
            {data.map(book => (
              <SelectItem value={book.abbrev.pt} key={book?.abbrev.pt}>
                {book.name}
              </SelectItem>
            ))}
          </Select>
        )}
      </div>
    </React.Fragment>
  );
};

export default Books;
