import React from 'react';
import {Dimensions, Image} from 'react-native';
import {Card} from 'react-native-card-stack-swiper';

export function CardList(props) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const Images = props.cards.map(item => {
    return (
      <Card>
        {props.cardControl ? (
          <Image
            source={item.uri}
            style={{width: width * 0.7, height: height * 0.9}}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require('../Images/reverse.png')}
            style={{width: width * 0.7, height: height * 0.9}}
            resizeMode="contain"
          />
        )}
      </Card>
    );
  });

  return (
    <>
      {props.cards.map(item => {
        return (
          <Card>
            {props.cardControl ? (
              <Image
                source={item.uri}
                style={{width: width * 0.7, height: height * 0.9}}
                resizeMode="contain"
              />
            ) : (
              <Image
                source={require('../Images/reverse.png')}
                style={{width: width * 0.7, height: height * 0.9}}
                resizeMode="contain"
              />
            )}
          </Card>
        );
      })}
    </>
  );
}
