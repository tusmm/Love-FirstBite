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

export default function PressGetter(props) {
    return(
        props.receiveVal(val)
    );
}

let val;

export function SwipeScreen({navigation}){

    const onSwipeLeft = restaurant => {
        props.receiveVal(restaurant.name);
        leftSwipes.push(restaurant.name)
    };
    
    const onSwipeRight = restaurant => {
        console.log('swipe right: ', restaurant.name);
        rightSwipes.push(restaurant.name)
    };

    const onPressed = restaurant => {
        val = restaurant.name;
        navigation.navigate('Gallery')
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