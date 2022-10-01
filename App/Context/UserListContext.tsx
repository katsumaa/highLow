// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {createContext, useState, useContext, useEffect} from 'react';
import { defaultUserList } from '../Constants/defaultUserList';

const UserListContext = createContext();

export function useUserListContext() {
  return useContext(UserListContext);
}

export function UserListProvider({
  children
}: any) {
  const [userList, setUserList] = useState(defaultUserList);
  const value = {userList, setUserList};
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <UserListContext.Provider value={value}>
      {children}
    </UserListContext.Provider>
  );
}
