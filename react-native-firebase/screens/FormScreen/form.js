import React, { useState, } from 'react';
import { View, Text, Button } from 'react-native';
import { MultiSelectFoods } from '../../components/multiselect';
import Slider from '@react-native-community/slider';
import Radio from '../../components/radiobutton'


export default function FormScreen() {
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Answer these brief questions so we can help you pick a place!</Text>
      <Text> </Text>
      <Text>Select what you're interested in:</Text>
      <MultiSelectFoods getValue={getValueMulti}/>
      <Text>selected: </Text>
      <Text>How hungry are you?</Text>
      <Slider style={{ width: 200, height: 20, color: '#8a534b' }}
        step={1}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={slideValue => setValue(slideValue)}
        minimumTrackTintColor="#8F6E6F"
        maximumTrackTintColor="#B67C7C"
        thumbTintColor="#580000"
      />
      <Text>
        Slide value: {value}%
      </Text>
      <Text>How much do you want to spend?</Text>
      <Radio getValueRadio={getValueRadio}/>
      <Button title="Submit" onPress={() => onFormSubmit()} color="#580000" />


    </View>

  );
}