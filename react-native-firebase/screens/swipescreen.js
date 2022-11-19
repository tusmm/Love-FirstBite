import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from '../components/restaurantcard';
import restaurants from '../data/restaurants';

const styles = StyleSheet.create({
    card_container: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
        width: '100%',
    },
});

export function SwipeScreen(){
    return (
        <View style = {styles.card_container}>
            <Card restaurant ={restaurants[0]}/>
        </View>
    );
};
