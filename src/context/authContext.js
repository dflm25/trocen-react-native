import React, {createContext, useEffect, useState} from 'react';

import {storeData, removeData, getData} from '../utilities/storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = async data => {
    setIsLoading(true);
    await storeData('token', '12321321321312');
    setUserToken('token', '12321321321312');
    setIsLoading(false);
  };

  const logOut = () => {
    setIsLoading(true);
    setUserToken(null);
    removeData('token');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      setUserToken(await getData('token'));
      console.log(await getData('token'));
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
