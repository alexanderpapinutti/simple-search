import * as _ from 'lodash';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useEffect, useState } from 'react';
import { FilterCard, TodosTable } from './components';
import { makeRequest, formatData } from './utils';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003479',
    },
  },
});

function App() {
  const [query, setQuery] = useState({});
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await makeRequest(query);
      formatData(response, setData, page);
    }

    fetchData();
  }, [query, page]);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <div
          className='d-flex justify-center'
          style={{ width: '100vw', flexWrap: 'wrap' }}
        >
          <FilterCard
            tableQuery={query}
            setTableQuery={setQuery}
            setPage={setPage}
          />
          <TodosTable
            todos={_.get(data, 'todos')}
            count={_.get(data, 'count')}
            setPage={setPage}
            page={page}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
