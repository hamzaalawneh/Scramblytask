import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ListScreen, ListItemDetails} from '@screens/home';

export type HomeStackParamList = {
  Home: undefined;
  List: undefined;
  ListItemDetails: {
    post: {
      title: string;
      body: string;
    };
  };
};

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Scrambly Task',
        }}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'List',
        }}
      />
      <Stack.Screen
        name="ListItemDetails"
        component={ListItemDetails}
        options={{
          title: 'Post Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
