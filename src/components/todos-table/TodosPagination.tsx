import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export function TodosPagination(props: any) {
  const { count, setPage, page } = props;
  return (
    <Stack spacing={2}>
      <Pagination
        boundaryCount={1}
        count={count}
        page={page}
        onChange={(event, value) => setPage(value)}
        color='primary'
      />
    </Stack>
  );
}
