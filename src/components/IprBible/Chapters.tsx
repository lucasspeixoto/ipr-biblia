'use client';

import { Button, Link } from '@nextui-org/react';
import React, { useCallback } from 'react';

import useFetchBookDetail from '@/queries/book-detail';
import useSelectedBook from '@/store/useSelectedBook';

const Chapters: React.FC = () => {
  const selectedVerseStore = useSelectedBook((state) => state.verse);

  const selectedBookAbbrevStore = useSelectedBook((state) => state.bookAbbrev);

  const { data, isFetching, refetch } = useFetchBookDetail(
    selectedBookAbbrevStore,
  );

  const setSelectedVerse = useSelectedBook((state) => state.setSelectedVerse);

  /* The `const setSelectedVerseHandle` is a callback function that is created
  using the `useCallback` hook. It takes a `verse` parameter of type number and
  calls the `setSelectedVerse` function with the `verse` parameter as its
  argument. */
  const setSelectedVerseHandle = useCallback((verse: number) => {
    setSelectedVerse(verse);
  }, []);

  /* The `React.useEffect` hook is used to perform side effects in a functional
  component. In this case, it is used to fetch book details when the
  `selectedBook` prop changes. */
  React.useEffect(() => {
    let mounted = true;

    if (selectedBookAbbrevStore && mounted) refetch();

    return () => {
      mounted = false;
    };
  }, [refetch, selectedBookAbbrevStore]);

  return (
    <React.Fragment>
      <div className="h-auto w-full  py-4 pl-2">
        <span className="">
          <>
            {isFetching ? (
              <></>
            ) : (
              <div className="flex w-full items-center justify-start">
                {data ? (
                  <div className="flex flex-col justify-between gap-1">
                    <span className="">{data.name}</span>
                    <span className="">Autor(es): {data.author}</span>
                    <span className="ml-2 mt-4 text-xl font-bold">
                      Capítulos
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
                              size="sm"
                              className={
                                chapter === selectedVerseStore
                                  ? 'font-bold opacity-100'
                                  : 'opacity-60 hover:font-bold hover:opacity-100'
                              }
                              onClick={() => setSelectedVerseHandle(chapter)}
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
      <Link
        isExternal
        className="ml-4 mt-8 flex items-center gap-1 text-current"
        href="https://www.igrejapentecostalreformada.com.br/"
        title="link site ipr"
      >
        <span className="text-default-600">Conheça mais sobre a </span>
        <p className="text-primary">IPR</p>
      </Link>
    </React.Fragment>
  );
};

export default Chapters;
