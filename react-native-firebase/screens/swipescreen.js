import React from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import Card from '../components/restaurantcard';
import restaurants from '../data/restaurants';

import AnimatedStack from '../components/AnimatedSwipe';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { collection, doc, Firestore, setDoc } from "firebase/firestore"; 
import { firebase } from '../src/firebase/config'

class rest {
    constructor (id, name, image, imgarray) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.imgarray = imgarray;
    }
    toString() {
        return this.id + ', ' + this.name + ', ' + this.image + ', ' + this.imgarray;
    }
}

const q = []
firebase.firestore().collection("restaurants").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        q.push(new rest(doc.id, doc.data().name, doc.data().imgarray[1], doc.data().imgarray));
    });
});

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    card_container: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
        width: deviceWidth,
        backgroundColor: '#b67c7cff'
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
        console.log('swipe left: ', restaurant.name);
        leftSwipes.push(restaurant)
    };
    
    const onSwipeRight = restaurant => {
        console.log('swipe right: ', restaurant.name);
        rightSwipes.push(restaurant)
        if(rightSwipes.length >= 3){
            navigation.navigate('Results');
        }
    };

    const onPressed = restaurant => {
        val = restaurant;
        console.log(val)
        navigation.navigate('Gallery')
    };

    return (
        <View style = {styles.card_container}>
            <GestureHandlerRootView>
                <AnimatedStack 
                data={q}
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