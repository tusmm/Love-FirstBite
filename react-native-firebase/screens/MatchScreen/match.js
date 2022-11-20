import React, { Component } from 'react';
import { View, StyleSheet, Animated, Text, Image} from 'react-native';
import restaurants from '../../data/restaurants';
import logo_img from '../../assets/logo.png';
import { getChosen } from './MatchScreen';
/* 
import Card from '../../components/restaurantcard';

// so theoretically, you should be able to pass in a restaruant and itll display... except idk how to do that
export function Match(){
    return(
        <View>
            <Card restaurant={restaurants[0]}/>
            <Text>It's a match!</Text>
        </View>
    )
}*/
class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.5, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

export function OneTrueMatchScreen(){
    return(
    <View style={styles.container}>
        <Image
            style={styles.logo}
            source = {logo_img}
            resizeMode="contain"
            >
        </Image>
        <Text style = {styles.match_text}>{getChosen}</Text>
        <ImageLoader
        style={styles.image}
        source={{ uri: restaurants[0].image}}
        />
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b67c7cff'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  match_text: {
    fontSize: 30,
    height: 100,
    color: '#fff6f6ff',
    fontWeight: 'bold',
  },
  logo: {
    marginTop:"-15%",
    height: 100,
    width: 150,
    margin: 40,
  },
});

