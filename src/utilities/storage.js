import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorage = (key, value) => AsyncStorage.setItem(key, value);

export const getStorage = key => AsyncStorage.getItem(key);

export const clearStorage = key => AsyncStorage.removeItem(key);
