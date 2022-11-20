import React, { useState, } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { MultiSelectFoods } from '../../components/multiselect';
import Slider from '@react-native-community/slider';
import Radio from '../../components/radiobutton'
import styles from './styles';


export default function FormScreen({navigation}) {
  const [value, setValue] = useState(0);
  const items = [{
    id: "001",
    name: "American"
  }, {
    id: "002",
    name: "Chinese"
  }, {
    id: "003",
    name: "Korean"
  }, {
    id: "004",
    name: "Japanese"
  }];

  var multiple = []
  var radio = 'first'
  
  function onFormSubmit(){
    console.log(radio)
    console.log(multiple)
    navigation.navigate('Swipe')
  }

  function getValueRadio(value) {
    radio = value;
  };

  getValueMulti = (value) => {
    multiple = []
    value.forEach(function(number){
      multiple.push(number)
  });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Answer these brief questions so we can help you pick a place!</Text>
      <Text> </Text>
      <Text style={styles.titlesmall}>Select what you're interested in:</Text>
      <MultiSelectFoods getValue={getValueMulti}/>
      <Text style={styles.titlesmall}>How hungry are you?</Text>
      <Slider style={{ width: 200, height: 20, color: '#8a534b' }}
        step={1}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={slideValue => setValue(slideValue)}
        minimumTrackTintColor="#580000"
        maximumTrackTintColor="#4a3839"
        thumbTintColor="#580000"
      />
      <Text></Text>
      <Text style={styles.titlesmall} >How much do you want to spend?</Text>
      <Radio getValueRadio={getValueRadio}/>
      <Pressable style={styles.button} onPress={() => onFormSubmit()}>
      <Text style={styles.buttonTitle}>Submit</Text>
    </Pressable>


    </View>

  );
}