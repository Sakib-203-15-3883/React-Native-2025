import React from 'react';
import Home from './Home';
import Details from './Details';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const SharedElementTransitionExample = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          contentStyle: {backgroundColor: 'whitesmoke'},
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: {backgroundColor: 'whitesmoke'},
          headerTintColor: 'black',
        }}
      />
    </Stack.Navigator>
  );
};

export default SharedElementTransitionExample;
