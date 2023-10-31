import { Spinner } from '@nextui-org/react';
import React from 'react';

const LoadingPage: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full bg-gray-800 opacity-75 dark:bg-gray-300">
      <div className="mt-[50vh] flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    </div>
  );
};

export default LoadingPage;
