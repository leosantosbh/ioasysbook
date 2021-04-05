import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useSelector, useDispatch } from 'react-redux';
import Routes from './routes/routes';
import { StateApp } from './store/models.types';
import { newTokenRequest } from './store/modules/auth/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { signed, refreshToken, token } = useSelector(
    (state: StateApp) => state.auth,
  );

  const handlerRefreshToken = async () => {
    dispatch(newTokenRequest(token, refreshToken));
  };

  useEffect(() => {
    if (signed) {
      handlerRefreshToken().then(() => {
        SplashScreen.hide();
      });
    } else {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
