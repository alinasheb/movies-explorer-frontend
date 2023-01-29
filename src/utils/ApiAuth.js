export const BASE_URL = 'https://api.explorer.movies.nomoredomains.sbs';
//export const BASE_URL = 'http://localhost:3000';


const getResponseData = (res)  => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка:${res.status}`);
  }
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then(getResponseData);
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then(getResponseData);
};

export const updateUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then(getResponseData);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then(getResponseData);
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(getResponseData);
};