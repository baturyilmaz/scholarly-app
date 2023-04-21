export default interface AppContext {
  searchedValue: string;
  setSearchedValue: (cb: React.SetStateAction<string>) => void;
}
