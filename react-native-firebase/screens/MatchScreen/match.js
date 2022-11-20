import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../../components/restaurantcard';
import restaurants from '../../data/restaurants';

// so theoretically, you should be able to pass in a restaruant and itll display... except idk how to do that
export function Match(){
    return(
        <View>
            <Card name={resturant}/>
            <Text>It's a match!</Text>
        </View>
    )
}