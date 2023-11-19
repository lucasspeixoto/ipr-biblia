import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * The SelectedVersionStore type represents a store that holds a selected version
 * and provides a method to set the selected version.
 * @property {string | null} version - The `version` property is a string or null.
 * It represents the currently selected version in the store. If no version is
 * selected, it will be null.
 * @property setSelectedVersion - `setSelectedVersion` is a function that takes a
 * `version` parameter of type `string` and does not return anything (`void`). It
 * is used to update the `version` property of the `SelectedVersionStore` object.
 */
type SelectedVersionStore = {
  version: string | null;
  setSelectedVersion: (version: string) => void;
};

/* The code is creating a custom hook called `useSelectedVersion` using the
`create` function from the `zustand` library. The `create` function takes two
arguments: a store configuration function and an optional configuration object. */
const useSelectedVersion = create(
  persist<SelectedVersionStore>(
    (set) => ({
      version: 'nvi',
      setSelectedVersion: (version: string) => {
        set((state) => ({
          ...state,
          version,
        }));
      },
    }),
    {
      name: 'selected-version-storage', // name of the item in the storage (must be unique)
    },
  ),
);

export default useSelectedVersion;
