import { Divider } from '@nextui-org/react';

import Books from './Books';
import Chapters from './Chapters';
import ReadableVerses from './ReadbleVerses';
import Versions from './Versions';

const IprBible: React.FC = () => {
  return (
    <>
      {/* Listagem de Livros e capítulos do livro selecionado */}
      <div className="w-full grow-0 overflow-y-auto p-2 md:h-screen md:w-96 md:grow">
        <Books />

        <Chapters />
      </div>

      <Divider
        orientation="vertical"
        className="border-6 mx-4 hidden h-full md:my-4 md:block"
      />

      {/* Versos */}
      <div className="w-full grow-0 overflow-y-auto px-1 md:h-screen md:grow md:px-4">
        <Versions />

        <ReadableVerses />
      </div>
    </>
  );
};

export default IprBible;
