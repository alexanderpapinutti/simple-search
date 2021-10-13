import * as _ from 'lodash';

export async function makeRequest(query) {
  let queryString = 'https://jsonplaceholder.typicode.com/todos/';
  let isAllData = true;
  if (!_.isEmpty(query)) {
    isAllData = false;
    queryString += '?';
    _.forEach(_.keys(query), (key, index) => {
      const append = `${key}=${query[key]}`;
      index === 0 ? (queryString += append) : (queryString += `&&${append}`);
    });
  }

  const data = await fetch(queryString);
  const response = await data.json();
  if (isAllData) {
    const userIds = _.uniq(_.map(response, 'userId'));
    localStorage.setItem('userIds', userIds);
  }

  return response;
}

export function formatData(data = [], setData, page) {
  const dataChunks = _.chunk(data, 5);
  const count = _.size(dataChunks);
  const dataToShow = dataChunks[page - 1];

  setData({
    todos: dataToShow,
    count,
  });
}
