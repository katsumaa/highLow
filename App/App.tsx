// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(6142): Module './Routes/MainStack' was resolved to '/User... Remove this comment to see the full error message
import MainStack from './Routes/MainStack';
function App() {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <MainStack />;
}

export default App;
