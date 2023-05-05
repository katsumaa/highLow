import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {CARDLIST} from '../../../Constants/CardList';
import CardStack, {
  Card,
} from '../../../Components/ThirdPartyComponents/react-native-card-stack-swiper';
import {HOME, RESULT, Result} from '../../../Constants/path';
import * as Components from '../../../Components';
import * as Contexts from '../../../Context';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i) + 1;
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const directionName = {
  top: 'top',
  bottom: 'bottom',
  right: 'right',
  left: 'left',
};

function onSwipedEachDirection(
  cardCount: any,
  cards: [],
  alcCount: number,
  setAlcCount: any,
  setNextTurnFocus: any,
  setDrinkCount: any,
  direction: string,
) {
  if (cardCount === cards.length - 2) {
    //Last card
    console.log('now last one');
    setDrinkCount(alcCount);
    setAlcCount(0);
  } else {
    const {num} = cards[cardCount];
    let nextNum = 0;
    let nextMark = '';
    if (cardCount < cards.length) {
      nextNum = cards[cardCount + 1].num;
      nextMark = cards[cardCount + 1].mark;
    } else {
      nextNum = cards[cardCount].num;
      nextMark = cards[cardCount].mark;
    }

    if (nextMark === 'joker') {
      setAlcCount(alcCount + 2);
    } else if (num >= 3 && num <= 11) {
      //NOTE: highlowの判定
      switch (direction) {
        case directionName.top:
          if (num < nextNum) {
            setNextTurnFocus(alcCount);
            setDrinkCount(alcCount);
            setAlcCount(0);
          } else {
            setAlcCount(alcCount + 1);
          }
          break;
        case directionName.bottom:
          if (num > nextNum) {
            setNextTurnFocus(alcCount);
            setDrinkCount(alcCount);
            setAlcCount(0);
          } else {
            setAlcCount(alcCount + 1);
          }
          break;
        default:
          break;
      }
    } else if (num === 2 || num === 12) {
      //NOTE: 赤黒一致の判定
      switch (direction) {
        case directionName.top:
          if (nextMark === 'dia' || nextMark === 'heart') {
            //NOTE: ハズレ
            setNextTurnFocus(alcCount);
            setDrinkCount(alcCount);
            setAlcCount(0);
          } else {
            //NOTE: アタリ
            setAlcCount(alcCount + 1);
          }
          break;
        case directionName.bottom:
          if (nextMark === 'spade' || nextMark === 'club') {
            //NOTE: ハズレ
            setNextTurnFocus(alcCount);
            setDrinkCount(alcCount);
            setAlcCount(0);
          } else {
            //NOTE: アタリ
            setAlcCount(alcCount + 1);
          }
          break;
        default:
          break;
      }
    } else if (num === 1 || num === 13) {
      //NOTE: mark一致の判定
      let correctMark = '';
      switch (direction) {
        case directionName.top:
          correctMark = 'spade';
          break;
        case directionName.bottom:
          correctMark = 'club';
          break;
        case directionName.right:
          correctMark = 'dia';
          break;
        case directionName.left:
          correctMark = 'heart';
          break;
        default:
          break;
      }
      if (nextMark === correctMark) {
        setNextTurnFocus(alcCount);
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else {
      console.log(
        'unexpected error happened at HighLow/onSwipedEachDirection',
      );
    }
  }
}

export function HighLow({navigation}: any) {
  const [cardCount, setCardCount] = useState(0);
  const [horizontalSwipe, setHorizontalSwipe] = useState(false);
  const [alcCount, setAlcCount] = useState(0);
  const [drinkCount, setDrinkCount] = useState(0);
  const [cards, setCards] = useState(CARDLIST.data);
  const {setNextTurnFocus, setTotalScore, resetScore} =
    Contexts.useUserListContext();

  useEffect(() => {
    resetScore();
    const shuffledCards = shuffle(cards);
    setCards(shuffledCards);
  }, []);
  useEffect(() => {
    console.log('useEffect', {cardCount});
  }, [cardCount]);

  function showShot(alcCount: any) {
    const shotView = [];
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../../Images/shot.png')}
          style={{width: width * 0.06, height: height * 0.06}}
          resizeMode="contain"
        />
        <Text style={{fontSize: 25, color: 'white'}}> × {alcCount}</Text>
      </View>
    );
  }

  function showDrinkImage(drinkCount: any) {
    return (
      <>
        {drinkCount !== 0 && (
          <View style={styles.drinkImageView}>
            <View style={styles.drinkImageText}>
              <Text style={{fontSize: height * 0.05, color: 'red'}}>
                {drinkCount} Shot!
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setDrinkCount(0);
              }}
              style={styles.drinkImageTouchable}
            >
              <Image
                source={require('../../../Images/cheers/cheer_wine.png')}
                style={{width: width, height: height}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  }

  function setAbleToSwipe(cardCount: any) {
    setHorizontalSwipe(
      cards[cardCount + 1].num !== 13 &&
        cards[cardCount + 1].num !== 1 &&
        cards[cardCount + 1].num !== 15,
    );
  }

  function setText(cardCount: any) {
    const {num} = cards[cardCount];
    if (cardCount >= cards.length - 1) {
      return (
        <>
          <View style={styles.topTextbox}>
            <Text style={styles.topText}>Last card</Text>
          </View>
        </>
      );
    } else if (num >= 3 && num <= 11) {
      return (
        <>
          <View style={styles.topTextbox}>
            <Text style={styles.topText}>High</Text>
          </View>
          <View style={styles.bottomTextbox}>
            <Text style={styles.bottomText}>Low</Text>
          </View>
        </>
      );
    } else if (num === 2 || num === 12) {
      return (
        <>
          <View style={styles.topTextbox}>
            <Text style={styles.topText}>Red</Text>
          </View>
          <View style={styles.bottomTextbox}>
            <Text style={styles.bottomText}>Black</Text>
          </View>
        </>
      );
    } else if (num === 1 || num === 13) {
      return (
        <>
          <View style={styles.topTextbox}>
            <Image
              source={require('../../../Images/spade.png')}
              style={{width: width * 0.1, height: height * 0.1}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.bottomTextbox}>
            <Image
              source={require('../../../Images/club.png')}
              style={{width: width * 0.1, height: height * 0.1}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.rightTextbox}>
            <Image
              source={require('../../../Images/dia.png')}
              style={{width: width * 0.1, height: height * 0.1}}
              resizeMode="contain"
            />
          </View>
          <View style={styles.leftTextbox}>
            <Image
              source={require('../../../Images/heart.png')}
              style={{width: width * 0.1, height: height * 0.1}}
              resizeMode="contain"
            />
          </View>
        </>
      );
    } else {
    }
  }

  function resetCard({navigation}: any) {
    navigation.navigate(HOME);
  }

  return (
    <View style={styles.container}>
      <Components.CheersAnimations
        drinkCount={drinkCount}
        setDrinkCount={setDrinkCount}
      />
      {setText(cardCount)}
      <Components.PlayerTurn />
      <View style={styles.box}>
        <CardStack
          style={styles.box}
          onSwipedTop={() => {
            cardCount >= 1 &&
              cardCount <= cards.length - 2 &&
              onSwipedEachDirection(
                cardCount,
                cards,
                alcCount,
                setAlcCount,
                setNextTurnFocus,
                setDrinkCount,
                directionName.top,
              );
            cardCount <= cards.length - 2 &&
              setCardCount(prev => prev + 1);
          }}
          onSwipedBottom={() => {
            cardCount >= 1 &&
              cardCount <= cards.length - 2 &&
              onSwipedEachDirection(
                cardCount,
                cards,
                alcCount,
                setAlcCount,
                setNextTurnFocus,
                setDrinkCount,
                directionName.bottom,
              );
            cardCount <= cards.length - 2 &&
              setCardCount(prev => prev + 1);
          }}
          onSwipedRight={() => {
            cardCount >= 1 &&
              cardCount <= cards.length - 2 &&
              onSwipedEachDirection(
                cardCount,
                cards,
                alcCount,
                setAlcCount,
                setNextTurnFocus,
                setDrinkCount,
                directionName.right,
              );
            cardCount <= cards.length - 2 &&
              setCardCount(prev => prev + 1);
          }}
          onSwipedLeft={() => {
            cardCount >= 1 &&
              cardCount <= cards.length - 2 &&
              onSwipedEachDirection(
                cardCount,
                cards,
                alcCount,
                setAlcCount,
                setNextTurnFocus,
                setDrinkCount,
                directionName.left,
              );
            cardCount <= cards.length - 2 &&
              setCardCount(prev => prev + 1);
          }}
          disableLeftSwipe={horizontalSwipe}
          disableRightSwipe={horizontalSwipe}
          verticalSwipe={true}
          horizontalThreshold={height / 8}
          verticalThreshold={width / 6}
          secondCardZoom={0.9}
          onSwipedAll={() => {
            setTotalScore();
            navigation.replace(RESULT);
          }}
          onSwiped={() => {
            console.log({cardCount});
            cardCount >= 1 &&
              cardCount <= cards.length - 2 &&
              setAbleToSwipe(cardCount);
          }}
        >
          {cards.map(element => (
            <Image
              key={element.uri}
              source={element.uri}
              style={{width: width * 0.7, height: height * 0.9}}
              resizeMode="contain"
            />
          ))}
        </CardStack>
      </View>
      <View style={styles.shot}>{showShot(alcCount)}</View>
      <View style={styles.alcCount}>
        {/*}
        <Text style={{color: 'black', fontSize: height*0.06, fontFamily: 'AppleSDGothicNeo-Light',}}>
          {alcCount}
        </Text>
        {*/}
      </View>
      <View style={styles.resetBox}>
        <TouchableOpacity onPress={() => resetCard({navigation})}>
          <View style={styles.reset}>
            <Text
              style={{
                color: 'black',
                fontSize: height * 0.02,
                fontFamily: 'AppleSDGothicNeo-Light',
              }}
            >
              Back
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    backgroundColor: '#464646',
  },
  box: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.7,
    height: height * 0.7,
  },
  textBox: {},
  topTextbox: {
    position: 'absolute',
    width: width,
    height: height * 0.1,
    marginTop: height * 0.17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    color: 'black',
    fontSize: height * 0.05,
    fontFamily: 'AppleSDGothicNeo-Bold',
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    color: 'white',
  },
  bottomTextbox: {
    position: 'absolute',
    width: width,
    height: height * 0.1,
    marginTop: height * 0.73,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: 'black',
    fontSize: height * 0.05,
    fontFamily: 'AppleSDGothicNeo-Bold',
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    color: 'white',
  },
  rightTextbox: {
    position: 'absolute',
    width: width,
    height: height * 0.15,
    marginTop: height * 0.425,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftTextbox: {
    position: 'absolute',
    width: width,
    height: height * 0.15,
    marginTop: height * 0.425,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  resetBox: {
    width: width * 1,
    position: 'absolute',
    marginTop: height * 0.9,
    marginRight: 0,
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: width * 0.05,
  },
  reset: {
    height: height * 0.05,
    width: width * 0.2,
    borderRadius: 30,
    backgroundColor: '#F2F2F2',
    borderLeftColor: '#FFFFFF',
    borderTopColor: '#FFFFFF',
    borderRightColor: '#707070',
    borderBottomColor: '#707070',
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alcCount: {
    width: width * 1,
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: height * 0.9,
    marginLeft: height * 0.03,
  },
  shot: {
    position: 'absolute',
    width: width * 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: height * 0.07,
    paddingRight: width * 0.05,
    zIndex: 2,
  },
  drinkImageView: {
    position: 'absolute',
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    zIndex: 5,
  },
  drinkImageText: {
    height: height * 0.05,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drinkImageTouchable: {
    height: height * 0.4,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
