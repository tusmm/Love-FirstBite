import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MultiSelectFoods } from '../components/multiselect';
import Slider from '@react-native-community/slider';



export function FormScreen() {
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
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Answer these brief questions so we can help you pick a place!</Text>
      <Text> </Text>
      <Text>Select what you're interested in:</Text>
      <MultiSelectFoods/>

      <Text>How hungry are you?</Text>
      <Slider style={{width: 200, height: 20}} 
        step={1}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={slideValue => setValue(slideValue)}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#b9e4c9"
       />
       <Text>
          Slide value: {value}%
        </Text>

    </View>
    
  );
}