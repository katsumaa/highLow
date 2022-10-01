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
import {HOME} from '../../../Constants/path';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i) + 1;
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export function SevenHeaven({navigation}) {
  const [cardCount, setCardCount] = useState(0);
  const [cards, setCards] = useState(CARDLIST.data);
  const [cardImages, setCardImages] = useState([]);

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

  function resetCard({navigation}) {
    navigation.navigate(HOME);
  }
  function setText() {
    const num = cards[cardCount].num;
    var text = '';
    if (num === 1) {
      text = '全員でぐい';
    } else if (num === 2) {
      text = 'ひとり指名してぐい';
    } else if (num === 3) {
      text = '1人でぐい';
    } else if (num === 4) {
      text = '女がぐい';
    } else if (num === 5) {
      text = '男がぐい';
    } else if (num === 6) {
      text = '親指ゲーム';
    } else if (num === 7) {
      text = 'メイトを指名';
    } else if (num === 8) {
      text = '目があったらぐい';
    } else if (num === 9) {
      text = '好きなゲーム';
    } else if (num === 10) {
      text = '好きなゲーム';
    } else if (num === 11) {
      text = '一回お酒を拒否できる';
    } else if (num === 12) {
      text = 'Question Master';
    } else if (num === 13) {
      text = '好きな量だけ\nお酒を入れる';
    } else if (num === 14) {
      text = '自分以外ぐい';
    } else {
      text = '';
    }
    console.log(text);
    return (
      <View style={styles.topTextbox}>
        <Text style={styles.topText}>{text}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {setText()}
      <View style={styles.box}>
        <CardStack
          style={styles.box}
          verticalSwipe={true}
          horizontalSwipe={true}
          verticalThreshold={height / 8}
          horizontalThreshold={width / 6}
          secondCardZoom={0}
          onSwiped={() => {
            setCardCount(cardCount + 1);
          }}
        >
          {cardImages}
        </CardStack>
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
  topTextbox: {
    position: 'absolute',
    width: width,
    height: height * 0.15,
    marginTop: height * 0.09,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  topText: {
    color: 'white',
    fontSize: height * 0.06,
    fontFamily: 'AppleSDGothicNeo-Bold',
    textAlign: 'center',
  },
  bottomTextbox: {
    position: 'absolute',
    width: width,
    height: height * 0.15,
    marginTop: height * 0.79,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomText: {
    color: 'black',
    fontSize: height * 0.06,
    fontFamily: 'AppleSDGothicNeo-Bold',
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
});
