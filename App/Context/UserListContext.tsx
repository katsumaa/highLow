import React, {createContext, useState, useContext} from 'react';

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
  turnFocus: boolean;
};

const userIconPath = [
  require('../Images/userIcons/userIcon_0.png'),
  require('../Images/userIcons/userIcon_1.png'),
  require('../Images/userIcons/userIcon_2.png'),
  require('../Images/userIcons/userIcon_3.png'),
  require('../Images/userIcons/userIcon_4.png'),
  require('../Images/userIcons/userIcon_5.png'),
];
const iconCount = userIconPath.length;

export function UserListProvider({children}: any) {
  const [userList, setUserList] = useState<userScore[]>([]);
  const [isInitialUserList, setIsInitialUserList] = useState<string>(true);
  console.log(userList.map(e => e.score));

  function setInitialUserList(number: number) {
    const users = [];
    //シャッフルアルゴリズム
    let variables = iconCount;
    while (variables) {
      const j = Math.floor(Math.random() * variables);
      const t = userIconPath[--variables];
      userIconPath[variables] = userIconPath[j];
      userIconPath[j] = t;
    }

    for (let i = 0; i < number; i++) {
      const randomCount = Math.floor(Math.random() * iconCount);
      users.push({
        id: i,
        image:
          i <= iconCount ? userIconPath[i] : userIconPath[randomCount],
        score: 0,
        totalScore: 0,
        turnFocus: i === 0,
      });
    }
    isInitialUserList && setIsInitialUserList(false);
    setUserList(users);
  }

  function setTotalScore() {
    const newUserList = userList.map(e => {
      return {
        ...e,
        totalScore: e.totalScore + e.score,
      };
    });
    setUserList(newUserList);
  }

  function resetScore() {
    const newUserList = userList.map(e => {
      return {
        ...e,
        score: 0,
      };
    });
    setUserList(newUserList);
  }

  function setNextTurnFocus(drinkCount = 0) {
    console.log({drinkCount});
    const currentUserId = userList.find(e => e.turnFocus).id;
    const nextUserId =
      currentUserId === userList.length - 1 ? 0 : currentUserId + 1;
    const newUserList = userList.map(e => {
      if (e.id === currentUserId) {
        const currentScoroe = e.score;
        return {...e, turnFocus: false, score: currentScoroe + drinkCount};
      } else if (e.id === nextUserId) {
        return {...e, turnFocus: true};
      } else {
        return e;
      }
    });
    console.log({newUserList});
    setUserList(newUserList);
  }

  const value = {
    userList,
    setUserList,
    setInitialUserList,
    isInitialUserList,
    setNextTurnFocus,
    setTotalScore,
    resetScore,
  };

  return (
    <UserListContext.Provider value={value}>
      {children}
    </UserListContext.Provider>
  );
}
