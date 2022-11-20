import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';
import PressGetter from "./swipescreen";

const Rest = (props) => {
  return (
    <View style={styles.words_background}>
      <Text style={styles.headline_text}>Foods for {props.name}</Text>
      <Text style={styles.explore_text}>
        Click on an image to view in full screen mode
      </Text>
    </View>
  );
}

const Gallery = (rest) => {
  return(
    <View style={styles.background}>
      <Rest name={rest.rest.name} />
      <GridImageView data={rest.rest.imgarray}/>
    </View>
  )
};

export function RScreen() {

    const receiveVal = (rest) => {
      return(
          <Gallery rest={rest} />
      );
    };
    
    return (
        <PressGetter receiveVal={receiveVal} />
    );

}

const styles = StyleSheet.create({
    background: {
      backgroundColor: '#b67c7cff',
      flex: 1,
    },
    words_background: {
      backgroundColor: '#b67c7cff',
      flex: 0,
    },
    headline_text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 50,
      marginLeft: 20,
    },
    explore_text: {
      marginTop: 5,
      marginBottom: 10,
      color: 'white',
      marginLeft: 20,
      fontSize: 15,
      fontWeight: '400',
    },
  });

