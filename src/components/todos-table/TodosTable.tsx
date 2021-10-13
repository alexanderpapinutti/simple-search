import * as _ from 'lodash';
import CheckIcon from '@mui/icons-material/Check';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { TodosPagination } from './TodosPagination';
export function TodosTable(props: any) {
  const { todos = [], count = 0, setPage, page } = props;

  return (
    <div className='card table'>
      <div className='todos-table'>
        <div className='header d-flex'>
          <div className='col-1 text-align-left table-header-font'>USER ID</div>
          <div className='col-2 text-align-left table-header-font'>TITLE</div>
          <div className='col-3 text-align-right table-header-font completed-column'>
            COMPLETED
          </div>
        </div>
        <div className='table-body'>
          {todos.length > 0 ? (
            todos.map(
              (todo: {
                userId: string;
                title: string;
                completed: boolean;
                id: number;
              }) => {
                return (
                  <div className='row' key={todo.id}>
                    <div
                      className='col-1 d-flex align-center'
                      style={{ marginLeft: 31 }}
                    >
                      {todo.userId}
                    </div>
                    <div
                      className='col-2 d-flex align-center'
                      style={{ marginLeft: -31 }}
                    >
                      <p>{_.upperFirst(todo.title)}</p>
                    </div>
                    <div className='col-3 d-flex justify-center align-center completed-icon'>
                      {todo.completed ? <CheckIcon /> : <CloseSharpIcon />}
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <div className='d-flex justify-center'>No Results</div>
          )}
        </div>
        <div className='table-footer d-flex justify-center align-center'>
          <TodosPagination count={count} setPage={setPage} page={page} />
        </div>
      </div>
    </div>
  );
}
