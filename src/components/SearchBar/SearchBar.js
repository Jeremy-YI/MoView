import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (value) {
      navigate('/search', { state: value, replace: true });
    }
  };
  return (
    <Box component="form" onSubmit={handleSearch}>
      <TextField
        fullWidth
        label="Search Movie Here ... "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="outlined-basic"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}
