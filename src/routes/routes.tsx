import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import StatusBarCustom from 'react-native-custom-statusbar';
import Login from '../pages/Login';
import { StateApp } from '../store/models.types';
import BookDetail from '../pages/BookDetail';
import Books from '../pages/Books';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const signed = useSelector((state: StateApp) => state.auth.signed);

  return (
    <StatusBarCustom
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent
      isHelper={signed}
      colorHelper="#f7e2e9">
      {signed ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Books">
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="BookDetail" component={BookDetail} />
        </Stack.Navigator>
      ) : (
        <Login />
      )}
    </StatusBarCustom>
  );
};

export default Routes;
