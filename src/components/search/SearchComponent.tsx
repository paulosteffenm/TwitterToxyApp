import { useState } from "react";

interface Props {
  handleSearch: (searchTerm: string) => void;
}

const SearchComponent = ({ handleSearch }: Props) => {

  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
      <div className='form-group w-25'>
        <input
          type='text'
          className='form-control'
          id='txtSearch'
          value={searchTerm ?? ''}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='mt-2'>
        <button className='btn btn-dark me-2' onClick={() => handleSearch(searchTerm)}>Search</button>
        <button className='btn btn-dark'>Lucky</button>
      </div>
    </div>
  );
};

export default SearchComponent;