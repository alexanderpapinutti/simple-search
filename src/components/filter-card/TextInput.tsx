import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';

function setTitleQuery(
  tableQuery: any,
  setTableQuery: Function,
  title: string
) {
  if (title) {
    setTableQuery({ ...tableQuery, title: title.toLowerCase() });
    return;
  }
  const newQuery = { ...tableQuery };
  delete newQuery.title;
  setTableQuery({ ...newQuery });
}

export function TextInput(props: any) {
  const { tableQuery, setTableQuery } = props;
  const [title, setTitle] = useState('');

  return (
    <FormControl>
      <Input
        className='text-input'
        sx={{ background: 'white', height: 50 }}
        placeholder='Search...'
        onChange={(event) => setTitle(event?.target.value)}
        onKeyPress={(event) => {
          if (event.charCode !== 13) {
            return;
          }

          setTitleQuery(tableQuery, setTableQuery, title);
        }}
        startAdornment={
          <InputAdornment
            onClick={() => setTitleQuery(tableQuery, setTableQuery, title)}
            className='search-icon-props'
            position='start'
          >
            <SearchIcon sx={{ color: 'white', width: 25, height: 25 }} />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
