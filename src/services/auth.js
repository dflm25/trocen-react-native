import request from '../utilities/request';

export const register = async params => {
  const requestOptions = {method: 'POST', body: JSON.stringify(params)};

  return await request('auth/register', requestOptions);
};

export const login = async params => {
  const requestOptions = {method: 'POST', body: JSON.stringify(params)};

  return await request('auth/login', requestOptions);
};
