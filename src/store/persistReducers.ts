import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'ioasysBook',
      storage: AsyncStorage,
      whitelist: ['user', 'auth'],
    },
    reducers,
  );
  return persistedReducer;
};
