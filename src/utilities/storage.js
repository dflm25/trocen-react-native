import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (item, value) => {
  try {
    const jsonValue = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(item, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async item => {
  try {
    const jsonValue = await AsyncStorage.getItem(item);
    return jsonValue != null ? jsonValue : null;
  } catch (e) {
    // error reading value
  }
};

export const removeData = async item => {
  try {
    await AsyncStorage.removeItem(item);
  } catch (e) {
    // error reading value
  }
};
