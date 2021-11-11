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
import CardStack, {Card} from 'react-native-card-stack-swiper';
import {HOME, RESULT, Result} from '../../../Constants/path';
import {PlayerTurn} from '../../../Components';
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

export function HighLow({navigation}) {
  const [cardCount, setCardCount] = useState(0);
  const [horizontalSwipe, setHorizontalSwipe] = useState(false);
  const [alcCount, setAlcCount] = useState(0);
  const [drinkCount, setDrinkCount] = useState(0);
  const [cards, setCards] = useState(CARDLIST.data);
  const [cardImages, setCardImages] = useState([]);
  const {userList} = Contexts.useUserListContext();
  const [backCard, setBackCard] = useState(false);
  console.log('userListは', userList);

  useEffect(() => {
    const shuffledCards = shuffle(cards);
    setCards(shuffledCards);
    var Views = [];
    for (let i = 0; i < cards.length; i++) {
      Views.push(
        <Image
          source={shuffledCards[i].uri}
          style={{width: width * 0.7, height: height * 0.9}}
          resizeMode="contain"
        />,
      );
    }
    setCardImages(Views);
  }, []);

  function checkSwipedTop(cardCount) {
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
      ;
    } else if (postMark === "joker"){
      ;
    } else if (mark === "joker"){
      setAlcCount(alcCount + 2);
    }
    else if (postNum >= 3 && postNum <=11){
      if (postNum < num){
        setDrinkCount(alcCount);
        setAlcCount(0);
      }else{
        setAlcCount(alcCount + 1);
      }
    }
    else if (postNum === 2 || postNum === 12){
      if (mark === "dia" || mark === "heart"){
        setDrinkCount(alcCount);
        setAlcCount(0);
      }else{
        setAlcCount(alcCount + 1);
      }
    }
    else if (postNum === 1 || postNum ===13){
      if (mark === "spade"){
        setDrinkCount(alcCount);
        setAlcCount(0);
      }else{
        setAlcCount(alcCount + 1);
      }
    }
    else {
      ;
    }
  }
  function checkSwipedBottom(cardCount){
    const num = cards[cardCount].num
    const mark = cards[cardCount].mark
    if(cardCount<cards.length){
      var nextNum = cards[cardCount + 1].num
      var nextMark = cards[cardCount + 1].mark
    }else{
      var nextNum = cards[cardCount].num
      var nextMark = cards[cardCount].mark
    }
    if(cardCount >= 1){
      var postNum = cards[cardCount - 1].num
      var postMark = cards[cardCount - 1].mark
    }else{
      var postNum = cards[cardCount].num
      var postMark = cards[cardCount].mark
    }

    if(cardCount <= 1 || cardCount >= 55){
      ;
    }
    else if (postMark === "joker"){
      ;
    }
    else if (mark === "joker"){
      setAlcCount(alcCount + 2);
    }
    else if (postNum >= 3 && postNum <=11){
      if (postNum > num){
        setDrinkCount(alcCount);
        setAlcCount(0);
      }else{
        setAlcCount(alcCount + 1);
      }
    }
    else if (postNum === 2 || postNum === 12){
      if (mark === "spade" || mark === "club"){
        setDrinkCount(alcCount);
        setAlcCount(0);
      }else{
        setAlcCount(alcCount + 1);
      }
    }
    else if (postNum === 1 || postNum ===13){
      if (mark === "club"){
        setDrinkCount(alcCount);
        setAlcCount(0);
      }else{
        setAlcCount(alcCount + 1);
      }
    }
    else {
      ;
    }
  }
  function checkSwipedRight(cardCount){
    const num = cards[cardCount].num
    const mark = cards[cardCount].mark
    if(cardCount < cards.length){
      var nextNum = cards[cardCount + 1].num
      var nextMark = cards[cardCount + 1].mark
    }else{
      var nextNum = cards[cardCount].num
      var nextMark = cards[cardCount].mark
    }
    if(cardCount >= 1){
      var postNum = cards[cardCount - 1].num
      var postMark = cards[cardCount - 1].mark
    }else{
      var postNum = cards[cardCount].num
      var postMark = cards[cardCount].mark
    }

    if(cardCount <= 1 || cardCount >= 55){
      ;
    } else if (postMark === "joker"){
      ;
    } else if (mark === "joker"){
      setAlcCount(alcCount + 2);
    } else if (postNum >= 3 && postNum <= 11) {
      if (postNum < num) {
        setDrinkCount(alcCount);
        setAlcCount(0);
      }else{
        setAlcCount(alcCount + 1);
      }
    }else if (postNum === 2 || postNum === 12){
      if (mark === "spade" || mark === "club"){
        setDrinkCount(alcCount);
        setAlcCount(0);
      }else{
        setAlcCount(alcCount + 1);
      }
    }else if (postNum === 1 || postNum === 13){
      if (mark === "dia"){
        setDrinkCount(alcCount);
        setAlcCount(0);
      }else{
        setAlcCount(alcCount + 1);
      }
    }
    else {
      ;
    }
  }
  function checkSwipedLeft(cardCount) {
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
      ;
    } else if (postMark === 'joker') {
      ;
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
      ;
    }
  }

  function showShot(alcCount) {
    var shotView = [];
    return (
      <View style={{flexDirection:"row", justifyContent: "center", alignItems: "center"}}>
        <Image source={require("../../../Images/shot.png")} style={{width: width*0.06, height: height*0.06}} resizeMode='contain'/>
        <Text style={{fontSize: 25, color: "white"}}> × {alcCount}</Text>
      </View>
    )
  }

  function showDrinkImage(drinkCount) {
    return (
      <>
        {drinkCount !== 0 && (
          <TouchableOpacity
            onPress={setDrinkCount(0)}
            style={styles.drinkImageView}>
            <Text>{drinkCount}ぐい</Text>
            <Image
              source={require('../../../Images/cheer.png')}
              style={{width: width, height: height}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </>
    );
  }

  function check1and13(cardCount) {
    setHorizontalSwipe(
      cards[cardCount + 1].num !== 13 &&
        cards[cardCount + 1].num !== 1 &&
        cards[cardCount + 1].num !== 15,
    );
    console.log(cards[cardCount].num);
    console.log(horizontalSwipe);
  }

  function setText(cardCount){
    const num = cards[cardCount].num
    if (cardCount >= 54){
      ;
    }else if(num >= 3 && num <=11){
      return(
        <>
          <View style={styles.topTextbox}>
            <Text style={styles.topText}>High</Text>
          </View>
          <View style={styles.bottomTextbox}>
            <Text style={styles.bottomText}>Low</Text>
          </View>
        </>)
    }else if(num === 2 || num === 12){
      return(
        <>
          <View style={styles.topTextbox}>
            <Text style={styles.topText}>Red</Text>
          </View>
          <View style={styles.bottomTextbox}>
            <Text style={styles.bottomText}>Black</Text>
          </View>
        </>)
    }else if(num === 1 || num ===　13){
      return(
        <>
          <View style={styles.topTextbox}>
            <Image source={require("../../../Images/spade.png")} style={{width: width*0.1, height: height*0.1}} resizeMode='contain'/>
          </View>    
          <View style={styles.bottomTextbox}>
            <Image source={require("../../../Images/club.png")} style={{width: width*0.1, height: height*0.1}} resizeMode='contain'/>
          </View>
          <View style={styles.rightTextbox}>
            <Image source={require("../../../Images/dia.png")} style={{width: width*0.1, height: height*0.1}} resizeMode='contain'/>
          </View>
          <View style={styles.leftTextbox}>
            <Image source={require("../../../Images/heart.png")} style={{width: width*0.1, height: height*0.1}} resizeMode='contain'/>
          </View>
        </>)
    } else {
      ;
    }
  }

  function resetCard({navigation}) {
    navigation.navigate(HOME);
  }
  function navigateToResult() {
    navigation.navigate(RESULT);
  }

  return (
    <View style={styles.container}>
      {showDrinkImage(drinkCount)}
      {setText(cardCount)}
      <PlayerTurn userList={userList} />
      <View style={styles.box}>
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
          onSwipeStart={() => setBackCard(true)}
          onSwipeEnd={() => setBackCard(false)}
          onSwiped={() => {
            setCardCount(cardCount + 1);
            check1and13(cardCount);
          }}>
          {cardImages}
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
            <Text style={{color: 'black', fontSize: height*0.02, fontFamily: 'AppleSDGothicNeo-Light',}}>
              Back{/*}{cardCount}{*/}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
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
    backgroundColor: '#464646',
  },
  box: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width*0.7, 
    height: height*0.7,
  },
  textBox: {
  },
  topTextbox: {
    position: 'absolute',
    width: width,
    height: height*0.1,
    marginTop: height*0.17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    color: 'black',
    fontSize: height*0.05,
    fontFamily: 'AppleSDGothicNeo-Bold',
    color: "white"
  },
  bottomTextbox: {
    position: 'absolute',
    width: width,
    height: height*0.1,
    marginTop: height*0.73,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomText: {
    color: 'black',
    fontSize: height * 0.05,
    fontFamily: 'AppleSDGothicNeo-Bold',
    color: "white",
  },
  rightTextbox: {
    position: 'absolute',
    width: width,
    height: height*0.15,
    marginTop: height*0.425,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftTextbox: {
    position: 'absolute',
    width: width,
    height: height*0.15,
    marginTop: height*0.425,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  resetBox: {
    width: width*1,
    position: "absolute",
    marginTop: height*0.9,
    marginRight: 0,
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: width*0.05,
  },
  reset: {
    height: height*0.05,
    width: width*0.2,
    borderRadius: 30,
    backgroundColor: "#F2F2F2",
    borderLeftColor: '#FFFFFF',
    borderTopColor: '#FFFFFF',
    borderRightColor: '#707070',
    borderBottomColor: '#707070',
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  alcCount: {
    width: width*1,
    position: "absolute",
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: "flex-start",
    marginTop: height*0.9,
    marginLeft: height*0.03,
  },
  shot: {
    position: "absolute",
    width: width * 1,
    flexDirection: "row",
    alignItems: 'flex-end',
    justifyContent: "flex-end",
    marginTop: height * 0.07,
    paddingRight: width * 0.05,
    zIndex: 2,
  },
  drinkImageView: {
    position: 'absolute',
    marginTop: height * 0.3,
    height: height * 0.4,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
});
