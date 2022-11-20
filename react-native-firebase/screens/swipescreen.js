import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Card from '../components/restaurantcard';
import restaurants from '../data/restaurants';

import AnimatedStack from '../components/AnimatedSwipe';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    card_container: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
        width: Dimensions.get('window').width,
    },
});

var leftSwipes = []
var rightSwipes = []

export function SwipeScreen(){

    const onSwipeLeft = restaurant => {
        console.log('swipe left: ', restaurant.name);
        leftSwipes.push(restaurant.name)
    };
    
    const onSwipeRight = restaurant => {
        console.log('swipe right: ', restaurant.name);
        rightSwipes.push(restaurant.name)
    };

    const onPressed = restaurant => {
        console.log('pressed: ', restaurant.name);
    };

    return (
        <View style = {styles.card_container}>
            <GestureHandlerRootView>
                <AnimatedStack 
                data={restaurants}
                renderItem={({item}) => <Card restaurant={item} />}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
                onPressed={onPressed}
                />
             </GestureHandlerRootView>
        </View>
    );
};

export function getLeftSwipes(){
    return(leftSwipes);
};

export function getRightSwipes(){
    return(rightSwipes);
};