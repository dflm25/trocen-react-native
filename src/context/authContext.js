import React, {createContext, useEffect, useState} from 'react';

import {clearStorage, getStorage} from '../utilities/storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = async data => {
    setIsLoading(true);
    setUserToken('token', data.token);
    setIsLoading(false);
  };

  const logOut = () => {
    setIsLoading(true);
    setUserToken(null);
    clearStorage('token');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      setUserToken(await getStorage('token'));
      setIsLoading(false);
    } catch (error) {
      console.log('isLoggedIn', error);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{isLoading, userToken, login, logOut, isLoggedIn}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
