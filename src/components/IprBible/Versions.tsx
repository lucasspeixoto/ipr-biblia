'use client';

import { Select, SelectItem } from '@nextui-org/react';
import React from 'react';

import useFetchVersions from '@/queries/versions';
import useSelectedVersion from '@/store/useSelectedVersion';
import { versions } from '@/utils/versions';

import LoadingPage from '../LoadingPage';

const Versions: React.FC = () => {
  const { data, isFetching } = useFetchVersions();

  const setSelectedVersion = useSelectedVersion(
    (state) => state.setSelectedVersion,
  );

  /* The `setSelectedBookAbbrevHandle` is a callback function created using the
  `React.useCallback` hook. It is used to set the selected book abbreviation and
  selected verse in the state. */
  const setSelectedVersionHandle = React.useCallback((version: string) => {
    setSelectedVersion(version);
  }, []);

  /**
   * Recupera o livro selecionado, atualiza o estado e chama os versículos
   * @param {React.ChangeEvent<HTMLSelectElement>} event:React.ChangeEvent<HTMLSelectElement>
   * @returns {void}
   */
  const handleSelectionVersionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const version = event.target.value;

    setSelectedVersionHandle(version);
  };

  return (
    <React.Fragment>
      <div className="mb-8 flex w-full items-center justify-center md:mb-0 md:justify-end">
        {isFetching || !data ? (
          <LoadingPage />
        ) : (
          <Select
            label="Versão"
            placeholder="Selecione uma versão"
            variant="bordered"
            className="max-w-[250px]"
            onChange={handleSelectionVersionChange}
          >
            {data.map((version) => (
              <SelectItem value={version.version} key={version?.version}>
                {versions[version.version]}
              </SelectItem>
            ))}
          </Select>
        )}
      </div>
    </React.Fragment>
  );
};

export default Versions;
