import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '@screens/auth';

export type AuthStackParamList = {
  Login: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          title: 'Sign In',
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
