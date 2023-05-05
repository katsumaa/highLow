// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import {Dimensions, Image} from 'react-native';
import {Card} from 'react-native-card-stack-swiper';

export function CardList(props: any) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const Images = props.cards.map((item: any) => {
    return (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card>
        {props.cardControl ? (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Image
            source={item.uri}
            style={{width: width * 0.7, height: height * 0.9}}
            resizeMode="contain"
          />
        ) : (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Image
            source={require('../Images/reverse.png')}
            style={{width: width * 0.7, height: height * 0.9}}
            resizeMode="contain"
          />
        )}
      </Card>
    );
  });

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {props.cards.map((item: any) => {
      return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card>
          {props.cardControl ? (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Image
              source={item.uri}
              style={{width: width * 0.7, height: height * 0.9}}
              resizeMode="contain"
            />
          ) : (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Image
              source={require('../Images/reverse.png')}
              style={{width: width * 0.7, height: height * 0.9}}
              resizeMode="contain"
            />
          )}
        </Card>
      );
    })}
  </>;
}
