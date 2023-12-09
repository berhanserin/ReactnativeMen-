import {View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Home from './pages/Home';
import {navigationRef} from './referans';

const Root = ({get}: any) => {
  const Stack = createNativeStackNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };

  return (
    <View style={{flex: 1, zIndex: 100}}>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false, fullScreenGestureEnabled: true}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              contentStyle: {zIndex: 100, borderRadius: get()},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Root;
