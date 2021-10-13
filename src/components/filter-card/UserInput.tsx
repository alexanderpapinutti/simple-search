import * as _ from 'lodash';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormLabel from '@mui/material/FormLabel';

export function UserInput(props: any) {
  const { tableQuery, setTableQuery } = props;

  const [open, setOpen] = useState(false);
  const userList = localStorage.getItem('userIds')?.split(',');

  return (
    <div className='d-flex flex-column'>
      <FormLabel sx={{ paddingBottom: 1 }} color='primary'>
        SELECT USER ID
      </FormLabel>

      <FormControl fullWidth>
        <Select
          className='user-select'
          color='primary'
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={tableQuery.userId || ''}
          label='User ID'
          onChange={(event) => {
            const value = event.target.value;
            setTableQuery({ ...tableQuery, userId: value });
          }}
        >
          {_.map(userList, (userId) => {
            return (
              <MenuItem key={userId} value={userId}>
                {userId}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
