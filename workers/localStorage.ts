import AsyncStorage from '@react-native-async-storage/async-storage';
import SInfo from 'react-native-sensitive-info';

interface persistedUser {
  user_id: string;
}

export const savePersistedUser = async (payload: persistedUser) => {
  try {
    const response = await AsyncStorage.setItem(
      '@user',
      JSON.stringify(payload),
    );
    return true;
  } catch {
    return false;
  }
};

export const getPersistedUser = async (): persistedUser => {
  try {
    const response = await AsyncStorage.getItem('@user');
    return JSON.parse(response);
  } catch {
    return false;
  }
};
export const removePersistedUser = async () => {
  try {
    const response = await AsyncStorage.removeItem('@user');
    return true;
  } catch {
    return false;
  }
};

export const saveBranch = async (payload: any) => {
  try {
    const response = await AsyncStorage.setItem(
      '@branch',
      JSON.stringify(payload),
    );
    return true;
  } catch {
    return false;
  }
};

export const getBranch = async () => {
  try {
    const response = await AsyncStorage.getItem('@branch');
    return JSON.parse(response);
  } catch {
    return false;
  }
};
export const removeBranch = async () => {
  try {
    const response = await AsyncStorage.removeItem('@branch');
    return true;
  } catch {
    return false;
  }
};

export const savePersistedLogin = async (payload: perisitedLogedin) => {
  try {
    const response = await AsyncStorage.setItem(
      '@login',
      JSON.stringify(payload),
    );
    return true;
  } catch {
    return false;
  }
};

export const getPersistedLogin = async () => {
  try {
    const response = await AsyncStorage.getItem('@login');
    return JSON.parse(response);
  } catch {
    return false;
  }
};

export const removePersistedLogin = async () => {
  try {
    const response = await AsyncStorage.removeItem('@login');
    return true;
  } catch {
    return false;
  }
};

export const saveRecentSearch = async (payload: any) => {
  try {
    const response = await AsyncStorage.setItem(
      '@recent',
      JSON.stringify(payload),
    );
    return true;
  } catch {
    return false;
  }
};

export const getRecentSearch = async (): [] => {
  try {
    const response = await AsyncStorage.getItem('@recent');
    let raw_data = JSON.parse(response);
    if (raw_data?.length && raw_data?.length > 0) {
      return raw_data;
    } else {
      throw 'err';
    }
  } catch {
    return [];
  }
};

//For receive notificaion

export const saveFCMToken = async (payload: any) => {
  const response = await AsyncStorage.setItem('fcmtoken', payload);
  return true;
};

export const getFCMToken = async () => {
  const response = await AsyncStorage.getItem('fcmtoken');
  return response;
};

export const removeFCMToken = async () => {
  const response = await AsyncStorage.removeItem('fcmtoken');
  return true;
};

//To save Notification
export const saveNotification = async (payload: any) => {
  try {
    const response = await AsyncStorage.setItem(
      '@notify',
      JSON.stringify(payload),
    );
    return true;
  } catch {
    return false;
  }
};

export const getNotification = async (): [] => {
  try {
    const response = await AsyncStorage.getItem('@notify');
    let raw_data = JSON.parse(response);
    if (raw_data?.length && raw_data?.length > 0) {
      return raw_data;
    } else {
      throw 'err';
    }
  } catch {
    return [];
  }
};

export const removeNotification = async () => {
  try {
    const response = await AsyncStorage.removeItem('@notify');
    return true;
  } catch {
    return false;
  }
};

//JWT Token
export const saveToken = async (token: string) => {
  try {
    await SInfo.setItem('token', token, {
      sharedPreferencesName: 'grobux',
      keychainService: 'grobux',
    });
  } catch (err) {
    console.log('saveTokenErr -->', err);

    return false;
  }
};

export const getToken = async () => {
  try {
    const token = await SInfo.getItem('token', {
      sharedPreferencesName: 'grobux',
      keychainService: 'grobux',
    });
    return token;
  } catch {
    return false;
  }
};

export const removeToken = async () => {
  try {
    const token = await SInfo.deleteItem('token', {
      sharedPreferencesName: 'grobux',
      keychainService: 'grobux',
    });
    return token;
  } catch {
    return false;
  }
};
