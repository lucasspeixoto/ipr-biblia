'use client';

/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, Spinner } from '@nextui-org/react';
import React from 'react';

import useFetchBookDetail from '@/queries/book-detail';

type BookDetailProps = {
  selectedBook: string | null;
};

const BookDetail: React.FC<BookDetailProps> = ({ selectedBook }) => {
  const { data, isFetching, refetch } = useFetchBookDetail(selectedBook);

  const [selectedVerse, setSelectedVerse] = React.useState(1);

  React.useEffect(() => {
    if (selectedBook) refetch();
  }, [refetch, selectedBook]);

  return (
    <React.Fragment>
      <div className="h-auto w-full  py-4 pl-2">
        <span className="">
          <>
            {isFetching ? (
              <div className="flex w-full items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <div className="flex w-full items-center justify-start">
                {data ? (
                  <div className="flex flex-col justify-between gap-1">
                    <span className="">{data.name}</span>
                    <span className="">Autor(es): {data.author}</span>
                    <span className="ml-2 mt-4 text-xl font-bold">
                      Versículos
                    </span>
                    <div className="ml-2 mt-2">
                      <div className="w-xs overflow-y-scrool flex flex-wrap gap-2">
                        {React.Children.toArray(
                          Array.from(
                            { length: data.chapters - 0 },
                            (_, index) => index + 1,
                          ).map((chapter) => (
                            <Button
                              isIconOnly
                              color="primary"
                              aria-label="Versículo"
                              variant="shadow"
                              className={
                                chapter === selectedVerse
                                  ? 'font-bold opacity-100'
                                  : 'opacity-60 hover:font-bold hover:opacity-100'
                              }
                              onClick={() => setSelectedVerse(chapter)}
                            >
                              {chapter}
                            </Button>
                          )),
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </>
        </span>
      </div>
    </React.Fragment>
  );
};

export default BookDetail;
