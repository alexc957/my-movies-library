import create from "zustand";

type SearchStore = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

const useSearchStore = create<SearchStore>((set) => ({
  searchValue: "",
  setSearchValue: (value: string) => set((state) => ({ searchValue: value })),
}));

export default useSearchStore;
