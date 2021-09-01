import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HIGHLOW,
  HOME,
  SEVENHEAVEN,
  SETTINGS,
  HARDMODE,
} from '../../Constants/path'
import {
  HighLow,
  Home,
  SevenHeaven,
  Settings,
  HardMode,
} from '../../Modules/pages';
import * as Contexts from '../../Context';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Contexts.UserListProvider>
        <Stack.Navigator initialRouteName={Home} headerMode="none">
          <Stack.Screen name={HOME} component={Home} />
          <Stack.Screen name={HIGHLOW} component={HighLow} />
          <Stack.Screen name={SEVENHEAVEN} component={SevenHeaven} />
          <Stack.Screen name={SETTINGS} component={Settings} />
          <Stack.Screen name={HARDMODE} component={HardMode} />
        </Stack.Navigator>
      </Contexts.UserListProvider>
    </NavigationContainer>
  );
}

