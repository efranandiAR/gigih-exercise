import { TextField } from "@mui/material";
import { Button } from "@mui/material";

const SearchBar = ({ query, onChange, onSubmit }) => {
  return (
    // <form onSubmit={onSubmit}>
    //   <input type="text" name="query" value={query} onChange={onChange} />
    //   <input type="submit" value="Search" />
    // </form>
    <>
      <TextField data-testid="SearchBarTextInput" label="Search" value={query} onChange={onChange} />
      <Button data-testid="SearchButton" variant="contained" onClick={onSubmit}>Search</Button>
    </>
    

    
  );
};

export default SearchBar;
