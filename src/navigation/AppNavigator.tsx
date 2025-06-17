import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthStore} from '@store/useAuthStore';
import AuthStackNavigator from '@navigation/AuthStackNavigator';
import HomeStackNavigator from '@navigation/HomeStackNavigator';

const AppNavigator: React.FC = () => {
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  return <NavigationContainer>{isLoggedIn ? <HomeStackNavigator /> : <AuthStackNavigator />}</NavigationContainer>;
};

export default AppNavigator;
