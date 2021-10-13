import Link from '@mui/material/Link';

import { TextInput } from './TextInput';
import { ToggleInput } from './ToggleInput';
import { UserInput } from './UserInput';

export function FilterCard(props: any) {
  const { tableQuery, setTableQuery, userIds, setPage } = props;

  return (
    <div className='card filter'>
      <div className='container'>
        <div>
          <h2 className='card-title text-align-center'>FILTERS</h2>
        </div>
        <TextInput tableQuery={tableQuery} setTableQuery={setTableQuery} />
        <ToggleInput setTableQuery={setTableQuery} tableQuery={tableQuery} />
        <UserInput
          setTableQuery={setTableQuery}
          tableQuery={tableQuery}
          userIds={userIds}
        />
        <div className='d-flex justify-center'>
          <Link
            onClick={() => {
              setTableQuery({});
              setPage(1);
            }}
            className='text-align-center reset-filters'
          >
            Reset filters
          </Link>
        </div>
      </div>
    </div>
  );
}
