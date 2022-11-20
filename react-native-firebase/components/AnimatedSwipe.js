import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useAnimatedGestureHandler,
  interpolate,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
const ROTATION = 60;
const SWIPE_VELOCITY = 800;
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const AnimatedStack = props => {
  const {data, renderItem, onSwipeRight, onSwipeLeft} = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex + 1);

  const currentProfile = data[currentIndex];
  const nextProfile = data[nextIndex];
  
  const hiddenTranslateX = 2 * deviceWidth;

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(
    () =>
      interpolate(translateX.value, [0, hiddenTranslateX], [0, ROTATION]) +
      'deg',
  );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotate.value,
      },
    ],
  }));

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: interpolate(
          translateX.value,
          [-hiddenTranslateX, 0, hiddenTranslateX],
          [1, 0.8, 1],
        ),
      },
    ],
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX, 0, hiddenTranslateX],
      [1, 0.5, 1],
    ),
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: event => {
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translateX.value = withSpring(0);
        return;
      }

      translateX.value = withSpring(
        hiddenTranslateX * Math.sign(event.velocityX),
        {},
        () => runOnJS(setCurrentIndex)(currentIndex + 1),
      );

      const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
      onSwipe && runOnJS(onSwipe)(currentProfile);
    },
  });

  useEffect(() => {
    let timer = setTimeout(() => {
        translateX.value = 0;
        setNextIndex(currentIndex + 1);
    }, 1);
    return () => {
        clearTimeout(timer);
    };
  }, [currentIndex, translateX]);

  return (
    <View style={styles.root}>
      {nextProfile && (
        <View style={styles.nextCardContainer}>
          <Animated.View style={[styles.animatedCard, nextCardStyle]}>
            {renderItem({item: nextProfile})}
          </Animated.View>
        </View>
      )}

      {currentProfile && (
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            {renderItem({item: currentProfile})}
          </Animated.View>
        </PanGestureHandler>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: deviceWidth * .8,
  },
  animatedCard: {
    width: deviceWidth * .8,
    height: deviceHeight * .8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextCardContainer: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedStack;