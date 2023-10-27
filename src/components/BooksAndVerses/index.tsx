'use client';

/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Select, SelectItem, Spinner } from '@nextui-org/react';
import React from 'react';

import useFetchBooks from '@/queries/books';

import BookDetail from '../BookDetail';

const BooksAndVerses = () => {
  const { data, isLoading } = useFetchBooks();

  const [selectedBook, setSelectedBook] = React.useState<string | null>(null);

  /**
   * Recupera o livro selecionado, atualiza o estado e chama os versículos
   * @param {React.ChangeEvent<HTMLSelectElement>} event:React.ChangeEvent<HTMLSelectElement>
   * @returns {void}
   */
  const handleSelectionBookChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const book = event.target.value;

    setSelectedBook(book);
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

      <BookDetail selectedBook={selectedBook} />
    </React.Fragment>
  );
};

export default BooksAndVerses;
