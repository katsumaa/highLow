// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// @ts-expect-error TS(2307): Cannot find module './Main' or its corresponding t... Remove this comment to see the full error message
import MainRoutes from './Main';

export default function LoggingRoutes() {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <NavigationContainer>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <MainRoutes />
    </NavigationContainer>
  );
}

