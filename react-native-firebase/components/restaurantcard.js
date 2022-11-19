import React from 'react'
import {Text, ImageBackground, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    food_card: {
        width: '85%',
        height: '85%',
        borderRadius: 10, 
        backgroundColor: '#fefefe',
        elevation: 11,
    },
    food_image: {
        width: '100%', 
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden', 
        justifyContent: 'flex-end',
    },
    restaurant_name: {
        fontSize: 30, 
        color: 'black',
        fontWeight: 'bold',
    },
    name_padding: {
        padding: 30,
    },
});

const Card = props => {
    const {name, image} = props.restaurant;
    return (
        <View style = {styles.food_card}>
            <ImageBackground 
                source= {{uri: image, }}
                style = {styles.food_image}>
                <View style={styles.name_padding} >
                    <Text style={styles.restaurant_name}>{name}</Text>
                </View>
    
            </ImageBackground>
        </View>
    );
};

export default Card;

