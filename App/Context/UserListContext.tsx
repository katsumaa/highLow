import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { defaultUserList } from '../Constants/defaultUserList';

const UserListContext = createContext();

export function useUserListContext() {
  return useContext(UserListContext);
}

type userScore = {
  id: number;
  image: string;
  score: number;
  totalScore: number;
  name?: string;
};

const userIconPath = [
  require('../Images/userIcons/userIcon_0.png'),
  require('../Images/userIcons/userIcon_1.png'),
  require('../Images/userIcons/userIcon_2.png'),
  require('../Images/userIcons/userIcon_3.png'),
  require('../Images/userIcons/userIcon_4.png'),
  require('../Images/userIcons/userIcon_5.png'),
];
const iconNumber = userIconPath.length;

export function UserListProvider({ children }: any) {
  const [userList, setUserList] = useState<userScore[]>([]);
  const mkUserScores = (number: number) => {
    const users = [];
    //シャッフルアルゴリズム
    let variables = iconNumber;
    while (variables) {
      const j = Math.floor(Math.random() * variables);
      const t = userIconPath[--variables];
      userIconPath[variables] = userIconPath[j];
      userIconPath[j] = t;
    }

    for (let i = 0; i < number; i++) {
      const randomCount = Math.floor(
        Math.random() * iconNumber,
      );
      users.push({
        id: number,
        image:
          i < iconNumber
            ? userIconPath[i]
            : userIconPath[randomCount],
        score: 0,
        totalScore: 0,
      });
    }
    console.log({ users });
    setUserList(users);
  };
  const value = { userList, setUserList, mkUserScores };

  return (
    <UserListContext.Provider value={value}>
      {children}
    </UserListContext.Provider>
  );
}
