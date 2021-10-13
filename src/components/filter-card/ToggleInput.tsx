import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { BasicSwitch } from './BasicSwitch';

export function ToggleInput(props: any) {
  const { tableQuery, setTableQuery } = props;

  return (
    <FormControl>
      <FormGroup>
        <FormLabel>COMPLETED</FormLabel>
        <FormControlLabel
          sx={{
            flexDirection: 'row-reverse',
            alignSelf: 'baseline',
          }}
          control={
            <BasicSwitch
              checked={tableQuery.completed || false}
              onChange={() => {
                let newQuery = { ...tableQuery };
                if (tableQuery.completed) {
                  delete newQuery.completed;
                } else {
                  newQuery = { ...newQuery, completed: true };
                }
                setTableQuery(newQuery);
              }}
            />
          }
          className='label-color'
          labelPlacement='start'
          label={tableQuery.completed ? 'YES' : 'NO'}
        />
      </FormGroup>
    </FormControl>
  );
}
