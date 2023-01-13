import React, {createContext, useEffect, useState} from 'react';

import {setData, removeData, getData} from '../utilities/storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null);

  const login = async data => {
    setIsLoading(true);
    setToken('token', '12321321321312');
    await setData('token', '12321321321312');
    setIsLoading(false);
  };

  const logOut = () => {
    setIsLoading(true);
    setToken(null);
    removeData('token');
    removeData('user');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await getData('token');
      setToken(userToken);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{isLoading, token, login, logOut, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
