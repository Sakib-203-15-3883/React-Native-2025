import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import InitialScreen from '../Screens/InitialScreen';

//                        react native
import TextComponent from '../Screens/RnBasic/Text';
import ImageComponent from '../Screens/RnBasic/Image';
import InputComponent from '../Screens/RnBasic/Input';
import StyleSheetComponent from '../Screens/RnBasic/StyleSheet';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//                            react

import ControlledVsUncontrolled from '../Screens/React/ControlledVsUncontrolled';

//                        React hooks

import UseRef from '../Screens/ReactHooks/UseRef';

//                       Animation

// import SharedElementTransition from '../Screens/Animation/SharedElementTransitionExample/Home';
import SharedElementExampleNavigation from '../Screens/Animation/SharedElementTransitionExample/Navigation';
import SharedElementTransitionExample2 from '../Screens/Animation/SharedElementTransition2/Navigation';

import {SafeAreaProvider} from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="InitialScreen" component={InitialScreen} />
          <Stack.Screen
            name="TextComponent"
            component={TextComponent}
            options={{animation: 'none'}}
          />
          <Stack.Screen
            name="ImageComponent"
            component={ImageComponent}
            options={{animation: 'none'}}
          />
          <Stack.Screen
            name="InputComponent"
            component={InputComponent}
            options={{animation: 'none'}}
          />
          <Stack.Screen
            name="StyleSheetComponent"
            component={StyleSheetComponent}
            options={{animation: 'none'}}
          />

          {/* react */}

          <Stack.Screen
            name="ControlledVsUncontrolled"
            component={ControlledVsUncontrolled}
            options={{animation: 'none'}}
          />

          {/* React Hooks */}

          <Stack.Screen
            name="UseRef"
            component={UseRef}
            options={{animation: 'none'}}
          />

          {/* Animation */}

          {/* <Stack.Screen
            name="SharedElementTransition"
            component={SharedElementTransition}
            // options={{animation: 'none'}}
          /> */}

          <Stack.Screen
            name="SharedElementExampleNavigation"
            component={SharedElementExampleNavigation}
            // options={{animation: 'none'}}
          />

          <Stack.Screen
            name="SharedElementTransitionExample2"
            component={SharedElementTransitionExample2}
            // options={{animation: 'none'}}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;
