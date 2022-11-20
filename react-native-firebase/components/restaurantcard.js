import React from 'react'
import {Text, ImageBackground, View, StyleSheet, Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    food_card: {
        width: deviceWidth * .8,
        height: deviceHeight * .7,
        borderRadius: 10, 
        backgroundColor: '#fefefe',
        elevation: 10,
    },
    food_image: {
        width: deviceWidth * .8, 
        height: deviceHeight * .7,
        borderRadius: 10,
        overflow: 'hidden', 
        justifyContent: 'flex-end',
    },
    restaurant_name: {
        fontSize: 30, 
        color: '#fff6f6ff',
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