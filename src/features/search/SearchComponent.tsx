import { useState } from "react";

interface Props {
  handleSearch: (searchTerm: string) => void;
}

const SearchComponent = ({ handleSearch }: Props) => {

  const [searchTerm, setSearchTerm] = useState<string>('');

  return (<>
    <input
      type='text'
      value={searchTerm ?? ''}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={() => handleSearch(searchTerm)}>Search</button>
  </>
  );
};

export default SearchComponent;