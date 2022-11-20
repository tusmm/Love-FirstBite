import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Card from '../components/restaurantcard';
import restaurants from '../data/restaurants';

import AnimatedStack from '../components/AnimatedSwipe';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import { collection, doc, Firestore, setDoc } from "firebase/firestore"; 
import { firebase } from '../../src/firebase/config'

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
    const userPref = collection(firebase.firestore(), "userPref");
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;

    async function navigateMatchScreen() {
        await setDoc(doc(userPref, uid), {
            locations: multiple, cost: radio, hunger: value});
          navigation.navigate('Swipe')
    }

    const onSwipeLeft = restaurant => {
        console.log('swipe left: ', restaurant.name);
        leftSwipes.push(restaurant.name)
    };
    
    const onSwipeRight = restaurant => {
        console.log('swipe right: ', restaurant.name);
        rightSwipes.push(restaurant.name)
        if(rightSwipes.length == 3){
            navigateMatchScreen
        }
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