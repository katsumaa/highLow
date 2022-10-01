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
} from '../../Modules/pages';
import * as Contexts from '../../Context';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <NavigationContainer>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Contexts.UserListProvider>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Stack.Navigator initialRouteName={Home} headerMode="none">
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Stack.Screen name={HOME} component={Home} />
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Stack.Screen name={HIGHLOW} component={HighLow} />
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Stack.Screen name={SEVENHEAVEN} component={SevenHeaven} />
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Stack.Screen name={SETTINGS} component={Settings} />
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Stack.Screen name={HARDMODE} component={HardMode} />
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Stack.Screen name={RESULT} component={Result} />
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Stack.Screen name={ROULETTE} component={Roulette} />
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Stack.Screen name={OJISAN} component={Ojisan} />
        </Stack.Navigator>
      </Contexts.UserListProvider>
    </NavigationContainer>
  );
}
