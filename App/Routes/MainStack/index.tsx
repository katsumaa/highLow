// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HIGHLOW,
  HOME,
  SEVENHEAVEN,
  SETTINGS,
  HARDMODE,
  RESULT,
  ROULETTE,
  OJISAN,
  TRUETH_OR_DARE,
} from '../../Constants/path';
import {
  HighLow,
  Home,
  SevenHeaven,
  Settings,
  HardMode,
  Result,
  Roulette,
  Ojisan,
  TruethOrDare,
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
          <Stack.Screen name={RESULT} component={Result} />
          <Stack.Screen name={ROULETTE} component={Roulette} />
          <Stack.Screen name={OJISAN} component={Ojisan} />
          <Stack.Screen name={TRUETH_OR_DARE} component={TruethOrDare} />
        </Stack.Navigator>
      </Contexts.UserListProvider>
    </NavigationContainer>
  );
}
