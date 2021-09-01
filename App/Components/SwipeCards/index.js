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
import CardStack, { Card } from 'react-native-card-stack-swiper';
import {HOME} from '../../../Constants/path';


const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;
const shuffle = ([...array]) => {
  for (let i = array.length - 1 ; i > 0; i--) {
    const j = Math.floor(Math.random() * (i)) + 1;
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function HighLow({navigation}){
  const [cardCount, setCardCount] = useState(0);
  const [cards, setCards] = useState(CARDLIST.data);
  const [cardImages, setCardImages] = useState([]);

  useEffect(() => {
    const shuffledCards = shuffle(cards);
    setCards(shuffledCards);
    var Views = [];
    for (let i = 0; i < cards.length; i++) {
      Views.push(
        <Image source={shuffledCards[i].uri} style={{width: width*0.7, height: height*0.7}} resizeMode='contain'/>
      );
    }
    setCardImages(Views);
  }, []);

  function resetCard({navigation}){
    navigation.navigate(HOME)
  }

  return(
    <View style={styles.container}>
      {setText(cardCount)}
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
          verticalThreshold={10}
          horizontalThreshold={10}
          secondCardZoom={0}
          onSwiped={() => {
            setCardCount(cardCount + 1) 
            check1and13(cardCount)
          }}
        >
          {cardImages}
        </CardStack>
      </View>
      <View style={styles.shot}>
          {showShot(alcCount)}
      </View>
      <View style={styles.alcCount}>
        <Text style={{color: 'black', fontSize: height*0.06, fontFamily: 'AppleSDGothicNeo-Light',}}>
          {alcCount}
        </Text>
      </View>
      <View style={styles.resetBox}>
        <TouchableOpacity onPress={() => resetCard({navigation})}>
          <View style={styles.reset}>
            <Text style={{color: 'black', fontSize: height*0.02, fontFamily: 'AppleSDGothicNeo-Light',}}>
              reset{cardCount}
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
    backgroundColor: '#d3d3d3',
  },
  box: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: width*0.7, 
    height: height*0.7,
  },
  topTextbox: {
    position: 'absolute',
    width: width,
    height: height*0.15,
    marginTop: height*0.15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  topText: {
    color: 'black',
    fontSize: height*0.06,
    fontFamily: 'AppleSDGothicNeo-Bold',
  },
  bottomTextbox: {
    position: 'absolute',
    width: width,
    height: height*0.15,
    marginTop: height*0.79,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomText: {
    color: 'black',
    fontSize: height*0.06,
    fontFamily: 'AppleSDGothicNeo-Bold',
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
    width: width*1,
    position: "absolute",
    flexDirection: "row",
    alignItems: 'flex-end',
    justifyContent: "flex-end",
    marginTop: height*0.07,
    paddingRight: width*0.05,
  }
})
