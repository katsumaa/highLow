// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
} from 'react-native';
import {CARDLIST} from '../../../Constants/CardList';
import CardStack, {Card} from 'react-native-card-stack-swiper';
// @ts-expect-error TS(2724): '"../../../Constants/path"' has no exported member... Remove this comment to see the full error message
import {HOME, RESULT, Result} from '../../../Constants/path';
import * as Components from '../../../Components';
import * as Contexts from '../../../Context';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i) + 1;
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function addCardList(cardControl: any, cards: any, shuffledCards: any) {
  var Views = [];
  for (let i = 0; i < cards.length; i++) {
    Views.push(
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Card>
          {cardControl ? (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Image
              source={shuffledCards[i].uri}
              style={{width: width * 0.7, height: height * 0.9}}
              resizeMode="contain"
            />
          ) : (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Image
              source={require('../../../Images/reverse.png')}
              style={{width: width * 0.7, height: height * 0.9}}
              resizeMode="contain"
            />
          )}
        </Card>
      </>,
    );
  }
  return Views;
}

export function HighLow({
  navigation
}: any) {
  const [cardCount, setCardCount] = useState(0);
  const [horizontalSwipe, setHorizontalSwipe] = useState(false);
  const [alcCount, setAlcCount] = useState(0);
  const [drinkCount, setDrinkCount] = useState(0);
  const [cards, setCards] = useState(CARDLIST.data);
  const [cardImages, setCardImages] = useState([]);
  const {userList} = Contexts.useUserListContext();
  const [cardControl, setCardControl] = useState(true);
  console.log('cardControl', cardImages[0]);

  useEffect(() => {
    const shuffledCards = shuffle(cards);
    setCards(shuffledCards);
    const Views = addCardList(cardControl, cards, shuffledCards);
    setCardImages(Views);
  }, []);

  function checkSwipedTop(cardCount: any) {
    const num = cards[cardCount].num;
    const mark = cards[cardCount].mark;
    if (cardCount < cards.length) {
      var nextNum = cards[cardCount + 1].num;
      var nextMark = cards[cardCount + 1].mark;
    } else {
      var nextNum = cards[cardCount].num;
      var nextMark = cards[cardCount].mark;
    }
    if (cardCount >= 1) {
      var postNum = cards[cardCount - 1].num;
      var postMark = cards[cardCount - 1].mark;
    } else {
      var postNum = cards[cardCount].num;
      var postMark = cards[cardCount].mark;
    }

    if (cardCount <= 1 || cardCount >= 55) {
    } else if (postMark === 'joker') {
    } else if (mark === 'joker') {
      setAlcCount(alcCount + 2);
    } else if (postNum >= 3 && postNum <= 11) {
      if (postNum < num) {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else if (postNum === 2 || postNum === 12) {
      if (mark === 'dia' || mark === 'heart') {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else if (postNum === 1 || postNum === 13) {
      if (mark === 'spade') {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else {
    }
  }

  function checkSwipedBottom(cardCount: any) {
    const num = cards[cardCount].num;
    const mark = cards[cardCount].mark;
    if (cardCount < cards.length) {
      var nextNum = cards[cardCount + 1].num;
      var nextMark = cards[cardCount + 1].mark;
    } else {
      var nextNum = cards[cardCount].num;
      var nextMark = cards[cardCount].mark;
    }
    if (cardCount >= 1) {
      var postNum = cards[cardCount - 1].num;
      var postMark = cards[cardCount - 1].mark;
    } else {
      var postNum = cards[cardCount].num;
      var postMark = cards[cardCount].mark;
    }

    if (cardCount <= 1 || cardCount >= 55) {
    } else if (postMark === 'joker') {
    } else if (mark === 'joker') {
      setAlcCount(alcCount + 2);
    } else if (postNum >= 3 && postNum <= 11) {
      if (postNum > num) {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else if (postNum === 2 || postNum === 12) {
      if (mark === 'spade' || mark === 'club') {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else if (postNum === 1 || postNum === 13) {
      if (mark === 'club') {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else {
    }
  }
  function checkSwipedRight(cardCount: any) {
    const num = cards[cardCount].num;
    const mark = cards[cardCount].mark;
    if (cardCount < cards.length) {
      var nextNum = cards[cardCount + 1].num;
      var nextMark = cards[cardCount + 1].mark;
    } else {
      var nextNum = cards[cardCount].num;
      var nextMark = cards[cardCount].mark;
    }
    if (cardCount >= 1) {
      var postNum = cards[cardCount - 1].num;
      var postMark = cards[cardCount - 1].mark;
    } else {
      var postNum = cards[cardCount].num;
      var postMark = cards[cardCount].mark;
    }

    if (cardCount <= 1 || cardCount >= 55) {
    } else if (postMark === 'joker') {
    } else if (mark === 'joker') {
      setAlcCount(alcCount + 2);
    } else if (postNum >= 3 && postNum <= 11) {
      if (postNum < num) {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else if (postNum === 2 || postNum === 12) {
      if (mark === 'spade' || mark === 'club') {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else if (postNum === 1 || postNum === 13) {
      if (mark === 'dia') {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else {
    }
  }
  function checkSwipedLeft(cardCount: any) {
    const num = cards[cardCount].num;
    const mark = cards[cardCount].mark;
    if (cardCount < cards.length) {
      var nextNum = cards[cardCount + 1].num;
      var nextMark = cards[cardCount + 1].mark;
    } else {
      var nextNum = cards[cardCount].num;
      var nextMark = cards[cardCount].mark;
    }
    if (cardCount >= 1) {
      var postNum = cards[cardCount - 1].num;
      var postMark = cards[cardCount - 1].mark;
    } else {
      var postNum = cards[cardCount].num;
      var postMark = cards[cardCount].mark;
    }

    if (cardCount <= 1 || cardCount >= 55) {
    } else if (postMark === 'joker') {
    } else if (mark === 'joker') {
      setAlcCount(alcCount + 2);
    } else if (postNum >= 3 && postNum <= 11) {
      if (postNum < num) {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else if (postNum === 2 || postNum === 12) {
      if (mark === 'dia' || mark === 'heart') {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else if (postNum === 1 || postNum === 13) {
      if (mark === 'heart') {
        setDrinkCount(alcCount);
        setAlcCount(0);
      } else {
        setAlcCount(alcCount + 1);
      }
    } else {
    }
  }

  function showShot(alcCount: any) {
    var shotView = [];
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Image
          source={require('../../../Images/shot.png')}
          style={{width: width * 0.06, height: height * 0.06}}
          resizeMode="contain"
        />
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Text style={{fontSize: 25, color: 'white'}}> × {alcCount}</Text>
      </View>
    );
  }

  function showDrinkImage(drinkCount: any) {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        {drinkCount !== 0 && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <View style={styles.drinkImageView}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <View style={styles.drinkImageText}>
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
              <Text style={{fontSize: height * 0.05, color: 'red'}}>
                {drinkCount} Shot!
              </Text>
            </View>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TouchableOpacity
              onPress={() => setDrinkCount(0)}
              style={styles.drinkImageTouchable}
            >
              {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

  function check1and13(cardCount: any) {
    setHorizontalSwipe(
      cards[cardCount + 1].num !== 13 &&
        cards[cardCount + 1].num !== 1 &&
        cards[cardCount + 1].num !== 15,
    );
    console.log(cards[cardCount].num);
    console.log(horizontalSwipe);
  }

  function setText(cardCount: any) {
    const num = cards[cardCount].num;
    if (cardCount >= 54) {
    } else if (num >= 3 && num <= 11) {
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <View style={styles.topTextbox}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Text style={styles.topText}>High</Text>
          </View>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <View style={styles.bottomTextbox}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Text style={styles.bottomText}>Low</Text>
          </View>
        </>
      );
    } else if (num === 2 || num === 12) {
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <View style={styles.topTextbox}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Text style={styles.topText}>Red</Text>
          </View>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <View style={styles.bottomTextbox}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Text style={styles.bottomText}>Black</Text>
          </View>
        </>
      );
    } else if (num === 1 || num === 13) {
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <View style={styles.topTextbox}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Image
              source={require('../../../Images/spade.png')}
              style={{width: width * 0.1, height: height * 0.1}}
              resizeMode="contain"
            />
          </View>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <View style={styles.bottomTextbox}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Image
              source={require('../../../Images/club.png')}
              style={{width: width * 0.1, height: height * 0.1}}
              resizeMode="contain"
            />
          </View>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <View style={styles.rightTextbox}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Image
              source={require('../../../Images/dia.png')}
              style={{width: width * 0.1, height: height * 0.1}}
              resizeMode="contain"
            />
          </View>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <View style={styles.leftTextbox}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

  function resetCard({
    navigation
  }: any) {
    navigation.navigate(HOME);
  }
  function navigateToResult() {
    navigation.navigate(RESULT);
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <View style={styles.container}>
      {showDrinkImage(drinkCount)}
      {setText(cardCount)}
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Components.PlayerTurn userList={userList} />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <View style={styles.box}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CardStack
          style={styles.box}
          onSwipedTop={() => checkSwipedTop(cardCount)}
          onSwipedBottom={() => checkSwipedBottom(cardCount)}
          onSwipedRight={() => checkSwipedRight(cardCount)}
          onSwipedLeft={() => checkSwipedLeft(cardCount)}
          disableLeftSwipe={horizontalSwipe}
          disableRightSwipe={horizontalSwipe}
          verticalSwipe={true}
          horizontalThreshold={width / 6}
          verticalThreshold={width / 6}
          secondCardZoom={0}
          onSwipeStart={() => setCardControl(false)}
          onSwipeEnd={() => setCardControl(true)}
          onSwiped={() => {
            setCardCount(cardCount + 1);
            check1and13(cardCount);
          }}
        >
          {cardImages}
          {/*}
          <Components.CardList cardControl={cardControl} cards={cards}/>
        {*/}
        </CardStack>
      </View>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <View style={styles.shot}>{showShot(alcCount)}</View>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <View style={styles.alcCount}>
        {/*}
        <Text style={{color: 'black', fontSize: height*0.06, fontFamily: 'AppleSDGothicNeo-Light',}}>
          {alcCount}
        </Text>
        {*/}
      </View>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <View style={styles.resetBox}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TouchableOpacity onPress={() => resetCard({navigation})}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <View style={styles.reset}>
            {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Text
              style={{
                color: 'black',
                fontSize: height * 0.02,
                fontFamily: 'AppleSDGothicNeo-Light',
              }}
            >
              Back{/*}{cardCount}{*/}
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
