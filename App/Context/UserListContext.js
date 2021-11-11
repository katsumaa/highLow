import React, {createContext, useState, useContext, useEffect} from 'react';
import { defaultUserList } from '../Constants/defaultUserList';

const UserListContext = createContext();

export function useUserListContext() {
  return useContext(UserListContext);
}

export function UserListProvider({children}) {
  const [userList, setUserList] = useState(defaultUserList);
  const value = {userList, setUserList};
  return (
    <UserListContext.Provider value={value}>
      {children}
    </UserListContext.Provider>
  );
}
