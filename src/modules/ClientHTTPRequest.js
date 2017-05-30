function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error('HTTP Error' + response.statusText);
  error.status = response.statusText;
  error.response = response;
  throw error;
}

function search(query, result) {
  if(query !== '') {
    return fetch('http://tekobooks.herokuapp.com/api/book/' + query)
              .then(checkStatus)
              .then(parseJSON)
              .then(result);
  } else {
    return [];
  }
}

function parseJSON(response) {
  return response.json();
}

function index(page, limit, result) {
  return fetch('http://tekobooks.herokuapp.com/api/book?page=' + page + '&limit=' + limit)
            .then(checkStatus)
            .then(parseJSON)
            .then(result);
}

function get(id, result) {
  return fetch('http://tekobooks.herokuapp.com/api/book/' + id)
          .then(checkStatus)
          .then(parseJSON)
          .then(result);
}

function post(formPayload, res) {
  var data = new FormData();
  data.append('json', JSON.stringify(formPayload));

  var params = {
    method: 'POST',
    body: data,
  };

  return fetch('http://tekobooks.herokuapp.com/api/book', params)
          .then(checkStatus)
          .then(parseJSON)
          .then(res);
}

function put(id, formPayload, res) {
  var data = new FormData();
  data.append('json', JSON.stringify(formPayload));

  var params = {
    method: 'PUT',
    body: data,
  };

  return fetch('http://tekobooks.herokuapp.com/api/book' + id, params)
          .then(checkStatus)
          .then(parseJSON)
          .then(res);
}

const Client = { put, post, get, search, index };
export default Client;