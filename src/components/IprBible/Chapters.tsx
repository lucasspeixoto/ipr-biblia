'use client';

import { Button, Link } from '@nextui-org/react';
import React, { useCallback } from 'react';

import useFetchBookDetail from '@/queries/book-detail';
import useSelectedBook from '@/store/useSelectedBook';
import useSelectedVersion from '@/store/useSelectedVersion';
import { versions } from '@/utils/versions';

const Chapters: React.FC = () => {
  const selectedVerseStore = useSelectedBook((state) => state.verse);

  const selectedBookAbbrevStore = useSelectedBook((state) => state.bookAbbrev);

  const selectedVersionStore = useSelectedVersion((state) => state.version);

  const { data, isFetching, refetch } = useFetchBookDetail(
    selectedBookAbbrevStore,
  );

  const setSelectedVerse = useSelectedBook((state) => state.setSelectedVerse);

  const setChaptersNumbers = useSelectedBook(
    (state) => state.setChaptersNumber,
  );

  /* The `const setSelectedVerseHandle` is a callback function that is created
  using the `useCallback` hook. It takes a `verse` parameter of type number and
  calls the `setSelectedVerse` function with the `verse` parameter as its
  argument. */
  const setSelectedVerseHandle = useCallback((verse: number) => {
    setSelectedVerse(verse);
  }, []);

  const setChaptersNumberHandle = useCallback((chapters: number) => {
    setChaptersNumbers(chapters);
  }, []);

  /* The `React.useEffect` hook is used to perform side effects in a functional
  component. In this case, it is used to fetch book details when the
  `selectedBook` prop changes. */
  React.useEffect(() => {
    let mounted = true;

    if (selectedBookAbbrevStore && mounted) {
      refetch();

      setChaptersNumberHandle(data?.chapters!);
    }

    return () => {
      mounted = false;
    };
  }, [refetch, selectedBookAbbrevStore]);

  React.useEffect(() => {
    let mounted = true;

    if (data && mounted) {
      setChaptersNumberHandle(data?.chapters!);
    }

    return () => {
      mounted = false;
    };
  }, [data]);

  return (
    <div className="flex h-5/6 flex-col justify-between gap-2 ">
      <div className="w-full px-1 py-2">
        {isFetching ? null : (
          <div className="flex w-full items-center justify-start">
            {data ? (
              <div className="flex h-auto flex-col justify-between gap-1 py-2">
                <div className="flex w-full gap-2">
                  Livro:{' '}
                  <span className="font-semibold text-primary">
                    {data.name}
                  </span>
                </div>
                <div className="flex w-full gap-2">
                  Autor(es):{' '}
                  <span className="font-semibold text-primary">
                    {data.author}
                  </span>
                </div>
                <div className="flex w-full gap-2">
                  Versão:{' '}
                  <span className="font-semibold text-primary">
                    {versions[selectedVersionStore!]}
                  </span>
                </div>
                <span className="mt-4 text-xl font-bold">Capítulos</span>
                <div className="z-10 my-2 max-h-80">
                  <div className="w-xs mb-2 flex max-h-80 flex-wrap items-center justify-center gap-2 overflow-auto py-4">
                    {React.Children.toArray(
                      Array.from(
                        { length: data.chapters },
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
      </div>

      <Link
        isExternal
        className="mb-1 flex items-center justify-center gap-1 text-current"
        href="https://www.igrejapentecostalreformada.com.br/"
        title="link site ipr"
      >
        <span className="text-default-600">Conheça mais sobre a </span>
        <p className="text-primary">IPR</p>
      </Link>
    </div>
  );
};

export default Chapters;
